---
title: "Probando tu diseño"
description: "Ejecutando automáticamente pruebas cocotb"
---

Gracias al miembro de la comunidad **Tholin** por escribir este artículo.

Para estar completamente seguro de que tu diseño de hardware funciona como quieres, es posible escribir pruebas unitarias de Verilog. Esta guía te mostrará cómo escribir pruebas simples para tus diseños de hardware y a crear un flujo de Github Actions para ejecutar automáticamente tus pruebas cada vez que hagas un push a tu repositorio.

## Paquetes requeridos

Es muy probable que ya tengas la mayoría de lo que necesitas para comenzar si ya has desarrollado en Verilog antes (por ejemplo, para un FPGA). Pero en caso de que no sea así:

Lo primero que necesitas es un simulador de Verilog. Puedes instalar la [Suite de OSS CAD](https://github.com/YosysHQ/oss-cad-suite-build) (recomendado), o puedes instalar solo los paquetes requeridos:

```
sudo apt install iverilog verilator
pip3 install cocotb pytest
```

{{% notice tip %}}
Deberías instalar pytest incluso si estás usando la Suite CAD completa, ya que permite que cocotb imprima mensajes de error más detallados si una prueba falla, ayudándote a rastrear el problema más rápido.
{{% /notice %}}

## Módulo de banco de pruebas (testbench)

Para habilitar la ejecución pruebas en tu Verilog, necesitarás envolver tu módulo superior en un módulo de testbench. Puedes iniciar copiando este código en un nuevo archivo llamado `tb.v`:

```verilog
`default_nettype none
`timescale 1ns/1ps

module tb (
    );

    initial begin
        $dumpfile ("tb.vcd");
        $dumpvars (0, tb);
        #1;
    end

    wire [7:0] inputs;
    wire [7:0] outputs;

    toplevel_module toplevel_module (
        .io_in (inputs),
        .io_out (outputs)
    );

endmodule
```

Hacia abajo, reemplaza ambas instancias de `toplevel_module` con nombre real de tu módulo superior. En mi caso es `logisim_demo`.

Después, necesitas crear tus entradas y salidas. Regresa a la definición del módulo en la parte superior y agrégalas. Puedes nombrarlas aquí. Por ejemplo, para mi proyecto pondría:

```verilog
module tb (
    input CLK,
    input RST,
    output [3:0] OUT
    );
```

A continuación, necesitas asignar estas entradas y salidas a los cables `inputs` y `outputs` de abajo. En primer lugar, ve a la línea con `wire [7:0] inputs` y amplíala para conectar adecuadamente tus entradas nombradas a las entradas del chip. La mía se ve así:

```verilog
wire [7:0] inputs = {6'b0, RST, CLK};
```

Debes de leer esto de derecha a izquierda. Esta asignando el CLK al pin 1, el RST al pin 2 y pone los pines restantes a ceros constantes.

Para las salidas, necesitas agregar nuevas líneas asignándoles valores desde `outputs`. Para un solo pin de salida, puedes escribir:

```verilog
assign OUT1 = outputs[0];
```

Lo cual conecta una salida llamada OUT1 desde el módulo del testbench al pin de salida 1 del chip.

En mi caso, tengo un valor de 4 bits como salida, así que me ocupo de eso de una vez usando

```verilog
assign OUT = outputs[3:0];
```

## Makefile

Estarás usando el makefile para ejecutar tus pruebas. Para comenzar, simplemente copia este código a un nuevo archivo llamado `Makefile`:

```
SIM ?= icarus
TOPLEVEL_LANG ?= verilog

VERILOG_SOURCES += $(PWD)/tb.v

TOPLEVEL = tb

MODULE = test

include $(shell cocotb-config --makefiles)/Makefile.sim
```

No necesitarás hacer muchas modificaciones. Lo único por hacer es proporcionarle una lista de todos tus archivos fuente de Verilog. Para hacerlo, ve a la línea que comienza con `VERILOG_SOURCES` y amplíala para listar todos tus archivos. Separa las entradas por espacios. Las rutas son relativas al directorio donde esta el makefile (el cual debería ser 'src'). Si sólo tienes un solo archivo Verilog, sólo necesitas una entrada adicional: `$(PWD)/my_custom_verilog.v`

## Escribiendo tu primera prueba

Ahora puedes comenzar a escribir pruebas. Crea un nuevo archivo llamado `test.py`. Puedes iniciar usando este código:

```python
import cocotb
from cocotb.clock import Clock
from cocotb.triggers import RisingEdge, FallingEdge, Timer, ClockCycles

@cocotb.test()
async def test_my_design(dut):
    dut._log.info("start")
```

En este punto, puedes ejecutar `make` en una terminal. No deberías tener ningún error, sino un mensaje de 'Tests passed' y continuar escribiendo la prueba.

Escribir pruebas de Verilog se trata de configurar las entradas a tu circuito y comprobar las salidas resultantes. Si tu circuito no tiene un reloj, simplemente se verá así:

```python
dut.INPUT.value = 1
await Timer(1, units="ms")
assert dut.OUTPUT.value == 0
```

Aquí, puedes usar el nombre de cualquiera de las entradas o salidas desde `tb.v` como valores para establecer o leer. `assert` es, en este caso, una sentencia que fallará la prueba si la expresión que le sigue no evalúa a verdadero (True). También se inserta un retardo entre configurar la entrada y comprobar la salida.

Si tu circuito depende del reloj en el pin 1, puedes generar la señal de reloj para ti:

```python
clock = Clock(dut.CLK, 1, units="ms")
cocotb.start_soon(clock.start())
```

Esto además te permitirá esperar por un determinado número de ciclos de reloj para pasar, como se muestra en este trozo de código, el cual activa el reset por exactamente 10 ciclos de reloj:

```python
dut.RST.value = 1
await ClockCycles(dut.CLK, 10)
dut.RST = 0
```
Esto puede, por supuesto, además ser usado en pruebas:

```python
await ClockCycles(dut.clk, 100)
assert int(dut.segments.value) == segments[i]
```

{{% notice tip %}}
Imprime mensajes de depuración usando `dut._log.info("test")`
{{% /notice %}}

## Ejecución automática de pruebas en Github Actions

Si eres como yo y siempre olvidas ejecutar las pruebas después de un cambio, puede que quieras configurar un flujo de Github Actions para hacerlo por ti en cada push. Afortunadamente, ¡ya existe una solución para esto! Puedes descargar un flujo de acciones pre-hecho [aquí](https://github.com/tinytapeout/tt03-verilog-demo/blob/main/.github/workflows/test.yaml).

Coloca este archivo en el directorio `.github/workflows` de tu repositorio para habilitarlo. Agrega el archivo a git y haz un push, y deberías ver un nuevo flujo junto con los habitulaes de GDS y Docs. Esto te dirá si tus pruebas están fallando o no. SI quires que el estado de las pruebas se muestre en tu readme, agrega el siguiente fragmento de código en él `![](../../workflows/test/badge.svg)`

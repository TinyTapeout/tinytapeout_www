---
title: "Probando tu diseño"
description: "Ejecutando automáticamente pruebas cocotb"
---

Gracias al miembro de la comunidad **Tholin** por escribir este artículo originalmente.

Para estar completamente seguro de que tu diseño de hardware funciona como quieres, es posible escribir pruebas unitarias de Verilog. Esta guía te mostrará cómo escribir pruebas simples para tus diseños de hardware y crear un flujo de Github Actions para ejecutar automáticamente tus pruebas cada vez que hagas un push a tu repositorio.

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

Para habilitar la ejecución pruebas en tu Verilog, necesitarás instanciar tu módulo superior en un módulo de testbench. Puedes iniciar copiando este código en un nuevo archivo llamado `tb.v`. También puedes adaptar el testbench de la [demostración de Verilog](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/tb.v).

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

    // cablea entradas y salidas. Usa "reg" para entradas que serán controladas por el testbench.
    reg  clk;
    reg  rst_n;
    reg  ena;
    reg  [7:0] ui_in;
    reg  [7:0] uio_in;

    wire [7:0] uo_out;
    wire [7:0] uio_out;
    wire [7:0] uio_oe;

    toplevel_module toplevel_module (
        .ui_in      (ui_in),    // Entradas dedicadas
        .uo_out     (uo_out),   // Salidas dedicadas
        .uio_in     (uio_in),   // IOs: Ruta de entrada
        .uio_out    (uio_out),  // IOs: Ruta de salida
        .uio_oe     (uio_oe),   // IOs: Ruta de habilitación (activo alto: 0=entrada, 1=salida)
        .ena        (ena),      // irá a ALTO cuando el diseño esté habilitado
        .clk        (clk),      // señal de reloj
        .rst_n      (rst_n)     // reset_n - lógico BAJO para reset
        );
    );

endmodule
```

Sustituye ambas instancias de `toplevel_module` por el nombre real de tu módulo superior. En el [caso del demo](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/tt_um_seven_segment_seconds.v), el nombre es `tt_um_seven_segment_seconds`.

Puede resultar más claro usar "cables (`wire`) de conveniencia" que básicamente renombren las entradas y salidas importantes de tu diseño. En el demo, queremos referenciar los pins de salida del display de siete segmentos, los cuales se envían a través de `uo_out[6:0]`; por esto, creamos un nuevo cable y los conectamos a estas salidas:

```verilog
    wire [6:0] segments = uo_out[6:0];
```

Esto nos permite usar `segments` en lugar de `uo_out` cuando hagamos nuestras pruebas.

## Makefile

Utilizarás un makefile para ejecutar tus pruebas. Para comenzar, simplemente copia este código a un nuevo archivo llamado `Makefile`:

```
SIM ?= icarus
TOPLEVEL_LANG ?= verilog

VERILOG_SOURCES += $(PWD)/tb.v

TOPLEVEL = tb

MODULE = test

include $(shell cocotb-config --makefiles)/Makefile.sim
```

No necesitarás hacer muchas modificaciones. Lo único por hacer es proporcionarle una lista de todos tus archivos fuente de Verilog. Para hacerlo, ve a la línea que comienza con `VERILOG_SOURCES` y amplíala para listar todos tus archivos. Separa las entradas por espacios. Las rutas son relativas al directorio donde esta el makefile (el cual debería ser 'src'). Si sólo tienes un único archivo Verilog, sólo necesitas una entrada adicional: `$(PWD)/my_custom_verilog.v`

## Escribiendo tu primera prueba

Ahora puedes finalmente comenzar a escribir pruebas. Crea un nuevo archivo llamado `test.py`. Puedes iniciar usando este código:

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

Aquí, puedes usar el nombre de cualquiera de los cables definidos en `tb.v` como valores para configurar o leer. `assert` es, en este caso, una sentencia que fallará la prueba si la expresión que le sigue no evalúa a verdadero (True). También se inserta un retardo entre configurar la entrada y comprobar la salida.

Si tu circuito depende del reloj en el pin 1, puedes hacer que se genere la señal de reloj por ti:

```python
clock = Clock(dut.CLK, 1, units="ms")
cocotb.start_soon(clock.start())
```

Esto además te permitirá esperar a que pase un determinado número de ciclos de reloj, como se muestra en este trozo de código, el cual activa el reset por exactamente 10 ciclos de reloj:

```python
dut.rst_n.value = 0 # BAJO para reset
await ClockCycles(dut.clk, 10)
dut.rst_n.value = 1 # salir de estado de reset
```

Esto puede, por supuesto, ser usado en pruebas también:

```python
await ClockCycles(dut.clk, 1000)
assert int(dut.segments.value) == segments[i]
```

Revisa el [testbench del demo aquí](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/test.py).

{{% notice tip %}}
Imprime mensajes de depuración usando `dut._log.info("test")`
{{% /notice %}}

## Ver gráficamente las señales generadas por tu prueba

Después de ejecutar `make`, deberías también tener un archivo `tb.vcd`. Puedes abrir este archivo con GTKWave, el cual viene incluido en OSS CAD Suite:

```shell
gtkwave tb.vcd
```

Esto puede ser muy útil para depurar tus pruebas y ver tus diseños en operación.

Si te quedas atascado, avísanos en el canal #verification del [chat de Discord](https://discord.gg/U8fAcjxCYY).

## Ejecución automática de pruebas en Github Actions

Si eres como yo y siempre olvidas ejecutar las pruebas después de un cambio, puede que quieras configurar un flujo de Github Actions para hacerlo por ti con cada push. Afortunadamente, ¡ya existe una solución para esto! Puedes descargar un flujo de acciones pre-hecho [aquí](https://github.com/tinytapeout/tt05-verilog-demo/blob/main/.github/workflows/test.yaml).

Coloca este archivo en el directorio `.github/workflows` de tu repositorio para habilitarlo. Agrega el archivo a git y haz un push, y deberías ver un nuevo flujo junto con los habitulaes de GDS y Docs. Esto te dirá si tus pruebas están fallando o no. SI quires que el estado de las pruebas se muestre en tu readme, agrega el siguiente fragmento de código en él: `![](../../workflows/test/badge.svg)`

Si te quedas atascado, avísanos en el canal #github-actions del [chat de Discord](https://discord.gg/U8fAcjxCYY).

## Pruebas a Nivel de Compuerta

Las simulaciones que hemos discutido anteriormente han sido todas **pre síntesis**. Un simulador lee el diseño HDL y lo simula.

Es altamente recomendable ejecutar la misma prueba en el netlist **post síntesis**. Este netlist post síntesis se llama "netlist a Nivel de Compuerta" (*Gate Level netlist*), porque incluye todas las celdas (compuertas) estándar usadas en tu diseño.
Las pruebas a nivel de compuerta pueden revelar bugs o errores que no fueron revelados en la simulación HDL.

Este fragmento de netlist a nivel de compuerta muestra solo 2 de las ~240 celdas estándar usadas para crear el demo [tt05-verilog-demo](https://github.com/TinyTapeout/tt05-verilog-demo).
Puedes echar un vistazo al tuyo al descargar el archivo GDS.zip desde la página de acciones de tu diseño y luego abriendo el archivo: `runs/wokwi/results/final/verilog/gl/<nombre de tu diseño>.v`

```verilog
sky130_fd_sc_hd__and4_1 _319_ (.A(\second_counter[7] ),
    .B(\second_counter[9] ),
    .C(\second_counter[10] ),
    .D(\second_counter[12] ),
    .VGND(VGND),
    .VNB(VGND),
    .VPB(VPWR),
    .VPWR(VPWR),
    .X(_145_));
 sky130_fd_sc_hd__dfxtp_2 _320_ (.CLK(clknet_2_0__leaf_clk),
    .D(_007_),
    .VGND(VGND),
    .VNB(VGND),
    .VPB(VPWR),
    .VPWR(VPWR),
    .Q(\seg7.counter[0] ));
```

Se puede apreciar que las celdas estándar tienen además puertos de alimentación, así que algo que debemos hacer para ejecutar una prueba a nivel de compuerta es alimentar el diseño. Puedes hacer esto modificando el testbench en el lugar donde se instancia tu diseño:

```verilog
    toplevel_module toplevel_module (
    `ifdef GL_TEST
        .VPWR( 1'b1),
        .VGND( 1'b0),
    `endif
        .ui_in      (ui_in),    // Entradas dedicadas
        .uo_out     (uo_out),   // Salidas dedicadas
        .uio_in     (uio_in),   // IOs: Ruta de entrada
        .uio_out    (uio_out),  // IOs: Ruta de salida
        .uio_oe     (uio_oe),   // IOs: Ruta de habilitación (activo alto: 0=entrada, 1=salida)
        .ena        (ena),      // irá a ALTO cuando el diseño esté habilitado
        .clk        (clk),      // señal de reloj
        .rst_n      (rst_n)     // reset_n - lógico BAJO para reset
    );
```

Si no estás usando ya el [Makefile del proyecto demo](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/Makefile), actualízalo.
Las líneas adicionales importantes son estas:

```bash
# simulación a nivel de compuerta requiere algunos ajutes iniciales adicionales, no deberías necesitar tocar nada de esto
COMPILE_ARGS    += -DGL_TEST
COMPILE_ARGS    += -DFUNCTIONAL
COMPILE_ARGS    += -DUSE_POWER_PINS
COMPILE_ARGS    += -DSIM
COMPILE_ARGS    += -DUNIT_DELAY=\#1
VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/primitives.v
VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/sky130_fd_sc_hd.v

# esto se copia en el flujo de acción GDS
VERILOG_SOURCES += $(PWD)/tb.v $(PWD)/gate_level_netlist.v
```

Esta opción solo se incluye cuando ejecutas `GATES=yes make`.

Éstas configuran algunas opciones adicionales para la simulación a nivel de compuerta, y además reemplazan todos tus archivos fuentes con un único `gate_level_netlist.v`.
Tenemos una acción GitHub que puedes usar que permite obtener automáticamente el archivo `gate_level_netlist.v`, lo copia en el lugar correcto y luego ejecuta la prueba.

Copia las siguientes líneas en tu archivo de acciones `.github/workflow/gds.yaml` de tu repositorio después del trabajo GDS. Aquí se encuentra el [archivo del proyecto demo de verilog a modo de ejemplo](https://github.com/TinyTapeout/tt05-verilog-demo/blob/eab5e0c48c3ebc198e1d1ba3328b196a710de6b4/.github/workflows/gds.yaml#L19).

```yaml
  gl_test:
    needs: gds
    runs-on: ubuntu-latest
    steps:
      - name: checkout repo
        uses: actions/checkout@v3
        with:
          submodules: recursive

      - name: GL test
        uses: TinyTapeout/tt-gds-action/gl_test@tt05
```

Ahora cada vez que hagas una actualización, ¡tu prueba y tu prueba a nivel de compuerta deberían ejecutarse en conjunto automáticamente!

Si te quedas atascado, avísanos en el canal #github-actions del [chat de Discord](https://discord.gg/U8fAcjxCYY).
---
title: "Probando tu diseño"
description: "Ejecutando automáticamente pruebas cocotb"
---

Gracias al miembro de la comunidad **Tholin** por escribir este artículo originalmente.

Para estar completamente seguro de que tu diseño de hardware funciona como quieres, es posible escribir pruebas unitarias de Verilog. Esta guía te mostrará cómo escribir pruebas simples para tus diseños de hardware y crear un flujo de Github Actions para ejecutar automáticamente tus pruebas cada vez que hagas un push a tu repositorio.

Este documento hace referencia al diseño de ejemplo de un sumador incluido en la [plantilla de Verilog](https://github.com/TinyTapeout/tt06-verilog-template/tree/main).

# La prueba puede ser ejecutada en una Github Action

Revisa las [GitHub actions](https://github.com/TinyTapeout/tt06-verilog-template/actions), la prueba debería estar en verde y pasar. Puedes consultar los logs de una prueba reciente para ver qué está pasando.

Incluso si desarrollas pruebas en tu computador personal, sigue siendo una buena idea mantener la acción habilitada. Si llegase a fallar, recibirás un email.

## Ejecutar localmente

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

El [archivo del testbench](https://github.com/TinyTapeout/tt06-verilog-template/blob/main/test/tb.v#L26) `tb.v` instancia el proyecto de ejemplo y lo conecta. Vas a querer cambiar la instancia para que su nombre coincida con el de tu módulo.

Reemplaza `tt_um_example user_project` con el nombre real de tu módulo principal (top module).

## Makefile

Utilizamos un makefile para ejecutar tus pruebas. Vas a necesitar modificar el [Makefile](https://github.com/TinyTapeout/tt06-verilog-template/blob/main/test/Makefile#L8) para que incluya todos tus archivos fuente.

Para hacer esto, ve a la línea que comienza con `VERILOG_SOURCES`, y expándela para que incluya todos tus archivos. Separa cada entrada por espacios. Las rutas son relativas al directorio donde se encuentra el makefile (el cual debería ser 'src'). Si solo tienes un único archivo verilog, solo tienes que agregar una única entrada adicional: `$(PWD)/my_custom_verilog.v`

## Escribiendo tu primera prueba

Ahora puedes finalmente comenzar a escribir pruebas. Echa un vistazo al [ejemplo](https://github.com/TinyTapeout/tt06-verilog-template/blob/main/test/test.py).

Éste:

* inicializa un reloj,
* habilita el diseño,
* establece las entradas en 0,
* lo reinicia,
* establece las entradas en 20 y 30,
* afirma que la salida es 50

Puedes usar el nombre de cualquiera de los cables definidos en `tb.v` como valores que leer o asignar. En este caso, `assert` es una sentencia que hará fallar la prueba si la expresión que le sigue no es evaluada como True. También se inserta un retraso entre el intervalo donde se establecen los valores de la entrada y se hace la lectura de la salida.

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

## Pruebas a Nivel de Compuerta

Las simulaciones que hemos discutido anteriormente han sido todas **pre síntesis**. Un simulador lee el diseño HDL y lo simula.

Es altamente recomendable ejecutar la misma prueba en el netlist **post síntesis**.
Este netlist post síntesis se llama "netlist a Nivel de Compuerta" (*Gate Level netlist*), porque incluye todas las celdas (compuertas) estándar usadas en tu diseño.
Las pruebas a nivel de compuerta pueden revelar bugs o errores que no fueron revelados en la simulación HDL.

Puedes echar un vistazo al tuyo al descargar el archivo GDS.zip desde la página de acciones de tu diseño y luego abriendo el archivo: `runs/wokwi/results/final/verilog/gl/<nombre de tu diseño>.v`

Este fragmento de netlist a nivel de compuerta muestra solo 2 de las ~240 celdas estándar de un diseño de ejemplo:

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

Puedes observar que las celdas estándar también tienen puertos de alimentación, así que algo que debe cambiar es que el diseño debe ser alimentado. Esto se hace automáticamente por tí cuando la prueba es ejecutada como parte de la [GDS action](https://github.com/TinyTapeout/tt06-verilog-template/blob/main/.github/workflows/gds.yaml#L26).

Ahora cada vez que se gatille la GDS action, ¡tu testbench será ejecutado como una Prueba a Nivel de Compuerta automáticamente!

Si te quedas atascado, avísanos en el canal #github-actions del [chat de Discord](https://discord.gg/U8fAcjxCYY).
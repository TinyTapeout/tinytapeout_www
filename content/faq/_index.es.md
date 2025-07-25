---
title: Preguntas frecuentes
description: Preguntas frecuentes
weight: 90
---

{{% toc %}}

# Soporte

## Tengo problemas, ¿cómo puedo obtener ayuda?

Únete a la [comunidad de Discord con este enlace](https://discord.gg/rPK2nSjxy8).

# Especificaciones de Chips para TT01, TT02 & TT03

## ¿Cuál es la velocidad de reloj máxima?

Pensamos que será aproximadamente de 12,5 kHz. Es lento porque de momento estamos usando una cadena de escaneo serial para conectar todos los diseños.
Tenemos un [divisor de reloj](https://github.com/tinytapeout/tinytapeout-02/blob/tt02/INFO.md#clock-divider) integrado que puede reducir más esta velocidad, hasta 255 veces más lento que la velocidad de reloj máxima.

Estamos trabajando en [una versión mucho más rápida, basada en multiplexores](https://github.com/TinyTapeout/tt-multiplexer).

## ¿Cuántas entradas y salidas puedo tener?

8 entradas y 8 salidas.

# Especificaciones de Chips para TT04, TT05 y TT06

## ¿Cuál es la velocidad de reloj máxima?

Al menos 50 MHz. Hemos recibido silicio para nuestras pruebas y estamos en proceso de realizar pruebas y mediciones.

## ¿Cuántas entradas y salidas puedo tener?

* Reloj y **nreset** (reset con activo bajo)
* 8 entradas
* 8 salidas
* 8 entradas/salidas bidireccionales

## ¿Qué PDK es utilizado en la manufacturación?

Estamos usando el PDK de código abierto [Skywater 130nm](https://www.zerotoasiccourse.com/terminology/pdk/).

## ¿Qué tan grande puede ser mi diseño?

Para TT04 a TT06, el tamaño estándar de cada cuadro es de alrededor de 160x100 um. Esto es suficiente para alrededor de 1000 compuertas lógicas digitales, dependiendo de su tamaño.
También puedes comprar cuadros adicionales si necesitas más espacio.

Aquí se encuentra una visión 3D del [GDS](https://zerotoasiccourse.com/terminology/gds) de mi [contador de segundos 7 segmentos](https://github.com/tinytapeout/tt04-verilog-demo), un pequeño diseño que incrementa un contador cada segundo y muestra el resultado en el display de 7 segmentos.

Haz click en la imagen para abrir el visor interactivo.

[![7 seg](/images/faq/7segtt04.png)](https://gds-viewer.tinytapeout.com/?model=https://tinytapeout.github.io/tt04-verilog-demo/tinytapeout.gds.gltf)

## ¿Cuándo serán manufacturados los chips?

Los chips se están demorando entre 6 a 9 meses en ser manufacturados. Luego, tenemos que gestionar embalaje, prueba y cumplimiento del pedido. Así que, ¡espere hasta 1 año de espera!

Puedes encontrar una estimación al día de cada shuttle en la [página de chips](/chips).

# Preguntas Frecuentes de Wokwi

## ¿Cómo hago x, y, z con Wokwi?

La [documentación de Woki está aquí](https://docs.wokwi.com/?utm_source=wokwi). Todavía no tenemos mucha documentación para la versión [ASIC](https://www.zerotoasiccourse.com/terminology/asic/) de Wokwi.

## Teclas de acceso rápido

* Selecciona un componente y presiona **delete** para eliminarlo.
* Selecciona un componente (o shift para seleccionar más componentes) y luego **d** para duplicarlo.
* Mantén presionado **shift** y arrastra el cursor para dibujar un cuadrado y seleccionar múltiples componentes.
* **+** y **-** para acercar y alejar.
* [Más aquí](https://docs.wokwi.com/guides/diagram-editor#keyboard-shortcuts).

## ¿Puedo copiar y pegar de un diseño de Wokwi a otro?

1. Selecciona todas las partes que quieres copiar (usando **shift** y haciendo clic en las partes o **shift** y arrastrando el cursor).
2. Cópialas al portapapeles (Ctrl+C o Cmd+C).
3. Ve al proyecto destino, haz clic sobre el editor de diagramas y pega (Ctrl+V o Cmd+V)

## ¿Cómo puedo deshacer / rehacer?

* Ctrl+Z y Ctrl+Y o ⌘Z / ⌘Y en una Mac.

## ¿Cómo encuentro el cableado de la pantalla de 7 segmentos?

Al hacer clic en un componente se mostrará un ? en un círculo. Haz clic en el ? para [obtener ayuda](https://docs.wokwi.com/parts/wokwi-7segment).

## ¿Tengo que usar la pantalla de 7 segmentos?

No, puedes eliminarla y poner lo que quieras en su lugar. Hay muchos otros componentes que puedes elegir desde el menú +. Pero, si tiene un PCB, sólo tendrá el 7 segmentos en él. Tendrías que conectar la placa en una protoboard y agregar sus componentes adicionales después.

## ¿Cómo agrego nuevas compuertas?

Puedes duplicar una existente (selecciónala y presiona **d**), o:

* Presiona el botón + en el menú superior de la página.
* En la caja de filtro, escribe 'logic' para filtrar solamente las compuertas lógicas.

## ¿Cómo muevo un conjunto de compuertas?

Selecciona todas las que quieras mover (usando **shift** y haciendo clic en las partes o **shift** y arrastrando un cuadro). Luego, arrastra la selección.

## ¿Cómo utilizo el bloque de reloj?

Puede usar la primera entrada como el reloj. Si necesitas cambiar la frecuencia de reloj debe hacerlo editando el archivo json de diagrama. Ajusta el atributo "frequency" a la frecuencia que quieres en Hz (ej. "10000" o "10k" para 10 kHz).

Tiny Tapeout va a brindar soporte a una amplia gama de frecuencias de reloj (esperamos hasta 50 MHz). Sin embargo, para asegurarnos de que Wokwi simule tu diseño lo suficientemente rápido, no deberías usar una frecuencia de reloj mayor a 100 kHz al simular tu diseño.

![reloj](/images/faq/clock_freq.png)

## ¿Hay ejemplos de proyectos que otras personas han hecho?

Revisa la página de [chips](/chips).

## ¿Es necesario eliminar compuertas lógicas no utilizadas?

No, las compuertas no utilizadas serán optimizadas por las herramientas de ASIC.

## Encontré y solucione un problema en mi diseño, ¿necesito volver a enviarlo?

Sí; debes:

* [ejecutar nuevamente la Github Action](#i-updated-and-saved-my-wokwi-design-how-do-i-re-run-the-github-action-to-update-the-gds-files).
* Avisarnos de usar tu versión más nueva usando el [formulario de Tiny Tapeout](https://app.tinytapeout.com/).

## ¿Tengo que usar Wokwi o podría usar un HDL?

Si eres un usuario avanzado, puedes usar el HDL de tu elección. Ve la [página de HDL](/es/hdl) para más información. 

# Preguntas frecuentes de Tiny Tapeout

## ¿Dónde puedo encontrar la plantilla para comenzar?

Puedes encontrarla en la [página de inicio](/es/digital_design/wokwi).

## ¿Cuáles de mis diseños serán enviados a fabricación?

Si actualizas tu proyecto y quieres que usemos tu última versión, debes [ir a tus envíos](https://app.tinytapeout.com/) y crear un nuevo envío.

Puedes continuar actualizando tu diseño hasta la fecha límite del tapeout.

## ¿Se escribe "TinyTapeout" o "Tiny Tapeout"?

Es "Tiny Tapeout". Revisa la página de [Gestión de Marca](/branding) para más información.

# Preguntas frecuentes de Github

## Cuando hago un commit de un cambio, la GDS Action no se ejecuta

Necesitas habilitar las acciones.

1. Ve a la pestaña de Acciones,
2. Haz clic en el botón de habilitar acciones.

![acciones](/images/faq/enable_action.png)

Ve además las siguientes preguntas frecuentes sobre la GDS Action que falla en 'pages'.

## Mi Github Action esta fallando en la parte de 'pages'.

Debido a las limitaciones de Github, necesitas hacer un cambio en los ajustes de tu repositorio para que todo funcione.

1. Ve a la pestañas de configuraciones,
2. Selecciona 'Pages',
3. Cambia la fuente desde "implementar desde una rama" a **Github Actions**.

![actions](/images/faq/action_pages.png)

## Tuve un error en mi GDS Action de Github.

La mejor forma de hacérmelo saber es [abrir un issue en el repositorio de la plantilla con un link a su diseño de wokwi](https://github.com/tinytapeout/tt02-submission-template/issues/new?assignees=mattvenn&labels=&template=bug_report.md&title=) y te contactaré de vuelta.

## Obtuve un error en mi Github Action de documentación.

Es posible que no hayas llenado suficientes campos, requerimos que se llenen los siguientes campos:

    author
    title
    description
    how_it_works
    how_to_test
    language

## Actualicé y guardé mi diseño de wokwi, ¿cómo ejecuto de nuevo la Github Action para actualizar los archivos GDS?

1. Ve a tu repositorio, haz clic en la pestaña de Actions,
2. Después haz clic en el flujo de trabajo ‘gds’
3. Luego haz clic en el botón ‘Run workflow’
4. Luego haz clic en el botón ‘Run workflow’

![actions](/images/faq/rerun_actions.png)

## ¿Qué son todos estos archivos en el artifact?

¡Hay muchos!

* src - los archivos fuente para tu chip:
    * user_module_xxxxx.v - el archivo [Verilog](https://www.zerotoasiccourse.com/terminology/hdl/) que representa su diseño Wokwi.
    * config.tcl - archivo de configuración para el flujo de herramientas ASIC de [OpenLane](https://www.zerotoasiccourse.com/terminology/openlane/) que convierte el código Verilog en [GDS](https://www.zerotoasiccourse.com/terminology/gds2/).
    * cells.v - traduce los módulos en las [células estándar](https://www.zerotoasiccourse.com/terminology/standardcell/) disponibles para el proceso Skywater 130 nm.
* runs/wokwi/reports/metrics.csv - un informe resumen detallado del flujo de herramientas. Por ahora está más allá del alcance de este documento para explicarlo todo.
* runs/wokwi/reports/synthesis/1-synthesis.stat.rpt.strategy4 - informe de las celdas estándar utilizadas para su diseño.
* runs/wokwi/results/final/ (sólo se describen las más importantes aquí)
    * gds - el archivo GDS final que se agregará a la presentación de Tiny Tapeout.
    * lef - una versión abstracta del GDS con menos información, utilizada para el enrutamiento.
    * verilog - el verilog a nivel de compuertas de tu diseño.

## ¿Dónde esta el repositorio de presentación para el shuttle?

* [Página de TT01](/chips/tt01/)
* [Página de TT02](/chips/tt02/)
* [Página de TT03](/chips/tt03/)
* [Página de TT04](/chips/tt04/)
* [Página de TT05](/chips/tt05/)

# Preguntas frecuentes de ASIC


## ¿Qué significan todas estas siglas que usas siempre?

¡Lo sentimos! ¡Estamos tratando de mantenerlo accesible pero inevitablemente usaremos algún término de ASIC en algún momento! Consulta la [guía de términos aquí](https://zerotoasiccourse.com/terminology/) (está en inglés).

## ¿Por qué tengo menos / más celdas estándar de lo que esperaba?

La síntesis lógica tiene que convertir Verilog en una estructura de datos que tiene propiedades específicas para que una biblioteca de tecnología (como Sky 130) se pueda mapear en ella, para que realmente se pueda fabricar.

Si tienes 2 inversores en serie, Yosys (la herramienta de síntesis) puede optimizarlos a ambos, por lo que terminas con menos celdas de lo esperado.

Sin embargo, si sólo tienes 8 celdas, tu diseño probablemente se ha optimizado completamente. ¿Quizás no conectaste las entradas o las salidas?

## ¿Por qué mi densidad objetivo está ajustada a 60%? ¿Debería cambiarla a 100% o debería usar un nuevo cuadro?

El enrutamiento tiende a utilizar más espacio que la lógica misma. Además, tiene que haber espacio para que OpenLane agregue más celdas:

* celdas tap - se aseguran de que el sustrato esté correctamente polarizado para los transistores.
* [diodos antena ](https://www.zerotoasiccourse.com/terminology/antenna-report/) - protegen las compuertas de transistores durante la fabricación.

Algunas personas han logrado exitosamente incrementar la densidad objetivo a alrededor del 62%. Alternativamente, tienes la opción de comprar un cuadro adicional.

## ¿Cómo puedo aprender más sobre ASICs y cómo diseñarlos?

[¡Revisa el curso Zero to ASIC de Matt!](https://zerotoasiccourse.com/)


## ¿Cómo puedo mapear una señal de reloj externa a uno de los pines GPIO?

Tiny Tapeout provee un set de 24 pines de entrada y salida (I/O) de propósito general (GP): 8 son solo entrada (`ui_in`), 8 son solo salida (`uo_out`), y 8 son bi-direccionales y tri-estado (`uio_*`).
Por defecto, el puerto de entrada `clk` es usado como reloj principal, generada por el chip RP2040 integrado. Sin embargo, existe la posibilidad de usar uno de los puertos de entrada `ui_in` como reloj auxiliar. En este
caso, se requiere tratado especial al ejecutar el flujo.

Como ejemplo, supongamos que necesitamos dos relojes: el generado por el chip RP2040, el cual nombraremos `rp2040_clk`, y el reloj auxiliar generado por una FPGA externa, el cual llamaremos `fpga_clk`.
Ambos relojes tienen la misma frecuencia, pero claramente se encuentran desfasados por una cantidad desconocida (es decir, son *mesócronos*). Además, vamos a asumir que los relojes nunca interactúan entre sí (es decir, sin cruce de dominios de reloj ([CDC](https://en.wikipedia.org/wiki/Clock_domain_crossing))).
Además, vamos a mapear `fgpa_clk` al pin `ui_in[0]`.

Para lograr ejecutar este escenario debemos cambiar un poco las configuraciones del archivo `config.tcl`, el cual es utilizado por el flujo de trabajo de Tiny Tapeout, de modo que:

1. Le demos la instrucción a OpenLane para que genere dos árboles de relojes, y no solo aquel vinculado al puerto `clk`;
2. Le digamos a OpenLane que ambos relojes están separados físicamente.

Las siguientes líneas son requeridas en el archivo `config.tcl`:

```
1 set ::env(CLOCK_PORT) "ui_in\\\[0\\\]"
2 set ::env(BASE_SDC_FILE) "$::env(DESIGN_DIR)/project.sdc"
```

La línea 1 configura el nombre `CLOCK_PORT`, del `clk` (por defecto) a nuestro `ui_in[0]`. ¡Fíjate en el patrón de las barras invertidas (`\`)! No es necesario configurar la variable `CLOCK_NET` a una lista de relojes,
ya que estamos utilizando un archivo de restricciones personalizado, en este caso `project.sdc`.

Luego, lo contenido en el archivo `project.sdc` es:

```
 1 # Constantes compartidas, copiadas desde base.sdc  
 2 set input_delay_value [ expr $::env(CLOCK_PERIOD) * $::env(IO_PCT) ]
 3 set output_delay_value [ expr $::env(CLOCK_PERIOD) * $::env(IO_PCT) ]
 4 set_max_fanout $::env(MAX_FANOUT_CONSTRAINT) [ current_design ]
 5 set cap_load [ expr $::env(OUTPUT_CAP_LOAD) / 1000.0 ] ;# fF -> pF
 6 
 7 # Quitar red de relojes en la entrada
 8 set idx [ lsearch [ all_inputs ] "clk" ]
 9 set all_inputs_wo_clk [ lreplace [ all_inputs ] $idx $idx ]
10 set idx [ lsearch $all_inputs_wo_clk "ui_in\[0\]" ]
11 set all_inputs_wo_clk [ lreplace $all_inputs_wo_clk $idx $idx ]
12 
13 #  clk   Reloj es generado por el chip RP2040
14 create_clock [ get_ports "clk" ]  -name rp2040_clk -period $::env(CLOCK_PERIOD)
15 set_input_delay $input_delay_value -clock [ get_clocks rp2040_clk ] $all_inputs_wo_clk
16 set_output_delay $output_delay_value -clock [ get_clocks rp2040_clk ] [ all_outputs ]
17 set_clock_uncertainty $::env(SYNTH_CLOCK_UNCERTAINTY) [ get_clocks rp2040_clk ]
18 set_clock_transition $::env(SYNTH_CLOCK_TRANSITION) [ get_clocks rp2040_clk ]
19 
20 #  ui_in[0]   Reloj es generado por la FPGA
21 create_clock [ get_ports "ui_in\[0\]" ]  -name fpga_clk -period $::env(CLOCK_PERIOD)
22 set_input_delay $input_delay_value -clock [ get_clocks fpga_clk ] $all_inputs_wo_clk
23 set_output_delay $output_delay_value -clock [ get_clocks fpga_clk ] [ all_outputs ]
24 set_clock_uncertainty $::env(SYNTH_CLOCK_UNCERTAINTY) [ get_clocks fpga_clk ]
25 set_clock_transition $::env(SYNTH_CLOCK_TRANSITION) [ get_clocks fpga_clk ]
26 
27 # rp2040_clk  y  fpga_clk  son mesócronos y nunca interactúan
28 set_clock_groups -asynchronous -group { rp2040_clk } -group { fpga_clk }
29 
30 # Misceláneo
31 set_driving_cell -lib_cell $::env(SYNTH_DRIVING_CELL) -pin $::env(SYNTH_DRIVING_CELL_PIN) $all_inputs_wo_clk
32 set_load  $cap_load [ all_outputs ]
33 set_timing_derate -early [ expr {1-$::env(SYNTH_TIMING_DERATE)} ]
34 set_timing_derate -late [ expr {1+$::env(SYNTH_TIMING_DERATE)} ]
```

¡Por favor tener ojo con el patron de las barras invertidas aquí! Es ligeramente distinto a como eran en `config.tcl`. Si te encuentras con el siguiente error:

```
[ERROR]: The specified clock port 'ui_in[0]' does not exist in the top-level module.
```

¡es muy probable que te hayas equivocado con las barras invertidas!

El archivo SDC mostrado arriba está más que nada derivado del archivo de restricciones por defecto `base.sdc`. Por favor y una vez más ¡no olvides que los dos relojes tienen exactamente la misma frecuencia! De cualquier manera, el archivo ha sido reorganizado:

1. Los valores no relacionados al reloj son calculados primero. ¡Esto sirve si y solo si los dos relojes tienen la misma frecuencia!
2. La señal `rp2040_clk` se genera primero, con su propio retraso e incertidumbre de I/O;
3. La señal `fpga_clk` se genera a continuación;
4. Ambos relojes se dice que son independientes;
5. Le siguen varias configuraciones misceláneas (ej. reducción de timing).

Con lo anterior, dos árboles de relojes son generados, análisis de timing estático *(STA analysis)* se ejecutará en ambos árboles, y no se generará CDC.

Por favor notar que todo lo descrito funciona para OpenLane tag `2023.11.23`. Versiones más recientes que incluyen el script `check_clock_ports.py` *no* van a funcionar. Esto se debe a la forma en que
funciona el script `check_clock_ports.py`: éste no es capaz de detectar puertos segmentados (como `ui_in[0]`).

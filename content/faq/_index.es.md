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

Puedes encontrar una estimación al día de cada shuttle en la [página de series](/runs).

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

Revisa la página de [series](/runs).

## ¿Es necesario eliminar compuertas lógicas no utilizadas?

No, las compuertas no utilizadas serán optimizadas por las herramientas de ASIC.

## Encontré y solucione un problema en mi diseño, ¿necesito volver a enviarlo?

Sí; debes:

* [ejecutar nuevamente la Github Action](#i-updated-and-saved-my-wokwi-design-how-do-i-re-run-the-github-action-to-update-the-gds-files).
* Avisarnos de usar tu versión más nueva usando el [formulario de Tiny Tapeout](https://app.tinytapeout.com/).

## ¿Tengo que usar Wokwi o podría usar un HDL?

Si eres un usuario avanzado, puedes usar el HDL de tu elección. Ve la [página de HDL](/es/hdl) para más información. 

# Preguntas frecuentes de TinyTapeout

## ¿Dónde puedo encontrar la plantilla para comenzar?

Puedes encontrarla en la [página de inicio](/es/digital_design/wokwi).

## ¿Cuáles de mis diseños serán enviados a fabricación?

Si actualizas tu proyecto y quieres que usemos tu última versión, debes [ir a tus envíos](https://app.tinytapeout.com/) y crear un nuevo envío.

Puedes continuar actualizando tu diseño hasta la fecha límite del tapeout.

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
2. Depués haz clic en el flujo de trabajo ‘gds’
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
    * gds - el archivo GDS final que se agregará a la presentación de TinyTapeout.
    * lef - una versión abstracta del GDS con menos información, utilizada para el enrutamiento.
    * verilog - el verilog a nivel de compuertas de tu diseño.

## ¿Dónde esta el repositorio de presentación para el shuttle?

* [Página de TT01](/es/runs/tt01/)
* [Página de TT02](/es/runs/tt02/)
* [Página de TT03](/es/runs/tt03/)
* [Página de TT04](/es/runs/tt04/)
* [Página de TT05](/es/runs/tt05/)

# Preguntas frecuentes de ASIC

## ¿Qué significan todas estas siglas que usas siempre?

¡Lo sentimos! ¡Estamos tratando de mantenerlo accesible pero inevitablemente usaremos algún término de ASIC en algún momento! Consulta la [guía de términos aquí](https://zerotoasiccourse.com/terminology/) (está en inglés).

## ¿Por qué tengo menos / más céldas estándar de lo que esperaba?

La síntesis lógica tiene que convertir Verilog en una estructura de datos que tiene propiedades específicas para que una biblioteca de tecnología (como Sky 130) se pueda mapear en ella, para que realmente se pueda fabricar.

Si tienes 2 inversores en serie, Yosys (la herramienta de síntesis) puede optimizarlos a ambos, por lo que terminas con menos celdas de lo esperado.

Sin embargo, si sólo tienes 8 celdas, tu diseño probablemente se ha optimizado completamente. ¿Quizás no conectaste las entradas o las salidas?

## ¿Por qué mi densidad objetivo está ajustada a 60%? ¿Debería cambiarla a 100% o debería usar un nuevo cuadro?

El enrutamiento tiende a utilizar más espacio que la lógica misma. Además, tiene que haber espacio para que OpenLane agregue más celdas:

* celdas tap - se aseguran de que el sustrato esté correctamente polarizado para los transistores.
* [diodos antena ](https://www.zerotoasiccourse.com/terminology/antenna-report/) - protejen las compuertas de transistores durante la fabricación.

## ¿Cómo puedo aprender más sobre ASICs y cómo diseñarlos?

[¡Revisa el curso Zero to ASIC de Matt!](https://zerotoasiccourse.com/)

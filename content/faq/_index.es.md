---
title: Preguntas frecuentes
description: Preguntas frecuentes
weight: 90
---

{{% toc %}}

# Soporte

## Tengo problemas, ¿cómo puedo obtener ayuda?

Únete a la [comunidad de Discord en este enlace](https://discord.gg/rPK2nSjxy8).

# Preguntas Frecuentes de Wokwi

## ¿Cómo hago x, y, z con Wokwi?

La [documentación de Woki esta aquí](https://docs.wokwi.com/?utm_source=wokwi). Todavía no tenemos mucha documentación para la versión [ASIC](https://www.zerotoasiccourse.com/terminology/asic/) de Wokwi.

## Teclas de acceso rápido

* Selecciona un componente y presiona **delete** para eliminarlo
* Selecciona un componente ( o shift para seleccionar más componentes) y luego **d** para duplicarlo.
* Arrastra y suelta para seleccionar multiples componentes.
* [Más aquí](https://docs.wokwi.com/guides/diagram-editor#keyboard-shortcuts).

## ¿Puedo copiar y pegar de un diseño de Wokwi a otro?

1. Selecciona todas las partes que quieres copiar (usando shift y haciendo clic en las partes o shift y arrastrando el puntero).
2. Copialas al portapapeles (Ctrl + C o Cmd + C)
3. Ve al proyecto destino, has clic sobre el editor de diagramas y pega (Ctrl + V o Cmd + V)

## ¿Cómo puedo deshacer / rehacer?

* Ctrl+Z y Ctrl+Y o ⌘Z / ⌘Y en una Mac.

## ¿Cómo encuentro el cableado de la pantalla de 7 segmentos?

Haciendo clic en un componente, se mostrará un ? en un círculo. Haz clic en el ? para [obtener ayuda](https://docs.wokwi.com/parts/wokwi-7segment).

## ¿Tengo que usar la pantalla de 7 segmentos?

No, puede eliminarla y poner lo que quiera en su lugar. Hay muchos otros componentes que puedes elegir desde el menú +. Pero, si tiene un PCB, sólo tendrá 7 segmentos en él. Tendría que conectar la placa en una protoboard y agregar sus componentes adicionales después.

## ¿Cómo agrego nuevas compuertas?

Duplique una existente (selecciónela y presione **d**), o:

* Presione el botón + en el menú superior de la página.
* En la caja de filtro, escriba 'logic' para filtrar solamente las compuertas lógicas.

## ¿Cómo muevo un conjunto de compuertas?

Seleccione todas las que quiere mover (usando shift y haciendo clic en las partes o shift y arrastrando un cuadro). Luego, arrastre la selección.

## ¿Cuántas entradas y salidas obtengo?

8 entradas y 8 salidas.

## ¿Cuál es la velocidad máxima de reloj?

Creemos que será alrededor de 12.5 KHz. Tenemos un [divisor de reloj](https://github.com/tinytapeout/tinytapeout-02/blob/tt02/INFO.md#clock-divider) que puede reducir aún más la velocidad, hasta 255 veces más lenta que la velocidad del reloj superior.

## ¿Cómo utilizo el bloque de reloj?

Puede usar la primera entrada como el reloj. Si necesita cambiar la frecuencia de reloj debe hacerlo editando el archivo json de diagrama. Es un truco para la demo.

Tome en cuenta que esperamos una frecuencia de actualización de 12.5 KHz, así que su frecuencia máxima de reloj debe ser la mitad de eso. Tenemos un divisor de reloj el cual puede dividir desde 2 hasta 255 veces más lento.

Además, note que todavía no hemos validado la frecuencia de reloj, por lo que puede ser más baja o más alta.

![reloj](/images/faq/clock_freq.png)

## ¿Hay ejemplos de proyectos que otras personas han hecho?

Puede ver todos [los diseños enviados a Tiny Tapeout 01 aquí](https://github.com/tinytapeout/tinytapeout-mpw7).

Y aquí esta el [Tiny Tapeout 02](https://github.com/tinytapeout/tinytapeout-02).

Para obtener inspiración, vea [nuestros mejores elegidos del TT01](/digital_design/#top-picks-from-tinytapeout-1runstt01).

## ¿Debo eliminar compuertas lógicas no utilizadas?

No, las compuertas no utilizadas serán optimizadas por las herramientas de ASIC.

## Encontré y solucione un problema en mi diseño, ¿necesito volver a enviarlo?

No, sólo debe asegurarse de que de guardar su proyecto y volver a [ejecutar la Github Action](#i-updated-and-saved-my-wokwi-design-how-do-i-re-run-the-github-action-to-update-the-gds-files).

## ¿Tengo que usar Wokwi o podría usar un HDL?

Si es un usuario avanzado, puede usar el HDL de su elección. Vea la [página de HDL](/es/hdl) para más información. 

# Preguntas frecuentes de TinyTapeout

## ¿Dónde puedo encontrar la plantilla para comenzar?

Puede encontrarla en la [página de inicio](/es/digital_design/wokwi).

## ¿Cuándo serán fabricados los chips?

Por favor vea los detalles en la página de cada chip.

* [TinyTapeout-01](/es/runs/tt01)
* [TinyTapeout-02](/es/runs/tt02)

## ¿Cuándo estará disponible el material del curso?

Estamos agregando esto al sitio web a medida que avanzamos. Por favor revise la [sección de diseño digital](/es/digital_design).

## ¿Cuántos lugares hay?

Para el TT01 fueron 498, para el TT02 lo redujimos a 250 para intentar llenar todas los espacios.

## ¿Qué tan grande puede ser mi diseño?

Recientemente incrementamos el tamaño a 150 x 170 um para el TT02. Esto es suficiente para alrededor de 1000 compuertas lógicas digitales, dependiendo de su tamaño.

Aquí hay una vista en 3D del [GDS](https://zerotoasiccourse.com/terminology/gds) de mi [contador de 7 segmentos](https://wokwi.com/projects/340805072482992722), un pequeño diseño que incrementa un contador cada segundo y muestra el resutlado en una pantalla de 7 segmentos.

Haga clic en la imagen para abrir un visor interactivo.

[![7 segmentos](/images/faq/7segtt02.png)](https://gds-viewer.tinytapeout.com/?model=https://tinytapeout.github.io/tt02-test-7seg/tinytapeout.gds.gltf)

## ¿Cuáles de mis diseños serán enviados a fabricación?

Su último envío que:

1. Pasó con éxito las Github Actions y
2. Fue enviado antes de la fecha límite

Será enviado para su fabricación.

# Preguntas frecuentes de Github

## Cuando hago un commit de un cambio, la GDS Action no se ejecuta

Necesita habilitar las acciones.

1. Vaya a la pestaña de Acciones,
2. Haga clic en el botón de habilitar acciones.

![acciones](/images/faq/enable_action.png)

Además, vea las siguientes preguntas frecuentes sobre la GDS Action que falla en 'pages'.

## Mi Github Action esta fallando en la parte de 'pages'.

Debido a las limitaciones de Github, necesita hacer un cambio en los ajustes de su repositorio para que todo funcione.

1. Vaya a la pestañas de configuraciones,
2. Seleccione 'Pages',
3. Cambie el origen de implementar desde una rama a Github Actions.

![actions](/images/faq/action_pages.png)

## Obtuve un error en mi GDS Action de Github.

Esto se espera durante en las primeras fases de TinyTapeout. Espero tener un archivo de configuración que maneje todos los diseños, pero es posible que debamos hacer algunos ajustes. La mejor forma de hacermelo saber es [abrir un issue en el repositorio de la plantilla con un link a su diseño de wokwi](https://github.com/tinytapeout/tt02-submission-template/issues/new?assignees=mattvenn&labels=&template=bug_report.md&title=) y yo responderé.

## Obtuve un error en mi Github Action de documentación.

Es posible que no haya llenado suficientes campos, requerimos que se llenen los siguientes campos:

    author
    title
    description
    how_it_works
    how_to_test
    language

## Actualicé y guardé mi diseño de wokwi, ¿cómo ejecuto de nuevo la Github Action para actualizar los archivos GDS?

1. Vaya a su repositorio, haga clic en la pestaña de Actions,
2. Depués haga clic en el flujo de trabajo ‘gds’
3. Luego haga clic en el botón ’Run workflow’
4. Luego haga clic en el botón ’Run workflow’

![actions](/images/faq/rerun_actions.png)

## ¿Qué son todos los archivos en el artifact?

¡Hay muchos!

* src - los archivos fuente para tu chip:
    * user_module_xxxxx.v el archivo [Verilog](https://www.zerotoasiccourse.com/terminology/hdl/) que representa su diseño Wokwi.
    * config.tcl - archivo de configuración para el flujo de herramientas ASIC de [OpenLane](https://www.zerotoasiccourse.com/terminology/openlane/) que convierte el Verilog en [GDS](https://www.zerotoasiccourse.com/terminology/gds2/).
    * cells.v traduce los módulos en las [células estándar](https://www.zerotoasiccourse.com/terminology/standardcell/) disponibles para el proceso Skywater 130 nm.
* runs/wokwi/reports/metrics.csv - un informe resumido detallado del flujo de herramientas. Por ahora está más allá del alcance de este documento para explicarlo todo.
* runs/wokwi/reports/synthesis/1-synthesis.stat.rpt.strategy4 informe de las células estándar utilizadas para su diseño.
* runs/wokwi/results/final/ (sólo se describen las más importantes se describen aquí)
    * gds - el archivo GDS final que se agregará a la presentación de TinyTapeout.
    * lef - una versión abstracta del GDS con menos información, utilizada para el enrutamiento.
    * verilog - el verilog a nivel de compuertas de tu diseño.

## ¿Dónde esta el repositorio de presentación para el shuttle?

* [Consulte la página TT01](/es/runs/tt01)

## ¿Por qué tengo menos / más céldas estándar de lo que esperaba?

La síntesis lógica tiene que convertir Verilog en una estructura de datos que tiene propiedades específicas para que una biblioteca de tecnología (como Sky 130) se pueda mapear en ella, para que realmente se pueda fabricar.

Si tiene 2 inversores en serie, Yosys (la herramienta de síntesis) puede optimizarlos a ambos, por lo que termina con menos celdas de los esperado.

Sin embargo, si sólo tiene 8 celdas, su diseño probablemente se ha optimizado completamente. ¿Quiźa no conecto las entradas o las salidas?

## No puedo hacer un nuevo fork del repositorio de presentación. ¿Cómo inicio un nuevo proyecto?

Comience creando un nuevo repositorio de Github vacío.

* A través de la línea de comando, puede clonar el repositorio de presentación de tinytapeout, cambiarlo para que apunte a su nuevo repositorio vacío usando `git remote set-url <remote_name> <remote_url>` y luego `git push`
* A travéz de la inferfaz web de Github, [puede importar un repositorio](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer) usando la url del repositorio del TT02: https://github.com/TinyTapeout/tt02-submission-template

En cualquier caso, es posible que necesite habilitar las Github Actions.

# Preguntas frecuentes de ASIC

## ¿Qué significan todas estas siglas que estás usando?

¡Lo siento! ¡Estoy tratando de mantenerlo accesible pero inevitablemente usaré algún término de ASIC en algún momento! Consulte la [guía de términos aquí](https://zerotoasiccourse.com/terminology/).

## ¿Cómo puedo aprender más sobre ASICs y cómo puedo diseñarlos?

[Revisa mi curso Zero to ASIC](https://zerotoasiccourse.com/)

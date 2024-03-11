---
title: 'Pines análogos'
description: 'Especificaciones de pines análogos'
weight: 15
---

## PDK

Todos los shuttles de Tiny Tapeout son ejecutados sobre el PDK *Sky130A*. Asegúrate de simular con Sky130A.

## Pines análogos

Los pines análogos están nombrados de `ua[0]` a `ua[7]` ("ua" significa *user analog*). El número de pines que realmente se conectarán a los pads depende del número de pines análogos que definas en la sección `pinout` del archivo info.yaml (y que hayas pagado).

Por ejemplo, si compraste dos pines análogos, solo `ua[0]` y `ua[1]` serán conectados a los pads. Los pines restantes **no serán conectados**.

## Especificaciones y limitaciones

La ruta entre los pads análogos y tu proyecto (los pines `ua`) se espera que tenga las siguientes propiedades:

- Resistencia: < 500 Ohm
- Capacitancia: < 5 pF

Los pines análogos están **limitados a 1.8V**. Si requieres 3.3V para tu diseño, por favor contáctanos para discutir alternativas.

No se permite usar la capa **metal 5** en tu diseño, ya que Tiny Tapeout la utiliza para alimentación.

## Ubicación de los pines

La ubicación de los pines debe coincidir con una de las [plantillas de Tiny Tapeout](https://github.com/TinyTapeout/tt-support-tools/tree/tt06/def/analog). Las plantillas están disponibles en formato DEF, el cual es compatible con la [herramienta de diseño Magic VLSI](http://opencircuitdesign.com/magic/).

Hay varias plantillas disponibles, cada una para un número distinto de cuadros. Las plantillas incluyen los ocho pines análogos, pero solo los pines por los que hayas pagado serán conectados a los pads. Además, las plantillas también incluyen todos los [pines digitales](../gpio).

La mayoría de los diseños digitales deberían poder entrar dentro de la plantilla más pequeña, llamada `tt_block_1x2_pg_ana.def`, el cual tiene un tamaño de 160x225 um.

**Importante**: No dejes pins de salida digital flotando en tu diseño. Conecta los pins `uo_out`, `uio_out` y `uio_oe` sin usar a tierra (GND).

## Puertos de alimentación

Los puertos de alimentación deben ser llamados `VPWR` y `VGND` y deben ser colocados en la capa `metal 4`. Ambos requieren tener el mismo ancho, entre 1.2 y 2.0 um. Su altura debe ser de al menos el 95% de la altura total del diseño.

El área metálica real puede ser más grande, pero el área del puerto debe ajustarse a estas dimensiones.

## Precio

Los proyectos con pines análogos deben tener una altura de dos cuadros. Esto significa que el precio mínimo por el área del proyecto es de $100 (cada cuadro es de $50).

Por otra parte, existe un costo asociado a cada pin. El precio de los pines análogos es de $40 por pin para los primeros cuatro pines (en un mismo proyecto), y $100 por pin para pines adicionales.

Por ejemplo: un diseño de tamaño de 1x2 cuadros y que utiliza 4 pines análogos costaría $260 ($100 por ambos cuadros, y $160 por los pines análogos). Este precio es solo por incluir el diseño en el shuttle, y no incluye el costo del ASIC, PCB, ni costos de envío.

---

# Instrucciones para crear y enviar un diseño análogo

{{< youtube DQAA4MrG8pM >}}

{{% notice tip %}}
Los diseños análogos actualmente están en estado beta. Existe una pequeña posibilidad de que los cambios se efectúen antes de la fecha límite de Tiny Tapeout 6, o que sea necesario posponer el soporte de diseños análogos para un shuttle futuro. Si tienes más preguntas, por favor únete al [Discord de Tiny Tapeout](https://tinytapeout.com/discord) y realiza tu consulta en el canal #analog.
{{% /notice %}}

Estas instrucciones asumen que estás usando la herramienta [Magic VLSI](http://opencircuitdesign.com/magic/), pero puedes hacer lo mismo con *Klayout* u otras herramientas propietarias.

Asegúrate de que la version de Magic coincida con el PDK.

## Crea el repositorio

Comienza tu diseño desde el [repositorio tt06-analog-template](https://github.com/TinyTapeout/tt06-analog-template). Haz click en el botón verde "Use this template" en la parte superior de la página, y selecciona "Create a new repository".

## Decide el tamaño de tu diseño

Tiny Tapeout provee plantillas para diseños GDS personalizados. Estas plantillas incluyen todos los pines necesarios en la capa `metal 4`. No modifiques el tamaño ni la posición de los pines.
Descarga una de las [plantillas análogas](https://github.com/TinyTapeout/tt-support-tools/tree/tt06/def/analog) y utilízala como punto de partida para tu diseño.

Los pines análogos están nombrados de `ua[0]` a `ua[7]` ("ua" significa *user analog*). El número de pines que realmente se conectarán a los pads depende del número de pines análogos que definas en la sección `pinout` del archivo info.yaml y que hayas pagado.

Por ejemplo, si compraste dos pines análogos, solo `ua[0]` y `ua[1]` serán conectados a los pads. Los pines restantes **no serán conectados**.

## Modifica el archivo info.yaml

Es importante que seas consistente con tu nomenclatura. El nombre de tu proyecto debe coincidir con los archivos GDS y LED finales.

Decide un nombre para tu módulo (top cell). El módulo superior (top module) debe comenzar con 'tt_um_', y debe ser único en el shuttle, así que sugerimos que incluyas tu nombre de usuario de GitHub en él (por ejemplo, tt_um_nombredeusuario_adc_increible).

* Modifica [info.yaml](https://github.com/TinyTapeout/tt06-analog-template/blob/main/info.yaml) y establece su propiedad `top_module` correctamente.
* Actualiza la propiedad `tiles` en info.yaml para que coincida con tu tamaño de plantilla seleccionada.
* Los campos "title", "author" y "description" son obligatorios.
* Enumera todos los pines análogos que necesites en la sección "pinout". La plantilla define por defecto dos pines análogos ("ua[0]" y "ua[1]"), por lo que si, por ejemplo, tu proyecto usa cuatro pines análogos, vas a tener que agregar "ua[2]" y "ua[3]" a la sección "pinout".

## Modifica el stub de Verilog

Este archivo se usa para "transformar en caja negra" tu diseño una vez que sea integrado en el shuttle de Tiny Tapeout.

Modifica [src/project.v](https://github.com/TinyTapeout/tt06-analog-template/blob/main/src/project.v) y reemplaza `tt_um_example` con el nombre real de tu top module.

## Documentación

Modifica el archivo [docs/info.md](https://github.com/TinyTapeout/tt06-analog-template/blob/main/docs/info.md) y agrega una descripción de tu proyecto.

## Continúa tu diseño como te acomode

Utiliza tu flujo análogo preferido para diseñar, simular, disponer, extraer, LVS y simular post-diseño.

Una forma rápida de comenzar es utilizando este [script tcl](https://gist.github.com/urish/ba71f2fa68505a1b665000bce08d3874) para dibujar y etiquetar los puertos de alimentación.

* Descarga el script
* Modifícalo para cambiar el nombre de celda (*cellname*) y las rutas de exportación GDS y LEF
* Ejecuta Magic, y en la ventana de comandos TCL escribe `source tt-analog-draw.tcl`

## Recursos (en inglés)

* [Cómo dibujar un inversor con Magic por Ryan Ridley, Teo Ene, y James E. Stine](https://docs.google.com/document/d/1hSLKsz9xcEJgAMmYYer5cDwvPqas9_JGRUAgEORx1Yw/edit#heading=h.j6gtadx04fb6)
* [Ficha de Magic por Harald Pretl](https://github.com/iic-jku/osic-multitool/blob/main/magic-cheatsheet/magic_cheatsheet.pdf)
* [Convenciones del Diseñador de Circuitos por Harald Pretl](https://github.com/iic-jku/Circuit-Designers-Etiquette)
* [Tutorial de Xschem por Stefan Schippers (video)](https://www.youtube.com/watch?v=q3ZcpSkVVuc)
* [Tutoriales análogos por Carsten Wulff (video)](https://www.youtube.com/playlist?list=PLybHXZ9FyEhZfwQTKrLhm6ZZm4IDfGGla)
* [Flujo de diseño análogo por Carsten Wulff](https://analogicus.com/rply_ex0_sky130nm/tutorial)
* [Tutoriales análogos por BMinch (video)](https://www.youtube.com/watch?v=iLY49tnKbz4)
* [Demostración de diseño con Magic por Tim Edwards](https://youtu.be/XvBpqKwzrFY?si=AyL0Wr3V4gb954yx)

## Exportación de archivos GDS y LEF

Guarda el archivo GDS resultante en la carpeta `gds`, y el archivo LEF en la carpeta `lef`. El nombre de los archivos debe coincidir con tu propiedad `top_module` del info.yaml (ej: `gds/tt_um_ejemplo.gds`).

Si utilizas Magic para crear tu diseño, asegúrate de exportar el archivo LEF con la opción `-pinonly`. Por ejemplo:

```
lef write ../lef/tt_um_nombre_proyecto.lef -pinonly
```

Exporta el GDS ejecutando:

```
gds write ../gds/tt_um_nombre_proyecto.gds
```

{{% notice tip %}}
Si estás usando Magic - no aplanes el archivo .mag, déjalo de forma jerárquica para evitar problemas raros de DRC.
{{% /notice %}}

## Envía tu diseño

Ve al sitio [app.tinytapeout.com](https://app.tinytapeout.com) para enviar tu diseño.

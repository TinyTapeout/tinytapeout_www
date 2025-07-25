---
title: Dibuja un inversor CMOS
description: "Entiende los beneficios del CMOS y explora celdas estándar"
weight: 80
---

### Metas

* Entender las ventajas del CMOS
* Aprender lo que es una celda estándar
* Comparar tu diseño con la celda estándar Sky130
* Próximos pasos

Como hemos visto, un inversor NMOS es ineficiente ya que malgasta energía a través de la resistencia cuando el NMOS conduce. La lógica CMOS reemplaza la resistencia con un MOSFET tipo P. Como el tipo P es la versión complementaria del tipo N, llamamos este tipo de lógica "semiconductor complementario de óxido metálico", en inglés *"complementary metal-oxide-semiconductor"*, he ahí la sigla CMOS.

![](../../../siliwiz/images/image35.png?width=20pc)

Hay muchas maneras de dibujar esto, pero lo más típico es usar el mismo trozo de polisilicio como puerta para tanto el tipo N como el tipo P. Si te atoras puedes revisar [mi solución aquí](https://app.siliwiz.com/?preset=inverter).

![](../../../siliwiz/images/image56.png)

Y la simulación muestra que el CMOS funciona espléndido:

![](../../../siliwiz/images/image40.png)

También agregué la curva de corriente en el gráfico. Se puede ver que tiene un pequeño pico de corriente mientras el inversor opera, pero cuando se encuentra en reposo en estado alto o bajo, la corriente es muy baja. Esta eficiencia es la razón por la cual la lógica CMOS sigue siendo la más utilizada en los chips de computadores.

### Celdas estándar

Ya hemos visto cómo dibujar y crear un inversor lógico, pero hay muchos otros tipos de compuertas lógicas como ANDs, ORs y NOTs. ¡No dudes en intentar dibujar algunas por tí mismo! Comparte tus diseños con nosotros en el [canal comunitario de Discord](https://discord.gg/e3FK68Z98y). Usa el hashtag [#SilliWiz](https://twitter.com/search?q=siliwiz&src=typed_query) en redes sociales.

Un PDK típico va a incluir cientos de celdas estándar. Aquí está la celda estándar del inversor Skywater 130nm:

![](../../../siliwiz/images/image62.png)

¿Puedes identificar los MOSFETs tipo P y tipo N aquí? ¿Puedes ver los puertos de entrada y salida? [Aquí tienes una vista 3D](https://gds-viewer.tinytapeout.com/?model=https://tinytapeout.github.io/sky130B-cells-gltf/cells/sky130_fd_sc_hd__inv_1.gds.gltf) de la misma celda:

![](../../../siliwiz/images/image18.png)

Una cosa que hace que las celdas estándar sean estándar es que todas tienen la misma altura y las partes superiores e inferiores siempre incluyen la fuente de energía vdd y vss respectivamente. Esto nos permite colocar varias celdas juntas en una cuadrícula.

Esta es una vista 3D de algunas celdas estándar puestas juntas, alimentadas por las líneas azules de vss y vdd.

![](../../../siliwiz/images/image11.png)

¿Puedes encontrar un inversor?

Y finalmente aquí se puede apreciar cómo se cablean las celdas para hacer una máquina digital más compleja:

![](../../../siliwiz/images/image43.png)

Si quieres explorar este diseño por tu cuenta, aquí tienes:

* [la vista 3D](https://gds-viewer.tinytapeout.com/?model=https://tinytapeout.github.io/tt02-test-invert/tinytapeout.gds.gltf)
* [el diseño de la lógica](https://wokwi.com/projects/341535056611770964)
* [más información acerca del diseño](https://tinytapeout.com/chips/tt02/000/)

### ¿Qué procede?

[¡Deja tus comentarios!](https://forms.gle/fY5phQRc2dnzBRmf9) Por favor cuéntanos qué piensas y qué ideas de mejoras tienes. También puedes usar ese formulario para solicitar más información acerca de SiliWiz y TinyTapeout para escuelas y universidades.

* Comparte una imagen de tu diseño en redes sociales con el hashtag [#SiliWiz](https://twitter.com/search?q=siliwiz&src=typed_query)
* [¡Aprende a utilizar compuertas lógicas para construir circuitos simples y mandarlos a fabricar!](http://tinytapeout.com)
* [Inscríbete en el curso más avanzado y altamente aclamado de Matt, "Zero to ASIC"](https://zerotoasiccourse.com) (sitio en inglés)
* Intenta dibujar diagramas de palos *(stick diagrams)* con [Stixu](https://stixu.io/)
* [Mira los videos del curso Zero to ASIC en el canal de YouTube](https://youtube.com/zerotoasic)
* [Suscríbete a la lista de correo](https://zerotoasiccourse.com/newsletter)
* ¡[Únete a la comunidad de Discord](https://discord.gg/e3FK68Z98y) y cuéntanos qué opinas de SiliWiz!
* [Contribuye a SiliWiz](https://github.com/wokwi/siliwiz/issues)

Créditos y Agradecimientos
--------------------------

SiliWiz es un proyecto de [Matt Venn](https://mattvenn.net/). Muchas gracias a todos quienes ayudaron a testear y en particular a:

* Tim Edwards & Holger Vogt por su ayuda en la creación de SiliWiz.
* Eric Smith & Thomas Parry por brindar ideas de lecciones y revisión.
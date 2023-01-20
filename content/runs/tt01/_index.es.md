---
title: "Tiny Tapeout 01"
weight: 10
description: Nuestra primera prueba
---

{{% toc %}}

# Detalles de diseño

* [Repositorio de Github](https://github.com/tinytapeout/tinytapeout-mpw7)
* [Hoja de datos en PDF](/tt01.pdf)
* [Cómo funciona la cadena de escaneo, pinout y detalles técnicos](https://github.com/tinytapeout/tinytapeout-mpw7/blob/mpw7/INFO.md)
* [Verificación](https://github.com/tinytapeout/tinytapeout-mpw7/blob/mpw7/verification.md)
* [La presentación de MPW de Efabless esta aquí](https://platform.efabless.com/projects/1229)

# Estadísticas de lanzamiento

* Lanzamiento: 2022-08-17
* Presentación cerrada: 2022-09-01
* Enviado a Efabless el 2022-09-05 para la lanzadera MPW7 utilizando el PDK de código abierto Skywater de 130 nm.

# Estadísticas de la comunidad (a fecha de 2022-09-05)

* Discord: 206 miembros
* Sitio web: 17 mil visitantes, 430 clics en enlaces
* Lista de correo: 380 subscripciones
* Twitter: 300 mil impresiones

# Prensa

* [Adafruit](https://blog.adafruit.com/2022/08/31/tinytapeout-making-it-easier-to-get-a-chip-design-manufactured-tinytapeout-matthewvenn/)
* [Hackernews](https://news.ycombinator.com/item?id=32617620)
* [eenews](https://www.eenewseurope.com/en/tinytapeout-boost-for-open-source-silicon-chip-design/)

# Estadísticas del proyecto

* 152 proyectos presentados. Cada proyecto tiene es de um x 100 um.
* 100 personas dispuestas a pagar 100 dólares por el montado del chip en una PCB.
* 115 usaron el editor gráfico Wokwi, 31 Verilog, 3 XLS, 2 Chisel y 1 Amaranth.
* 15 mil células estándar usadas en todos los proyectos.
* La mayoría de las celdas usadas en un diseño fue de 600, la menor fue de 14.
* El total del largo del cableado fue de 772 mm.

# Imágenes

## Chip completo

![chip completo](/images/whole_die.png)

## Renderizado del chip completo

![render](/images/render.png)

Por [Maximo Balestrini](https://twitter.com/maxiborga)

## Zoom en 6 diseños individuales

![zoom](/images/zoom.png)

Click para ejecutar un [visor de GDS interactivo creado automáticamente con Github Actions](https://proppy.github.io/tinytapeout-xls-test/)

# Muestra de proyectos

Tenemos muchos métodos para presentar en Tiny Tapeout, la versión gráfica de Wokwi y soporte de HDL para Verilog, Chisel, Amaranth, etc.

## Proyectos de Wokwi

* [LFSR](https://wokwi.com/projects/341344337258349139)
* [PopCount](https://wokwi.com/projects/340285391309374034)
* [Controlador de LED RGB](https://wokwi.com/projects/341188777753969234)
* [Contador BCD](https://wokwi.com/projects/341296149788885588)

## Proyectos de HDL

* [CPU de 4 bits](https://github.com/tommythorn/tinytapeout-4-bit-cpu)
* [CORDIC de 6 bits](https://github.com/sfmth/tinytapeout-tinycordic)
* [Prueba de investigación del oscilador de anillo](https://github.com/BarsMonster/MicroASICV)
* [FPGA](https://github.com/gatecat/tinytapeout-fpga-test)

# Contribuciones seleccionadas de la comunidad

* [Vídeo de resumen](https://twitter.com/bovensiepen/status/1563600293472141313) 
* [Vista desplegada animada del GDS](https://twitter.com/ChrisPVille/status/1565566061814185984)
* [Renders en 3D](https://twitter.com/maxiborga/status/1565081697057660928)

# Testimonios / Endosos

Quiero cambiar mi clase de VLSI en la primavera (Abril - Junio) para utilizar su infraestructura de chips pequeños. Si pudiera decir que cada estudiante de mi clase hizo algo, sería increíble.

---
Enseño diseño digital en los Emiratos Árabes Unidos y estaría interesado en ponerme en contacto para aprender acerca de la próxima fecha de entrega donde mis estudiantes podrían enviar sus pruebas de infraestructura para el tapeout.

---
Soy un profesor de CS y EE y en mi último año como estudiante de doctorado en la Universidad del Sureste de Noruega (USN). Como impartimos cursos tanto de electrónica digital como analógica, pensé que sería una gran oportunidad para que los estudiantes materializaran su trabajo.

---
Construí una lógica de CRC para el http://tinytapeout.com de @matthewvenn con mi hijo. Espero que el tapeout suceda 🥰 de todos modos, el flujo de trabajo es asombroso. CI/CD para el diseño de chips 🤯

---
Gracias por hacerlo - Siempre quise unirme a estos lanzamientos de OpenMPW, pero nunca me sentí listo. TinyTapeout me dió un camino para introducirme mientras solo tomaba una tarde de esfuerzo. !Es increíble!

---
Acabo de hacer un desplazador de barril de 4 bits usando esta herramienta de http://tinytapeout.com. Es rápido y divertido de usar. Incluso el GDS se generó en cuestión de minutos. Todos deberían probarlo.

---
Más en [Twitter](https://twitter.com/search?q=tinytapeout).

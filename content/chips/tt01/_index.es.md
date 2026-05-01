---
title: "Tiny Tapeout 1"
weight: 10
description: 152 diseños, cerrado el 1 de Septiembre 2022
hidden: true
---

{{% toc %}}

# Detalles de diseño

* [Repositorio de Github](https://github.com/tinytapeout/tinytapeout-mpw7)
* [Hoja de datos en PDF](/tt01.pdf)
* [Cómo funciona la cadena de escaneo, pinout y detalles técnicos](https://github.com/tinytapeout/tinytapeout-mpw7/blob/mpw7/INFO.md)
* [Verificación](https://github.com/tinytapeout/tinytapeout-mpw7/blob/mpw7/verification.md)
* [Envío de MPW de Efabless esta aquí](https://web.archive.org/web/20241111203507/https://platform.efabless.com/projects/1229)

# Estadísticas de lanzamiento

* Lanzamiento: 2022-08-17
* Presentación cerrada: 2022-09-01
* Enviado a Efabless el 2022-09-05 para el shuttle MPW7 utilizando el PDK de código abierto Skywater de 130 nm.

# Estadísticas de proyecto

* 152 proyectos enviados. Cada proyecto es de 100um x 100um.
* 100 personas dispuestas a pagar 100USD por el chip montado en una PCB.
* 115 personas usaron el editor gráfico Wokwi, 31 usaron Verilog, 3 usaron XLS, 2 usaron Chisel, 1 usó Amaranth.
* 15 mil celdas estándar en total utilizadas en todos los proyectos.
* La mayor cantidad de celdas utilizadas en un diseño fue de 600, la menor cantidad fue de 14.
* Longitud total de cableado fue de 772 mm.

# Imágenes

## Chip completo

![chip completo](/images/whole_die.png)

## Renderizado del chip completo

![render](/images/render.png)

Por [Maximo Balestrini](https://twitter.com/maxiborga)

## Zoom en 6 diseños individuales

![zoom](/images/zoom.png)

Click para ejecutar un [visor de GDS interactivo creado automáticamente con Github Actions](https://proppy.github.io/tinytapeout-xls-test/)

# Exposición de proyectos

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

* [Video de resumen](https://twitter.com/bovensiepen/status/1563600293472141313) 
* [Vista desplegada animada del GDS](https://twitter.com/ChrisPVille/status/1565566061814185984)
* [Renderizados en 3D](https://twitter.com/maxiborga/status/1565081697057660928)

# Testimonios / Avales

Quiero cambiar mi clase de VLSI en la primavera (Abril - Junio) para utilizar su infraestructura de chips pequeños. Si pudiera decir que cada estudiante de mi clase logró hacer algo, sería increíble.

---
Enseño diseño digital en los Emiratos Árabes Unidos y estaría interesado en ponerme en contacto para aprender acerca de la próxima fecha de entrega donde mis estudiantes podrían enviar sus pruebas de infraestructura para el tapeout.

---
Soy un profesor de ciencias computacionales e ingeniería electrónica, y estoy en mi último año como estudiante de doctorado en la Universidad del Sureste de Noruega (USN). Como impartimos cursos tanto de electrónica digital como analógica, pensé que sería una gran oportunidad para que los estudiantes materializaran su trabajo.

---
Construí una lógica de CRC para el http://tinytapeout.com de @matthewvenn con mi hijo. Espero que el tapeout se concrete 🥰 De todos modos, el flujo de trabajo es asombroso. CI/CD para el diseño de chips 🤯

---
Gracias por hacer esto - siempre quise unirme a estos shuttles de Open MPW, pero nunca me sentí preparado. TinyTapeout me ha brindado una manera para poder hacerlo, y solo tuve que dedicar 2 veladas de esfuerzo de mi parte. ¡Eso es increíble!

---
Acabo de hacer un barrel shifter de 4 bits utilizando esta herramienta http://tinytapeout.com. Es muy rápida y divertida de usar. El GDS incluso se generó en minutos. Todos deberían probar esto.

---
Más en [Twitter](https://twitter.com/search?q=tinytapeout).

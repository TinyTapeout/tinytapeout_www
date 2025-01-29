---
title: 'PCB (Tiny Tapeout 4 en adelante)'
linkTitle: PCB (TT04+)
description: 'PCBs para Tiny Tapeout 4 en adelante'
weight: 50
---

{{< figure src="/../../specs/pcb/images/tt04_board_annotated.jpeg" title="PCB for TT04 and beyond" >}}

## Placa montadora

Archivos PCB: https://github.com/TinyTapeout/carrier-pcb

Los chips son montados en una placa portadora, se espera que todos los chips de TT sean en QFN.

La placa portadora ayuda a:

* acceder a todas las señales del chip
* construir tu propia placa madre sin tener que soldar un chip ASIC descubierto

## Placa demo

La placa demo es un trabajo en curso: https://github.com/TinyTapeout/tt-demo-pcb

Las principales características de la placa de demostración son:

   * alberga y alimenta el portador ASIC;

   * incluye facilidades para interactuar con los proyectos "stand-alone" (DIP switches de entrada y displays de 7-segmentos);

   * tiene un microcontrolador [RP2040](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html) (mismo chip que alimenta el [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/)), para seleccionar e interactuar opcionalmente con los proyectos;

   * tiene un conector USB tipo C, para alimentar la placa e interactuar con el RP2040; y

   * provee una variedad de formas de interactuar con la placa demo y con proyectos de circuitos externos.


### MCU integrada RP2040


De TT04 en adelante, la placa demo incluirá un [microcontrolador RP2040](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html) y componentes de apoyo (como memoria flash) para:

* seleccionar el diseño activo
* generar la [señal de reloj](../clock/) para tu diseño, de hasta 50 MHz
* proveer [emulación de RAM SPI](https://github.com/MichaelBell/spi-ram-emu), hasta 512 Kbit

El RP2040 puede proveer un ambiente [MicroPython](https://micropython.org/), y hemos creado un [SDK de MicroPython para TT4+](https://github.com/TinyTapeout/tt-micropython-firmware) que simplifica la configuración, selección e interacción con los proyectos.

El RP2040 funciona a 12 MHz, pero tiene un PLL que es utilizado para aumentar el reloj del sistema de manera significativa. Pruebas de prototipado han demostrado que es posible que el reloj del RP2040 pueda funcionar incluso por sobre los 150 MHz.

Los proyectos que usen lógica sincrónica pueden sincronizarse usando el RP2040, y la placa demo permite la selección de proyectos además del manejo de las entradas y pines bidireccionales del proyecto, y leer los pins bidireccionales y las salidas.

### Conexión USB

En conjunto con proveer alimentación, el puerto USB conecta las líneas de datos USB 2.0 al RP2040. Esto permite comunicación entre el computador y el microcontrolador, además de actualizar el firmware del RP2040 (usando el botón de inicio durante el encendido).

Cuando se instala MicroPython, esto puede ser una simple interfaz REPL al intérprete Python, lo que permite selección y control manual de proyectos, u otros tipos de interfaces seriales.


### Conexiones y extensiones

La creación de hardware add-on y la interacción con la placa demo y con proyectos desde fuera de la placa se realiza de dos maneras:

   * PMODs para periféricos conectables, y 

   * conectores headers de una única línea para exponer prácticamente cualquier cosa.


#### PMODs

La interacción *off-board* (fuera de placa) con las entradas y salidas es posible mediante varios headers, incluyendo [PMODs](https://digilent.com/reference/_media/reference/pmod/pmod-interface-specification-1_2_0.pdf) y usando espaciado estándar.

Dos sets de PMODs se encuentran en la placa demo:

   * un trio entrada-bidireccional-salida sencillo (ver parte inferior de la imagen al inicio de la página); y

   * otro conjunto que provee combinaciones de entradas y salidas para facilitar interacciones con periféricos existentes que son compatibles con PMODs.


#### SILs

La fila inferior de PMODs está dispuesta con pines adicionales para proveer acceso a todos los I/O en una sola fila.

{{< figure src="/../../specs/pcb/images/tt04_offboard_sils.jpeg" title="Headers de conexión off-board TT04" >}}

Además, otro header de 1x24 pines se encuentra en la parte superior que da acceso a las líneas de alimentación y control MUX.

Nota: se debe evitar entrar en conflicto con el RP2040 al utilizar señales externas para interactuar con un proyecto o controlar MUX. Revisa la [documentación del SDK](https://github.com/TinyTapeout/tt-micropython-firmware) para obtener información sobre los modos de operación del RP2040.

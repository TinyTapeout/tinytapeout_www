---
title: 'PCB'
description: 'PCBs'
weight: 15
---

{{< figure src="/../../specs/pcb/images/tt02_board_top.jpeg" title="PCB de TT01, 02 & 03" >}}

## Placa montadora

Archivos PCB: https://github.com/TinyTapeout/caravel-breakout-pcb

Los chips son montados en una placa portadora. Hay dos versiones, una para paquetes QFN y otra para paquetes WLCSP.
Se espera que todos los chips TT sean en QFN.

La placa portadora ayuda a:

* acceder a todas las señales del chip
* construir tu propia placa madre sin tener que soldar QFN o WLCSP

## Placa demo para TT01, 02 & 03

Archivos PCB: https://github.com/TinyTapeout/tt123-demo-pcb

La placa de demostración provee facilidades para:

* seleccionar el diseño activo mediante DIP switches
* generar señales de reloj y reset de un único ciclo
* conectar componentes externas mediante headers o Pmods (módulos periféricos)
* ver las 8 salidas en el display de 7 segmentos
* controlar las 8 entradas con DIP switches

## Placa demo para TT04 en adelante

Trabajo en curso: https://github.com/TinyTapeout/tt-demo-pcb

La placa de demostración para el TT04 en adelante incluirá un chip RP2040 para:

* seleccionar el diseño activo
* generar la [señal de reloj](../clock/) para tus diseños, hasta 50 MHz
* proveer [emulación de SPI RAM](https://github.com/MichaelBell/spi-ram-emu), hasta 512 KBit

## Desarrollo de placa

¡El desarrollo de la placa está patrocinado por [Aisler](https://aisler.net/)!
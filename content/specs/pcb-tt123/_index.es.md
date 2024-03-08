---
title: 'PCB (Tiny Tapeout 1-3)'
linkTitle: PCB (TT02-03)
description: 'PCBs for Tiny Tapeout 1, 2 and 3'
weight: 55
---

{{< figure src="/../../specs/pcb-tt123/images/tt02_board_top.jpeg" title="PCB de TT01, 02 & 03" >}}

## Vista general de la placa

{{< youtube QMsmkDeqELg >}}

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

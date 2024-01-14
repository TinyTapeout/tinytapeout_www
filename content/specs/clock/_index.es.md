---
title: 'Reloj'
description: 'Generación de reloj y limitaciones'
weight: 10
---

La información en este documento aplica para Tiny Tapeout 04 en adelante.

Tiny Tapeout incluye una señal de reloj de entrada (`clk`), suministrada externamente a través del pin `mprj_io[6]` del chip Caravel (pin número 37 en el chip QFN-64).

![QFN-64 chip clk pin](/../../specs/clock/images/pinout_clk.svg)

## Limitaciones

Internamente, tanto el pin `rst_n` como el pin `clk` son manejados como cualquier otro pin de entrada. Se espera una latencia (retraso de inserción) de hasta 10 nanosegundos entre el pad de I/O (entrada/salida) del chip y el reloj de tu proyecto.

El chip Caravel utiliza el macro [sky130_ef_io_gpiov2_pad](https://skywater-pdk.readthedocs.io/en/main/contents/libraries/sky130_fd_io/docs/user_guide.html#sky130-fd-io-gpiov2-additional-features) para los pads de I/O. La documentación especifica una frecuencia de entrada máxima de 66 MHz. Por ende, pensamos que la frecuencia máxima de reloj que podrás usar en tus diseños es de 66 MHz.

## Generación de reloj

La placa del Demo de Tiny Tapeout puede generar la señal de reloj para tus diseños. El reloj es generado por el microcontrolador integrado RP2040 ([código fuente del firmware aquí](https://github.com/TinyTapeout/tt-rp2040-firmware/blob/main/src/clkgen.c)).

El RP2040 puede generar una amplia gama de frecuencias, incluyendo 50 MHz, 48 MHz (útil para USB), 40 MHz, 25.179 MHz (útil para VGA), 10 MHz, 1 MHz. Si necesitas una señal de reloj muy lenta, como 1 Hz, esto se puede lograr con un programa sencillo de CircuitPython.

Puedes ver la lista completa de frecuencias verificadas en el [README del firmware](https://github.com/TinyTapeout/tt-rp2040-firmware#clock-configurations). Si necesitas una frecuencia que no aparece en la lista, no dudes en [abrir una propuesta](https://github.com/TinyTapeout/tt-rp2040-firmware/issues/new) y consideraremos agregarla a la lista.

{{< figure src="/../../specs/clock/images/clk_25_179.png" title="Señal de reloj de 25.179 MHz generada por el chip RP2040" >}}

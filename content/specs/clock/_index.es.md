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

La placa del Demo de Tiny Tapeout puede generar la señal de reloj para tus diseños. La placa del Demo de Tiny Tapeout puede generar la señal de reloj para tus diseños. La frecuencia de la señal del reloj puede ser configurada por el usuario, entre 3 Hz y 66,5 MHz. El reloj es generado por el microcontrolador integrado RP2040, utilizando el hardware PWM periferal para dividir el reloj RP2040.

La placa Demo ejecuta MicroPython, y la generación del reloj es controlada por un simple script de Python. Puedes encontrar el código fuente para el generador de reloj en el [repositorio de Tiny Tapeout Commander App](https://github.com/TinyTapeout/tt-commander-app/blob/main/src/ttcontrol/ttcontrol.py) (busca la función `set_clock_hz`). 

Si tienes un Pi Pico (u otra placa basada en RP2040), puedes instalar MicroPython en éste y usar [la app Commander](https://commander.tinytapeout.com) para experimentar con la generación del reloj.

### Reloj de baja frecuencia

En caso de que necesites un reloj muy lento como 1 Hz, puedes generarlo con un programa simple de MicroPython de la siguiente forma:

```python
import machine
import time

GPIO_PROJECT_CLK = 0
clk_pin = Pin(GPIO_PROJECT_CLK, Pin.OUT)
while True:
    clk_pin.value(1)
    time.sleep(0.5)
    clk_pin.value(0)
    time.sleep(0.5)
```

### Ejemplo de señal de reloj

{{< figure src="/../../specs/clock/images/clk_25_179.png" title="Señal de reloj de 25.179 MHz generada por el chip RP2040" >}}

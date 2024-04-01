---
title: Memoria
description: 'Memoria para proyectos de Tiny Tapeout'
weight: 30
---

### Memoria

Si tu diseño requiere memoria, tienes las siguientes opciones:

1. Usar registros (flip-flops tipo D, DFF) en tu área de diseño
2. Usar RAM DDF (arreglos eficientes de DFFs)
3. Usar una RAM SPI externa (puede ser simulada con el RP2040 de la placa demo)

#### Utilizando registros

La forma más sencilla de almacenar datos es usando registros. Es además muy flexible: puedes utilizar tantos como desees y puedes leer/escribir a ellos en cualquier instante. La desventaja es que no son muy eficientes en cuanto a área.

Como regla general, puedes hacer entrar alrededor de 320 DFFs (40 bytes de memoria) en un cuadro. Considerando que tu diseño también requiere lógica para operar, es probable que te quepan menos que eso.

Aquí hay algunos proyectos de ejemplo que utilizan registros como memoria:

- [RAM de 32 bytes basada en registros](https://github.com/TinyTapeout/tt06-256-bits-dff-mem) - usa 264 DFFs (32 bytes de memoria + 8 bits para el registro de salida) y utiliza el 70% del área del cuadro.
- [Juego de Simón Dice](https://github.com/urish/tt06-simon-game) - usa 188 DFFs para el estado del juego, y utiliza el 76% del área del cuadro (para tanto lógica como memoria).

#### Utilizando RAM DFF

El [compilador de RAM DFF](https://github.com/AUCOHL/DFFRAM) crea un arreglo denso de DFFs que puede ser usado como memoria. Es más eficiente que el uso de registros, pero también es menos flexible: solo puedes realizar lecturas y escrituras sobre una dirección a la vez, y solo hay una cierta cantidad de tamaños disponible.

Para Tiny Tapeout, puedes usar el macro RAM32, el cual es de 128 bytes dispuesto como 32x32 bits (32 palabras de 32 bits cada una) con un único puerto de lectura/escritura (1RW). Este macro usa un área de 401x136 um, el cual cabe en 3x2 cuadros y utiliza alrededor del 54% del área.

Incluir RAM DFF en tu diseño es un poco más complejo que usar registros, ya que conectar los pines de alimentación y tierra no es trivial. Puedes utilizar como punto de partida el [proyecto de ejemplo de RAM DFF](https://github.com/TinyTapeout/tt06-dffram-example).

#### Utilizando RAM SPI externa

El RP2040 de la [placa demo](../pcb) puede ser configurado para proveer 64 kbytes de RAM al chip a través de canales SPI gracias al [proyecto spi-ram-emu](https://github.com/MichaelBell/spi-ram-emu) de Mike Bell. Éste simula el chip de RAM SPI 23LC512. Es una gran opción si es que llegas a necesitar mucha memoria, pero también es la opción más lenta.
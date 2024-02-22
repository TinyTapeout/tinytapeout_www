---
title: 'Distribución de pines'
description: 'Pinouts recomendados para varios protocolos y módulos periféricos'
weight: 20
---

Para hacer más fácil la puesta en marcha y la reutilización de placas, TT recomienda utilizar distribuciones de pines *(pinouts)* comunes donde sea posible. Si tu diseño usa el mismo pinout que los otros diseños, será mucho más sencillo conectar hardware externo o crear placas propias que se puedan implementar en aquellos diseños.

El uso de pinouts comunes no es obligatorio, pero sí es recomendado ya que TT es un shuttle comunitario. No dudes en desviarte de las recomendaciones si lo estimas necesario para tus diseños. Si utilizas un protocolo o Pmod que no se encuentra listado aquí, por favor haz una propuesta en el servidor de Discord.

#   Periféricos comunes

## UART a USB

Si quieres interactuar con tu diseño a través de consola serial, puedes hacerlo a través del RP2040 integrado en la placa demo. Así, puedes conectar la placa demo mediante USB y enviar/recibir datos desde tu chip.

ui_in[3]  - RX\
uo_out[4] - TX

## Salida VGA

![Tiny VGA](/../../specs/pinouts/images/tiny_vga.jpg)

Para salida VGA se recomienda usar el pinout de [Tiny VGA](https://github.com/mole99/tiny-vga). La placa es de código abierto y solo utiliza un Pmod para que puedas usar de todos modos el Pmod bidireccional, u otra cosa.

Incluso si piensas en diseñar tu propia placa montadora, tiene sentido utilizar el pinout de Tiny VGA para que otros puedan probar tu diseño.

Nota: Es posible que Tiny VGA pueda ser comprado en Tiny Tapeout más adelante. Por ahora existe la posibilidad de construir la placa por tí mismo.

Pinout:

uo_out[0] - R1\
uo_out[1] - G1\
uo_out[2] - B1\
uo_out[3] - vsync\
uo_out[4] - R0\
uo_out[5] - G0\
uo_out[6] - B0\
uo_out[7] - hsync

## RAM SPI

El microcontrolador RP2040 de la placa demo puede configurarse para proveer RAM al chip a través de SPI gracias a [spi-ram-emu](https://github.com/MichaelBell/spi-ram-emu/).

Pinout:

uio[0] - GPIO21 - CS\
uio[1] - GPIO22 - MOSI\
uio[2] - GPIO23 - MISO\
uio[3] - GPIO24 - SCK

Esto se asigna al pinout SPI estándar para Pmods, lo que quiere decir que un Pmod PSRAM podría ser usado como reemplazo directo.

#   Protocolos comunes (SPI, I2C y UART)

Si quieres implementar protocolos que no se dirigen necesariamente a algún Pmod, te sugerimos usar el pinout para I2C, SPI y UART de las [especificaciones Pmod](https://digilent.com/reference/_media/reference/pmod/pmod-interface-specification-1_2_0.pdf)

## SPI

El protocolo SPI utiliza CS, MOSI, MISO y SCK, y por ende solo requiere una fila de pins del conector Pmod, preferiblemente la fila superior. Ya que el estándar SPI debe enviar y recibir, se utiliza el Pmod bidireccional.

Fila superior:

uio[0] - CS\
uio[1] - MOSI\
uio[2] - MISO\
uio[3] - SCK

Fila inferior:

uio[4] - CS\
uio[5] - MOSI\
uio[6] - MISO\
uio[7] - SCK

Si tu diseño solo recibe datos o solo transmite datos mediante SPI, puedes escoger omitir MOSI o MISO y utilizar el Pmod de solo-entrada o solo-salida.
SPI - doble I/O y cuádruple I/O

Ver: https://digilent.com/reference/pmod/pmodsf3/start

uio[0] - CS\
uio[1] - MOSI\
uio[2] - MISO\
uio[3] - SCK\
uio[4] - NC\
uio[5] - RST\
uio[6] - WP\
uio[7] - HLD

## UART (control de flujo por hardware opcional)

El protocolo UART utiliza TXD y RXD, y opcionalmente CTS y RTS. Solo se usa una fila del conector Pmod, preferiblemente la fila superior:

Fila superior:

uio[0] - (CTS)\
uio[1] - TXD\
uio[2] - RXD\
uio[3] - (RTS)

Fila inferior:

uio[4] - (CTS)\
uio[5] - TXD\
uio[6] - RXD\
uio[7] - (RTS)

Si tu diseño solo recibe o solo transmite, puedes escoger omitir TXD o RXD y luego utilizar los Pmod de solo-entrada o solo-salida.

## I2C (interrupción y reset opcional)

El pinout para I2C usa SCL y SDA y opcionalmente INT y RESET para interrupciones y reset. Solo se usa una fila del conector Pmod, preferiblemente la fila superior:

Fila superior:

uio[0] - (INT)\
uio[1] - (RESET)\
uio[2] - SCL\
uio[3] - SDA

Fila inferior:

uio[4] - (INT)\
uio[5] - (RESET)\
uio[6] - SCL\
uio[7] - SDA

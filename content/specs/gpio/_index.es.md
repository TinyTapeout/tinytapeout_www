---
title: 'Pines GPIO'
description: 'Especificaciones y limitaciones de pines de entrada y salida (GPIO)'
weight: 11
---

## Pines GPIO

Existe un total de 26 pines de entrada/salida (I/O) disponibles para tu diseño:

| Nombre        | Cantidad | Dirección | Descripción               |
|---------------|----------|-----------|---------------------------|
| `clk`         | 1        | Entrada   | Entrada de reloj          |
| `rst_n`       | 1        | Entrada   | Reset activo bajo         |
| `ui_in[7:0]`  | 8        | Entrada   | Entrada propósito general |
| `uo_out[7:0]` | 8        | Salida    | Salida propósito general  |
| `uio[7:0]`    | 8        | Bidirecc. | I/O propósito general     |

Internamente, tanto el pin `clk` como `rst_n` se manejan de la misma forma que cualquier otro pin. Sin embargo, éstos tienen un significado especial para la [placa demo de Tiny Tapeout](../pcb). Para más información acerca del pin `clk` y la sincronización de entradas, revisa la sección [Reloj](../clock).

### Limitaciones

El chip Caravel utiliza el macro [sky130_ef_io_gpiov2_pad](https://skywater-pdk.readthedocs.io/en/main/contents/libraries/sky130_fd_io/docs/user_guide.html#sky130-fd-io-gpiov2-additional-features) para los pads de I/O. La documentación especifica las siguientes limitaciones:

| Parámetro                              | Limitación   |
|----------------------------------------|--------------|
| Máxima frecuencia de salida            | 33 MHz       |
| Máxima frecuencia de entrada           | 66 MHz       |
| Fuerza de activación (fuente/sumidero) | 4 mA         |
| Voltaje de alimentación \*             | 1.71V - 5.5V |

\* La placa de demostración provee 3.3V de alimentación para I/O. Los pines de entrada no toleran 5V.

### Características eléctricas

Nota: las siguientes mediciones fueron realizadas en un único dado a ~22°C y pueden no ser representativas de lotes futuros. Se han proporcionado solo como referencia.

<img src="../../../specs/gpio/images/iv-curve-sink.png?featherlight=false" alt="Sink IV Curve" width="640" height="400" />

<img src="../../../specs/gpio/images/iv-curve-source.png?featherlight=false" alt="Source IV Curve" width="640" height="400" />
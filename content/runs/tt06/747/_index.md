---
hidden: true
title: "747 Circuito PWM con ciclo de trabajo configurable"
weight: 96
---

## 747 : Circuito PWM con ciclo de trabajo configurable

* Author: Maria Fernanda Tovany Salvador, Javier Trucios Alonso & Luis David Vazquez Perez
* Description:  A partir de tres senales de entrada digitales selecciona el ciclo de trabajo de salida (PWM).
* [GitHub repository](https://github.com/LuisVazpez12/PWM_configurable)
* [GDS submitted](https://github.com/LuisVazpez12/PWM_configurable/actions/runs/8757612449)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

El PWM configurable de ciclo de trabajo incrementales un dispositivo diseñado para generar señales PWM (Modulación por Ancho de Pulso) con ciclos de trabajo incrementales basados en tres señales de entrada digitales. Este dispositivo permite una fácil configuración del ciclo de trabajo para adaptarse a una variedad de aplicaciones. El ciclo de trabajo será incremental con valor de 12.5% para cada combinación de entrada.

### How to test

Usando los puertos de entrada en combinacion de estados logicos y con un uno logico en enable, puede visualizarse en la salida como la señal de ancho de pulso varia de acuerdo a las siguientes combinaciones:
000=12.5%
001=25%
010=37.5%
011=50%
100=62.5%
101=75%
110=87.5%
111=100%

### External hardware

Generador de señales para generar la señal de reloj de 10MHz, osciloscopio para poder visualizar el ancho del pulso.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | no use | PWM | no use |
| 1 | no use | no use | no use |
| 2 | no use | no use | no use |
| 3 | speed[0] | no use | no use |
| 4 | speed[1] | no use | no use |
| 5 | speed[3] | no use | no use |
| 6 | enable | no use | no use |
| 7 | clock | no use | no use |

### Chip location

{{< shuttle-map "tt06" "747" >}}

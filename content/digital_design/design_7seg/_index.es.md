---
title: Diseño personalizable - 7 segmentos
tags: [personalizable]
description: "Mostrar una cadena de caracteres personalizada"
weight: 120
---

Este circuito emitirá una cadena de caracteres ('tiny tapeout') al display de 7 segmentos.

La lógica para encender los caracterers aparece en la parte inferior de la ventana de simulación.

La parte superior de la ventana de simulación implementa un contador *modulo-11*. En otras palabras, el contador incrementa hasta 11 y luego se reinicia. Este contador es usado para determinar qué caracter debemos emitir al display de 7 segmentos.

La tabla de verdad para el diseño se puede encontrar en la [hoja de cálculo del diseño](https://docs.google.com/spreadsheets/d/1-h9pBYtuxv6su2EC8qBc6nX_JqHXks6Gx5nmHFQh_30/edit?usp=sharing).


| SW      | Función             | 
|---------|---------------------|
| 1       | N/A                 | 
| 2       | Reiniciar           | 
| 3       | N/A                 |
| 4       | Deshabilitar reloj  | 
| 5       | A                   | 
| 6       | B                   |
| 7       | C                   | 
| 8       | D                   | 

Diseño [inspirado en la presentación tt01 de Rakesh Peter](https://github.com/r4d10n/tinytapeout-HELLo-3orLd-7seg).

{{< wokwi 397140982440144897 >}}
<br>

{{% feedback %}}

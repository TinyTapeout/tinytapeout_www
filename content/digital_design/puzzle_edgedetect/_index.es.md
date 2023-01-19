---
title: Desafío Lógico - Detección de borde
tags: [desafío]
description: "Detecta el borde de subida y bajada de una señal"
weight: 30
---

En este desafío, aprenderás cómo detectar un cambio instantáneo en una señal.

**Antecedentes**

En el mundo de los circuitos digitales, estos cambios corresponderán a un borde de subida (es decir, señal que pasa de bajo a alto) o un borde de caída (es decir, señal que pasa de alto a bajo). Detectar los bordes de subida y caída es extremadamente importante para los circuitos digitales. Por ejemplo, *¿un usuario acaba de presionar un botón?* *¿Acaban de soltar un botón?*

¿Cómo se construyen los circuitos de detección de bordes? Antes de sumergirnos en el esquema, piense en el problema que estamos tratando de resolver:
* Necesitamos detectar un *cambio* en una señal en el tiempo... por lo que probablemente necesitemos almacenar información en un [flip-flop](/es/digital_design/puzzle_flipflop/), y
* Necesitamos *comparar* los valores de la señal para ver si cambió de bajo a alto o de alto a bajo... por lo que probablemente necesitemos [compuertas lógicas](/es/digital_design/logic_gates/).

**Rompecabezas**

Con esta información, echa un vistazo al circuito de detección de borde de subida a continuación. **¿Puedes averiguar cómo construir el circuito de detección de borde de caída para encender el LED azul?**

{{% notice tip %}}
puede que necesites agregar una compuerta
{{% /notice %}}

{{< wokwi 346661018698515028 >}}
<br>

| D       | Q       | Salida |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Sientete libre de jugar para tratar de descubrirlo. Siempre puedes volver al tutorial de [compuertas lógicas](/es/digital_design/logic_gates) o al rompecabezas de [flip-flops](/es/digital_design/puzzle_flipflop/) si necesitas repasar.

También puedes ver la [**solución**](https://wokwi.com/projects/346662484165263955).

Para obtener más información: [https://web.mit.edu/6.111/volume2/www/f2019/handouts/L06.pdf](https://web.mit.edu/6.111/volume2/www/f2019/handouts/L06.pdf)

{{% feedback %}}

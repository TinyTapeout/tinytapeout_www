---
title: Desafío lógico - Flip Flop
tags: [desafío]
description: "Descubre la compuerta lógica correcta para construir un flip-flop"
weight: 20
---

En este desafío, descubrirás cómo construir un flip-flop a partir de compuertas lógicas básicas.

**Antecedentes**

¿Qué es un flip-flop? Un [flip-flop](https://en.wikipedia.org/wiki/Flip-flop_(electronics)) es un circuito que puede almacenar de forma estable un bit de información. En otras palabras, su salida mantendrá un 1 o un 0 hasta que la *entrada* cambie y la *activación* pase a 1. 

¿Por qué son importantes los flip-flops? Los flip-flops juegan un papel importante en la sincronización de señales y almacenamiento de información, lo que nos permite expandirnos desde la lógica combinacional donde la salida de un circuito solo depende de su entrada presente, hasta la lógica secuencial donde la salida de un circuito depende tanto de las entradas como del estado anterior del circuito.

Para la sincronización, los flip flops permiten que un circuito controle precisamente cuándo una señal de entrada pasa a través del resto del circuito. Este control se maneja a través de una señal de habilitación (*enable*); por ejemplo, si la señal de habilitación es 1, la salida será igual a la entrada, sin embargo, si la señal de habilitación es 0, la salida no cambiará independiente de lo que ocurra en la entrada.

De manera similar, una vez que se activa la señal de habilitación, un flip flop es capaz de almacenar información, lo que significa que incluso si la entrada cambia, la salida mantendrá su valor hasta que se vuelva a activar la señal de habilitación. Con la capacidad de almacenar información, se vuelve más fácil desarrollar circuitos modulares, programables para medir, calcular y transmitir información. Un flip flop es por lo tanto un bloque de construcción clave en el diseño digital, y uno que es importante entender si, por ejemplo, se desea aprender un [lenguaje de descripción de hardware (HDL)](https://www.zerotoasiccourse.com/terminology/hdl/).

**Desafío**

Se ha creado un flip flop a partir de compuertas lógicas a continuación. Sin embargo, ¡alguien ha cambiado todas las compuertas por compuertas OR y ahora las salidas son incorrectas! Utilizando su [conocimiento de las compuertas lógicas y las tablas de verdad](/es/digital_design/logic_gates), **¿puedes averiguar qué compuerta utilizar para arreglar el flip flop?**

{{< wokwi 346660796151890516 >}}
<br>

| D       | E       | Q      | !Q     |
|---------|---------|--------|--------|
| 0       | 0       | 0      | 1      |
| 0       | 1       | 0      | 1      |
| 1       | 0       | 0      | 1      |
| 1       | 1       | 1      | 0      |

**se asume que Q tiene un estado inicial de 0*

Siéntete libre de jugar para tratar de entenderlo. Siempre puedes volver al [tutorial de las compuertas lógicas](/es/digital_design/logic_gates) si necesitas un repaso.

También puedes verificar la [**solución**](https://wokwi.com/projects/346662209986757203)

{{% feedback %}}

---

Esta no pretende ser una explicación exhaustiva de los flip flops. Hay muchos más detalles importantes que los diseñadores de ASIC a menudo encuentran al usar flip flops, como el [análisis de tiempo estático](https://www.zerotoasiccourse.com/terminology/sta/). Para obtener más información, consulte este video:

{{< youtube 5PRuPVIjEcs >}}

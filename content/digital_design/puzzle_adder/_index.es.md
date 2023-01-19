---
title: Desafío Lógico - Sumador Completo
tags: [desafío]
description: "Add two digital values together"
weight: 40
---

En este desafío, aprenderás a realizar aritmética básica utilizando un circuito lógico llamado [sumdor completo](https://en.wikipedia.org/wiki/Adder_(electronics)#Full_adder).

**Antecedentes**

¿Por qué son importantes los sumadores? Muchas operaciones básicas de cálculo y matemáticas dependen de la suma y la multiplicación, lo que los sumadores son un circuito crucial para las computadoras. Y aunque hacer aritmética básica puede parecer un problema resuelto, hay mucha [investigación en curso sobre cómo optimizar los sumadores](https://www.zerotoasiccourse.com/post/interview-with-teo/). Cuando tantas de las instrucciones de una computadora se basan en la suma, incluso las mejoras mínimas pueden tener un gran impacto.

Entonces, ¿cómo se construyen los sumadores? Primero piense en el problema:
* ¿No podemos usar simplemente una compuerta OR para sumar? Una compuerta OR sumará dos números, por ejemplo, 0 y 0, 0 y 1, o 1 y 0, pero ¿qué pasa si tenemos 1 y 1? Si solo usamos una compuerta OR para sumar, perderíamos información importante, es decir, la respuesta debería ser 2, pero la compuerta OR dice que la respuesta es 1. Generar este bit adicional se llama generar un **acarreo**. Si nuestro circuito no puede generar un acarreo, terminamos con un **overflow**, lo que equivale a información perdida.
    * El overflow que sucede sin saberlo es MALO. Un registro desbordado fue la causa del accidente del cohete Ariane 5 (https://www.youtube.com/watch?v=PK_yguLapgA&ab_channel=AmazingInfoTV).
* A medida que construimos circuitos más complejos, queremos sumar más de dos bits juntos. Para hacerlo, necesitamos una forma de **acarrear** bits desde un sumador anterior y **acarrear bits hacia fuera** del sumador siguiente.

**Rompecabezas**

Entonces echemos un vistazo al diseño del sumador completo a continuación. Este circuito implementa un sumador de dos bits, donde cada entrada tiene un bit.

`A + B + Cin = S con Cout`

Aunque hay una compuerta OR en el diseño, también hay varias otras [compuertas lógicas](/es/digital_design/logic_gates). **¿Puedes entender las otras compuertas lógicas usando la tabla de verdad a continuación?**

|      Interruptor #   |
|----------|-----------|
| 1        | A         |
| 2        | B         |
| 3        | Cin       |

{{< wokwi 346662028519146068 >}}
<br>
| Cin     | A       | B      | S      | Cout   |
|---------|---------|--------|--------|--------|
| 0       | 0       | 0      | 0      | 0      |
| 0       | 0       | 1      | 1      | 0      |
| 0       | 1       | 0      | 1      | 0      |
| 0       | 1       | 1      | 0      | 1      |
| 1       | 0       | 0      | 1      | 0      |
| 1       | 0       | 1      | 0      | 1      |
| 1       | 1       | 0      | 0      | 1      |
| 1       | 1       | 1      | 1      | 1      |

**Crédito extra: ¿puedes construir un sumador completo de cuatro bits usando este circuito?** Este circuito debe aceptar dos valores de dos bits, A y B, y un bit de acarreo. Debe producir un valor de dos bits, S, y un bit de acarreo.

Sientete libre de jugar para tratar de averiguarlo. Siempre puedes volver al [tutorial de compuertas lógicas](/es/digital_design/logic_gates) si necesitas un repaso.

También puedes verificar la [**solución**](https://wokwi.com/projects/346662821137744466).

{{% feedback %}}

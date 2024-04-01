---
title: Divisor de Voltaje
description: "Divide un número con 2 resistencias"
weight: 35
---

### Metas

* Hacer algo útil
* Demostrar algunas limitaciones de la extracción de circuitos
* Realizar algunas mediciones en el gráfico

En la lección anterior aprendiste lo básico de SiliWiz. Ahora podemos aplicar este conocimiento y construir una pequeña máquina calculadora en un chip de silicio. Vamos a construir un divisor de voltaje. Este circuito toma un voltaje de entrada, lo divide, y nos entrega el resultado.

![](../../../siliwiz/images/image55.png?width=20pc)

¿Cuántas conexiones tiene este dispositivo? Necesitamos una para la entrada y la salida como antes, y también vamos a necesitar una nueva llamada **vss**. vss también es llamada *tierra* o 0V. Es usada como referencia para el resto del circuito.

Intentemos hacer un divisor de potencial que divida por 2. Así, si entran 4V, deberían salir 2V. Eso en verdad es bastante fácil, todo lo que necesitamos son dos resistencias de igual valor.

Si el voltaje de entrada se ve así:

![](../../../siliwiz/images/image20.png)

¿Cómo crees que se vera el voltaje de salida? **Haz una predicción y ve si estabas en lo correcto después de dibujar el divisor.**

Hay muchas formas de dibujarlo, pero necesitarás al menos:

* 3 cuadrados de **metal1**, llamados "in", "out" y "vss"
* 3 vías de **metal1** para conectar el **metal1** y el **polyres**
* 2 resistencias hechas de **polyres** que estén unidas entre los 3 contactos

### ¿Cómo funciona? ¡Magia!

Otra herramienta importante que SiliWiz usa detrás de escenas se llama [**Magic**](https://www.zerotoasiccourse.com/terminology/magic/). Es una herramienta muy poderosa pero no es muy amigable para principiantes, lo cual es otra razón por la que quisimos crear SiliWiz. ¡Magic ha sido usado por 40 años para ayudar a diseñar chips! Lo estamos utilizando para [verificación de reglas de diseño (DCR)](https://www.zerotoasiccourse.com/terminology/drc/) y [extracción de circuitos](https://www.zerotoasiccourse.com/terminology/pex/).

Como fue mencionado anteriormente, tenemos dos capas que efectivamente representan el mismo material: polisilicio (polysilicon) y poliresina (polyres). No hay ninguna diferencia entre estas capas cuando el chip es fabricado. La razón por la cual las mantenemos separadas es para hacer más fácil el trabajo de Magic cuando le toque extraer el circuito desde la imagen que dibujamos.

Una limitación con la cual puede que te topes cuando dibujes el divisor es que Magic no se dé cuenta de que son dos resistencias distintas, y va a extraer una sola resistencia entre los primeros dos contactos.

![](../../../siliwiz/images/image22.png)![](../../../siliwiz/images/image24.png)

Debes dibujar 2 rectángulos por separado, uno por cada resistencia:

![](../../../siliwiz/images/image13.png)

Una vez que tu divisor esté listo, deberías ver una simulación como esta:

![](../../../siliwiz/images/image36.png)

Juega con los controles de la simulación para cambiar los parámetros de mínimo, máximo y tiempo de subida de la señal de entrada.

* ¿Cuán cerca está tu divisor de dividir el voltaje de entrada por 2? ¿Puedes medir su precisión?
* ¿Cómo puedes hacer más preciso el divisor?
* ¿Qué es mejor, figuras grandes o pequeñas?
* ¿Puedes hacer un divisor de voltaje que divida por 3?

### Solución

Si te sientes atascado, puedes revisar [mi solución](https://siliwiz.pages.dev/?preset=resistor).
---
title: Cómo hacer un inversor lógico
description: "Crea una compuerta lógica y descubre sus limitaciones"
weight: 60
---

### Metas

* Aprender cómo una combinación de una resistencia con un MOSFET puede crear un inversor
* Descubrir las limitaciones de este tipo de inversor
* Medir el consumo de corriente de un inversor NMOS

Un inversor lógico tiene una entrada y una salida. Si la salida está en bajo, la salida estará en alto, y viceversa.

<br>

| entrada | salida  |
|---------|---------|
| 0       | 1       | 
| 1       | 0       |

### NMOS

Podemos construir un inversor lógico con un MOSFET de tipo N y una resistencia pull-up. Este tipo de inversor se llama inversor NMOS.

![](../../../siliwiz/images/image32.png)

Si la entrada está en bajo, la puerta no se carga y la corriente no fluye a través del MOSFET. La resistencia eleva la salida para que esté en alto.

Si la entrada está en alto, la puerta se carga y el MOSFET conduce. Esto lleva la salida a nivel bajo.

### Dibuja un inversor NMOS

Ve si eres capaz de dibujar este inversor usando las habilidades que has aprendido hasta ahora. Aquí está [mi solución](https://app.siliwiz.com/?preset=nmos):

![](../../../siliwiz/images/image30.png)

Una vez que esté todo cableado correctamente, selecciona la pestaña **simulation** y deberías ver una simulación como esta. Vas a necesitar las curvas **in** y **out**.

![](../../../siliwiz/images/image17.png)

Se puede apreciar que cuando la entrada está en bajo, la salida está en alto. Una vez que el voltaje de la puerta llega más o menos a los 1,5V la salida comienza a caer, y cuando el voltaje de entrada está cerca de los 2,5V la salida está en menos de 1V.

La desventaja de usar lógica NMOS es que las resistencias pull-up desperdician un poco de corriente cuando el transistor está encendido.

### Midiendo el consumo de corriente de un inversor NMOS

Al igual que antes, agrega `i(vdd)\*-1000` a la lista de señales por graficar.

![](../../../siliwiz/images/image61.png)

Ahora podemos apreciar que cuando la entrada está en bajo, el uso de corriente es bajo, pero cuando encendemos el MOSFET, estamos conectando la resistencia a vss, y esto consume corriente.

Intenta cambiar el ancho de la puerta y de la resistencia. ¿Puedes hacer que el inversor cambie más rápido? ¿Qué tal hacerlo más eficiente?

Si tuvieras millones de estos inversores lógicos entonces estarías malgastando electricidad como calor y tus chips se calentarían y volverían más lentos. El [CMOS](https://www.zerotoasiccourse.com/terminology/cmos) fue inventado para resolver esta limitación.

En la próxima lección vas a aprender a dibujar un MOSFET de tipo P, y luego tendrás todo lo necesario para hacer tu propio inversor CMOS.

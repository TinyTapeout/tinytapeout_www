---
title: Dibuja un Capacitor
description: "Entiende cómo la capacitancia cambia, y usa DRC para revisar tu diseño"
weight: 40
---

### Metas

* Entender que la capacitancia cambia con el área y la distancia
* Investigar capacitancia entre objetos en la misma capa
* Crear capacitores usando la capa **mimcap**
* Aprender cómo obtener la mayor capacitancia posible
* Revisar tu diseño usando el DRC

Ya hemos visto un ejemplo de capacitancia parásita - ahora vamos a dibujar intencionalmente un capacitor y ver qué tan alta podemos hacer su capacitancia.

Como hemos mencionado, un capacitor se forma cuando se tienen 2 figuras conductoras separadas por un espacio no conductor. Intentemos dibujar un capacitor con la capa **metal2**.

![](../../../siliwiz/images/image8.png)

Usa la casilla SPICE para ver la capacitancia. Deberías ver una línea que diga algo como **C0 out in** y luego unos números. Yo obtuve `0.73fF`. La "F" significa *Faradios*, que es la unidad de capacitancia. La "f" significa *femto*; hay 1.000.000.000.000.000 (mil billones) de femto Faradios en 1 Faradio. ¡Así que este es un capacitor muy pequeño!

Intenta hacer valores más grandes de capacitancia. Con resistencias, una figura larga, delgada y ondulada obtienes una resistividad grande. Con un capacitor, queremos más area para obtener más capacitancia. El mayor valor que logré obtener solo usando **metal2** fue 14 fF.

### Usando más de 1 capa

Ahora intentemos usar 2 capas, **metal1** y **metal2**. ¿Crees que lograremos hacer un capacitor más grande?

![](../../../siliwiz/images/image15.png)

Pensé que mi capacitor sería más grande, pero solo logré 0,22 fF. La razón por la que la capacitancia no es tanta como en la capa **metal2** es porque la distancia entre **metal1** y **metal2** es grande en comparación con el espacio que podemos crear en una sola capa. Esto lo puedes apreciar mejor si ves la ecuación de la capacitancia entre dos placas paralelas:

![](../../../siliwiz/images/image1.png)

Donde **C** es la capacitancia, **ε** es la constante dieléctrica, **A** es el área de solapamiento entre tus dos capas, y **d** es la distancia entre las capas. Cuando la distancia d entre las capas aumenta, la capacitancia disminuye.

Los chips no tienen mucha área, así que crear capacitores grandes en un chip es difícil. Por eso a menudo debemos recurrir a usar capacitores externos al chip si queremos capacitancias muy altas.

![](../../../siliwiz/images/image44.png)

Sin embargo, sí tenemos una forma de hacer mejores capacitores, y esto se logra mediante la capa **mimcap**. *mim* significa *metal insulator metal* (metal aislante de metal), y es una capa especial de metal que se encuentra mucho más cerca de **metal1** que el **metal2**.

![](../../../siliwiz/images/image26.png)

Ya que solo podemos colocar etiquetas en las capas **metal1** y **metal2**, también vamos a necesitar **metal2 via** para conectar la capa de **metal2** a la capa **mimcap**.

### Ejecutar DRC

Dibuja un cuadrado de **metal1** y encima de eso un cuadrado de **mimcap**. Revisa el reporte DRC (debajo de la sección transversal):

![](../../../siliwiz/images/image64.png)

DRC significa [Design Rule Check](https://www.zerotoasiccourse.com/terminology/drc/), "verificación de reglas de diseño" por su significado en inglés. No podemos simplemente dibujar lo que se nos plazca e insertarlo en un chip. Una parte muy importante del kit de diseño de proceso (PDK) son estas reglas DRC que se aseguran de que solo podamos enviarles a las fábricas unos diseños que efectivamente sí puedan hacer.

Si haces clic en el error se va a resaltar el problema en el lienzo. Selecciona **metal1** de nuevo y dibuja un cuadrado más grande para que se sobrepase un poco de todos los bordes de la capa **mimcap**. El error debería desaparecer una vez hecho esto.

### Capacitancia máxima

Ahora que tenemos un capacitor entre las capas **mimcap** y **metal1**, conectemos los puertos de entrada y salida. Para la salida **out**, puedes simplemente añadirle una etiqueta a la capa **metal1**. Para conectar un puerto a la capa **mimcap**, primero debes usar **metal2 via** y luego **metal2** encima de ésta. Una vez que hayas dibujado el cuadrado de **metal2**, etiquétalo como **in**.

![](../../../siliwiz/images/image6.png)![](../../../siliwiz/images/image45.png)

Usando la casilla SPICE, averigua el valor de tu nueva capacitancia. Logré alcanzar un valor de 970 fF con el de arriba, casi 5000 veces más grande que la que logré entre **metal1** y **metal2**.

¿Qué ocurre con la curva de salida cuando haces que la entrada aumente más rápido al reducir el tiempo de subida?

Ahora, el capacitor es tan grande comparado a la capacitancia parásita que teníamos cuando estábamos experimentando con la resistencia en la lección 1, que la salida cae mucho más lento. Tan lento de hecho, que no podemos verla realmente a menos que nos alejemos mucho en el gráfico.

![](../../../siliwiz/images/image39.png)

## Pull-down

Al conectar una resistencia **pull-down** entre el capacitor y *vss* podemos hacer que se descargue más rápido.

![](../../../siliwiz/images/image21.png)

Si no recuerdas cómo creamos una resistencia, [regresa y echa un vistazo a la explicación](../../siliwiz/resistors/#conéctalo-todo). Luego, sigue estos pasos y ve si puedes dibujarla tú mismo.

1. Dibuja un cuadrado de **metal1 via** para ser conectado al cuadrado **metal1** de salida.
2. Dibuja una resistencia larga y delgada usando **polyres** - quizás de unos 0,5 μm de grosor y 20 μm de largo.
3. Usa nuevamente **metal1 via** en el extremo de la resistencia.
4. Dibuja un cuadrado de **metal1** por sobre el **metal1 via**.
5. Etiqueta el cuadrado de **metal1** como **vss**.

![](../../../siliwiz/images/image38.png)![](../../../siliwiz/images/image27.png)

Ahora deberías ver que el voltaje de salida hace algo distinto. Si nos acercamos un poco en el gráfico lo podemos ver más claramente.

![](../../../siliwiz/images/image37.png)

Si te atoras, [aquí puedes encontrar mi solución](https://app.siliwiz.com/?preset=mimcap).

Experimenta con el tiempo de subida de la entrada, ¿qué pasa con el pulso de salida?

Un uso práctico común de combinar una resistencia y un capacitor es hacer un filtro. Podemos filtrar algunas frecuencias de entrada y dejar pasar otras.

Como un capacitor se demora una cantidad específica de tiempo en cargarse y descargarse, este circuito también se puede usar para construir un temporizador.

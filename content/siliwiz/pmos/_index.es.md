---
title: Dibuja un MOSFET tipo P
description: "Conoce el complemento del MOSFET tipo N, el MOSFET tipo P"
weight: 70
---

### Metas

* Descubrir por qué un MOSFET tipo P es el complemento de un MOSFET tipo N
* Aprender que el MOSFET tipo P necesita un pozo tipo N para aislarse del sustrato tipo P
* Comparar características de los MOSFETs de tipo N y tipo P

Si cambiamos el tipo de difusión de la puerta y fuente de tipo N a tipo P, y el sustrato de tipo P a tipo N, obtenemos un tipo de MOSFET que es el opuesto del tipo N que ya hemos visto. Esta versión de MOSFET se llama MOSFET tipo P.

### Sustrato P

Al igual que en el N MOSFET, necesitamos el **p substrate** conectado a vss.

![](../../../siliwiz/images/image33.png)

### Pozo N

El MOSFET tipo N estaba construido sobre el sustrato tipo P. Durante el proceso de difusión tipo N, en el cual la puerta protege la región del canal, terminamos con un canal tipo P. Para un MOSFET tipo P, esto debe ser invertido: necesitamos un canal tipo N que estará protegido por una difusión tipo P.

Para un P MOSFET necesitamos crear un área profunda de difusión tipo N en el sustrato. Esto se llama "pozo", o *"well"* en inglés. La capa que usaremos para dibujarlo se llama **n well**. Dibuja un cuadrado más pequeño en el centro usando esta capa.

Después, dibuja la difusión tipo P encima de éste usando la capa **p diffusion**.

![](../../../siliwiz/images/image19.png)

El pozo N aísla la difusión P del sustrato tipo P. Se llama pozo porque es profundo, más profundo que las capas de difusión usadas para construir la puerta y fuente del MOSFET.

Una pregunta que probablemente te estés haciendo es por qué no simplemente usar una capa de difusión N en lugar de difusión tipo P. Recuerda que la difusión P es nuestra lámina donde se fabricarán todos nuestros dispositivos mediante fotolitografía. Usar el pozo N nos permite fabricar MOSFETs tipo P sin tener que cambiar el tipo de material a granel (la lámina tipo P).

### N Tap

Tal como la capa **p substrate** debía estar conectada a vss, necesitamos conectar **n well** a vdd. Usa las capas **n tap**, **metal1 via** y **metal1** para hacerlo.

![](../../../siliwiz/images/image42.png)

### Conéctalo todo

Conecta la puerta, fuente y drenaje de la misma forma que con el N MOSFET. Esta vez, la fuente estará conectada a vdd y el drenaje a vss.

![](../../../siliwiz/images/image46.png)

Al igual que antes, quita la curva **out**, y agrega `i(vdd)\*-1000`.

![](../../../siliwiz/images/image58.png)

Puedes ver [mi solución aquí](https://app.siliwiz.com/?preset=pmosfet).

### MOSFET tipo N vs tipo P

¿Qué puedes observar entre el MOSFET tipo N y tipo P? El primer gráfico es para el tipo N y el segundo para el tipo P.

![](../../../siliwiz/images/image41.png)![](../../../siliwiz/images/image47.png)

* ¿Cuál MOSFET conduce mejor?
* Si cambias el tamaño de la capa **p diffusion** del P MOSFET, ¿puedes mejorar su rendimiento?
* ¿Tienen el mismo voltaje de umbral puerta-fuente?

{{% notice tip %}}
El N MOSFET conduce alrededor de 2,6 veces mejor que el P MOSFET.

Dibujar un PMOS 2,6 veces más ancho que el NMOS hará que tenga el mismo rendimiento que el NMOS.

Explicación: Esto se debe a que el dopado de tipo N tiene exceso de electrones, los cuales portan la corriente, comparado con el dopado de tipo P que tiene espacios vacíos entre electrones, y el movimiento de estos "huecos" de electrones es lo que transporta la corriente. Esto es análogo a cuando el agua cae rápidamente a través del aire, vs una burbuja de aire subiendo lentamente a través del agua. (Explicación alternativa: autos conduciendo por una carretera vs una congestión vehicular en la que el espacio entre autos retrocede mientras los autos avanzan lentamente.)
{{% /notice %}}

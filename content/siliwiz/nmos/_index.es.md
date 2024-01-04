---
title: Dibuja un transistor N MOSFET
description: "Componentes activos: dibuja un MOSFET y haz mediciones"
weight: 50
---

### Metas

* Introducir los MOSFETs como un ejemplo de un componente activo
* Dibujar un MOSFET
* Graficar la curva VGS
* Medir el voltaje de umbral de puerta

Hasta ahora nos hemos estado familiarizando con SiliWiz dibujando componentes pasivos. Los componentes pasivos almacenan o utilizan energía. Los componentes *activos* pueden controlar el flujo de electricidad, y son esenciales para construir circuitos más complejos, como amplificadores o compuertas lógicas.

En esta lección vamos a aprender a dibujar un [MOSFET](https://www.zerotoasiccourse.com/terminology/mosfet/). MOSFET, por su sigla en inglés, significa *Metal-Oxide-Semiconductor Field-Effect Transistor*, o en español, transistor de efecto de campo metal-óxido-semiconductor.

Un MOSFET es un componente activo con 4 puertos: puerta *(gate)*, drenaje *(drain)*, fuente *(source)* y sustrato *(body)*.

![](../../../siliwiz/images/image10.png)

La puerta solía estar compuesta por un metal colocado por sobre una capa aislante de óxido, de ahí el MO en MOSFET.

![](../../../siliwiz/images/image51.png)

Cuando se aplica voltaje a través de la puerta (G) y el sustrato (Body), se forma un campo eléctrico en el canal. Este campo atrae a los portadores de carga hacia la región del canal donde finalmente pueden trabajar para conducir electricidad. De ahí el FE en MOSFET.

En un MOSFET tipo N construido sobre sustrato tipo P, los portadores de carga mayoritarios son huecos, y son los portadores de carga minoritarios (los electrones) los que son atraídos hacia la puerta y forman el canal conductivo entre el drenaje (D) y la fuente (S).

Eso describe lo que está ocurriendo físicamente dentro de un transistor. ¿No tuvo mucho sentido para tí? No te preocupes, la manera en que funciona un MOSFET quedará más clara una vez que empecemos a crear uno.

### ¡A dibujar!

Hasta ahora, hemos estado ignorando la capa base de un chip de silicio. En la mayoría de los casos ésta es una lámina u oblea de silicio, [dopada](https://www.zerotoasiccourse.com/terminology/doping/) para ser tipo P. En lugar de ser silicio puro, tiene una minúscula cantidad de impurezas para aumentar la conductividad de la lámina, volviéndola de un aislante a un semiconductor.

Selecciona la capa **p substrate**, y dibuja un cuadrado que llene el lienzo completo.

![](../../../siliwiz/images/image12.png)

El **p substrate** debe estar conectado a **vss**. Para hacer esto utilizamos un área p ligeramente dopada, llamada **p tap**.

La capa **p tap** es distinta a las que hemos estado viendo. En lugar de estar construida por sobre el sustrato, está formada *dentro* del sustrato. La máscara se usa igual que antes, pero en lugar de crear una nueva capa de metal o polisilicio, estamos inyectando átomos de un semiconductor tipo P, como por ejemplo el [boro](https://es.wikipedia.org/wiki/Boro).

En la esquina dibuja un pequeño cuadrado de **p tap**. Luego, conecta eso a través de **metal1 via** a un contacto de **metal1** etiquetado **vss**.

![](../../../siliwiz/images/image33.png)

Luego, selecciona la capa **n diffusion** y dibuja un cuadrado en el centro. Esto formará tanto el drenaje como la fuente del MOSFET. Al igual que con la capa **p tap**, la capa **n diffusion** se forma dentro del **p substrate**, pero usando átomos de un semiconductor tipo N, como el [arsénico](https://es.wikipedia.org/wiki/Arsénico).

![](../../../siliwiz/images/image14.png)

El siguiente paso es dibujar la puerta. Antes se solía dibujar la puerta de los MOSFETs con metal, pero hoy en día es mucho más común hacerlo con polisilicio. Usa la capa **polysilicon** para dibujar la puerta.

![](../../../siliwiz/images/image50.png)

Usa la vista de sección transversal - ¡la capa **n diffusion** se dividió! Ahora tenemos 2 secciones **n type** con un **p type** entremedio. ¿Qué pasó?

### Difusión dividida

Podríamos haber dibujado la puerta primero, y luego la difusión, pero dibujar la difusión primero nos permite alinear la puerta más fácilmente. Cuando el chip es fabricado, se coloca la puerta primero, y luego se usa la máscara de difusión. La puerta protege el sustrato P de la difusión tipo N, por lo que terminamos con 2 regiones de tipo N y una región P en medio.

Esto es esencialmente todo lo que necesitamos para hacer un MOSFET, y si revisas el archivo SPICE vas a ver ahora que Magic ha detectado y extraído un "nmos".

![](../../../siliwiz/images/image25.png)

Sin embargo, para ver si nuestro MOSFET funciona bien, debemos conectar la puerta, el drenaje y la fuente. El cuerpo es el **p substrate**, y ya hemos conectado eso a vss.

### Drenaje, Fuente y Puerta

Debemos dibujar las capas para conectar el drenaje, la fuente y la puerta del MOSFET a contactos de **metal1**. Para esto, vamos a utilizar 3 **metal 1 via**s.

![](../../../siliwiz/images/image48.png)

El **polysilicon** rojo forma la puerta, pero ¿cuál lado corresponde a la fuente y al drenaje? ¡La vista transversal muestra que el MOSFET es simétrico!

Para que un N MOSFET funcione, el sustrato debe mantenerse a un voltaje igual o menor al de sus terminales restantes. Normalmente hacemos esto conectando uno de los terminales al mismo voltaje que el sustrato, e históricamente a este terminal se ha denominado fuente (source). El otro terminal se vuelve el drenaje (drain).

Etiqueta la puerta como **in**, la fuente como **vss**, y el drenaje como **vdd**. Ya hemos conectado el sustrato a vss. Si te atoras, puedes revisar [mi solución aquí](http://app.siliwiz.com/?preset=nmosfet).

![](../../../siliwiz/images/image28.png?width=20pc)

### Curvas VGS

VGS corresponde al voltaje entre puerta y fuente (*Voltage of Gate-Source*). En este experimento, vamos a ver qué ocurre cuando aumentamos el voltaje de puerta desde 0V hasta 5V y luego medimos la corriente que fluye desde vdd hacia vss. La corriente mide cuántos portadores de carga fluyen por segundo, nos dice qué tan "encendido" se encuentra el MOSFET. La corriente se mide en (Amperios)[https://es.wikipedia.org/wiki/Amperio].

Este es uno de los experimentos más importantes que podemos hacer con un MOSFET, y nos va a ayudar a entender cómo funcionan en los próximos ejercicios.

En la pestaña de simulación, busca las siguientes señales:

![](../../../siliwiz/images/image29.png)

Haz click en la `x` de "out" para quitar esta señal, y luego haz click en el botón `+` para agregar una nueva curva. Escribe `i(vdd)*-1000`.

La parte **i(vdd)** significa que graficará la corriente en lugar del voltaje. La parte **\*-1000** significa que magnificará la señal -1000 veces. Esto hace que la señal se vea mucho más grande y además la da vuelta. Se hizo esto simplemente para hacer que la curva se vea como en los libros académicos.

![](../../../siliwiz/images/image23.png)

¿Qué nos está mostrando este gráfico? Para empezar, cuando la compuerta tiene menos que aproximadamente 1 Volt, no fluye corriente; el MOSFET está apagado. Una vez que hemos pasado ese umbral, el MOSFET empieza a conducir y permite el paso de más y más corriente. Este valor se llama *umbral de puerta-fuente*, o *gate-source threshold* en inglés.

Intenta cambiar el ancho de la puerta del MOSFET y observa cómo esto afecta la curva. Si queremos que pase la mayor cantidad de corriente en la región de saturación, ¿deberíamos usar una puerta más delgada o más ancha?

Si haces zoom en el gráfico, ¿puedes medir el valor preciso del voltaje de puerta desde el cual el MOSFET empieza a conducir?

---
title: Dibuja una Resistencia
description: "Aprende lo básico de SiliWiz mientras creas una componente"
weight: 20
---

### Metas

* Aprender lo básico de SiliWiz
* Aprender a dibujar formas básicas y etiquetar sus terminales
* Entender la vista de sección transversal (*cross section*)
* Entender cómo leer la gráfica de la simulación
* Entender cómo la resistencia cambia con la forma
* Dónde encontrar ayuda

Aquí hay un vistazo general de la interfaz de usuario de SiliWiz:

![](../../../siliwiz/images/image54.png)

### ¡Dibujemos algunas figuras!

Escoge la capa (*layer*) en la cual vas a dibujar al dar clic en la paleta. Para el final del curso ya sabrás qué es cada capa y qué rol cumple en la construcción de una compuerta lógica.

Ve al [sitio web de SiliWiz](https://app.siliwiz.com/?preset=blank), selecciona la capa *polyres* (poliresina), y finalmente dibuja la primera letra de tu nombre en el lienzo.

* Controla qué capas son visibles con el ícono 👁
* Escoge qué layer está activo dando clic en el color o en el texto
* Pasa el mouse por encima del texto para obtener una breve descripción del propósito de la capa

![](../../../siliwiz/images/image59.png)

* Intenta usar los botones de Deshacer (Undo) ↶ y Rehacer (Redo) ↷
* El botón *Clear* limpia todo
* Puedes descargar tu diseño con el botón de *Save*
* Puedes cargar un diseño guardado con el botón de *Load*

### Capas

Cuando una fábrica desarrolla una forma de crear un chip, necesitan además compartir esa información con los diseñadores de chips - ¡ese eres tú!

{{% notice tip %}}
Normalmente, tendrías que firmar un documento que dice que no puedes compartir la información. Con el [PDK](https://www.zerotoasiccourse.com/terminology/pdk/) (*process design kit*, kit de diseño de proceso) de código abierto, no necesitas firmar ningún papeleo antes de empezar a usarlo.
{{% /notice %}}

Aquí se muestran las capas que son usadas para crear un chip con el proceso de Skywater 130nm (nanómetros). Un nanómetro es un millón de veces más pequeño que un milímetro, así que el punto al final de esta oración podría fácilmente tener un diámetro de un millón de nanómetros. Notar que las figuras mostradas en la imagen están en micrómetros (μm).

![](../../../siliwiz/images/image49.png)

### Stackup SiliWiz

Un *stackup* es, por su traducción en inglés, una pila de capas, como la mostrada en la imagen anterior. Aquel stackup es bastante complicado, así que usaremos una más simple y hecha a la medida para SiliWiz. Ten en cuenta que un PDK real y fabricable tiene [muchas más capas](https://skywater-pdk.readthedocs.io/en/main/rules/masks.html). El stackup de capas de SiliWiz se ve así:

![](../../../siliwiz/images/image31.png)

{{%expand "¿Te sientes aventurero?" %}}
Si te sientes aventurero, ¡puedes revisar el [techfile](https://app.siliwiz.com/assets/siliwiz.tech) para ver los detalles de la tecnología y muchas otras cosas!
{{% /expand%}}

Después de haber terminado nuestro diseño podremos transformar cada capa en una máscara. Una máscara permite que la luz pase a través de las áreas que coloreamos en las capas. Estas máscaras se usan en un proceso llamado fotolitografía.

![](../../../siliwiz/images/image7.png)

La [fotolitografía](https://www.zerotoasiccourse.com/terminology/photolithography/) ([Wikipedia en español](https://es.wikipedia.org/wiki/Fotolitografía)) es el paso clave que nos permite tomar los patrones que creamos en una herramienta como SiliWiz y miniaturizarlos al nivel nanométrico. También nos permite colocar fácilmente el mismo diseño varias veces sobre la lámina (u "oblea") de silicio para hacer cada chip. Nos permite utilizar una imagen preparada del chip para hacer millones de copias de manera confiable y rápida.


{{% notice tip %}}
Algunas capas son ‘virtuales’. Por ejemplo, **polyres** y **polysilicon** son la misma capa física, pero debemos dividirla en 2 capas separadas para que la simulación sepa cuando tenemos la intención de dibujar la compuerta de un [MOSFET](https://www.zerotoasiccourse.com/terminology/mosfet/), o dibujar una resistencia.
{{% /notice %}}

### ¿Qué tan resistiva es tu inicial?

Ahora que hemos dibujado una forma, podemos correr la simulación y averiguar qué tan resistiva es la letra. La resistencia, o resistividad, se mide en [Ohms](https://es.wikipedia.org/wiki/Ohmio). Una resistencia es un elemento circuital con dos puertos. Mientras mayor es la resistencia, más difícil es hacer que fluya electricidad a través de ella.

La resistencia del polisilicio es proporcional al área transversal y a la longitud.

![](../../../siliwiz/images/image53.png)

En un PDK, no podemos controlar la altura de las capas - la fábrica ya ha decidido eso de antemano; en lugar de eso, podemos controlar el ancho y largo. Si dibujas una figura larga y delgada, va a tener más resistencia, y una figura corta y gorda va a tener una menor resistencia. Nuestra capa de poliresina (**polyres**) tiene una resistencia de 400 ohms (Ω) por micrómetro cuadrado (μm²). Hay 1000 micrómetros en un milímetro.

* Un cuadrado de 1μm x 1μm debería tener 400 ohms de resistencia.
* Una tira rectangular de dimensiones 10μm x 1μm debería tener 4000 ohms de resistencia.
* ¿Cuántos ohms debería tener un cuadrado de 10μm x 10μm? Como es 10 veces más ancho que la tira rectangular, tendrá 10 veces menos resistencia, por lo que tendrá 400 ohms de resistencia.

Revisa tu dibujo - ¿puedes predecir la resistencia?

### Conéctalo todo

Para medir la resistencia, necesitamos conectar dos partes de tu inicial a algún puerto de entrada y salida.

Solo podemos hacer puertos sobre las capas de **metal1** y **metal2**. Si revisas el stackup, **metal1** y **metal22** no tocan la capa de **polyres**. Primero usamos una **vía de metal1** para unir las capas **metal1** y **polyres**.

Selecciona la capa **metal1 via** y agrega dos vías a tu inicial hecha en **polyres**.

Así es como se ve **metal1 via** desde arriba en mi letra:

![](../../../siliwiz/images/image16.png)

Y así es como se ve en la vista de sección transversal (Cross Section View). Asegúrate de que has seleccionado la pestaña de cross section.

![](../../../siliwiz/images/image52.png)

Arrastra el deslizador de la sección transversal para arriba y para abajo para que puedas ver las capas claramente. Si pones el cursor encima de una capa en la sección transversal, obtendrás una ventana de diálogo diciéndote el nombre de la capa.

* * *

Ahora agrega 2 contactos de **metal1** encima de **metal1 via**. Para simular nuestro diseño, necesitamos decirle a SiliWiz que queremos que estos contactos sean los puertos de nuestro circuito. Para esto, haz clic en cada contacto de **metal1**, y escoge la opción ‘Set Label’, o `S` en el teclado.

![](../../../siliwiz/images/image9.png)

Establece las etiquetas **in** y **out**. Tan pronto como hayas hecho eso deberías ver la curva de simulación actualizarse. Vas a tener que cambiarte desde la pestaña de sección transversal a la de simulación.

![](../../../siliwiz/images/image57.png)

![](../../../siliwiz/images/image63.png)

El eje X del gráfico es tiempo en microsegundos. Hay 1.000.000 de microsegundos en un segundo. El eje Y es voltaje. El voltaje se mide en Volts (V) y es la unidad que usamos para hablar de fuerza de campo eléctrico.

Partículas que llevan carga, como los electrones, se mueven gracias a campos eléctricos. Mientras más fuerte sea el campo, mayor es el efecto que tiene sobre un electrón. Los electrones son las "piezas móviles" de las máquinas que construimos.

En este gráfico en realidad hay 2 líneas, azul para entrada y naranjo para salida. Ocurre que se encuentran justo una encima de la otra, por lo que se ve solo una línea. Intenta jugar con los deslizadores para ver cómo cambia el gráfico.

![](../../../siliwiz/images/image5.png)

Lo que muestra el gráfico es que el voltaje de salida es el mismo que el de entrada. El voltaje de entrada está variando en el tiempo, lo cual puedes controlar con los deslizadores.

### Dale sabor

Ahora veremos otra parte de SiliWiz para determinar la resistencia de nuestro diseño de poliresina.

Marca la casilla "Show SPICE" al fondo de la página y echa un vistazo a la caja de texto. Busca una línea que diga `R0 in out` seguido de algunos números. ¡Mi letra M tiene una resistencia de 5575 ohms! ¡Genial! Acabo de dibujar mi propia resistencia.

![](../../../siliwiz/images/image4.png)

{{% notice tip %}}
Hay muchas cosas que están ocurriendo en el archivo [SPICE](https://www.zerotoasiccourse.com/terminology/spice/), pero en gran medida las vamos a ignorar en estas lecciones. SPICE es una parte importante de las herramientas de un diseñador de chips. [ngspice](https://ngspice.sourceforge.io/) es la herramienta de código abierto que ejecuta las simulaciones SPICE de SiliWiz. Muchas gracias a [Holger Vogt](https://www.linkedin.com/in/holger-vogt-737ba5a8/) por hacer una versión especial más pequeña para nosotros.
{{% /notice %}}

Intenta hacer que tu letra tenga mayor o menor resistencia. Aquí me tienes haciendo una resistencia muy alta:

![](../../../siliwiz/images/image3.png)

¡Llegué a tener 37.800 ohms! ¿Puedes hacer una resistencia aún más alta?
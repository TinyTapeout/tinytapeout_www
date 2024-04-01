---
title: Parásitos
description: "Cómo se producen propiedades parásitas no deseadas en circuitos, y lo que significa"
weight: 30
---

### Metas

* Entender lo que significa parásito en microelectrónica
* Ver cómo obtenemos capacitancia y resistencia parásita en nuestros circuitos

¿Qué crees que le ocurrirá a la línea naranja de salida cuando borres una parte de tu inicial? Haz una predicción. Para borrar una parte, selecciónala y luego escoge "delete" o presiona la tecla `D`.

¿Qué ocurre? ¿Te lo esperaste? Probablemente obtuviste algo parecido a lo mío:

![](../../../siliwiz/images/image34.png)

La línea azul de entrada sigue haciendo lo que hacía antes, pero la señal naranja de salida ahora tiene una linda curva. Lo que está pasando es que a pesar no haber contacto directo por el que fluya la electricidad a través de tu letra, hemos creado un pequeño capacitor (o condensador) al tener dos elementos conductores separados por un pequeño espacio no conductor. Un capacitor es un elemento con 2 puertos. El campo eléctrico entre estos dos elementos trabajan para mantener el voltaje parejo a lo largo de la placa. El capacitor se carga a medida que aumenta la entrada, pero luego decae rápidamente a 0 cuando la entrada deja de cargar.

¿Qué ocurre con la curva de salida cuando haces que la entrada suba más rápido al disminuir el tiempo de subida?

### Capacitancia Parásita

Este tipo de efecto se llama **capacitancia parásita**. No queríamos tener que lidiar con ella, pero está ahí porque simplemente así funciona el universo. Las propiedades parásitas a menudo son despreciables a escala mayor, pero el capacitor que acabas de hacer es solo de un micrómetro y aún así ha provocado un efecto considerable en la salida de tu circuito. Analizar parásitos es una parte muy importante de la microelectrónica y no puede ser ignorada si queremos que nuestros chips funcionen correctamente.

### Resistencia Parásita

¿Por qué se descargó el capacitor a 0? ¡Porque también tiene una **resistencia parásita** que permite que se drene la electricidad!

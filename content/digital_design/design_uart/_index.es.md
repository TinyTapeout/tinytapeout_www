---
title: Diseño personalizable - UART
tags: [personalizable]
description: "Transmitir caracteres ASCII a través de UART serie"
weight: 110
---

Este diseño implementa un transmisor UART usando registros hechos de D-flip flops y multiplexores.

**Antecedentes**

UART significa *Transmisor Receptor Universal Asíncrono* y es un protocolo serie común útil para obtener datos desde/hacia un dispositivo, por ejemplo, entre un Arduino y una computadora o un sensor.

UART funciona enviando datos de marcos de forma secuencial (es decir, un bit después de otro) a una tasa de datos previamente especificada, también conocida como tasa de baudios. Mientras varios marcos de datos diferentes son posibles, comúnmente se utiliza el protocolo 8N1 para enviar 8 bits con Ningún bit de paridad y 1 bit de parada. Podemos observar este protocolo en la imagen a continuación. Algunas cosas a tener en cuenta:
* El cable se mantiene en Logic 1 durante los períodos de inactividad entre los marcos de datos
* Cada marco de datos comienza con un Bit de Inicio donde la transición del cable va a Logic 0 durante un período de un bit
* 8 bits de datos se transmiten entonces (a menudo el bit menos significativo primero, pero no siempre)
* Los bits de datos se siguen de un Bit de Parada donde el cable va a Logic 1 durante un período de un bit
* Mientras 8N1 solo envía 8 bits a la vez, se pueden transmitir secuencialmente varios marcos de datos

![8N1dataframe](/images/design_uart/uartdataframe.png)

La duración de un bit se determina por la tasa de bits del transmisor y receptor UART, y la tasa de datos debe establecerse en el mismo valor en el transmisor y el receptor para una comunicación exitosa.

### Ejemplo 1: Transmisión de un solo carácter

Este circuito, inspirado en @maehw, implementa un registro desplazamiento con 17 bits: cuatro bits de inactividad, un bit de inicio, ocho bits de datos, un bit de parada y tres bits más de inactividad.

{{< wokwi 347140425276981843 >}}
<br>

El circuito admite transmitir un carácter ASCII seleccionado por el usuario desde 0x40 (@) hasta 0x5F (_), incluyendo letras mayúsculas del alfabeto latino.

![ASCIItable](/images/design_uart/asciitable.png)

**Cómo usar**

Ejemplo enviando 'A'
1. Establece la tasa de baudios Serial.begin(<baud rate>); en el archivo *.ino a 300
2. Establece la frecuencia del reloj Wokwi "attrs": { "frequency": "300" } en el diagram.json a 300 también
3. Establece SW7 en OFF ("Load")
4. Establece SW2 en ON y SW3-6 en OFF
5. Establece SW7 en ON ("TX")
6. Establece SW8 en ON ("Output Enable"). Si no hay salida en el monitor serial de Arduino Wokwi, intenta alternar SW7 OFF y ON de nuevo.

¡Felicidades! Ahora deberías ver la letra impresa en el monitor serial de Arduino Wokwi en la parte inferior de la simulación.

Ten en cuenta que pueden aparecer caracteres basura al inicializar.

| SW      | Función | 
|---------|---------|
| 1       | N/A     | 
| 2       | Bit 0   | 
| 3       | Bit 1   |
| 4       | Bit 2   | 
| 5       | Bit 3   | 
| 6       | Bit 4   |
| 7       | Cargar/TX | 
| 8       | Habilitar salida | 

### Ejemplo 2: Transmisión de múltiples caracteres

Este circuito implementa cinco registros desplazamiento para transmitir 'Tiny\n'.

{{< wokwi 347144898258928211 >}}
<br>

Cada columna de flip flops almacena un solo carácter ASCII. Para modificar un carácter, cambia bits 6-0 modificando si el multiplex correspondiente está establecido en VCC o GND.

Para agregar caracteres, copia y pega una columna. Conecta la salida de la nueva columna (puerto Q del flip flop superior) a la entrada de la etapa a la izquierda (puerto más a la izquierda del multiplexor inferior). Recuerda conectar la señal de selección del multiplexor y el reloj a la nueva columna también.

Por último, elimina la salida de la primera columna (puerto Q del flip flop superior) y crea una nueva conexión a la entrada de la nueva etapa que has agregado (puerto más a la izquierda del multiplexor inferior).

**Cómo usar**

Para comenzar la transmisión:
1. Establece la tasa de baudios Arduino `Serial.begin(<baud rate>);` en el archivo *.ino a 300
2. Establece la frecuencia del reloj Wokwi `"attrs": { "frequency": "300" }` en el diagram.json a 300 también
3. Establece el interruptor deslizante en el reloj
4. Establece SW7 en OFF ("Cargar")
5. Establece SW8 en ON ("Habilitar Salida")
6. Establece SW7 en ON ("TX"). Si no hay salida en el monitor serial de Arduino Wokwi, intenta alternando SW7 OFF y ON de nuevo.

¡Felicidades! Ahora deberías ver tus letras personalizadas impresas en el monitor serial de Arduino Wokwi en la parte inferior de la simulación.

Ten en cuenta que pueden aparecer caracteres basura al inicializar.

| SW      | Function| 
|---------|---------|
| 1       | N/A     | 
| 2       | N/A     |
| 3       | N/A     |
| 4       | N/A     | 
| 5       | N/A     | 
| 6       | N/A     |
| 7       | Cargar/TX | 
| 8       | Habilitar salida | 

{{% feedback %}}

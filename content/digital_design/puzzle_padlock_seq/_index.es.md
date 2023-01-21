---
title: Desafío lógico - Candado
tags: [desafío]
description: "¡Descubre el código correcto para abrir la caja fuerte!"
weight: 50
---

En este desafío, eres un espía tratando de acceder a una caja fuerte que contiene preciosos equipos de semiconductores. ¿Puedes descifrar el código para acceder a la caja fuerte?

Si el primer desafío es demasiado fácil, intenta el segundo desafío más difícil. También puedes [personalizar tu propio candado](/es/digital_design/design_padlock)!

**Antecedentes**

El circuito utilizado para este desafío utiliza tanto [lógica combinacional](/es/digital_design/logic_gates) como [lógica secuencial](/es/digital_design/puzzle_flipflop).

Este desafío utiliza flip-flops D para crear un circuito de lógica secuencial llamado máquina de estados finitos (FSM, por sus siglas en inglés). Luego se utiliza lógica combinacional para determinar con qué entradas el circuito cambia de estado.

Por ejemplo, utilizando FSMs podríamos diseñar un circuito básico que se activa mientras una entrada es 1 y permanece activo hasta que la entrada pasa a 0. Para describir esto con máquinas de estados, podríamos decir que si el circuito está en el Estado 0 (S0) y la entrada es 1, entonces pasará al Estado 1 (S1). Mientras la entrada es 1, el circuito permanece en S1. Una vez que la entrada pasa a 0, el circuito vuelve a S0.

Los FSMs se pueden explicar gráficamente utilizando diagramas de estados como este:

{{< mermaid >}}
stateDiagram-v2
  s0: S0
  s1: S1
  s0   --> s0: In = 0
  s0   --> s1: In = 1
  s1   --> s1: In = 1
  s1   --> s0: In = 0
{{< /mermaid >}}

El diagrama de estados representa todos los estados posibles en los que puede estar el sistema, describiendo cómo el sistema hace transiciones entre estados.

Luego, la lógica digital puede utilizarse para implementar el FSM utilizando tres componentes principales: lógica de estado siguiente, un registro de estado y lógica de salida, como se muestra a continuación (crédito: Diapositivas del [Prof. Onur Mutlu de 2019, a partir de la página 49](https://safari.ethz.ch/digitaltechnik/spring2019/lib/exe/fetch.php?media=onur-digitaldesign-2019-lecture6-sequential-logic-afterlecture-corrected.pdf)).

![FSMlogic](/images/puzzle_padlock_seq/fsmlogic.png)

### Desafío 1: Versión fácil

Una caja fuerte que contiene preciosos equipos de semiconductores ha sido bloqueada utilizando compuertas lógicas. ¡Debe ingresar el código secuencial correcto para desbloquear el sistema y capturar los materiales!

Este desafío implementa la máquina de estados que se muestra a continuación:

{{< mermaid >}}
stateDiagram-v2
  s0: Bloqueado
  s1: Desbloqueado
  s0   --> s0: Incorrecto o Restablecer
  s0   --> s1: Correcto
  s1   --> s1: !Restablecer
  s1   --> s0: Restablecer
{{< /mermaid >}}

Nota: "!" se utiliza comúnmente para representar la negación, también conocida como "no". Por lo tanto, !Restablecer significa Restablecer = 0

**Controles**
* El botón de empuje se utiliza para ingresar su código.
* El interruptor 2 se utiliza para restablecer la caja fuerte.
* Los interruptores 3 a 5 se utilizan para configurar el código.

**Para comenzar**

Presione el botón verde en la esquina superior izquierda del panel de simulación, luego haga clic para encender el interruptor 2 y presione el botón de empuje. El LED rojo etiquetado "Bloqueado" debería encenderse y el display de siete segmentos debería mostrar "L" (para bloqueado).

A continuación, apague el interruptor 2 y comience a probar códigos. Configure un código utilizando los interruptores 3 a 5.

Si ingresa un código correcto, verá que el LED cian etiquetado "Desbloqueado!" se enciende. ¡Felicidades! El display de siete segmentos también debería mostrar "U" (para desbloqueado).

{{< wokwi 347019916696617554 >}}
<br>

{{%expand "Ver la solución" %}} 
| SW3     | SW4    | SW5    |
|---------|--------|--------|
| 0       | 1      | 1      |

{{% /expand%}}

### Desafío 2: Versión más difícil

Oh oh, después de tu primer allanamiento, los guardias han aumentado la seguridad. ¡Ahora debes ingresar tres códigos correctos consecutivamente para acceder a la caja fuerte!

Este desafío implementa la máquina de estados que se muestra a continuación:

{{< mermaid >}}
stateDiagram-v2
  idle: Idle
  locked: Bloqueado
  locked1: 1/3 Correcto
  locked2: 2/3 Correcto
  unlocked: Desbloqueado!
  idle   --> idle: !SW2
  idle   --> locked: SW2
  locked --> locked: Incorrecto
  locked --> locked1: Primera entrada correcta
  locked1 --> locked: Incorrecto
  locked1 --> locked2: Segunda entrada correcta
  locked2 --> locked: Incorrecto
  locked2 --> unlocked: Tercera entrada correcta
  unlocked --> unlocked: SW2
  unlocked --> idle: !SW2
{{< /mermaid >}}

**Controles**
* El botón de empuje se utiliza para ingresar el código.
* El interruptor 2 se utiliza para habilitar el candado. Para restablecer en cualquier momento, cambie el interruptor 2 a 0 y vuelva a 1.
* Los interruptores 3 a 5 se utilizan para configurar el código.

**Para comenzar**

Coloque todos los interruptores en 0 y presione el botón de empuje. Aparecerá un "-" en el display de siete segmentos.

Cuando estés listo, enciende el interruptor 2 y presione el botón de empuje para comenzar el desafío. El LED amarillo se encenderá y el display de siete segmentos mostrará "L" para "bloqueado".

A continuación, configure un código utilizando los interruptores 3 a 5. Si ingresa un código correcto, verá que el LED de color avanza de amarillo a magenta.

Si tienes éxito, intenta llegar a las próximas etapas, encendiendo el LED blanco y finalmente el cian! Aparecerá un "U" para desbloqueado.

Si no logras ingresar el código correcto en cualquier etapa, volverás al LED amarillo.

{{< wokwi 346982355289768532 >}}
<br>

Sientete libre de jugar para tratar de descubrirlo. Siempre puedes volver a los tutoriales de [compuertas lógicas](/es/digital_design/logic_gates) y [flip-flops](/es/digital_design/puzzle_flipflop) si necesitas repasar.

{{%expand "Ver la solución" %}} | LED     | SW3     | SW4    | SW5    |
|---------|---------|--------|--------|
| Amarillo| 1       | 0      | 0      |
| Magenta | 0       | 1      | 0      |
| Blanco  | 0       | 0      | 1      |
{{% /expand%}}

{{% feedback %}}  
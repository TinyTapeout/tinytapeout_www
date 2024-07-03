---
title: Diseño personalizable - Candado
tags: [personalizable]
description: "Establece un código personalizado para tu caja fuerte digital"
weight: 100
---

Este diseño implementa un candado personalizable. ¡Establece un código para tu caja fuerte digital!

**Controles**
* El interruptor 2 se usa para restablecer la caja fuerte.
* El interruptor 8 se usa para establecer tu código (on = establecer, off = bloqueado)
* Los interruptores 3 a 5 se usan para escribir el código.
* El botón pulsador se usa para ingresar tu código.


| SW      | Función          | 
|---------|------------------|
| 1       | N/A              | 
| 2       | Reiniciar        | 
| 3       | Código 0         |
| 4       | Código 1         | 
| 5       | Código 2         | 
| 6       | N/A              |
| 7       | N/A              | 
| 8       | Establecer Código|

### Para empezar

Presiona el botón verde en la parte superior izquierda del panel de simulación.

Establece tu código deseado utilizando los interruptores 3 a 5. Una vez hecho esto, cambia el interruptor 8 a encendido y luego vuelve a apagado, ¡la caja fuerte está lista!

Enciende el interruptor 2 y presiona el botón de push. El LED rojo etiquetado como "Bloqueado" debería encenderse y el display de 7 segmentos debería mostrar "L" (por bloqueado).

A continuación, apaga el interruptor 2 para comenzar a ingresar códigos.

Si ingresas un código correcto, verás el LED cian etiquetado como "Desbloqueado!" encenderse. ¡Felicidades! El display de 7 segmentos también debería mostrar "U" (por desbloqueado).

{{< wokwi 397142450561071105 >}}
<br>

{{% feedback %}}

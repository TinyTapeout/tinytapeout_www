---
title: "Generación de diseños Wokwi a partir de tablas de verdad"
tags: [guía]
description: "Aprende a utilizar la herramienta Wokwi-lookup-table-generator para la generación y verificación de diseños a partir de tablas de verdad"
weight: 130
---

En esta guía aprenderás a utilizar una herramienta de Python para convertir una tabla de búsqueda en un diseño Wokwi. Esto puede ayudarte a ahorrar tiempo al implementar lógica digital compleja.

Gracias al miembro de la comunidad **maehw** por escribir este artículo.

## Tablas de verdad

Ya has aprendido sobre la lógica combinacional que se puede describir mediante tablas de verdad, como el [sumador completo](https://tinytapeout.com/es/digital_design/puzzle_adder/).

Ahora veamos un decodificador que convierte un dígito decimal codificado en binario (0..9) en un control de un [display de 7 segmentos](https://docs.wokwi.com/parts/wokwi-7segment). El rango de entrada se puede cubrir utilizando cuatro bits (0..15=2^4-1), es decir, cuatro señales de entrada. Especificamos que los valores de entrada válidos están en el rango 0..9, otros valores mostrarán un display en blanco.

![siete segmentos](/images/wokwi_lut_generator/sevenseg.svg)

La tabla de verdad a continuación asigna las cuatro señales de **entrada** (`w`, `x`, `y` y `z`) a las siete señales de **salida** (`A` a `G`) que conducen los siete segmentos del display:

| BCD | Binario | w | x | y | z | A | B | C | D | E | F | G |
| --- | ------ | - | - | - | - | - | - | - | - | - | - | - |
| 0   | 0000   | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1   | 0001   | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 2   | 0010   | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 3   | 0011   | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 4   | 0100   | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 5   | 0101   | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 6   | 0110   | 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |
| 7   | 0111   | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8   | 1000   | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 9   | 1001   | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
| \-  | 1010   | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1011   | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1100   | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1101   | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1110   | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1111   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Algunos ejemplos:

El dígito decimal `0` se representa como `0000` en binario. Queremos encender todos los segmentos excepto el segmento `G` - el segmento del medio. Por eso establecemos las señales de salida `A` a `F` en `1` y la señal de salida `G` en `0`.

El dígito decimal `1` se representa como `0001` en binario (empezando con el bit más significativo a la izquierda). Ahora solo queremos encender los segmentos superior derecho e inferior derecho (segmentos B y C), por lo que colocamos un `1` solo para las señales de salida `B` y `C` y establecemos todos los otros valores en `0`.

El dígito decimal `8` se representa como `1000` en binario. Ahora queremos encender todos los siete segmentos, colocando un `1` para cada señal de salida.

También hay algunos valores binarios que no se pueden representar con un solo dígito decimal, como `1101` (valor decimal de 2^4 + 2^3 + 2^0 = 8 + 4 + 1 = 13). Por eso establecemos todas las señales de salida en `0` para borrar completamente el display.

---
# Usando wokwi-lookup-table-generator para generar diseños

maehw escribió una herramienta basada en Python llamada [wokwi-lookup-table-generator](https://github.com/maehw/wokwi-lookup-table-generator) que se puede usar para generar un esquema Wokwi a partir de tablas de verdad. El generador implementa esas tablas de verdad en forma normal conjuntiva, lo que significa solo usar compuertas AND y OR.

Siga las [instrucciones de instalación](https://github.com/maehw/wokwi-lookup-table-generator#installation-and-dependencies) para instalarlo.

# ¿Cómo funciona?

Como primer paso, las tablas de verdad se reescriben como funciones de ecuaciones de álgebra booleana (usando los llamados minterminos, o "suma de productos") para cada señal de salida.

La conversión de la tabla de verdad a álgebra booleana se realiza con una implementación en Python del algoritmo [Quine McCluskey](https://en.wikipedia.org/wiki/Quine%E2%80%93McCluskey_algorithm). Tenga en cuenta que estas optimizaciones no son realmente necesarias ya que la cadena de herramientas ASIC se encargará de la optimización (y conocerá el tipo de celdas de hardware disponibles en el hardware de destino), pero ayuda a entender cómo se implementan los diseños digitales.

En el siguiente paso, esas funciones de álgebra booleana se colocan como esquema Wokwi colocando todas las compuertas AND y OR necesarias y conectándolas entre sí.

Para ejecutar la herramienta, la tabla de verdad debe convertirse en formato JSON. Los nombres de las señales de entrada se enumeran en el arreglo `inputs`. De la misma manera que una columna de la tabla de verdad describe si una señal de salida es 1 o 0, así lo hace una fila en el diccionario JSON `outputs`:

```
{
  "version": 1,
  "description": "Lookup table to translate a binary coded decimal (BCD) number to wokwi 7-segment display (https://docs.wokwi.com/parts/wokwi-7segment). Valid values are in the range 0..9, other values will show a blank display.",
  "inputs": ["w", "x", "y", "z"],
  "outputs": {
    "A": [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    "B": [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    "C": [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    "D": [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "E": [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "F": [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    "G": [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0]
  }
}
```

Ahora estamos listos para ejecutar el generador especificando el archivo de entrada de lógica (`-f`) y el archivo de salida de esquema Wokwi (`-o`):

```
python3 generate.py -f ./demos/bcd_7segment_lut.logic.json -o bcd_7segment_lut.diagram.json --tinytapeout
```

También asegúrate de activar la bandera `--tinytapeout` (o `-tt`) para que también se generen las piezas predeterminadas de la plantilla tinytapeout de Wokwi.

Luego, podemos abrir y revisar el archivo de salida con el [formato de archivo diagram.json](https://docs.wokwi.com/diagram-format) de Wokwi. Define las piezas (básicamente compuertas AND y OR) y las conexiones entre esas piezas:

```
{
    "version": 1,
    "author": "maehw",
    "editor": "wokwi",
    "parts": [
        {
            "type": "wokwi-gate-buffer",
            "id": "input_a",
            "top": 0,
            "left": 0,
            "attrs": {}
        },
        {
            "type": "wokwi-gate-not",
            "id": "input_not_a",
            "top": 60,
            "left": 0,
            "attrs": {}
        },
        ...
    ],
    "connections": [
        [
            "input_not_a:IN",
            "input_a:IN",
            "black",
            [
                "h-20",
                "*",
                "h-20"
            ]
        ],
        ...
    ]
}
```

¡Simularemos el diseño!

1. Abra la [plantilla Wokwi](https://wokwi.com/projects/339800239192932947).
2. Cambie la vista del editor desde la pestaña `tiny-tapeout-poc-new-internal-pulls.ino` a la pestaña `diagram.json`.
3. Seleccione todo el contenido del archivo, elimínelo y reemplácelo con el contenido del archivo JSON generado `bcd_7segment_lut.diagram.json`.
4. Tenga en cuenta que su navegador puede no responder por un momento (varios segundos) mientras Wokwi procesa los nuevos contenidos JSON.
5. Inicie la simulación.
6. Cambie los interruptores de entrada y verifique si el display de 7 segmentos ilumina los segmentos esperados.

*(El proyecto de demostración generado finalizado se puede encontrar aquí: https://wokwi.com/projects/347688030570545747)*

---

## Uso del generador de tablas de búsqueda de wokwi para verificación automatizada del diseño

Como la verificación manual puede ser bastante tediosa, especialmente para diseños con muchas señales de entrada, `wokwi-lookup-table-generator` proporciona una opción para la verificación automatizada: llame nuevamente a la herramienta, pero reemplaza la bandera `--tinytapeout` (o `-tt`) con la bandera `--test` (o `-t`).

```
python3 generate.py -f ./demos/bcd_7segment_lut.logic.json -o bcd_7segment_lut.diagram.json --test
```

Agregar la bandera tendrá los siguientes dos efectos:
* Nuevo contenido dentro de `bcd_7segment_lut.diagram.json`.
* Se crea un nuevo archivo `sketch.ino`.

Al inspeccionar `bcd_7segment_lut.diagram.json`, encontraremos cuatro modificaciones principales (en comparación con el uso de la bandera `--tinytapeout` en lugar de `--test`):

Se han eliminado las piezas predeterminadas de la plantilla de Wokwi.

La lista de piezas se extiende con un [Arduino Mega](https://docs.wokwi.com/parts/wokwi-arduino-mega):

```
{
    "type": "wokwi-arduino-mega",
    "id": "mega",
    "top": -400,
    "left": -500,
    "rotate": 90,
    "attrs": {}
}
```
Se agrega una sección para incluir un [monitor serie](https://docs.wokwi.com/guides/serial-monitor):

```
"serialMonitor": {
    "display": "always",
    "newline": "lf"
}
```

Y la cuarta modificación principal es que las entradas y salidas del diseño digital se conectan automáticamente con pines de E/S digitales del Arduino Mega.

El archivo `sketch.ino` contiene código generado para verificar automáticamente el diseño digital aplicando todas las combinaciones de entrada posibles y comparando las salidas del diseño digital con las expectativas de la tabla verdad.

Así es como se ve la tabla de búsqueda de valores esperados en el código `sketch.ino` para nuestro decodificador BCD a 7 segmentos:

```
uint16_t expected_out_val[2 << (DESIGN_NUM_USED_INPUTS-1)] = {
    0b1111110,
    0b0110000,
    0b1101101,
    0b1111001,
    0b0110011,
    0b1011011,
    0b0011111,
    0b1110000,
    0b1101111,
    0b1110011,
    0b0000000,
    0b0000000,
    0b0000000,
    0b0000000,
    0b0000000,
    0b0000000,
};
```

¡Vamos a simular y verificar el diseño!

1. Abra la [plantilla Wokwi](https://wokwi.com/projects/339800239192932947).
2. En la vista del editor `tiny-tapeout-poc-new-internal-pulls.ino`, seleccione todo el contenido del archivo, elimínelo y reemplácelo con el contenido del nuevo archivo `sketch.ino`.
3. Cambie la vista del editor de la pestaña `tiny-tapeout-poc-new-internal-pulls.ino` a la pestaña `diagram.json`.
4. Seleccione todo el contenido del archivo, elimínelo y reemplácelo con el contenido del nuevo archivo `JSON generado bcd_7segment_lut.diagram.json`.
5. Inicie la simulación.
6. En la parte inferior derecha de la ventana de simulación de Wokwi, debería aparecer un área con datos de salida serie del Arduino Mega y mostrar los resultados de la verificación para cada combinación de señales de entrada y finalmente un resultado general.

*(El proyecto de demostración generado finalizado se puede encontrar aquí: https://wokwi.com/projects/347688283983053395)*

A continuación se muestra un fragmento del monitor serie de Wokwi que muestra los resultados de la ejecución de la verificación:

```
Design has 4 inputs.
Design has 7 outputs.
Testing all 2^4 input combinations.
Stop verification on error? Yes

Wrote input: 0b0000
  Expected output:  0b1111110
  Read back output: 0b1111110
  [PASS]

Wrote input: 0b0001
  Expected output:  0b0110000
  Read back output: 0b0110000
  [PASS]

Wrote input: 0b0010
  Expected output:  0b1101101
  Read back output: 0b1101101
  [PASS]

...

Wrote input: 0b1110
  Expected output:  0b0000000
  Read back output: 0b0000000
  [PASS]

Wrote input: 0b1111
  Expected output:  0b0000000
  Read back output: 0b0000000
  [PASS]

[PASSED]
```

---

## Referencias ##

* [Instalación de `wokwi-lookup-table-generator`](https://github.com/maehw/wokwi-lookup-table-generator#installation-and-dependencies)
* [Información](https://github.com/maehw/wokwi-lookup-table-generator#how-does-this-work-internally): ¿Cómo funciona internamente wokwi-lookup-table-generator?
* [Problemas](https://github.com/maehw/wokwi-lookup-table-generator/issues): Cómo mejorar la herramienta y su uso.

{{% feedback %}}

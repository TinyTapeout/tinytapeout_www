---
title: "Pruebas automatizadas simples usando tablas de verdad"
tags: [guía]
description: "Usa una tabla simple de descripción de las entradas y salidas esperadas para probar un diseño combinacional o sincrónico de Wokwi"
weight: 130
---

Aquí aprenderás cómo usar una tabla simple para probar tu diseño cada vez que hagas cambios, y antes de producción.


### Pruebas de Tablas de Verdad

El sistema realizará pruebas automáticamente sobre cualquier diseño de Wokwi que tenga un archivo `truthtable.md` presente. Para crearlo, usa el menú desplegable junto a las pestañas de los archivos a la izquierda para crear un nuevo archivo (`+ New file...`), y nombrarlo *truthtable.md*.

Dentro de ese archivo, solo necesitas crear una tabla *markdown* con al menos dos columnas, para las entradas deseadas y salidas esperadas.

Si tu diseño solo es un único inversor, ligado a la entrada 0 y saliendo por la salida 0, entonces tener

<pre>
|  input   |  output  |
|----------|----------|
| 00000000 | xxxxxxx1 |
| 00000001 | xxxxxxx0 |

</pre>

en truthtable.md sería suficiente para validar el diseño. Cada fila es proceesada en secuencia:
los cables de entrada son ajustados a los niveles lógicos de la primera columna (todos en BAJO en la primera fila del ejemplo de arriba), y las salidas son chequeadas para asegurarse de que coincidan con la segunda columna.

Un `0` es un lógico BAJO, y un `1` es un lógico ALTO. El bit marcado como `x` en la salida significa que _no nos interesa_ (en inglés, *don't care*) el estado de esos bits. Las columnas son representaciones de todos los 8 bits en forma *bit más significativo* (MSB por su sigla en inglés, *most significant bit*): al igual que con los números decimales normales, ej. 123, los bits de más a la izquierda son potencias más altas, por lo que la 'salida 0' es el último campo de la secuencia `xxxxxxx1`.

Para funcionar, los archivos truthtable.md deben tener una tabla markdown válida donde:
* pueda haber *texto libre arriba de* la tabla, describiendo tu prueba y tu circuito;
* la columna *headers* (cabecera) puede contener cualquier texto descriptivo que sea apropiado para tu circuito;
* haya un *separador* entre la cabecera y las filas de casos de pruebas (la línea segmentada);
* hayan al menos *dos columnas* en cada fila;
* cada columna, después de la cabecera, tenga *especificaciones de 8 bits* (i.e. 8 caracteres del set `0`, `1`, y `x` o `-` para *don't care/don't change*);
* una columna de salida que solo tenga bits *don't care* aplicará las entradas pero no probará nada--útil para resets o pasos de configuración; y
* los espacios en blanco en las columnas son ignorados, para poder organizar las cosas de manera más clara.

Todo lo anterior significa que esto:

<pre>
Prueba de inversor simple (conectado en
el pin 0 para tanto entrada como salida).

¡Debería invertir!  OUT == ~IN

| no-connect   IN  |          OUT  |      comentario      |
|------------------|---------------|----------------------|
| xxxx   xxx    0  | xxxxxxx   1   |  in BAJO -> out ALTO |
| xxxx   xxx    1  | xxxxxxx   0   |  in ALTO -> out BAJO |

</pre>

ejecutaría las pruebas de exactamente la misma manera que la primera tabla de verdad mostrada más arriba, y, para mí, se ve mucho más claro.

Puedes revisar un caso de ejemplo menos trivial de una tabla de verdad combinacional en el proyecto [sumador completo de 4-bits con acarreo](https://wokwi.com/projects/344249305917293138).

### Diseños con Reloj

Los detalles anteriores son suficientes para probar tanto diseños combinacionales como sincrónicos/secuenciales.

Digamos que tenemos un circuito como el candado, donde queremos configurar una combinación y cronometrarla para ver el resultado.

Podrías hacer esto:

<pre>
|     ComboABC RST   CLOCK |     7-segment      |                |
|--------------------------|--------------------|----------------|
| ---   110     -      -   | --   -----     -   | ingresar comb. |
| ---   ---     -      1   | --   -----     -   | reloj en       |
| ---   ---     -      0   | --   11111     -   | sucesión.      |
</pre>

Aquí, estoy usando `-` en lugar de `x` simplemente por preferencia.

La primera fila configura las entradas para ingresar la combinación correcta del candado, sin afectar ninguna de las otras señales. Las dos filas siguientes hacen que la señal de reloj vaya a ALTO, y luego BAJO  

Solo es después de ese ciclo de reloj que chequeamos las salidas y confirmamos si hubo éxito, porque en un diseño sincrónico los cambios solo toman efecto después de este punto.

Bueno, *podrías* hacer las pruebas de esta manera, pero eso resultaría en un día muy largo escribiendo tablas de verdad.

Por esto, se agrega por conveniencia y claridad una opción adicional para los bits: `c` de *clocked*, es decir, una señal cronometrada de reloj. Usando esto, la prueba de arriba se transforma en lo siguiente:

<pre>
|     ComboABC RST   CLOCK |     7-segment      |             |
|--------------------------|--------------------|-------------|
| ---   110     -      c   | --   11111     -   | valid combo |
</pre>



Y esto se comporta exactamente igual. Cualquier fila con una entrada que tenga bit(s) `c` tendrán el efecto de
 
  1) configurar las entradas que se especifican, aparte de los bits `c`;
  2) invertir los bits `c`; e
  3) invertir los bits `c` de nuevo, para devolverlos a su estado original
  
en tres pasos bien diferenciados *antes* de chequear que las salidas coinciden con los valores especificados.

Esto hace mucho más fácil probar diseños con reloj. Por ejemplo, sin los bits `c`, el archivo truthtable.md del [candado personalizable](https://wokwi.com/projects/347417602591556180) requeriría 39 filas y todos los cambios de reloj volverían muy engorroso el saber qué es lo que realmente se está testeando.

Con los bits de reloj, la prueba completa se ve actualmente así:

<pre>

| PRG  xx  COMBO  RST CLK  |    7-segment    |         comentario         |
|--------------------------|-----------------|----------------------------|
|  0   00   000    1   c   |   -- ----- -    | comienza con reset         |
|  1   xx   110    0   c   |   -- ----- -    | programar con comb. 110    |
|  0   xx   000    1   c   |   -- ----- -    | reiniciar                  |
|  x   xx   111    0   c   |   -- 11100 -    | probar una comb. mala      |
|  x   xx   001    x   c   |   -- 11100 -    | otra comb. mala            |
|  x   xx   110    x   c   |   -- 11111 -    | la comb. correcta          |
|  x   xx   000    x   c   |   -- 11111 -    | mala pero aún desbloqueada |
|  x   xx   xxx    1   c   |   -- ----- -    | reiniciar                  |
|  x   xx   xxx    0   c   |   -- 11100 -    | ahora bloqueada de nuevo   |
|  1   xx   001    0   c   |   -- ----- -    | programar con comb. 001    |
|  0   xx   000    1   c   |   -- ----- -    | reiniciar                  |
|  x   xx   100    0   c   |   -- 11100 -    | probar una comb. mala      |
|  x   xx   001    x   c   |   -- 11111 -    | la nueva comb.             |
</pre>

¡Y eso es todo! Agrega un archivo truthtable.md a tu diseño y aprovecha lo fácil que es hacer pruebas automatizadas.

{{% feedback %}}

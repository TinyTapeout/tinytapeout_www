---
hidden: true
title: "242 Demultiplexor NAND"
weight: 66
---

## 242 : Demultiplexor NAND

* Author: Mauricio Caballero Hernández - Alejandro Duran Morales - Marvin Yahir Salamanca Ramirez - Kevin Ortiz Sarate
* Description: Demultiplexor de 3 entradas independientes y 3 entradas de dirección que arrojan valore logicos de 0 y 1 en 8 salidas diferentes, constituido por compuertas NAND y NOT, imitando el comportamiento de un LS138
* [GitHub repository](https://github.com/Anjouri/tt04-submission-template)
* [GDS submitted](https://github.com/Anjouri/tt04-submission-template/actions/runs/6080316658)
* [Wokwi](https://wokwi.com/projects/374815911155542017) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Introduciendo un total de 6 señales en el circuito se puede arrojar una señal negada (un valor de 0 logico)
en una de las 8 salidas disponibles. Las primeras 3 entradas dentro del circuito son clasificadas como entradas de dirección y
se encargan de configurar el Demultiplexor, los otros 3 puertos de entrada admiten valores de entrada independientes que terminan por
infliur en las entradas de las compuertas logicas NAND y eso enconjunto permite que se arrojen valores logicos, predominando los
estados altosen 7 de 8 salidas, mientras que la salida restante arroja un valor logico de 0 (lo cual admite un total de 8
combinaciones posibles con resultados diferentes). Todo el cuerpo del Demultiplexor esta conformado por compuertas NAND de 4 entradas
y su demanda de compuertas NOT es minima en comparacion.


### How to test

Para probar el circuito es necesario utilizar un dip switch de 6 entradas donde las primeras 3 posiciones conformaran las entradas
de dirección (E0-E2) mientras que las posiciones 4 a 6 seran las entradas independientes (A0-A2).
En su estado natural, (sin señales de entrada más que la E0), se arrojara el estado bajo a O0,
Para arrojar un valor de 0 a la salida O1 es necesario mantener activa la entrada de direccion E0 y la entrada independiente A0.
Para cambiar a la salida O2 se mantiene la entrada de dirección E0 y la entrada A1.
Para cambiar a la salida O3 se mantiene la entrada de dirección E0 y la entrada A0 + A1.
Para cambiar a la salida O4 se mantiene la entrada de dirección E0 y la entrada A2.
Para cambiar a la salida O5 se mantiene la entrada de dirección E0 y la entrada A0 + A2.
Para cambiar a la salida O6 se mantiene la entrada de dirección E0 y la entrada A1 + A2.
Para cambiar a la salida O7 se mantiene la entrada de dirección E0 y la entrada A0 + A1 + A2.
Para que todas las salidas arrojen un valor logico de 1 se necesita que se activen las entradas E1 + E2.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | E0 (Entrada de dirección)  | segment a | none |
| 1 | E1 (Entrada de dirección)  | segment b | none |
| 2 | E2 (Entrada de dirección)  | segment c | none |
| 3 | A0 (Entrada independiente)  | segment d | none |
| 4 | A1 (Entrada independiente)  | segment e | none |
| 5 | A2 (Entrada independiente)  | segment f | none |
| 6 | n/a  | segment g | none |
| 7 | n/a  | dot | none |

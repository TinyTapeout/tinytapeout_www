---
hidden: true
title: "243 Sumador/Sustractor de 3 bit con acarreo y prestamo"
weight: 16
---

## 243 : Sumador/Sustractor de 3 bit con acarreo y prestamo

* Author: ONIX-M50
* Description: Este es un pequeño proyecto para la iniciativa VLSI, el cual consta de un circuito que realiza tanto la suma como la sustracción de dos numeros de 3 bits, los cuales pueden venir acompañados de un bit de acarreo o prestamo respectivamente.
* [GitHub repository](https://github.com/ONIX-M50/DesdeWokwi)
* [GDS submitted](https://github.com/ONIX-M50/DesdeWokwi/actions/runs/6068914443)
* [Wokwi](https://wokwi.com/projects/374903567624066049) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Este circuito recibe 2 numeros de 3 bits cada uno y opcionalmente un bit de acarreo y/o un bit de prestamo. El circuito realiza
tanto la adición como la sustracción de dichos números y el resultado de ambas operaciones es entregado a la salida.
Se utilizan 4 pines de salida para el resultado de la suma y 4 pines para el resultado de la resta.


### How to test

Las entradas IN0 a IN2 corresponden al primer número de 3 bits, mientras que las entradas IN4 a IN6 corresponden al segundo
número de 3 bits, por otro lado, las entradas IN3 e IN7 corresponden al los posibles bits de acarreo y préstamo respectivamente.
Las salidas OUT0 a OUT3 corrreponden al resultado de la suma de los npumeros binarios de entrada, siendo OUT3 el acarreo. Mientras
que las salidas OUT4 a OUT7 corresponden al resultado de la resta de los números binarios de entrada, siendo OUT4 el prestamo.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | A0  | X0 | none |
| 1 | A1  | X1 | none |
| 2 | A2  | X2 | none |
| 3 | carry  | carry | none |
| 4 | B0  | Y0 | none |
| 5 | B1  | Y1 | none |
| 6 | B2  | Y2 | none |
| 7 | borrow  | borrow | none |

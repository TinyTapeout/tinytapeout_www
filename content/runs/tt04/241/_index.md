---
hidden: true
title: "241 Circuito Religioso"
weight: 63
---

## 241 : Circuito Religioso

* Author: Eunice Husai Garcia Javier, Axel Daniel Luna Carmona, Aneesa Miranda Peredo García, Daniel Alberto Gil Martinez
* Description: Un circuito BCD  display 7 segmentos que despliega caracteres para formar una palabra
* [GitHub repository](https://github.com/husaigarciajavier/tt04-circuito-creyente)
* [GDS submitted](https://github.com/husaigarciajavier/tt04-circuito-creyente/actions/runs/6078315682)
* [Wokwi](https://wokwi.com/projects/374974793636964353) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Son compuertas logicas que crean una funcion para desplegar caracteres en un display de 7 segmentos. Eb este caso los caracteres forman dos palabras por lo que utilizamos una entrada de seleccion para elegir cual de ambas se muestran.


### How to test

En las entradas 0 a 3 escribir un numero binario con la ultima entrada (3) como el bit menos significante. Al escribirlos en orden de 0 a 9 se desplegará la palabra, la cual se selecciona con la entrada 7.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | bit 3  | segment a | none |
| 1 | bit 2  | segment b | none |
| 2 | bit 1  | segment c | none |
| 3 | bit 0  | segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | control  | dot | none |

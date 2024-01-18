---
hidden: true
title: "59 FSM_LAT"
weight: 60
---

## 59 : 0b 000 111 011 : FSM_LAT

{{< tt-scanchain-switches "000111011" >}}

* Author: Juan Sanchez
* Description: FSM look at table
* [GitHub repository](https://github.com/Juander28/tt03-FSM-LOOK-AT-TABLE-LATAM)
* [Most recent GDS build](https://github.com/Juander28/tt03-FSM-LOOK-AT-TABLE-LATAM/actions/runs/4776245390)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: un fpga que permita generar un relog una salida serial para programar la secuencia de la maquina de estados 



### How it works

el proyecto es una maquina de estados a la cual se le puede cambiar la secuencia de los estados por medio de una entrada serial 

### How to test

para cagar la secuencnia de estados se debe conectar un relog el cual este sincronixado con la secuencia serial para programar la maquina de estados = y para pasar de estado la entrada conectada a cada estado debe estar en 1

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | oi_in[0]  | oi_out[1] |
| 1 | oi_in[1]  | oi_out[2] |
| 2 | oi_in[2]  | oi_out[3] |
| 3 | oi_in[3]  | oi_out[4] |
| 4 | oi_in[4]  | oi_out[5] |
| 5 | oi_in[5]  | oi_out[6] |
| 6 | oi_in[6]  | oi_out[7] |
| 7 | oi_in[7]  | oi_out[0] |

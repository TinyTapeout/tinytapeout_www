---
hidden: true
title: "225 MyUART"
weight: 103
---

## 225 : MyUART

* Author: LogicComputing
* Description: A small UART that outputs my name
* [GitHub repository](https://github.com/LogicComputing/tt05-myUART)
* [GDS submitted](https://github.com/LogicComputing/tt05-myUART/actions/runs/6754878715)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

This design contains a small UART that will output a string every ~1s. No input is required. It expect a 10 MHz clock.


### How to test

You simply need to connect an UART RX on uo_out[0] and you will see my name ! UART is 115200 baud, one start bit, eight bit of data, one parity bit and one stop bit. I generate a sinus signal on uo_out[7:1].


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | {'uo_out[0]': 'UART with my name every ~1s.'} | none |
| 1 | none  | {'uo_out[7:1]': 'A sinus is generated.'} | none |
| 2 | none  | n/a | none |
| 3 | none  | n/a | none |
| 4 | none  | n/a | none |
| 5 | none  | n/a | none |
| 6 | none  | n/a | none |
| 7 | none  | n/a | none |

### Chip location

{{< shuttle-map "tt05" "225" >}}

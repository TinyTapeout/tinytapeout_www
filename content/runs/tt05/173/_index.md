---
hidden: true
title: "173 UART uwuifier"
weight: 44
---

## 173 : UART uwuifier

* Author: Anish Singhani
* Description: Operates on a UART signal and uwuifies it
* [GitHub repository](https://github.com/asinghani/uwuifier-tt05)
* [GDS submitted](https://github.com/asinghani/uwuifier-tt05/actions/runs/6753480945)
* HDL project
* [Extra docs]()
* Clock: 6000000 Hz
* External hardware: UART transceiver



### How it works

UART interface 115200 baud at 6MHz


### How to test

Connect inline with a UART


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | none | none |
| 1 | none  | none | none |
| 2 | none  | none | none |
| 3 | uart rx  | none | none |
| 4 | none  | uart tx | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |

### Chip location

{{< shuttle-map "tt05" "173" >}}

---
hidden: true
title: "25 Transmit UART"
weight: 26
---

## 25 : Transmit UART

* Author: Tom Keddie
* Description: Transmits a async serial string on a pin
* [GitHub repository](https://github.com/TomKeddie/tinytapeout-2022-2a)
* [Most recent GDS build](https://github.com/TomKeddie/tinytapeout-2022-2a/actions/runs/3526907653)
* HDL project
* [Extra docs]()
* Clock: 1200 Hz
* External hardware: Serial cable



### How it works

Sends an async uart message on severals pins

### How to test

Attach a uart receiver to each pins, set the baud rate to 1200 and read the messages

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | uart_tx_0 |
| 1 | reset  | uart_tx_1 |
| 2 | none  | uart_tx_2 |
| 3 | none  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |

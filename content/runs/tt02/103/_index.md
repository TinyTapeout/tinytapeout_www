---
hidden: true
title: "103 Counter"
weight: 104
---

## number : 0b001100111 : Counter

* Author: Adam Zeloof
* Description: It counts!
* [GitHub repository](https://github.com/azzeloof/tt02-counter)
* [Most recent GDS build](https://github.com/azzeloof/tt02-counter/actions/runs/3587718532)
* [Wokwi](https://wokwi.com/projects/341279123277087315) project
* [Extra docs](https://github.com/azzeloof/tt02-counter)
* Clock: 600 Hz
* External hardware: None

Image path is broken

### How it works

It counts up or displays an entered number on the seven-segment. A clock divider can be used to slow down the clock speed.

### How to test

Enable the counter (input 7) and the clock divider (input 6) and it should start counting up. If you disable the counter (input 7) you can enter a number to display manually in binary (inputs 1-4).

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | b0  | segment b |
| 2 | b1  | segment c |
| 3 | b2  | segment d |
| 4 | b3  | segment e |
| 5 | none  | segment f |
| 6 | clock divider enable  | segment g |
| 7 | count enable  | none |

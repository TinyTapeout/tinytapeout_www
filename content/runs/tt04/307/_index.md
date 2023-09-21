---
hidden: true
title: "307 up-down counter with parallel load and BCD output"
weight: 125
---

## 307 : up-down counter with parallel load and BCD output

* Author: Diego Hernán Gaytán Rivas
* Description: This device is an up-down counter for numbers ranging from zero to fifteen, with options for enable, clear count, and parallel loading. The count updates at a rate of one second per increment or decrement.
* [GitHub repository](https://github.com/DgaytanR/tt04-submission-template)
* [GDS submitted](https://github.com/DgaytanR/tt04-submission-template/actions/runs/6115153520)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

The design operates by receiving a 10 MHz clock signal and using a frequency divider composed of a counter and a comparator to generate a 1 Hz output signal. This 1 Hz signal is
used to feed an up-down counter circuit, which includes a synchronous enable to halt the count, a port to clear the count by setting the output to zero,
and a port to indicate the desire to load a value directly from the circuit's inputs. The value is loaded in the next clock cycle, and the count continues from that point. Finally,
the count value is decoded into BCD code for display on a seven-segment display.


### How to test

After resetting and setting the "en" port high, the device will begin a hexadecimal count with values ranging from 0 to F. Now, if the "up" port is set high, the count will be in
ascending order, whereas if it's set low, it will be in descending order. Additionally, there is an option to clear the count by raising the "syn_clear" port, which would reset the
counter to zero. In the case where you want to load a value between 0 and F into the counter to start the count, you should set the "load" port high and then lower it to continue the count.
The value to load will be taken directly from the first four input ports.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | data in bit 0  | segment a | none |
| 1 | data in bit 1  | segment b | none |
| 2 | data in bit 2  | segment c | none |
| 3 | data in bit 3  | segment d | none |
| 4 | enable  | segment e | none |
| 5 | syn_clear  | segment f | none |
| 6 | up  | segment g | none |
| 7 | load  | dot | none |

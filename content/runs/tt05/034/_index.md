---
hidden: true
title: "34 UART Greeter with RNN Module"
weight: 153
---

## 34 : UART Greeter with RNN Module

* Author: Jonathan Zentgraf
* Description: Sends 'Hello' over UART and fills die space with metastability
* [GitHub repository](https://github.com/zx96/tiny-tapeout-5)
* [GDS submitted](https://github.com/zx96/tiny-tapeout-5/actions/runs/6755797792)
* [Wokwi](https://wokwi.com/projects/380410498092232705) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The UART transmitter is just a shift register with hardcoded initial values.
The output of the shift register is fed back into itself in an infinite loop.
The "RNN" is a few flip-flops feeding into each other to use up die space. :)


### How to test

Testing UART is simple:

1. Connect the UART output to a microcontroller or scope.
2. Set load/enable low (load).
3. Set output enable high.
4. Set load/enable high (enable).
5. Observe as the string "Hello\n" is sent over UART.

The RNN module is trained on random Wokwi wiring, and might be smarter than a single human neuron.
It probably detects something we mortals cannot comprehend, and is tied to inputs 0-3 and outputs 0-3.
It may be fun to drive these with a very fast clock.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | RNN input 0  | RNN output 0 | none |
| 1 | RNN input 1  | RNN output 1 | none |
| 2 | RNN input 2  | RNN output 2 | none |
| 3 | RNN input 3  | RNN output 3 | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | Shift register load (low) / enable (high)  | UART output enabled | none |
| 7 | UART output enable  | UART output | none |

### Chip location

{{< shuttle-map "tt05" "34" >}}

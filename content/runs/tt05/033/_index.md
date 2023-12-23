---
hidden: true
title: "33 Frequency Encoder/Decoder"
weight: 33
---

## 33 : Frequency Encoder/Decoder

* Author: Hannah Cohen-Sandler
* Description: Encodes data into frequency variations and then decodes it back into its original form.
* [GitHub repository](https://github.com/hcohensa/tt05-freq-enc-dec-chip)
* [GDS submitted](https://github.com/hcohensa/tt05-freq-enc-dec-chip/actions/runs/6751742653)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Utilizes an array of inputs and outputs to connect to switches, 7-segment displays, and enable bidirectional paths.

The bottom 7 bits of the second counter are linked to the bidirectional output.

The clock is generated using a Phase-Locked Loop.

The Frequency Encoder encodes data input from switches to a pulse output and uses the PLL output to enable the encoding operation.

The Frequency Decoder is connected to bidirectional inputs and decodes the pulse signal based on the PLL output, resulting in a data output.


### How to test

Confirm that the system begins in a reset state with rst_n set to 0. Transition the system out of reset by setting rst_n to 1.
Set the constant current input signal (ui_in) to a specific value to simulate different input scenarios. Activate the chip design by setting the ena signal to 1.
Alter the clk clock signal frequency value and observe how the changes affect the design's behavior.
Experiment with various inputs, clock frequencies, and enabling/disabling operations verify the design and accuracy of the encoding, decoding, and pulse counting.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | segment a | second counter bit 0 |
| 1 | current bit 12  | segment b | second counter bit 1 |
| 2 | current bit 13  | segment c | second counter bit 2 |
| 3 | current bit 14  | segment d | second counter bit 3 |
| 4 | current bit 15  | segment e | second counter bit 4 |
| 5 | current bit 16  | segment f | second counter bit 5 |
| 6 | current bit 17  | segment g | second counter bit 6 |
| 7 | current bit 18  | segment h | second counter bit 7 |

### Chip location

{{< shuttle-map "tt05" "33" >}}

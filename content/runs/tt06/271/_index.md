---
hidden: true
title: "271 Tiny Opamp"
weight: 220
---

## 271 : Tiny Opamp

* Author: argunda
* Description: Super simple two stage opamp without miller compensation
* [GitHub repository](https://github.com/argunda/tt06-tiny-opamp)
* [GDS submitted](https://github.com/argunda/tt06-tiny-opamp/actions/runs/8758173841)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This opamp has VDD=1.8V and VSS=0V. It's input common mode range is not very good so make sure your AC input signal is centered around 0.9V. The opamp is internally biased so you just need to apply a differential input.

It should be able to hit 60dB gain at low frequencies. Please do not connects loads requiring more than a few mA.

### How to test

Power up the chip, test opamp in closed loop configuration only.
VOUT is analog pin 0.
PLUS is a differential input on analog pin 1.
MINUS is a differential input on analog pin 2.

### External hardware

At the bare minimum a resistor at the output is needed to test the opamp as a source-follower. Use multimeter or oscilloscope to probe the output.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | pause  | blue  |         |
| 1 | new_game  | green  |         |
| 2 | down_key  | red  |         |
| 3 | up_key  | hsync  |         |
| 4 |   | vsync  |         |
| 5 |   | speaker  |         |
| 6 |   | col0  |         |
| 7 |   | row0  |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | VOUT1           |
| 1 | 6 | PLUS1           |
| 2 | 10 | MINUS1           |
| 3 | 7 | VOUT2           |
| 4 | 9 | PLUS2           |
| 5 | 8 | MINUS2           |

### Chip location

{{< shuttle-map "tt06" "271" >}}

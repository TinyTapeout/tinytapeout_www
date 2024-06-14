---
hidden: true
title: "227 DDS and DAC"
weight: 47
---

## 227 : DDS and DAC

* Author: Meonwara
* Description: DDS with DAC and analogue output pin
* [GitHub repository](https://github.com/meonwara/tt07_mw_analogue)
* [GDS submitted](https://github.com/meonwara/tt07_mw_analogue/actions/runs/9311976177)
* Analog project
* [Extra docs]()
* Clock: 40000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

Simplistic DDS (accumulator + sinewave lookup table) with resistive DAC to provide analogue output. Board switches control the output frequency.

#### How to test

With a 40MHz clock selected, change the input switches to some binary value 1-255. Observe a rail to rail sinewave at the analogue pin ua[0].

#### External hardware

DAC output resistance about 10kOhm. Could add an external capacitor to ground to smooth / filter the waveform.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui[0]  | uo[0]  | uio[0]        |
| 1 | ui[1]  | uo[1]  | uio[1]        |
| 2 | ui[2]  | uo[2]  | uio[2]        |
| 3 | ui[3]  | uo[3]  | uio[3]        |
| 4 | ui[4]  | uo[4]  | uio[4]        |
| 5 | ui[5]  | uo[5]  | uio[5]        |
| 6 | ui[6]  | uo[6]  | uio[6]        |
| 7 | ui[7]  | uo[7]  | uio[7]        |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 4 | ua[0]           |

### Chip location

{{< shuttle-map "tt07" "227" >}}

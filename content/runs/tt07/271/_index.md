---
hidden: true
title: "271 Analog Test Circuit ITS 2"
weight: 57
---

## 271 : Analog Test Circuit ITS 2

* Author: A. N Irfansyah, Raditya Eka, Yohanes Stefanus
* Description: PLL parts (VCO and phase detector)
* [GitHub repository](https://github.com/nurirfansyah/tt07-analog-its_ip_alits02)
* [GDS submitted](https://github.com/nurirfansyah/tt07-analog-its_ip_alits02/actions/runs/9332725565)
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

This tinytapeout submission consists of:

1. A VCO based on transmission gates with additional on-chip capacitors to further linearize the response.
2. A phase detector and VCO to form parts of a PLL.

### How to test

Pinouts:

Analog pins:

ua[0] - VCO #1 output

ua[1] - VCO#1 VCONT- / Phase Detector (PLL) ref

ua[2] - VCO#1 VCONT+ / Phase Detector (PLL) input / PLL feedback

ua[3] - PLL VCO output

ua[4] - PLL Filter (n)

ua[5] - PLL Filter (p)

### External hardware

To test, typical experimental setup to test pll, or vco, would be required.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   |   |         |
| 1 |   |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | vco1_out           |
| 1 | 6 | vco1_in-           |
| 2 | 10 | vco1_in+           |
| 3 | 7 | pllvco_out           |
| 4 | 9 | pllfilter_n           |
| 5 | 8 | pllfilter_p           |

### Chip location

{{< shuttle-map "tt07" "271" >}}

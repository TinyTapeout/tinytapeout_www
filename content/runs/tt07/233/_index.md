---
hidden: true
title: "233 Gilbert Mixer"
weight: 92
---

## 233 : Gilbert Mixer

* Author: Kolos Koblasz
* Description: Gilbert Cell mixer for up and down conversion
* [GitHub repository](https://github.com/KolosKoblasz/tt07-mixer)
* [GDS submitted](https://github.com/KolosKoblasz/tt07-mixer/actions/runs/9305445729)
* Analog project
* [Extra docs]()
* Clock: 100000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This mixed signal circuit is a mixer. It can up or down convert a signal.
The digital control part can generate internal LO signal with different frequencies, but also can pass an external Lo signal to the analog mixer.

### How to test

Send analog signal to the input ports and measure the output ports. Also apply external LO or use internal LO source.

### External hardware

Since the user have to bias the in_n and in_p ports with 900-950mV and apply a differential signal in the range of 20mV peak-to-peak I would say a custom interface PCB is needed to use the mixer. TO DO later.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ext_lo_en  |   |         |
| 1 | ext_lo_n  |   |         |
| 2 | ext_lo_p  |   |         |
| 3 | int_lo_settings[0]  |   |         |
| 4 | int_lo_settings[1]  |   |         |
| 5 | int_lo_settings[2]  |   |         |
| 6 |   |   |         |
| 7 |   |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 4 | in_n           |
| 1 | 1 | in_p           |
| 2 | 3 | out_p           |
| 3 | 2 | out_n           |

### Chip location

{{< shuttle-map "tt07" "233" >}}

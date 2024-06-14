---
hidden: true
title: "518 Twin Tee Sine Wave Generator"
weight: 72
---

## 518 : Twin Tee Sine Wave Generator

* Author: Matt Venn
* Description: Opamp plus notch filter = sine wave out
* [GitHub repository](https://github.com/mattvenn/tt07-twin-tee-opamp-osc)
* [GDS submitted](https://github.com/mattvenn/tt07-twin-tee-opamp-osc/actions/runs/9096690236)
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

The circuit uses a "Twin Tee" filter along with an opamp to generate a sine wave.

![Twin Tee Notch Filter](images/twin_tee_schematic.png)

https://www.electronics-tutorials.ws/oscillator/twin-t-oscillator.html

```
f = 1 / 2 * pi * RC
```

#### Notch filter AC analysis

![Notch filter AC analysis](images/notch_ac.png)

#### Opamp AC analysis

![Opamp AC analysis](images/p3_opamp_ac.png)

#### Transient analysis

This simulation was done with a "montecarlo mismatch corner" which aims to test how well the circuit will work
as the resistance and transistors change across process corners. Each run is shown in a different colour. If R6 resistor
in the Twin Tee filter is too high, the oscillations quickly die out, so it's deliberately undersized at the expense of
distortion in the sine wave.

![Twin Tee output transient analysis](images/twin_trans.png)

### Acknowledgements

* The [opamp design comes from Sai](https://github.com/argunda/tt06-tiny-opamp)
* The [opamp layout comes from Pat Deegan](https://github.com/psychogenic/tt06-analog-wowa)
* Inspired by this video by [Alan Wolke](https://www.youtube.com/watch?v=KFVVozlXoOk).

### How to test

After the project is enabled, you should see a sine wave at around 6.3MHz on analog output pin 0.

There is also a 20 bit digital counter connected to the oscillator output. The top 8 bits are connected to the LEDs.
So you should also see the most significant bit flashing every ~6 seconds.

### External hardware

Oscilloscope.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 |   | counter bit 12  |         |
| 1 |   | counter bit 13  |         |
| 2 |   | counter bit 14  |         |
| 3 |   | counter bit 15  |         |
| 4 |   | counter bit 16  |         |
| 5 |   | counter bit 17  |         |
| 6 |   | counter bit 18  |         |
| 7 |   | counter bit 19  |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 11 | sine out           |

### Chip location

{{< shuttle-map "tt07" "518" >}}

---
hidden: true
title: "35 WS2812B LED strip driver"
weight: 142
---

## 35 : WS2812B LED strip driver

* Author: Ciro Cattuto
* Description: Drives a WS2812B LED strip with random colors for each refresh
* [GitHub repository](https://github.com/ccattuto/tt05-rng-ws2812b-strip)
* [GDS submitted](https://github.com/ccattuto/tt05-rng-ws2812b-strip/actions/runs/6751325055)
* [Wokwi](https://wokwi.com/projects/380120751165092865) project
* [Extra docs](https://github.com/ccattuto/tt05-rng-ws2812b-strip/blob/main/README.md)
* Clock: 20000000 Hz
* External hardware: WS2812B strip of arbitrary lengthd



### How it works

This project drives a strip of WS2812B RGB LEDs, periodically updating the strip with random color values. The project consists of three main modules:

- a [linear feedback 16-bit shift register](https://en.wikipedia.org/wiki/Linear-feedback_shift_register) to generate a stream of pseudo-random bits
- a 5-bit synchronous increasing counter, wrapping to 0 when the counter reaches 25. WHen driven by a 20 MHz clock source, the counter generates the 1.25 us pulses required by the [WS2812B protocol](https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf). The duration of the high phase of the pulse is controlled by the random bit stream generated above.
- a 16-bit ripple counter increasing at the end of each pulse, used to divide the pulse frequency and generate the LED strip refresh signal


### How to test

Set the clock frequency to 20 MHz and connect OUT2 to the DIN signal of a WS2812B LED strip. Optionally connect to IN6 the DOUT signal of the last LED of the strip. Press and release the reset button. The strip should light up with random colors, updating at a frequency controllable using the SW3 and SW4 switches.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock source selection  | shift register output | none |
| 1 | external clock source  | shift register clock | none |
| 2 | refresh freq sel (low)  | WS2812B LED strip input | none |
| 3 | refresh freq sel (high)  | LED strip overflow | none |
| 4 | none  | LED strip refresh | none |
| 5 | none  | none | none |
| 6 | WS2812B LED strip output  | none | none |
| 7 | shift register input  | none | none |

### Chip location

{{< shuttle-map "tt05" "35" >}}

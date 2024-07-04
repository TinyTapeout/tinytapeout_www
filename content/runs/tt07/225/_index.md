---
hidden: true
title: "225 Serial Character LED Matrix"
weight: 56
---

## 225 : Serial Character LED Matrix

* Author: Ciro Cattuto
* Description: LED matrix character display controlled via UART
* [GitHub repository](https://github.com/ccattuto/tt07-serial-charmatrix)
* [GDS submitted](https://github.com/ccattuto/tt07-serial-charmatrix/actions/runs/9191900743)
* HDL project
* [Extra docs]()
* Clock: 20000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project drives an LED-matrix character display composed of one or more [Pixie Chroma](https://connornishijima.github.io/Pixie_Chroma/) chainable devices, each one featuring two 5x7 LED matrices based on the WS2812B RGB LEDs. Each 5x7 LED matrix displays one character. The display shows characters received over a serial port.

Up to 4 chained devices are supported for a maximum of 8 characters. The displayed characters are received from a serial port using the UART protocol (9600 baud, 8N1). The project includes a [simple UART implementation](https://github.com/ccattuto/verilog-uart). Every time a character is received over UART, the displayed characters shift left, and the new character appears to the right. 5x7 matrix representations for printable ASCII characters are supported using the font from [Arduino Microview Library](https://github.com/geekammo/MicroView-Arduino-Library/blob/master/font5x7.h) encoded in a character ROM. Non-printable ASCII characters are shown as an empty rectangle. Each new character appears with a color randomly chosen among a palette of 16 colors contained in a color ROM. A pseudo-random number generator based on a linear-feedback shift register is used for color selection.

The project is designed to demonstrate components that should be easily re-usable:

- WS2812B LED strip driver
- [UART receiver and transmitter](https://github.com/ccattuto/verilog-uart) (8N1 only, no flow control)
- linear-feedback pseudo-random number generator
- character ROM
- cocotb tests for UART and [WS2812B protocol](https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf)

### How to test

Basic setup:

* Connect `uo[0]` to the input pin (`DATA_IN`) of a [Pixie Chroma](https://connornishijima.github.io/Pixie_Chroma/) LED-matrix display (two 5x7 WS2812B LED matrices). Ensure the `VCC` and `GND` pins are connected to an adequate power source.
* Configure the input (e.g., using the DIP switches of the PCB) as follows: set `ui[0]` and `ui[1]` to `0` to use one Pixie Chrome (i.e., two 5x7 LED matrices); set `ui[2]` to `1` to enable UART echo; set `ui[4]` and `ui[5]` to `0` to disable LED dimming, set `ui[6]` to `0` to select internal display refresh, and `ui[7]` to `0` to select random color selection.
* Connect the UART interface of the project (RX is `ui[3]`, TX is `uo[4]`) to a serial terminal or a UART-to-USB PMOD or adapter (e.g., the one provided by the onboard RP2040 of the Tiny Tapeout PCB). Configure the serial interface for 9600 baud, 8 bits, 1 start bit, no parity bit, and 1 stop bit (8N1), with no hardware or software flow control.
* Open the terminal and type any characters: printable ASCII characters will appear from the right-hand side on the LED matrix and shift left as more characters are typed. Each character will appear with a different random color. Non-printable ASCII characters are shown as an empty rectangle. When `ui[2]` is set to `1`, received characters are echoed on the serial connection.

To use **more than one Pixie Chroma**, [chain](https://connornishijima.github.io/Pixie_Chroma/?section=datasheet) additional displays after the first one. This project supports up to 4 displays (e.g., 8 5x7 LED matrices). Set `ui[1]` and `ui[0]` (e.g., by using the DIP switches of the PCB) to configure the number of displays you are using: `00` for 1 display, `01` for 2 displays, `10` for 3 displays, and `11` for 4 displays (8 5x7 characters).

**Dimming** of the LED matrix is controlled by the `ui[5]` and `ui[4]` signals: `00` for no dimming, `01`, `10`, and `11` for increasing dimming.

The **color of characters** is randomly chosen when `ui[6]` is low, and fixed when ``ui[6]` is high. The fixed color can be changed by sending over UART a non-printable byte >= 128: the lower 4 bits of such value are stored and used as an index in the color ROM (16 different colors).

Two **display refresh modes** are available, controlled by `ui[6]`. When `ui[6]` is low, refresh is internally triggered at a frequency of about 75 Hz. When `ui[6]` is high, refresh is triggered via UART, whenever a CR or LF character is received. For both refresh modes, `uo[1]` is pulsed high on LED matrix refresh.

### External hardware

* 1 to 4 [Pixie Chroma](https://connornishijima.github.io/Pixie_Chroma/) WS2812B LED-matrix displays (chained if more than one is used). An external power source for the LED matrix is recommended.
* UART terminal or UART-to-USB adapter (PMOD or on-board via RP2040). TX-only is sufficient.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | num chars selector 0  | LED strip  |         |
| 1 | num chars selector 1  | LED strip latch  |         |
| 2 | UART loopback option  |   |         |
| 3 | UART RX  |   |         |
| 4 | dimmer selector 0  | UART TX  |         |
| 5 | dimmer selector 1  |   |         |
| 6 | internal/external refresh selector  |   |         |
| 7 | random/fixed color selector  | UART RX valid  |         |


### Chip location

{{< shuttle-map "tt07" "225" >}}

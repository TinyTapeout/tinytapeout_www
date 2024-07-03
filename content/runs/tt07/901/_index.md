---
hidden: true
title: "901 CRC-8 CCITT"
weight: 105
---

## 901 : CRC-8 CCITT

* Author: Aiden Fox Ivey
* Description: A simple parallel implementation of CRC-8 following CCITT specs. This implies 0x00 is the start value.
* [GitHub repository](https://github.com/aidenfoxivey/tt07-verilog-template)
* [GDS submitted](https://github.com/aidenfoxivey/tt07-verilog-template/actions/runs/9011435901)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

`ui` should have the two bytes you want added to the CRC8. If you want to restart the internal CRC value, then pull `rst_n` low. That will set it back to the default 0x00. `enable` should be high unless you want to ignore the new calculated value from the specific clock cycle. You can add any number of two byte combinations to it and it will calculate the CRC8 CCITT value for the given combination.

<https://crccalc.com> can help you calculate the CRC8 if you want.

The specific polynomial in this case is 1+x^1+x^2+x^8.

### How to test

Run `make` in the `/test` directory.

### External hardware

None required! The design is combinational, requiring only a small buffer to store the current CRC value. As a result, it's quite simple.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | CRC input pin 0.  | CRC output pin 0.  | Represents whether or not to ingest the values on ui to the CRC.        |
| 1 | CRC input pin 1.  | CRC output pin 1.  |         |
| 2 | CRC input pin 2.  | CRC output pin 2.  |         |
| 3 | CRC input pin 3.  | CRC output pin 3.  |         |
| 4 | CRC input pin 4.  | CRC output pin 4.  |         |
| 5 | CRC input pin 5.  | CRC output pin 5.  |         |
| 6 | CRC input pin 6.  | CRC output pin 6.  |         |
| 7 | CRC input pin 7.  | CRC output pin 7.  |         |


### Chip location

{{< shuttle-map "tt07" "901" >}}

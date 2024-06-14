---
hidden: true
title: "1 TinyTapeout 7 Factory Test"
weight: 5
---

## 1 : TinyTapeout 7 Factory Test

* Author: Tiny Tapeout
* Description: Factory test module
* [GitHub repository](https://github.com/TinyTapeout/tt07-factory-test)
* [GDS submitted](https://github.com/TinyTapeout/tt07-factory-test/actions/runs/9134220939)
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

The factory test module is a simple module that can be used to test all the I/O pins of the ASIC.

It has three modes of operation:

1. Mirroring the input pins to the output pins (when `rst_n` is low).
2. Mirroring the bidirectional pins to the output pins (when `rst_n` is high `sel` is low).
3. Outputing a counter on the output pins and the bidirectional pins (when `rst_n` is high and `sel` is high).

The following table summarizes the modes:

| `rst_n` | `sel` | Mode                 | ou_out value | uio pins |
|---------|-------|----------------------|--------------|----------|
| 0       | X     | Input mirror         | ui_in        | High-Z   |
| 1       | 0     | Bidirectional mirror | uio_in       | High-Z   |
| 1       | 1     | Counter              | counter      | counter  |

The counter is an 8-bit counter that increments on every clock cycle, and resets when `rst_n` is low.

### How to test

1. Set `rst_n` low and observe that the input pins (`ui_in`) are output on the output pins (`ou_out`).
2. Set `rst_n` high and `sel` low and observe that the bidirectional pins (`uio_in`) are output on the output pins (`ou_out`).
3. Set `sel` high and observe that the counter is output on both the output pins (`ou_out`) and the bidirectional pins (`uio`).


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | sel / in_a[0]  | output[0] / counter[0]  | in_b[0] / counter[0]        |
| 1 | in_a[1]  | output[1] / counter[1]  | in_b[1] / counter[1]        |
| 2 | in_a[2]  | output[2] / counter[2]  | in_b[2] / counter[2]        |
| 3 | in_a[3]  | output[3] / counter[3]  | in_b[3] / counter[3]        |
| 4 | in_a[4]  | output[4] / counter[4]  | in_b[4] / counter[4]        |
| 5 | in_a[5]  | output[5] / counter[5]  | in_b[5] / counter[5]        |
| 6 | in_a[6]  | output[6] / counter[6]  | in_b[6] / counter[6]        |
| 7 | in_a[7]  | output[7] / counter[7]  | in_b[7] / counter[7]        |


### Chip location

{{< shuttle-map "tt07" "1" >}}

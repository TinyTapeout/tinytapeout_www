---
hidden: true
title: "610 Sequence detector using 7-segment"
weight: 138
---

## 610 : Sequence detector using 7-segment

* Author: Atharv Sharma &amp; Lipika Gupta
* Description: Detects sequence '1001' and displays '8.' on 7-segment led display, otherwise displays '-' only
* [GitHub repository](https://github.com/atharv-004/tt06-sequence-counter)
* [GDS submitted](https://github.com/atharv-004/tt06-sequence-counter/actions/runs/8753407035)
* HDL project
* [Extra docs]()
* Clock: 1 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

- In this project, we have designed a sequence detector using finite state machine (FSM)
- It is designed using verilog, and detects sequence '1001'
- The logic is made using cases, and it detects the sequence while covering overlapping cases as well

### How to test

- If the sequence is detected, the output register z is set to logic 1 that displays '8.' on 7-segment display
- If the sequence is not detected (the output register is 0), 7-segment display shows '-'
- LEDs can be tested in two ways when ui_in [7:1] is kept 7'b1111111 (status for testing - condition = 7'b1111111):
  1. If first 4 bits of reg seg_test (uio_in [7:4]) are 0 during testing, we can display numbers from 0 to 9 if we vary last 4 bits (uio_in[3:0]) from 0000 to 1001
  2. If first 4 bits of reg seg_test (uio_in [7:4]) are 1 during testing, we can display each led seperately by varying last 4 bits (uio_in[3:0]) from 0000 to 0111

### External hardware

- We need to use 8 LEDs for 7-segment LED display output ([7:0] uo_out), so that the output can be displayed and verified accordingly at seg
- In addition to this, we need to use an input source from which we can manipulate input logic onto the input register x (ui_in[0])


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | x  | seg[0]  | seg_test[0]        |
| 1 | condition[0]  | seg[1]  | seg_test[1]        |
| 2 | condition[1]  | seg[2]  | seg_test[2]        |
| 3 | condition[2]  | seg[3]  | seg_test[3]        |
| 4 | condition[3]  | seg[4]  | seg_test[4]        |
| 5 | condition[4]  | seg[5]  | seg_test[5]        |
| 6 | condition[5]  | seg[6]  | seg_test[6]        |
| 7 | condition[6]  | seg[7]  | seg_test[7]        |


### Chip location

{{< shuttle-map "tt06" "610" >}}

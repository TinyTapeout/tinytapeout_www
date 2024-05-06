---
hidden: true
title: "12 8080 CPU"
weight: 59
---

## 12 : 8080 CPU

* Author: Emily Schmidt
* Description: It's an Intel 8080-compatible CPU core that can hopefully run Microsoft BASIC, CP/M, etc.
* [GitHub repository](https://github.com/aiju/tt06-aiju-8080)
* [GDS submitted](https://github.com/aiju/tt06-aiju-8080/actions/runs/8695486161)
* HDL project
* [Extra docs]()
* Clock: 1000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

It's a 8080-compatible CPU. It needs the RP2040 to simulate RAM and I/O.

### How to test

TBD

### External hardware

RP2040.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | bus_handshake_ack  | bus_handshake_req  |      |
| 1 | debug_req  | bus_state[0]  |      |
| 2 | int_req  | bus_state[1]  |      |
| 3 |   | bus_io  |      |
| 4 |   | cpu_fetch  |      |
| 5 |   | cpu_in_debug  |      |
| 6 |   | cpu_halted  |      |
| 7 |   | cpu_int_ack  |      |


### Chip location

{{< shuttle-map "tt06" "12" >}}

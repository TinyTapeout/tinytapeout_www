---
hidden: true
title: "484 DFFRAM Example (128 bytes)"
weight: 165
---

## 484 : DFFRAM Example (128 bytes)

* Author: Uri Shaked
* Description: 128 bytes DFFRAM module
* [GitHub repository](https://github.com/TinyTapeout/tt06-dffram-example)
* [GDS submitted](https://github.com/TinyTapeout/tt06-dffram-example/actions/runs/8724088110)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

### How it works

It uses a 32x32 1RW [DFFRAM](https://github.com/AUCOHL/DFFRAM) macro to implement a 128 bytes (1 kilobit) RAM module.

Reseting the project **does not** reset the RAM contents.

### How to test

Set the `addr` pins to the desired address, and set the `in` pins to the desired value.
Then, set the `wen` pin to `1` to write the value to the RAM, or set it to `0` to read
the value from the RAM, and pulse `clk`.

The `out` pins will contain the value read from the RAM.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | addr[0] | out[0] | in[0] |
| 1 | addr[1] | out[1] | in[1] |
| 2 | addr[2] | out[2] | in[2] |
| 3 | addr[3] | out[3] | in[3] |
| 4 | addr[4] | out[4] | in[4] |
| 5 | addr[5] | out[5] | in[5] |
| 6 | addr[6] | out[6] | in[6] |
| 7 | wen | out[7] | in[7] |

### Chip location

{{< shuttle-map "tt06" "484" >}}

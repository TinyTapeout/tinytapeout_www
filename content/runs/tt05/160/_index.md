---
hidden: true
title: "160 Winner-Take-All Network (Verilog Demo)"
weight: 121
---

## 160 : Winner-Take-All Network (Verilog Demo)

* Author: Nicholas Kuipers
* Description: Implement a WTA network
* [GitHub repository](https://github.com/Kuipman/tt05-wta-demo)
* [GDS submitted](https://github.com/Kuipman/tt05-wta-demo/actions/runs/6753115020)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Take in an 8-bit current and parse two sets of 4 bits. Only output
the 4 bits of highest value (if equal, preference to MSB)


### How to test

After reset, result values and comparator are reset to 0


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | current bit 11  | membrane potential bit a | spike bit 0 |
| 1 | current bit 12  | membrane potential bit b | unspecified |
| 2 | current bit 13  | membrane potential bit c | unspecified |
| 3 | current bit 14  | membrane potential bit d | unspecified |
| 4 | current bit 15  | membrane potential bit e | unspecified |
| 5 | current bit 16  | membrane potential bit f | unspecified |
| 6 | current bit 17  | membrane potential bit g | unspecified |
| 7 | current bit 18  | membrane potential bit h | unspecified |

### Chip location

{{< shuttle-map "tt05" "160" >}}

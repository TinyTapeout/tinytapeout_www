---
hidden: true
title: "398 TROS"
weight: 94
---

## 398 : TROS

* Author: Gerrit Grutzeck
* Description: Three different ring oscillator, with different temperature dependence
* [GitHub repository](https://github.com/gfg-development/tt05-tros)
* [GDS submitted](https://github.com/gfg-development/tt05-tros/actions/runs/6668123284)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

This design implements three different ring oscillators. The first one is a basic NAND
based oscillator. The second one adds additional NAND gates to the outputs of the stages
of the oscillator to increase the capacitve loading. The last one uses the tri-state
inverts with a sub-threshold tri-state enable.

For measuring the frequencies each oscillator is driving a counter. This counters are
latched with the latch counter input. With the input transfer counter the currently
selected counter (counter select bits) is transfered via the serial data stream. The
transfer is driven by the clock of the design. As encoding a manchester encoding is used.

Furthermore, a divided version of the clock of each oscillator is outputted. The divisior
can be configured with the frequency selection bits.


### How to test

TODO


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | latch counter  | not used | not used |
| 1 | counter reset  | not used | not used |
| 2 | transfer counter  | not used | not used |
| 3 | counter select bit 0  | not used | not used |
| 4 | counter select bit 1  | serial data stream | not used |
| 5 | select latch counter (sync/async)  | divided clock of oscillator 0 | not used |
| 6 | frequency divider select bit 0  | divided clock of oscillator 1 | not used |
| 7 | frequency divider select bit 1  | divided clock of oscillator 2 | not used |

### Chip location

{{< shuttle-map "tt05" "398" >}}

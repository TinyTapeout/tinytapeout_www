---
hidden: true
title: "4 Power supply sequencer"
weight: 5
---

## 4 : 0b 000 000 100 : Power supply sequencer

* Author: Jon Klein
* Description: Sequentially enable and disable channels with configurable delay
* [GitHub repository](https://github.com/loxodes/tt02-submission-loxodes)
* [Most recent GDS build](https://github.com/loxodes/tt02-submission-loxodes/actions/runs/3405763799)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: None, but could be useful for GaAs amplifiers or other circuits which need sequenced power supplies.



### How it works

Counters and registers control and track the state of channel activations. The delay input sets the counter threshold.

### How to test

After reset, bring enable high to enable channels sequentially, starting with channel 0. Bring enable low to switch off channels sequentially, starting with channel 7.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | channel 0 |
| 1 | reset  | channel 1 |
| 2 | enable  | channel 2 |
| 3 | delay0  | channel 3 |
| 4 | delay1  | channel 4 |
| 5 | delay2  | channel 5 |
| 6 | delay3  | channel 6 |
| 7 | delay4  | channel 7 |

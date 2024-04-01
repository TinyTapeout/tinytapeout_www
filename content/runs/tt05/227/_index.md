---
hidden: true
title: "227 Heart Rhythm Analyzer"
weight: 137
---

## 227 : Heart Rhythm Analyzer

* Author: Nissan Kunju
* Description: The design integrates a threshold-based filtering mechanism followed by peak detection on the filtered data.
* [GitHub repository](https://github.com/tkmceberl/tt05-tkm-heart)
* [GDS submitted](https://github.com/tkmceberl/tt05-tkm-heart/actions/runs/6755490516)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

The peak detection module implements a peak detection circuit that checks for the occurrence of a peak in the input data stream over three consecutive clock cycles. The threshold filtering module is a threshold filter that processes the input data based on the threshold and higher flag, and then passes it to the peak detection module. The clock divider module divides the input clock signal by 2 to generate a new clock signal clk2.
Example: setting the inputs to 00010000 will program 16384 into the compare register.
With a 10MHz clock the counter will increment ~610 times per second.


### How to test

Keep the reset at 0 for two clock pulses. Change the reset to 1. Set the threshold pin to 1 and send the lower four bits first. Set the higher pin to 1 and send the higher four bits. Switch the threshold to 0. Alternate between sending the lower and higher four bits as inputs.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | compare bit 11  | segment a | second counter bit 0 |
| 1 | compare bit 12  | segment b | second counter bit 1 |
| 2 | compare bit 13  | segment c | second counter bit 2 |
| 3 | compare bit 14  | segment d | second counter bit 3 |
| 4 | compare bit 15  | segment e | second counter bit 4 |
| 5 | compare bit 16  | segment f | second counter bit 5 |
| 6 | compare bit 17  | segment g | second counter bit 6 |
| 7 | compare bit 18  | dot | second counter bit 7 |

### Chip location

{{< shuttle-map "tt05" "227" >}}

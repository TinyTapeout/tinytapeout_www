---
hidden: true
title: "228 Option22"
weight: 229
---

## 228 : 0b 011 100 100 : Option22

{{< tt-scanchain-switches "011100100" >}}

* Author: bitluni
* Description: Looong shift register. 22x8 bit
* [GitHub repository](https://github.com/bitluni/tt02-option22)
* [Most recent GDS build](https://github.com/bitluni/tt02-option22/actions/runs/3600925255)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Pink LEDs



### How it works

write=high: Data is shifted-in on clock positive edge. Each 8 clocks a full byte is buffered at the output. It rotatetes all 22 words. Reset only resets internal counter for the bit index.

### How to test

Keep write high and push 22x8 bits in. Keep clock with write low to recieve the bytes a the output

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | led 0 |
| 1 | reset  | led 1 |
| 2 | write  | led 2 |
| 3 | data  | led 3 |
| 4 | none  | led 4 |
| 5 | none  | led 5 |
| 6 | none  | led 6 |
| 7 | none  | led 7 |

---
hidden: true
title: "24 Simple multiply"
weight: 25
---

## 24 : 0b 000 011 000 : Simple multiply

{{< tt-scanchain-switches "000011000" >}}

* Author: Anton Maurovic
* Description: Multiply two 8-bit numbers, get a 16-bit result.
* [GitHub repository](https://github.com/algofoogle/anton1-tt03)
* [Most recent GDS build](https://github.com/algofoogle/anton1-tt03/actions/runs/4789489833)
* HDL project
* [Extra docs]()
* Clock: Any Hz
* External hardware: 



### How it works

Do synchronous reset first, then on each rising clock edge...

Clock in each of two 8-bit values, one `nibble` at a time (high to low).

Then clock out a 16-bit value, one byte (via `result`) at a time (high to low).


### How to test

After synchronous reset, expect `result` output to be 0.

Set `nibble` to a value of your choice, then pulse the clock.

Repeat 3 more times.

Then pulse the clock 1 more times, each time expecting to get a byte at the output `result`.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | result[0] |
| 1 | reset  | result[1] |
| 2 | none  | result[2] |
| 3 | none  | result[3] |
| 4 | nibble[0]  | result[4] |
| 5 | nibble[1]  | result[5] |
| 6 | nibble[2]  | result[6] |
| 7 | nibble[3]  | result[7] |

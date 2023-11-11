---
hidden: true
title: "655 Ring oscillator with counter"
weight: 122
---

## 655 : Ring oscillator with counter

* Author: Uri Shaked
* Description: Test module for the TT05 power switching FET
* [GitHub repository](https://github.com/TinyTapeout/tt05-ringosc-counter)
* [GDS submitted](https://github.com/TinyTapeout/tt05-ringosc-counter/actions/runs/6615590239)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

A ring oscillator with a 64-bit counter that counts the number of oscillations. The counter is connected to pins ou_out,
and is shifted by the cnt_shift input. The counter is reset when cnt_reset is high, and stops when cnt_stop is high.


### How to test

Set inputs 0 to 5 to the desired counter shift value, and observe the counter on outputs 0 to 7.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | cnt_shift[0]  | cnt[0] | none |
| 1 | cnt_shift[1]  | cnt[1] | none |
| 2 | cnt_shift[2]  | cnt[2] | none |
| 3 | cnt_shift[3]  | cnt[3] | none |
| 4 | cnt_shift[4]  | cnt[4] | none |
| 5 | cnt_shift[5]  | cnt[5] | none |
| 6 | cnt_stop  | cnt[6] | none |
| 7 | cnt_reset  | cnt[7] | none |

### Chip location

{{< shuttle-map "tt05" "655" >}}

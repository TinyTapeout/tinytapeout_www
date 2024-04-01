---
hidden: true
title: "197 Super Mario Tune on A Piezo Speaker"
weight: 152
---

## 197 : Super Mario Tune on A Piezo Speaker

* Author: Milosch Meriac
* Description: Plays Super Mario Tune over a Piezo Speaker connected across io_out[1:0]
* [GitHub repository](https://github.com/meriac/tt05-play-tune)
* [GDS submitted](https://github.com/meriac/tt05-play-tune/actions/runs/6682451635)
* HDL project
* [Extra docs](https://github.com/meriac/tt05-play-tune#readme)
* Clock: 100000 Hz
* External hardware: Piezo speaker connected across io_out[1:0]

![picture](images/picture.jpg)

### How it works

Converts an RTTL ringtone into verilog using Python - and plays it back using differential PWM modulation


### How to test

Provide 100kHz clock on io_in[0], briefly hit reset io_in[1] (L->H->L) and io_out[1:0] will play a differential sound wave over piezo speaker (Super Mario)


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock  | piezo_speaker_p | none |
| 1 | reset  | piezo_speaker_n | none |
| 2 | none  | none | none |
| 3 | none  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |

### Chip location

{{< shuttle-map "tt05" "197" >}}

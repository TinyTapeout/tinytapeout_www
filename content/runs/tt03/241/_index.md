---
hidden: true
title: "241 Super Mario Tune on A Piezo Speaker"
weight: 242
---

## 241 : 0b 011 110 001 : Super Mario Tune on A Piezo Speaker

{{< tt-scanchain-switches "011110001" >}}

* Author: Milosch Meriac
* Description: Plays Super Mario Tune over a Piezo Speaker connected across io_out[1:0]
* [GitHub repository](https://github.com/meriac/tt03-play-tune)
* HDL project
* [Extra docs](https://github.com/meriac/tt03-play-tune#readme)
* Clock: 6250 Hz
* External hardware: Piezo speaker connected across io_out[1:0]

![picture](images/chip-design.png)

### How it works

Converts an RTTL ringtone into verilog using Python - and plays it back using differential PWM modulation


### How to test

Provide 6.25kHz clock on io_in[0], briefly hit reset io_in[1] (L->H->L) and io_out[1:0] will play a differential sound wave over piezo speaker (Super Mario)


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | piezo_speaker_p |
| 1 | reset  | piezo_speaker_n |
| 2 | none  | none |
| 3 | none  | none |
| 4 | none  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |

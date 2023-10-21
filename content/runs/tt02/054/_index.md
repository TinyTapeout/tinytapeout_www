---
hidden: true
title: "54 Multiple Tunes on A Piezo Speaker"
weight: 55
---

## 54 : 0b000110110 : Multiple Tunes on A Piezo Speaker

* Author: Jiaxun Yang
* Description: Plays multiple Tunes over a Piezo Speaker connected across io_out[1:0]
* [GitHub repository](https://github.com/FlyGoat/tt02-play-tune-flygoat)
* [Most recent GDS build](https://github.com/FlyGoat/tt02-play-tune-flygoat/actions/runs/3471079918)
* HDL project
* [Extra docs](https://github.com/flygoat/tt02-play-tune-fg#readme)
* Clock: 10000 Hz
* External hardware: Piezo speaker connected across io_out[1:0]



### How it works

Converts an RTTL ringtone into verilog using Python - and plays it back using differential PWM modulation

### How to test

Provide 10kHz clock on io_in[0], briefly hit reset io_in[1] (L->H->L) and io_out[1:0] will play a differential sound wave over piezo speaker, different tunes can be selected by different tune_sel inputs

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | piezo_speaker_p |
| 1 | reset  | piezo_speaker_n |
| 2 | tune_sel0  | ledout_0 |
| 3 | tune_sel1  | ledout_1 |
| 4 | none  | ledout_2 |
| 5 | none  | ledout_3 |
| 6 | none  | none |
| 7 | none  | none |

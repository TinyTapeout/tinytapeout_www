---
hidden: true
title: "16 bad apple"
weight: 17
---

## 16 : bad apple

* Author: shadow1229
* Description: Plays bad apple over a Piezo Speaker connected across io_out[1:0]. Based on https://github.com/meriac/tt02-play-tune
* [GitHub repository](https://github.com/shadow1229/tt03-bad-apple)
* [Most recent GDS build](https://github.com/shadow1229/tt03-bad-apple/actions/runs/4501496077)
* HDL project
* [Extra docs]()
* Clock: 12000 Hz
* External hardware: Piezo speaker connected across io_out[1:0]



### How it works

Converts an RTTL ringtone into verilog and plays it back using differential PWM modulation.

### How to test

Provide 12kHz clock on io_in[0], briefly hit reset io_in[1] (L->H->L) and io_out[1:0] will play a differential sound wave over piezo speaker (Bad Apple)

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

---
hidden: true
title: "75 Synth"
weight: 62
---

## 75 : Synth

* Author: Gyanepsaa Singh
* Description: Sound synthesizer
* [GitHub repository](https://github.com/GyanepsaaS/TT_synth_GyanepsaaS)
* [GDS submitted](https://github.com/GyanepsaaS/TT_synth_GyanepsaaS/actions/runs/6716905119)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works


### How to test

Basic sound synthesizer module: generates sound signal, modulates it with an ASDR envelope, and outputs it.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | select triangle or sawtooth waveform  | sound output | 2-bit attack |
| 1 | None  | n/a | 2-bit decay |
| 2 | sampling frequency clock  | n/a | 2-bit sustain |
| 3 | hold a note  | n/a | 2-bit release |
| 4 | 4 frequency selection bits  | n/a | n/a |
| 5 | n/a  | n/a | n/a |
| 6 | n/a  | n/a | n/a |
| 7 | n/a  | n/a | n/a |

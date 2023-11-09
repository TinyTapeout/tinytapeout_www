---
hidden: true
title: "196 bytebeat"
weight: 171
---

## 196 : bytebeat

* Author: proppy
* Description: Attempt implement the formula from one of the original [bytebeat](http://countercomplex.blogspot.com/2011/10/algorithmic-symphonies-from-one-line-of.html) [video](https://www.youtube.com/watch?v=tCRPUv8V22o) in hardware.

* [GitHub repository](https://github.com/proppy/tt05-bytebeat)
* [GDS submitted](https://github.com/proppy/tt05-bytebeat/actions/runs/6726953909)
* HDL project
* [Extra docs](https://colab.research.google.com/gist/proppy/1258e007febb077c42ccea1d28e092c4/xls_audio_playground.ipynb)
* Clock: 8000 Hz
* External hardware: 8bit pcm DAC, rotary encoder

![picture](images/picture.png)

### How it works

The main module accept parameters from 4x 4-bit parameters buses and generate PCM samples according to the following formula: `((t*a)&amp;(t&gt;&gt;b))|((t*c)&amp;(t&gt;&gt;d))`.
Derivative of this project can easily be created by editing the formula in `src/bytebeat.x` and using the [XLS: Accelerated HW Synthesis](https://github.com/google/xls) toolkit to regenerate the Verilog code.
See the following [notebook](https://colab.research.google.com/gist/proppy/1258e007febb077c42ccea1d28e092c4/xls_audio_playground.ipynb) for more information.


### How to test

- Tweak parameters pins using a absolute encoders
- Feed the data coming from the sample bus to a DAC


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | param `a` bit 0/3  | pcm sample bit 0/7 | param `c` bit 0/3 |
| 1 | param `a` bit 1/3  | pcm sample bit 1/7 | param `c` bit 1/3 |
| 2 | param `a` bit 2/3  | pcm sample bit 2/7 | param `c` bit 2/3 |
| 3 | param `a` bit 3/3  | pcm sample bit 3/7 | param `c` bit 3/3 |
| 4 | param `b` bit 0/3  | pcm sample bit 4/7 | param `d` bit 0/3 |
| 5 | param `b` bit 1/3  | pcm sample bit 5/7 | param `d` bit 1/3 |
| 6 | param `b` bit 2/3  | pcm sample bit 6/7 | param `d` bit 2/3 |
| 7 | param `b` bit 3/3  | pcm sample bit 7/7 | param `d` bit 3/3 |

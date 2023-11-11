---
hidden: true
title: "76 Sawtooth Generator"
weight: 81
---

## 76 : Sawtooth Generator

* Author: Mooneer Salem
* Description: Generates sawtooth waves for use as audio.
* [GitHub repository](https://github.com/tmiw/supercon2023-ttl)
* [GDS submitted](https://github.com/tmiw/supercon2023-ttl/actions/runs/6756848654)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz
* External hardware: 



### How it works

This project increments a counter from 0 to 25,000,000 and back to zero again. The current value
of this counter is then passed into a PDM modulator to generate the output. Filtering it with a low
pass filter (designed for use in the audio range, recommended cutoff ~30 KHz) and then amplifying the
result will result in usable audio.


### How to test

Add a suitable RC low pass filter to output pin 7. This can be probed by an oscillocope as-is. To listen to the audio,
the output of the RC filter should be attached to a suitable audio amplifier.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | PCM sawtooth wave output (bit 9) | PCM sawtooth wave output (bit 9) |
| 1 | none  | PCM sawtooth wave output (bit 10) | PCM sawtooth wave output (bit 10) |
| 2 | none  | PCM sawtooth wave output (bit 11) | PCM sawtooth wave output (bit 11) |
| 3 | none  | PCM sawtooth wave output (bit 12) | PCM sawtooth wave output (bit 12) |
| 4 | Frequency left shift amount (in bits) -- bit 0  | PCM sawtooth wave output (bit 13) | PCM sawtooth wave output (bit 13) |
| 5 | Frequency left shift amount (in bits) -- bit 1  | PCM sawtooth wave output (bit 14) | PCM sawtooth wave output (bit 14) |
| 6 | Frequency left shift amount (in bits) -- bit 2  | PCM sawtooth wave output (bit 15) | PCM sawtooth wave output (bit 15) |
| 7 | Frequency left shift amount (in bits) -- bit 3  | PDM sawtooth wave output (needs LPF) | PDM sawtooth wave output (needs LPF) |

### Chip location

{{< shuttle-map "tt05" "76" >}}

---
hidden: true
title: "122 Tiny Synth"
weight: 123
---

## 122 : Tiny Synth

* Author: Nanik Adnani
* Description: A tiny synthesizer! Modulates the frequency of the clock based on inputs, plays a C scale (hopefully).
* [GitHub repository](https://github.com/nanikgeorge/tt02-submission-template)
* [Most recent GDS build](https://github.com/nanikgeorge/tt02-submission-template/actions/runs/3599083491)
* [Wokwi](https://wokwi.com/projects/348255968419643987) project
* [Extra docs](Not done yet, eventually!)
* Clock: 12500 Hz
* External hardware: Not entirely sure yet, it outputs a square wave, I still need to figure out what to do with it to make it make sound.

Image path is broken

### How it works

Will come back and write more after my exams!

### How to test

Make sure the clock is tied to input 0, whatever frequency you want, play with it! Then you can play different notes by toggling the other inputs.

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | Pitch + 1 Octave |
| 1 | C  | Pitch |
| 2 | D  | Pitch - 1 Octave |
| 3 | E  | Pitch - 2 Octave |
| 4 | F  | none |
| 5 | G  | none |
| 6 | A  | none |
| 7 | B  | none |

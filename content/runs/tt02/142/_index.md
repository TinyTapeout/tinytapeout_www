---
hidden: true
title: "142 FFT Butterfly in Wokwi"
weight: 143
---

## number : 0b010001110 : FFT Butterfly in Wokwi

* Author: James R
* Description: Single FFT butterfly with 2-bit resolution
* [GitHub repository](https://github.com/jdrosent/tt02-submission-template)
* [Most recent GDS build](https://github.com/jdrosent/tt02-submission-template/actions/runs/3603537611)
* [Wokwi](https://wokwi.com/projects/349952820323025491) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: None



### How it works

Calculates low-resolution FFT of two 2-bit inputs

### How to test

Change the inputs

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | xr0.0  | xr0.0 |
| 1 | xr0.1  | Xr0.1 |
| 2 | xj0.0  | Xj0.0 |
| 3 | xj0.1  | Xj0.1 |
| 4 | xr1.0  | Xr1.0 |
| 5 | xr1.1  | Xr1.1 |
| 6 | xj1.0  | Xj1.0 |
| 7 | xj1.1  | Xj1.1 |

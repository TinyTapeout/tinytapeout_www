---
hidden: true
title: "62 CNS TT02 Test 1:Score Board"
weight: 63
---

## 62 : CNS TT02 Test 1:Score Board

* Author: Bryan Bonilla Garay, Devin Alvarez, Ishaan Singh, Yu Feng Zhou, and N. Sertac Artan
* Description: First test run of CNS Lab. Displays an 8-bit score from one of two players as a two-digit hexadecimal value.
* [GitHub repository](https://github.com/NYIT-CNS/cns001-tt02-submission1)
* [Most recent GDS build](https://github.com/NYIT-CNS/cns001-tt02-submission1/actions/runs/3599135291)
* [Wokwi](https://wokwi.com/projects/349901899339661908) project
* [Extra docs](https://github.com/arta-ns/tt02-cns-submission/blob/main/README.md)
* Clock: 0 Hz
* External hardware: None

Image path is broken

### How it works

Two counters keep track of user scores, which can be updated, and displayed on the 7-segment display.

### How to test

Wokvi

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | rst  | segment d |
| 4 | display_digit  | segment e |
| 5 | display_user  | segment f |
| 6 | user  | segment g |
| 7 | mode  | dot |

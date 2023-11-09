---
hidden: true
title: "101 Analog Clock"
weight: 2
---

## 101 : Analog Clock

* Author: Justin Hui
* Description: LED controller for an Analog Clock taking a 1Hz internal clk input
* [GitHub repository](https://github.com/jhui323444/tt05-submission-template-Justin-Hui-Analog-Clock)
* [GDS submitted](https://github.com/jhui323444/tt05-submission-template-Justin-Hui-Analog-Clock/actions/runs/6679043817)
* [Wokwi](https://wokwi.com/projects/379824923824476161) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 16 leds



### How it works

increments seconds Counter for 60 sec.
increments min Counter for 60 min.
increments hour counter for 12 hours

all daisy chained.

The LEDs will show the hour and the last 15min increment


### How to test

connect leds to each output pin as described below

RST will set the time to 11:59.

Input Pins 7/8 are used to set the time, by toggling those it should increment the internal clock by 1 min/hour. You should see the hour output update immediately.
The min output will only change once the next 15min increment passes

Input Pin 1 will stop the clock when high


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | hour 12 led | hour 8 led |
| 1 | stop the clock  | hour 1 led | hour 9 led |
| 2 | none  | hour 2 led | hour 10 led |
| 3 | none  | hour 3 led | hour 11 led |
| 4 | none  | hour 4 led | 0 min |
| 5 | none  | hour 5 led | 15 min |
| 6 | increment min counter by 1  | hour 6 led | 30 min |
| 7 | increment hour counter by 1  | hour 7 led | 45 min |

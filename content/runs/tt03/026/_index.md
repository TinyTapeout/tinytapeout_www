---
hidden: true
title: "26 tiny logic analyzer"
weight: 27
---

## 26 : 0b 000 011 010 : tiny logic analyzer

{{< tt-scanchain-switches "000011010" >}}

* Author: yubex
* Description: The design samples one data input and shows the current state and edge events using the 7 segment display. 
* [GitHub repository](https://github.com/yubex/tt03-tiny-logic-analyzer)
* [Most recent GDS build](https://github.com/yubex/tt03-tiny-logic-analyzer/actions/runs/4618646195)
* HDL project
* [Extra docs]()
* Clock: 12500 Hz
* External hardware: no external HW required



### How it works

The samples of the data input pin are shifted into a shift register first. After that the 2 most significant bits of the shift register are used to detect the current signal state (high, low) and the edge events (rising edge, falling edge). There are 4 different states/events displayed on the 7 segment display.

| state/event  | segments on |
| ------------ | ----------- |
| high         | a           |
| low          | d           |
| rising edge  | e and f     |
| falling edge | b and c     |

The edge events duration is extended by counters, so the events can actually be seen by the human eye.


### How to test

You can test by using the dip switch connected to io_in[2] as data input.
I plan to connect a wire to the pin on the PCB by PMOD connector or custom soldering to be able to have a "measurement probe". ;-)  


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | data input  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | dot |

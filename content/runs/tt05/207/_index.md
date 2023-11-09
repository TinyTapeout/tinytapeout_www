---
hidden: true
title: "207 AGL CorticoNeuro-1"
weight: 29
---

## 207 : AGL CorticoNeuro-1

* Author: Arfan Ghani
* Description:  Information is encoded as a sequence of events or spikes in neuro-inspired computing. Investigating how information is represented and processed as spike trains is of particular interest. This chip implements several test clusters featuring various spike trains. 
* [GitHub repository](https://github.com/arfanghani/tt05-submission-AGhani)
* [GDS submitted](https://github.com/arfanghani/tt05-submission-AGhani/actions/runs/6681997284)
* [Wokwi](https://wokwi.com/projects/376553022662786049) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The input clock is connected with the inputs of the neuron clusters. The bi-directional pins are provided where external input stimulus could be provided. The raster spiking plots are generated to observe the variability of different spiking neuron clusters.


### How to test

Provide input clock frequencies to the neuron clusters and observe the output through the oscilloscope.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | CLOCK Attached to the on-board clock  | OUT0 on-board CLOCK | D0  OUTPUT from a 1-bit FF |
| 1 | INO Connected with a 1-bit FF  | OUT1 Output from the LFSR | D7 OUTPUT from (1x3x3) cluster |
| 2 | IN1 external input to the MUX  | OUT2 Output from 2-bit FF | D1 OUTPUT from the (5X5) cluster |
| 3 | IN2 Enable signal to the MUX  | OUT3 Output from 3-bit FF | D2 OUTPUT from (6x6x6) cluster |
| 4 | IN3 Connected as a SELECT pin for the MUX (connected with (1x3x2x1) and (6x6x6) cluster.  | OUT4 Output from 4-bit FF | D3 OUTPUT from (6x6x6) cluster |
| 5 | IN4 Input to the (6x6x6) cluster  | OUT5 Output from 5-bit FF | D4 connected as an OUTPUT pin from either the (6x6x6) cluster or the (1x3x2x1) cluster (where IN3 is the input select pin) |
| 6 | IN5 Input to the (6x6x6) cluster  | OUT6 Output from 6-bit FF | D5 INPUT to the (6x6x6) cluster |
| 7 | IN6 Input to the (6x6x6) cluster  | OUT7 MUX output) | D6 INPUT to the (6x6x6) cluster |

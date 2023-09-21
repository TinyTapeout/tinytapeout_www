---
hidden: true
title: "289 Simulador de cruzamento de semáforo"
weight: 95
---

## 289 : Simulador de cruzamento de semáforo

* Author: Gabriel Marcio Vieira, Renan Rosa Ferreira, Francisco Eduardo Gonçalves, Dayane Cassuriaga
* Description: Simulator of a traffic light at a two-way intersection with a pedestrian crosswalk.
* [GitHub repository](https://github.com/GabrielVieiraa18/ProjetoSemaforo)
* [GDS submitted](https://github.com/GabrielVieiraa18/ProjetoSemaforo/actions/runs/6116027903)
* [Wokwi](https://wokwi.com/projects/375245713375900673) project
* [Extra docs]()
* Clock: 1 Hz
* External hardware: 

Image path is broken

### How it works

This circuit will use the chips internal clock and the PCBs low-level reset. The project in question belongs to the domain of traffic control systems and involves the implementation of a simulation of a traffic light using logical gate circuits. The simulation scenario takes place at an intersection composed of two main avenues, offering drivers the option to proceed straight or make a turn in their respective directions. In this context, four sets of traffic lights are present, but the control logic is applied to only two of them simultaneously. The system also incorporates a state dedicated to pedestrians, activated when all vehicle traffic lights display the red color, thus allowing safe pedestrian crossing. The overall operation of the system is based on logical combinations that determine each of the possible states


### How to test

Testing involves observing each traffic light state without punctuation: hardware setup, initial states, input signals, output monitoring, pedestrian activation, and the cycle of states.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | none  | S1 Vermelho | none |
| 1 | none  | S1 Amarelo | none |
| 2 | none  | S1 Verde | none |
| 3 | none  | S2 Vermelho | none |
| 4 | none  | S2 Amarelo | none |
| 5 | none  | S2 Verde | none |
| 6 | none  | Pedestres (PD) Vermelho | none |
| 7 | none  | Pedestres (PD) Verde | none |

---
hidden: true
title: "358 Probador de lógica básico"
weight: 138
---

## 358 : Probador de lógica básico

* Author: Felipe R. Serrano Domínguez
* Description: It allows to validate the operation of basic logic devices; gates and flip-flops individually 
* [GitHub repository](https://github.com/felipe-SD/tt04-submission-template-2)
* [GDS submitted](https://github.com/felipe-SD/tt04-submission-template-2/actions/runs/6125850719)
* [Wokwi](https://wokwi.com/projects/375248885704300545) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Through common inputs and different outputs for every gate; AND, NAND, OR, NOR, NOT and XOR can be observe the logic states. It also allows you to test the different types of basic flip flops D, RS and JK


### How to test

To test logic gates all inputs are common (A,B).
The outputs for each gate are addressed to different ports.  
To test the flip flops must be selected using the selection pins (6,7).
pin 6 enables the JK or the rest.
pin 7 states enable D or SR so only one flip flop can be tested at a time.
It is expected to be able to validate its basic operation by means of truth tables.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | CLK (FLIP FLOPS)  | OUT 0 (GATE AND) | none |
| 1 | RST (FLIP FLOPS)  | OUT 1 (GATE NAND) | none |
| 2 | INO (INPUT A GATE)  | OUT 2 (GATE OR) | none |
| 3 | IN1 (INPUT B GATE)  | OUT 3 (GATE NOR) | none |
| 4 | IN2 (INPUT J FLIP FLOP)  | OUT 4 (GATE NOT) | none |
| 5 | IN3 (INPUT K FLIP FLOP)  | OUT 5 (GATE XOR) | none |
| 6 | IN4 (SET FLIP FLOP)  | OUT 6 (FLIP FLOP Q) | none |
| 7 | IN5 (D FLIP FLOP)  | OUT 7 (FLIP FLOP Q') | none |

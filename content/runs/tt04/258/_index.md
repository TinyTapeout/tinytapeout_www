---
hidden: true
title: "258 State machine of an impulse counter"
weight: 62
---

## 258 : State machine of an impulse counter

* Author: Adrian Novosel
* Description: This design is not meant to be a standalone circuit. It is a state machine of my bachelor's thesis project which was also submitted to Tiny Tapeout. This submittal will be used for debugging and will give a better insight into the working principle of its source design. (https://github.com/DinkoOletic/tt04-wokwi_unizgfer_multich_pulse_counter_v01a)
* [GitHub repository](https://github.com/adriannovosel/tt04-state-machine)
* [GDS submitted](https://github.com/adriannovosel/tt04-state-machine/actions/runs/6086760324)
* [Wokwi](https://wokwi.com/projects/374969806854695937) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

By clocking the state machine adress pins a2, a1 and a0 change their values every 12 clocks. Shift/load pin is set to 1 and then back to zero every 12 clocks. Other outputs are used for debugging.


### How to test

After an impulse on reset pin and a subsequent impulse on the ovf pin, you can start clocking the circuit. Adress pins marked with "a" should follow the sequence: "100"->"000"->"001"->"010"->"011"->"000". Shift/load pin wil be set to 1 after every adress change and then set back to 0 on the next clock. The sequence will repeat itself.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | reset  | counter flop1 | a2 |
| 1 | ovf  | counter flop2 | a1 |
| 2 | clk  | counter flop3 | a0 |
| 3 | bi oe  | counter flop4 | shift/load |
| 4 | none  | zero | sm flop1 |
| 5 | none  | one | sm flop 2 |
| 6 | none  | global reset | sm flop 3 |
| 7 | none  | ovf | sm flop 4 |

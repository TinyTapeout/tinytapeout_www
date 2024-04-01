---
hidden: true
title: "243 Gameshow Buzzer"
weight: 244
---

## 243 : 0b 011 110 011 : Gameshow Buzzer

{{< tt-scanchain-switches "011110011" >}}

* Author: Christopher Haddad, Jenna Nandlall, Matthew Nunez, Farhan Kobir
* Description: Jeopardy gameshow type of buzzer.
* [GitHub repository](https://github.com/chrisnhaddad/tt03-gameshowbuzzer)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

There are three inputs which are buzzer_inputs (6 bits), rst (1 bit), and clk (1 bit). When somebody presses their buzzer, the rest are locked out. The only

way for someone else to buzz is after the the buzzers are reset (using rst). In the code we made a buzzer_lockout_reg (6 bits) to represent which button

is clicked first. How the code works is it first checks if the reset button is clicked. If so, buzzer_lockout_reg is set to '000000' meaning no buzzers are

currently pressed. If rst is not raised, it is checked if buzzer_lockout_reg is equal to '000000'. If so, this means anyone can click, and buzzer_lockout_reg

is set to equal buzzer_inputs. The output is equal to buzzer_lockout_reg.


### How to test

How to test our code is to just test out different scenarios as if it is actually being used. For instance, one can press a buzzer and try pressing another. 

The user will notice that no other buzzer will work until reset is pressed. io_in[0] is set to clk. io_in[1] is set to rst. io_in[7:2] is

set to buzzer_inputs. io_out[5:0] is set to buzzer_locked_reg.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a |
| 1 | reset  | segment b |
| 2 | none  | segment c |
| 3 | none  | segment d |
| 4 | none  | segment e |
| 5 | none  | segment f |
| 6 | none  | segment g |
| 7 | none  | dot |

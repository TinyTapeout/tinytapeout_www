---
hidden: true
title: "30 Potato-1 (Brainfuck CPU)"
weight: 31
---

## 30 : 0b000011110 : Potato-1 (Brainfuck CPU)

* Author: Pepper Gray (they/them)
* Description: Potato-1 is part of a Brainfuck CPU. It is only the control logic, i.e. you have to bring your own registers, memory controller and io logic. It is very simple, hence likely very slow: You could probably run your brainfuck code on a potato and it would be equally fast, hence the name. The project picture was generated using DALL·E.

* [GitHub repository](https://github.com/peppergrayxyz/Potato-1)
* [Most recent GDS build](https://github.com/peppergrayxyz/Potato-1/actions/runs/3457925933)
* HDL project
* [Extra docs](https://github.com/peppergrayxyz/Potato-1)
* Clock: 12500 Hz
* External hardware: Bidirectional Counter (3x)
  - program counter
  - data pointer
  - value
ROM (addressed via programm counter)
RAM (addressed via data pointer, all bytes must be zero after reset)

some TTL gates, e.g. to configure that the value is written to RAM every time it is changed or the data pointer is changed


![picture](images/potato1.png)

### How it works

Each rising edge the CU will read in the instruction, zero flag and IO Wait flag and process it. Each falling edge the output pins will be updated. The output pins indiciate which action to take, i.e. which registers to increment/decrement. If Put or Get pin is set, the CU will pause execution until IO Wait is unset. If IO Wait is already unset, the CU will immidiatly execute the next command without waiting.

Additionaly to the 8 original brainfuck instructions there is a HALT instruction to stop execution and a NOP instructions to do nothing, also there are unused instruction (some of them may be used to extend the instruction set in a later itteration).

Instructions:
  0000  >       Increment the data pointer 
  0001  <       Decrement data pointer
  0010  +       Increment value
  0011  -       Decrement value
  0100  .       Write value
  0101  ,       Read value
  0110  [       Start Loop (enter if value is non-zero, else jump to matchin ']')
  0111  ]       End Loop (leave if value is zero, , else jump to matchin '[')
  1000  NOP     No Operation
  1111  HALT    Halt Execution


### How to test

Reset: 
  Set Reset_n=0 and wait one clockycycle

Run: 
  Set Reset_n=1

Simple Test:
  - all input pins zero
  - clock cycle
  - Reset_n high
  - clock cylce
  --> PC++ high, all outer outputs are low
 
Check test/test.py for small scripts to verify the CU logic


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | Clock  | PC++ |
| 1 | Reset_n  | PC-- |
| 2 | IO Wait  | X++ |
| 3 | Zero Flag  | X-- |
| 4 | Instruction[0]  | A++ |
| 5 | Instruction[1]  | A-- |
| 6 | Instruction[2]  | Put |
| 7 | Instruction[3]  | Get |

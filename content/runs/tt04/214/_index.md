---
hidden: true
title: "214 ASCII Text Printer Circuit"
weight: 7
---

## 214 : ASCII Text Printer Circuit

* Author: Noel Prado, Daniel Mundo, Angel Orellana and Julio Lopez.
* Description: A circuit that is able to print two different texts. It utilizes 8 output pins, each character is printed as the ASCII character described in 8 bits.
* [GitHub repository](https://github.com/NoelFPB/Soy_de_Zacapa)
* [GDS submitted](https://github.com/NoelFPB/Soy_de_Zacapa/actions/runs/6076524958)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: Any microcontroller, we have tested it using TIVA C and a FPGA.



### How it works

This circuit is designed to output ASCII-encoded text sequences. The circuit can display two different texts.

**Select Input**: The select pins (`ui_in[1:0]`), a 2-bit binary input, determine which text sequence will be displayed:

- `2'b00` or `2'b11`: Outputs a sequence of characters that correspond to the beginning of a traditional song from Guatemala.
- `2'b01` or `2'b10`: Outputs a sequence of characters with the names of the people that participated in this project.

The text is displayed character-by-character, with each character's ASCII representation determined by the current value of an internal counter. The counter increments with each clock cycle until the specified limit for the chosen text sequence is reached, at which point it resets, allowing the sequence to be displayed repetitively.


### How to test

To test this project, one needs to use an external microcontroller, where one can read digital input pins synchronously. After reading the characters via the input pins, you can send the pins to a computer via UART communication and display the texts on the computer terminal.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | select bit 0  | Bit 0 | none |
| 1 | select bit 1  | Bit 1 | none |
| 2 | none  | Bit 2 | none |
| 3 | none  | Bit 3 | none |
| 4 | none  | Bit 4 | none |
| 5 | none  | Bit 5 | none |
| 6 | none  | Bit 6 | none |
| 7 | none  | Bit 7 | none |

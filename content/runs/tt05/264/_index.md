---
hidden: true
title: "264 Tiny Game of Life"
weight: 103
---

## 264 : Tiny Game of Life

* Author: Petros Emmanouilidis
* Description: Simulates cellular automaton Conway's Game of Life on an 8x8 grid using shift registers.
* [GitHub repository](https://github.com/Petros-Emmanouilidis/tt05-Petros-Emmanouilidis-tiny-game-of-life)
* [GDS submitted](https://github.com/Petros-Emmanouilidis/tt05-Petros-Emmanouilidis-tiny-game-of-life/actions/runs/6748674635)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The circuit employs 2 distinct shift registers to run the simulation: A Load Shift Register stores the initial state of the grid based on the user's input.
Once the simulation commences, all cells in the Load Shift Register are updated and copied in parallel inside the Update Shift Register. This update step
occurs within a single clock cycle. After updating the grid, the circuit outputs each new value sequentially before proceeding to the next state of the game.
The output stage of the game lasts 64 clock cycles (one clock cycle for each cell in the grid) and involves pushing the updated cells from the Update Shift Register
back to the Load Shift Register. Once all updated values have trickled into the Load Shift Register, the circuit returns to its update phase, restarting the cycle of
update and output. After the simulation commences, the circuit will oscillate between updating and outputting indefinitely (unless reset) without any further user input.

Inputting Values:

Before starting the game, the user can sequentially load the grid's values into the circuit, one cell at a time. Cells are organized in row major order and
the circuit can, at any time, hold 64 cells. If the user attempts to load more than 64 values, the oldest ones are pushed off the grid. The value of any inputted
cell is specified using the 0th input line ui_in[0]. Loading a single cell into the circuit takes 1 clock cycle, meaning that inputting the entire table into the
register takes 64 clock cycles.

Starting the Game:

To commence the simulation, the user must assert the 1st input line ui_in[1]. Upon doing so, the circuit stops receiving further user inputs and starts playing the
game. The value present in ui_in[0] while ui_in[1] is asserted is not loaded into the table.

Output Encoding:

During the output phase, the circuit drives all 8 output lines. The 0th bit uo_out[0] encodes the value of the currently displayed cell. Bits 1 to 8,
uo_out[7:1] encode the location of the cell in the table. The location can take values 1 to 64 inclusive and is in row major order (meaning that 1 corresponds
to the cell in the top left corner and 64 corresponds to the cell in the bottom right corner). During update, output bits uo_out[7:1] are set to 0 and the
data output at uo_out[0] is invalid. During input, all output lines are invalid.


### How to test

Load values through ui_in[0] (one cell value per clock cycle) and start the game by asserting ui_in[1]. Make sure that ui_in[1] starts out
disasserted; otherwise, the game will commence without any values loaded into the table, and the circuit will be inaccessible unless reset.

In general, pray it works.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Data Input Line  | Data Output Line | none |
| 1 | Start Game  | 0th bit of cell location | none |
| 2 | none  | 1st bit of cell location | none |
| 3 | none  | 2nd bit of cell location | none |
| 4 | none  | 3rd bit of cell location | none |
| 5 | none  | 4th bit of cell location | none |
| 6 | none  | 5th bit of cell location | none |
| 7 | none  | 6th bit of cell location | none |

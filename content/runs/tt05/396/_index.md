---
hidden: true
title: "396 Game of Life 8x32 (siLife)"
weight: 163
---

## 396 : Game of Life 8x32 (siLife)

* Author: Uri Shaked
* Description: Silicon implementation of Conway's Game of Life with LED Dot Matrix Output
* [GitHub repository](https://github.com/urish/tt05-silife-max)
* [GDS submitted](https://github.com/urish/tt05-silife-max/actions/runs/6575311635)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: MAX7219 LED Matrix (FC-16 module)

![picture](images/picture.jpg)

### How it works

It is a silicon implementation of Conway's Game of Life. The game is played on a 8x32 grid, and the rules are as follows:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


### How to test

Demo mode:
The demo mode loads a pre-defined game into the grid and advances it automatically.
To enter the demo mode, `wr_en` high while reseting the design (`rst_n` low).
Use the `pattern_sel` inputs to select the desired demo pattern.
Set `en` to 1 to automatically advance one generation every 0.4 seconds (assuming a 10MHz clock).
To pause the game, set `en` to 0.

Manual mode:
Load the initial grid row by row.
Each row is loaded by selecting the row number (using the `row_sel[4:0]` inputs),
setting the `cell_in[7:0]` inputs to the desired state, and pulsing the `wr_en` input.

Once the grid is loaded, set the `en` input to 1 to start the game.
The game will advance one step in each clock cycle.
To pause the game, set the `en` input to 0.

To view the current state of the grid, set the `row_sel[4:0]` inputs to the desired row number,
`max7219_en` to 0, and read the `cell_out[7:0]` outputs.

Alternatively, set `max7129_en` to 1 to display the grid on a MAX7219 LED Matrix (FC-16 module).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | row_sel[0] / pattern_sel  | cell_out[0] / max7129_cs | cell_in[0] |
| 1 | row_sel[1]  | cell_out[1] / max7129_clk | cell_in[1] |
| 2 | rol_sel[2]  | cell_out[2] / max7129_din | cell_in[2] |
| 3 | rol_sel[3]  | cell_out[3] | cell_in[3] |
| 4 | rol_sel[4]  | cell_out[4] | cell_in[4] |
| 5 | max7129_en  | cell_out[5] | cell_in[5] |
| 6 | en  | cell_out[6] | cell_in[6] |
| 7 | wr_en  | cell_out[7] | cell_in[7] |

### Chip location

{{< shuttle-map "tt05" "396" >}}

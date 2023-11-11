---
hidden: true
title: "270 Game of Life 8x8 (siLife)"
weight: 170
---

## 270 : Game of Life 8x8 (siLife)

* Author: Uri Shaked
* Description: Silicon implementation of Conway's Game of Life
* [GitHub repository](https://github.com/urish/tt05-silife-8x8)
* [GDS submitted](https://github.com/urish/tt05-silife-8x8/actions/runs/6523847279)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It is a silicon implementation of Conway's Game of Life. The game is played on a 8x8 grid, and the rules are as follows:

- Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- Any live cell with two or three live neighbours lives on to the next generation.
- Any live cell with more than three live neighbours dies, as if by overpopulation.
- Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


### How to test

Load initial grid row by row.
Each row is loaded by selecting the row number (using the row_sel[2:0] inputs),
setting the cell_in[7:0] inputs to the desired state, and pulsing the wr_en input.

Once the grid is loaded, set the en input to 1 to start the game. The game will advance one step in each clock cycle.
To pause the game, set the en input to 0.

To view the current state of the grid, set the row_sel[2:0] inputs to the desired row number, and read the cell_out[7:0] outputs.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | row_sel[0]  | cell_out[0] | cell_in[0] |
| 1 | row_sel[1]  | cell_out[1] | cell_in[1] |
| 2 | rol_sel[2]  | cell_out[2] | cell_in[2] |
| 3 | none  | cell_out[3] | cell_in[3] |
| 4 | none  | cell_out[4] | cell_in[4] |
| 5 | none  | cell_out[5] | cell_in[5] |
| 6 | en  | cell_out[6] | cell_in[6] |
| 7 | wr_en  | cell_out[7] | cell_in[7] |

### Chip location

{{< shuttle-map "tt05" "270" >}}

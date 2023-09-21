---
hidden: true
title: "119 AI Decelerator"
weight: 97
---

## 119 : AI Decelerator

* Author: machinaut
* Description: Systolic array for matrix multiplication
* [GitHub repository](https://github.com/machinaut/tt04-machinaut-systolic)
* [GDS submitted](https://github.com/machinaut/tt04-machinaut-systolic/actions/runs/6125014193)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz
* External hardware: 



### How it works

Implements a 2x2 outer product, such that it can stream accumulate a product of a 2xN and Nx2 matrix.

It's pipelined to run 4-clock-cycle blocks, and has a single 4-stage floating point multiply-accumulate.

**Chip diagram:**

This is designed to be placed in a grid of tiles, with each element having 4+1 wires connecting each side.

Columns move data from north to south (inputs to outputs), and rows move data west to east (inputs to outputs).

The wires between each tile is 4 data wires and 1 control wire, and are all 1-directional.

Shared clock and reset are not shown, but are assumed to be connected to all tiles.

(See inputs/outputs at the bottom for pin assignment)

```
                   col_in[4]  
                   |   col_ctrl_in
                   |   |
                   v   v
                 |--------|
    row_in[4] -> |        | -> row_out[4]
  row_ctrl_in -> |        | -> row_ctrl_out
                 |--------|
                   |   |
                   |   v
                   v   col_ctrl_out
                   col_out[4]
```

**Block timing diagram:**

We have 4 clock cycles per block, which advances at the positive edge of each clock.

We'll use "block" to denote the whole block, and "count" to count the cycles within a block.

Note the control inputs are always passed through exactly from inputs to outputs on the next block.
However data outputs might be different from data inputs (see modes below).

Key: ci = col_in, ri = row_in, cc = col_ctrl, rc = row_ctrl, co = col_out, ro = row_out

```
       Block | 0       | 1       | 2       | ...
       Count | 0 1 2 3 | 0 1 2 3 | 0 1 2 3 | ...
-------------|---------|---------|---------|-----
      col_in | blk0_ci | blk1_ci | blk2_ci | ...
 col_ctrl_in | blk0_cc | blk1_cc | blk2_cc | ...
      row_in | blk0_ri | blk1_ri | blk2_ri | ...
 row_ctrl_in | blk0_rc | blk1_rc | blk2_rc | ...
-------------|---------|---------|---------|-----
     col_out |         | blk0_co | blk1_co | ...
col_ctrl_out |         | blk0_cc | blk1_cc | ...
     row_out |         | blk0_ro | blk1_ro | ...
row_ctrl_out |         | blk0_rc | blk1_rc | ...
```

**Modes:**

The shared control bits (from both row and column) decide what to do with the data in the block.

```
col_ctrl | row_ctrl | mode
---------|----------|------------
0000     | 0000     | passthrough
0WX0     | 1YZ0     | multiply-accumulate
1000     | 0100     | read-write accumulator 0
1100     | 0000     | read-write accumulator 1
```

Passthrough Mode will pass through data unchanged (current block data will be sent out as the next block).

Multiply-accumulate Mode will interpret the input data as FP8 vectors, and multiply them and accumulate them (see math below).
This mode will also pass through the data unchanged (current block data will be sent out as the next block).
W, X, Y, Z specify the FP8 format for the inputs (see below).

Read-write accumulator modes will shift input with the accumulator data and output data.
This is used to simultaneously read-out the current accumulator state, and write-in the next accumulator state.

```
RW mode | cci  | rci  | ci      | ri      | co (next) | ro (next)
--------|------|------|---------|---------|-----------|---------------
      0 | 0100 | 1000 | C0 (new)| C1 (new)| C0 (prev) | C1 (prev)
      1 | 0000 | 1100 | C2 (new)| C3 (new)| C2 (prev) | C3 (prev)
```

**Multiply-Accumulate Math:**

We interpret the column data as vector A0, A1, and the bits of the control input specify the FP8 format of A0, A1.
Ditto for row data and B0, B1.  The format bit is 0 if the value is E5M2 and 1 if the value is E4M4.
See this paper for details on the FP8 formats: https://arxiv.org/pdf/2209.05433.pdf

The accumulators (C0, C1, C2, C3) are all FP16.

```
           A0      A1
           |       |
           v       v
        |-------|-------|
  B0 -> |  C0   |  C1   | -> B0
        |-------|-------|  (prev)
  B1 -> |  C2   |  C3   | -> B1
        |-------|-------|
           |         |
           v         v
           A0 (prev) A1
```

**Systolic Tiling:**

Each block controls what should happen in the following block.

Notionally, this could be used in a systolic tile pattern of N * M tiles, moving data along columns and rows.  This hasn't been tested.
Note that this still works with reading and writing accumulators since all the values are shifted block by block along the columns and rows.


### How to test

I have no idea what clock speeds are safe for this, so probably start out slow and work your way up until there are glitches.
(This is like only 4 pipeline stages for a full multiply-accumulate, so it has some nasty propagation chains)

To compute A * B + C, where A is a 2xN matrix, B is a Nx2 matrix, and C is a 2x2 matrix, do the following:
(A and B can be mixtures of FP8 formats, and C is FP16)

Use the read-write accumulator mode to write in C over two blocks  (skip this if you want to start with C = 0)

```
Block 0:
    col_in: C_0,0 (FP16)
    row_in: C_0,1 (FP16)
    col_ctrl_in: b1000
    row_ctrl_in: b0100
Block 1:
    col_in: C_1,0 (FP16)
    row_in: C_1,1 (FP16)
    col_ctrl_in: b1100
    row_ctrl_in: b0000
```

Then use the multiply-accumulate mode for N blocks

```
Block K:
    col_in: A_0,K A_1,K (FP8, FP8)
    row_in: B_K,0 B_K,1 (FP8, FP8)
    col_ctrl_in: b0WX0 (where W, X are FP8 format bits for A0, A1)
    row_ctrl_in: b1YZ0 (where Y, Z are FP8 format bits for B0, B1)
```

Finally read out the result from the accumulator, just like you wrote it in

```
Block 0:  (Note we care about the outputs here)
    col_ctrl_in: b1000
    row_ctrl_in: b0100
    col_out: C_0,0 (FP16)
    row_out: C_0,1 (FP16)
Block 1:  (Note we care about the outputs here)
    col_ctrl_in: b1100
    row_ctrl_in: b0000
    col_out: C_1,0 (FP16)
    row_out: C_1,1 (FP16)
```

**Example:**

I have a 2xK matrix A, with values `A00` through `A1K`, and a Kx2 matrix B, with values `BK0` through `BK1`,
and a 2x2 matrix C with values `C00` through `C11`.  We want to compute `A * B + C = D` where D is a 2x2 matrix with values `D00` through `D11`.

The basic steps are

* Write in the initial value of C
* Stream in the values of A and B, and multiply-accumulate
* Read out the accumulated result, and call it D

For simplicity, we'll assume all the A and B values are E5M2 format, but remember they can be configured per-value.

C and D are both in FP16 format.

Remember that each block is four clock cycles, and each clock cycle 1/4 of the inputs and outputs are transmitted.

```
Block | col_in | row_in | cci  | rci  | col_out | row_out
------|--------|--------|------|------|---------|---------
0     | C00    | C01    | 1000 | 0100 |         |
1     | C10    | C11    | 1100 | 0000 |         |
2     | A00A10 | B00B01 | 0000 | 1000 |         |
3     | A01A11 | B10B11 | 0000 | 1000 |         |
...   | ...    | ...    | ...  | ...  |         |
K + 2 | A0KA1K | BK0BK1 | 0000 | 1000 |         |
K + 3 |        |        | 1000 | 0100 | D00     | D01
K + 4 |        |        | 1100 | 0000 | D10     | D11
```

So we can compute this in just K + 4 blocks, where K is the inner size of the A and B matrix product.

(Also we can save 2 blocks if C is zero, since that's the reset value of the accumulators)


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Row Data In 0  | Row Data Out 0 | Row Control Out |
| 1 | Row Data In 1  | Row Data Out 1 | Col Control Out |
| 2 | Row Data In 2  | Row Data Out 2 | Row Control In |
| 3 | Row Data In 3  | Row Data Out 3 | Col Control In |
| 4 | Column Data In 0  | Column Data Out 0 | Unused |
| 5 | Column Data In 1  | Column Data Out 1 | Unused |
| 6 | Column Data In 2  | Column Data Out 2 | Unused |
| 7 | Column Data In 3  | Column Data Out 3 | Unused |

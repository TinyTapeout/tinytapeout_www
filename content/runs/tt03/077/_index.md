---
hidden: true
title: "77 AI Decelerator"
weight: 78
---

## 77 : 0b 001 001 101 : AI Decelerator

{{< tt-scanchain-switches "001001101" >}}

* Author: Hunter Scott
* Description: A 2x2 matrix multiplier, guaranteed to slow down your AI model training.
* [GitHub repository](https://github.com/blueintegral/tt03-ai-decelerator)
* [Most recent GDS build](https://github.com/blueintegral/tt03-ai-decelerator/actions/runs/4781716705)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Just performs arithmetic to do the matrix multiplication and outputs the result.


### How to test

Use the DIP switches to set the value of each position in the two matrices you're multiplying. That means that each position in each input matrix can only contain a zero or one. The output is 4 groups of 2 bits, each group representing one of the positions in the output matrix. 


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | 7 is Matrix 1, top left  | 7 is Result matrix, top left, bit 1 |
| 1 | 6 is Matrix 1, top right  | 6 is Result matrix, top left, bit 0 |
| 2 | 5 is Matrix 1, bottom left  | 5 is Result matrix, top right, bit 1 |
| 3 | 4 is Matrix 1, bottom right  | 4 is Result matrix, top right, bit 0 |
| 4 | 3 is Matrix 2, top left  | 3 is Result matrix, bottom left, bit 1 |
| 5 | 2 is Matrix 2, top right  | 2 is Result matrix, bottom left, bit 0 |
| 6 | 1 is Matrix 2, bottom left  | 1 is Result matrix, bottom right, bit 1 |
| 7 | 0 is Matrix 2, bottom right  | 0 is Result matrix, bottom right, bit 0 |

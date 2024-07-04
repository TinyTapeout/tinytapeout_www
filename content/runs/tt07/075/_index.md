---
hidden: true
title: "75 Modified Booth Multiplier"
weight: 17
---

## 75 : Modified Booth Multiplier

* Author: Varun Chandra Pendyala
* Description: The proposed design multiplies two 8bit signed numbers using modified booth algorithm
* [GitHub repository](https://github.com/sreeramtirumalasetty/major)
* [GDS submitted](https://github.com/sreeramtirumalasetty/major/actions/runs/9305454307)
* HDL project
* [Extra docs]()
* Clock: 100000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The project multiplies two 8 bit signed numbers and generates a 16 bit product using Modified Booth Multiplier Algorithm

### How to test

Two 8-bit signed numbers are fed as input to the multiplier, the multiplier bits are recoded and fed to a dadda multiplier design and the corresponding outputs are added in a carry lookahead adder to get the final 32 bit product

### External hardware

N.A


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | multiplicand[0]  | product[0]  | product[8]        |
| 1 | multiplicand[1]  | product[1]  | product[9]        |
| 2 | multiplicand[2]  | product[2]  | product[10]        |
| 3 | multiplicand[3]  | product[3]  | product[11]        |
| 4 | multiplicand[4]  | product[4]  | product[12]        |
| 5 | multiplicand[5]  | product[5]  | product[13]        |
| 6 | multiplicand[6]  | product[6]  | product[14]        |
| 7 | multiplicand[7]  | product[7]  | product[15]        |


### Chip location

{{< shuttle-map "tt07" "75" >}}

---
hidden: true
title: "718 tiny sha256"
weight: 119
---

## 718 : tiny sha256

* Author: xenia dragon
* Description: a minimal single-cycle-round sha256 core intended to fit in one tile
* [GitHub repository](https://github.com/xeniarose/tt07-sha256)
* [GDS submitted](https://github.com/xeniarose/tt07-sha256/actions/runs/9298180930)
* HDL project
* [Extra docs]()
* Clock: 50000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This is a minimal SHA-256 hash core implemented in a single-cycle-round architecture. TODO: expand
on this

### How to test

TODO: write instructions

### External hardware

No external hardware is needed besides some method of interacting with the bus to transfer commands
and data.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | addressed register bit 0  | ready  | data bit 0        |
| 1 | addressed register bit 1  | IO read/write selected  | data bit 1        |
| 2 | addressed register bit 2  | todo0  | data bit 2        |
| 3 | addressed register bit 3  | todo1  | data bit 3        |
| 4 | addressed register bit 4  | todo2  | data bit 4        |
| 5 | addressed register bit 5  | todo3  | data bit 5        |
| 6 | IO read/write select  | todo4  | data bit 6        |
| 7 | IO clock  | todo5  | data bit 7        |


### Chip location

{{< shuttle-map "tt07" "718" >}}

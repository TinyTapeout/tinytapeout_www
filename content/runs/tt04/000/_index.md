---
hidden: true
title: "0 Chip ROM"
weight: 137
---

## 0 : Chip ROM

* Author: Uri Shaked
* Description: ROM with information about the chip
* [GitHub repository](https://github.com/TinyTapeout/tt-chip-rom)
* [GDS submitted](https://github.com/TinyTapeout/tt-chip-rom/actions/runs/5777250605)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

ROM memory that contains information about the Tiny Tapeout chip. The ROM is 8-bit wide and 128 bytes long.

##### The ROM layout

The ROM layout is as follows:

| Address | Length | Encoding  | Description                              |
| ------- | ------ | --------- | ---------------------------------------- |
| 0       | 8      | 7-segment | Shuttle name (e.g. "tt04"), null-padded  |
| 32      | 96     | ASCII     | Chip descriptor (see below)              |

##### The chip descriptor

The chip descriptor is a simple null-terminated string that describes the chip.
Each line is a key-value pair, separated by an equals sign. It contains the following keys:

| Key     | Description                   | Example value              |
| ------- | ----------------------------- | -------------------------- |
| shuttle | The identifier of the shuttle | tt04                       |
| repo    | The name of the repository    | TinyTapeout/tinytapeout-04 |

Future Tiny Tapeout shuttles may add more keys to the chip descriptor.

Here is a complete example of a chip descriptor:

```
shuttle=tt04
repo=TinyTapeout/tinytapeout-04
```


### How to test

Read the ROM contents by setting the address pins and reading the data pins.
The first eight bytes of the ROM are 7-segment encoded and contain the shuttle name.
You can read them by toggling the first four DIP switches and observing the on-board 7-segment display.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | addr[0]  | data[0] | none |
| 1 | addr[1]  | data[1] | none |
| 2 | addr[2]  | data[2] | none |
| 3 | addr[3]  | data[3] | none |
| 4 | addr[4]  | data[4] | none |
| 5 | addr[5]  | data[5] | none |
| 6 | addr[6]  | data[6] | none |
| 7 | addr[7]  | data[7] | none |

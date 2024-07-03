---
hidden: true
title: "36 Clock Domain Crossing FIFO"
weight: 4
---

## 36 : Clock Domain Crossing FIFO

* Author: Pavan Mantri
* Description: This FIFO buffers 4-bits data asynchronously across clock domains
* [GitHub repository](https://github.com/Pa1mantri/tt07_cdc_fifo)
* [GDS submitted](https://github.com/Pa1mantri/tt07_cdc_fifo/actions/runs/9317048642)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The cdc_fifo module transfers data between two clock domains: a write clock domain and a read clock domain. The module includes a dual-ported RAM(dpram) for storing data, along with logic for handling read and write operations(cdc_fifo_read_state and cdc_fifo-write-state). synchronizers(synchronizer) and binary/gray converters(binary_to_gray and gray_to_binary) ensure proper synchronization between two clock domains.

### How to test

Hold write_reset and read_reset LOW while running the clock for a bit to reset, then raise to initialize the module.

writing to the fifo: Prepare your data on the 4-bit write_data bus, ensure the full state is low and then raise write_increment for 1 cycle of write_clock to write data into the FIFO memory.

Reading from the fifo: The FIFO will present the current output on the read_data bus. If empty is low, this output should be valid and you can acknowledge receive of this vallue by raising read_increment for 1 cycle of read_clock.

### External hardware

NO external hardware is used.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | write_clock  | empty  | write_reset        |
| 1 | write_increment  | full  | read_reset        |
| 2 | read_clock  |   |         |
| 3 | read_increment  |   |         |
| 4 | write_data0  | read_data0  |         |
| 5 | write_data1  | read-data1  |         |
| 6 | write_data2  | read_data2  |         |
| 7 | write_data3  | read_data3  |         |


### Chip location

{{< shuttle-map "tt07" "36" >}}

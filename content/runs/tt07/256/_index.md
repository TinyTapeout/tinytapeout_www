---
hidden: true
title: "256 router"
weight: 73
---

## 256 : router

* Author: Leeja &amp; Saranya
* Description: 1*3 router
* [GitHub repository](https://github.com/leeja-j/router_tinytapeout)
* [GDS submitted](https://github.com/leeja-j/router_tinytapeout/actions/runs/9015930570)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

routes the data to 3 directions

### How to test

give input to data_in

### External hardware


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | data_in[0]  | data_out_0[0]  | data_out_2[0]        |
| 1 | data_in[1]  | data_out_0[1]  | data_out_2[1]        |
| 2 | data_in[2]  | data_out_0[2]  | data_out_2[2]        |
| 3 | pkt_valid  | data_out_1[0]  | vld_out_0        |
| 4 | read_enb_0  | data_out_1[1]  | vld_out_1        |
| 5 | read_enb_1  | data_out_1[2]  | vld_out_2        |
| 6 | read_enb_2  | err  |         |
| 7 |   | busy  |         |


### Chip location

{{< shuttle-map "tt07" "256" >}}

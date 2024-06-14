---
hidden: true
title: "3 TTDLL"
weight: 24
---

## 3 : TTDLL

* Author: Dan Petrisko
* Description: An all-digital DLL
* [GitHub repository](https://github.com/dpetrisko/tt07-dll)
* [GDS submitted](https://github.com/dpetrisko/tt07-dll/actions/runs/9281004532)
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

This is a test design for all-digital tunable, hierarchical and composable oscillation blocks. The base primitives are delay elements, delay rows, delay columns and control registers. Control registers determine which delay elememts are active at a given setting, increasing or decreasing the total period. We deomnstrate a clock generator and 90-degree delay line as potential applications for these elements. This design has been validated in TSMC-28 using commercial tools. This will be the first test of this design on open tools and and open PDK.

For a clock generator there are an odd number of delay elements, which causes the total delay to act as half of a clock oscillation. This is a fairly simple ring oscillator design, although it is designed to be glitch-free upon frequency changes and have even steps between tuning frequencies.

For a 90-degree delay line (useful in DDR controllers among other things), we take two odd delay blocks equal in size. The output of the first block is the generated 90-degree clock. The output of the second block is a generated 180-degree clock. Now, 180-degrees is trivial phase to generate -- simply invert the input clock. We can compare the racing 180-degree clocks using a (intentionally) metastable register. If the dly180 > clkinv, then we reduce the dly latency. If the dly180 < clkinv, then we increase the dly latency. This will automatically tune dly90 due to the symmetry of the blocks.

TODO: Images coming soon!

### How to test

The main driver for hardware testing is bsg_tag
(https://github.com/bespoke-silicon-group/basejump_stl), which has python and C++ drivers available.
The exact tag sequence can be found in the test/ directory. Examples of using this testing
infrastructure is in ZynqParrot (https://github.com/black-parrot-hdk/zynq-parrot). If the sequence
is completed successfully, the IO outputs will increment proporotionally to the current clock
frequency!

### External hardware

Although the clock and delay period can be approximated by the counter outputs, an external oscilloscope is helpful for visualizing the clock and delay waveforms themselves, including phase and jitter.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | p_tag_clk_i  | p_osc_clk_o  | p_div_count_0_o        |
| 1 | p_tag_en_i  | p_ds_clk_o  | p_div_count_1_o        |
| 2 | p_tag_data_i  | p_gen_clk_o  | p_div_count_2_o        |
| 3 |   | p_dly_clk_o  | p_div_count_3_o        |
| 4 |   | p_mon_clk_o  | p_div_count_4_o        |
| 5 |   | p_div_clk_o  | p_div_count_5_o        |
| 6 |   | p_ds_reset_o  | p_div_count_6_o        |
| 7 |   | p_mon_reset_o  | p_div_count_7_o        |


### Chip location

{{< shuttle-map "tt07" "3" >}}

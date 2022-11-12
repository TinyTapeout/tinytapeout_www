---
title: "Important!"
description: "Important notes, please read first"
weight: 1
---

# Make sure your top module is named uniquely.

I recommend prepending your github username:

    # bad
    module top ( )

    # good
    module mattvenn_top ( )

# Follow exactly the module definition

We only support 8 ins and 8 outs:

    # bad
    module mattvenn_counter (
        input [100:0] my_bus,
        );

    # good
    module mattvenn_counter (
        input [7:0] io_in,
        output [7:0] io_out
        );

# Don't modify config.tcl

Tiny Tapeout is a compromise - we try to make it easy to get to ASIC, but we have to make limitations, like
IO speed, IO count, size etc. If you want to go full custom then check out the [Zero to ASIC course](https://zerotoasiccourse.com).

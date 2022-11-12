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

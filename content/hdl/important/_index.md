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

We only support 8 ins and 8 outs and they must be named `io_in` and `io_out`:

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

# Make sure your design isn't optimised away

It can be very strange to come from programming to hardware design. 
[Synthesis](https://www.zerotoasiccourse.com/terminology/synthesis/) tools are trying to optimise your design for area and speed.

* If you make a 32 bit register but only use the first 2 bits, Yosys will throw out the top 30 bits.
* If you make an 8 bit CPU but only ever output 1 bit, Yosys will optimise all your data paths and logic to just keep that one bit.

How can you know if your design is being optimised? Think about how much logic and flops your design needs to get a rough cell count. It's normal for Yosys to be able to reduce this number a bit, but if it's half as much as you expect or less, it's worth checking.

If you have a good testbench, you can run it on the [GL verilog](/hdl/fpga_vs_asic/#testing) and that will help you make sure your design is still working after synthesis.

# Check the synthesis Warnings

Look at the GitHub action log for the GDS build. Check the yosys section of the build and search for warnings. Common ones include:

* Multiple conflicting drivers
* Unconnected nets

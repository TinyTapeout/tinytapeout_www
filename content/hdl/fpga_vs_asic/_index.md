---
title: "FPGA to ASIC"
description: "Considerations for people moving from FPGA to ASIC"
---

# Reset

Most FPGAs allow initial statements, and flops are often initialised to zero. This is not the case with ASICs, where flops will have a random initial value at power on.
Initial statements are not allowed, so you must use an explicit reset.

{{< youtube 78MBLqm0OAQ >}}

# Combinational vs Sequential

In an FPGA, registers are 'free' in that every LUT has a flop. So people are used to doing lots of pipelining and registering. But in an ASIC, these are the most 'expensive'
cells in terms of area, so it's better to do more with combinational and only use flops where necessary. This might mean doing deeper levels of combinational logic with fewer
flops in between.

# Testing

As well as functional testing with a simulator and testbench, you should consider gate level testing. This allows you to simulate the actual layout of your GDS (post synthesis).

You can find an example [GitHub action workflow for gate level simulation here](https://github.com/TinyTapeout/tt02-verilog-demo/blob/gate-level/.github/workflows/gltest.yaml).
This takes care of installing the models for the standard cells.

We also need to adjust the [Makefile](https://github.com/TinyTapeout/tt02-verilog-demo/blob/gate-level/src/Makefile), and when connecting up the module for testing, make sure to [provide it power](https://github.com/TinyTapeout/tt02-verilog-demo/blob/ed43935f8d6236edb59f1a7940e2bf6f9db99603/src/tb.v#L30).

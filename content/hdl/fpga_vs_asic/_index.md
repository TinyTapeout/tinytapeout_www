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

You can find an example [GitHub action workflow for gate level simulation here](https://github.com/TinyTapeout/tt03-verilog-demo/blob/main/.github/workflows/gds.yaml#L99).
This takes care of installing the models for the standard cells.

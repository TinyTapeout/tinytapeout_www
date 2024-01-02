---
title: "Testing your design"
description: "Automatically running cocotb tests"
---

Thanks to community member **Tholin** for originally writing this article.

To make absolutely sure that your hardware design is functional as you want it, it is possible to write Verilog unit tests. This guide will show you how to write a simple test for your hardware design, and create a GitHub actions pipeline to automatically run your tests every time you push to your repository.

## Required packages

There is a good chance you already have most of what you need to get started if you’ve developed in Verilog before (for an FPGA, for instance). But just in case you don’t:

The first thing you need is a Verilog simulator. You can either install the full [OSS CAD Suite](https://github.com/YosysHQ/oss-cad-suite-build) (recommended), or you can install just the required packages:

```
sudo apt install iverilog verilator
pip3 install cocotb pytest
```

{{% notice tip %}}
You should install pytest even if using the full CAD Suite, as it enables cocotb to print more verbose error messages if a test fails, helping you track down the issue faster.
{{% /notice %}}

## Testbench module

To enable running tests on your Verilog, you will need to instantiate your top level module inside a testbench module. You can start out by copying this code into a new file called `tb.v`. You can also 
adapt the testbench in the [Verilog demo](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/tb.v).

```verilog
`default_nettype none
`timescale 1ns/1ps

module tb (
    );

    initial begin
        $dumpfile ("tb.vcd");
        $dumpvars (0, tb);
        #1;
    end

    // wire up inputs and outputs. Use reg for inputs that will be driven by the testbench.
    reg  clk;
    reg  rst_n;
    reg  ena;
    reg  [7:0] ui_in;
    reg  [7:0] uio_in;

    wire [7:0] uo_out;
    wire [7:0] uio_out;
    wire [7:0] uio_oe;

    toplevel_module toplevel_module (
        .ui_in      (ui_in),    // Dedicated inputs
        .uo_out     (uo_out),   // Dedicated outputs
        .uio_in     (uio_in),   // IOs: Input path
        .uio_out    (uio_out),  // IOs: Output path
        .uio_oe     (uio_oe),   // IOs: Enable path (active high: 0=input, 1=output)
        .ena        (ena),      // enable - goes high when design is selected
        .clk        (clk),      // clock
        .rst_n      (rst_n)     // not reset
        );
    );

endmodule
```

Replace both instances of `toplevel_module` with the actual name of your top level module. In the [case of the demo](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/tt_um_seven_segment_seconds.v), it's `tt_um_seven_segment_seconds`.

It can help make things clearer if you have 'convenience wires' that basically rename the important inputs and outputs of your design. In the demo, we want to reference the
seven segment display output pins, which are output on `uo_out[6:0]`. So we make a new wire and connect it to those outputs:

```verilog
    wire [6:0] segments = uo_out[6:0];
```

That lets us use `segments` instead of `uo_out` when we are doing the testing.

## Makefile

You will be using a makefile to run the tests. To get started, copy this code to a new file called `Makefile`. 

```
SIM ?= icarus
TOPLEVEL_LANG ?= verilog

VERILOG_SOURCES += $(PWD)/tb.v

TOPLEVEL = tb

MODULE = test

include $(shell cocotb-config --makefiles)/Makefile.sim
```

You will not need to modify this much. The only thing to do is to give it a list of all your verilog source files. To do that, go to the line starting with `VERILOG_SOURCES`, and expand it to list all your files. Separate entries by spaces. Paths are relative to the directory the makefile is in (which sould be 'src'). If you only have a single verilog file, you only need one additional entry: `$(PWD)/my_custom_verilog.v`

You can also use the [demo Makefile](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/Makefile), which is a bit more complex because it handles [Gate Level](#gate-level-testing) testing. 

## Writing your first test

Now, you can actually get started writing tests. Create a new file called `test.py`. You can start out using this code:
```python
import cocotb
from cocotb.clock import Clock
from cocotb.triggers import RisingEdge, FallingEdge, Timer, ClockCycles

@cocotb.test()
async def test_my_design(dut):
    dut._log.info("start")
```

At this point, you can run `make` in a terminal. You shouldn’t get any errors, but a 'Tests passed' message, and can continue writing the test.

Writing verilog tests is all about setting the inputs to your circuit, and checking the resulting outputs. If your circuit does not have a clock, this will simply look like this:
```python
dut.INPUT.value = 1
await Timer(1, units="ms")
assert dut.OUTPUT.value == 0
```

Here, you can use the name of any of the wires defined in `tb.v` as values to set or read. `assert` is, in this case, a statement that will fail the test if the expression following it does not evaluate to True. A delay is also inserted in-between setting the input, and checking the output.

If your circuit relies on the clock, you can have the clock signal generated for you:
```python
clock = Clock(dut.clk, 1, units="ms")
cocotb.start_soon(clock.start())
```

This will also allow you to wait for a certain number of clock cycles to pass, as shown in this bit of code, which activates the reset for exactly 10 clock cycles:
```python
dut.rst_n.value = 0 # low to reset
await ClockCycles(dut.clk, 10)
dut.rst_n.value = 1 # take out of reset
```

This can, of course, also be used in tests:
```python
await ClockCycles(dut.clk, 1000)
assert int(dut.segments.value) == segments[i]
```

Check the [demo's test bench here](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/test.py).

{{% notice tip %}}
Print debug messages using `dut._log.info("test")`
{{% /notice %}}

## Viewing the waveforms generated by your test

After you've run `make`, you should also have a `tb.vcd` file. You can open this with GTKWave, which is included in the OSS CAD Suite:

```shell
gtkwave tb.vcd
```

This can be very helpful to debug your tests and see your design in operation.

If you get stuck, let us know in the #verification channel of the [discord chat](https://discord.gg/U8fAcjxCYY).

## Auto-running tests in GitHub actions

If you’re like me, and often forget to run your tests after a change, you may want to set up a GitHub actions pipeline to do it for you on every push. Luckily, a solution for this already exists! You can download a pre-made actions pipeline [right here!](https://github.com/tinytapeout/tt05-verilog-demo/blob/main/.github/workflows/test.yaml)

Drop this into the `.github/workflows` directory of your repository to enable it. Add the file to git and push, and you should see a new pipeline pop up along the usual GDS and Docs ones. This one will tell you if your tests are failing or not. If you want the status of the tests to be displayed in your readme, add the following snippet to it `![](../../workflows/test/badge.svg)`

If you get stuck, let us know in the #github-actions channel of the [discord chat](https://discord.gg/U8fAcjxCYY).

## Gate Level testing

The simulations we've covered above are all **pre synthesis**. A simulator reads the HDL design and simulates it.

It's well worth running the same test on the **post synthesis** netlist. 
This post synthesis netlist is called a Gate Level netlist, because it includes all the actual standard cells (gates) used by your design. 
Gate Level testing can expose some bugs or issues that weren't exposed by HDL simulation.

This Gate Level netlist snippet just shows 2 of the ~240 standard cells used to create the [tt05-verilog-demo](https://github.com/TinyTapeout/tt05-verilog-demo). You can have a look at
yours by downloading the GDS.zip from the actions page of your design and then looking at the file: `runs/wokwi/results/final/verilog/gl/<your design name>.v`

```verilog
sky130_fd_sc_hd__and4_1 _319_ (.A(\second_counter[7] ),
    .B(\second_counter[9] ),
    .C(\second_counter[10] ),
    .D(\second_counter[12] ),
    .VGND(VGND),
    .VNB(VGND),
    .VPB(VPWR),
    .VPWR(VPWR),
    .X(_145_));
 sky130_fd_sc_hd__dfxtp_2 _320_ (.CLK(clknet_2_0__leaf_clk),
    .D(_007_),
    .VGND(VGND),
    .VNB(VGND),
    .VPB(VPWR),
    .VPWR(VPWR),
    .Q(\seg7.counter[0] ));
```

You can see the standard cells also have power ports, so one thing we have to do to run a GL test is to power the design. You can do this by editing your testbench where you instantiate your design:

```verilog
    toplevel_module toplevel_module (
    `ifdef GL_TEST
        .VPWR( 1'b1),
        .VGND( 1'b0),
    `endif
        .ui_in      (ui_in),    // Dedicated inputs
        .uo_out     (uo_out),   // Dedicated outputs
        .uio_in     (uio_in),   // IOs: Input path
        .uio_out    (uio_out),  // IOs: Output path
        .uio_oe     (uio_oe),   // IOs: Enable path (active high: 0=input, 1=output)
        .ena        (ena),      // enable - goes high when design is selected
        .clk        (clk),      // clock
        .rst_n      (rst_n)     // not reset
    );
```

If you're not already using the [demo project's Makefile](https://github.com/TinyTapeout/tt05-verilog-demo/blob/main/src/Makefile), update it.
The crucial extra lines are these:

```bash
# gate level simulation requires some extra setup, you shouldn't need to touch this
COMPILE_ARGS    += -DGL_TEST
COMPILE_ARGS    += -DFUNCTIONAL
COMPILE_ARGS    += -DUSE_POWER_PINS
COMPILE_ARGS    += -DSIM
COMPILE_ARGS    += -DUNIT_DELAY=\#1
VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/primitives.v
VERILOG_SOURCES += $(PDK_ROOT)/sky130A/libs.ref/sky130_fd_sc_hd/verilog/sky130_fd_sc_hd.v

# this gets copied in by the GDS action workflow
VERILOG_SOURCES += $(PWD)/tb.v $(PWD)/gate_level_netlist.v
```

These options only get included when you run `GATES=yes make`.

They setup some extra options for the GL simulation, and also we replace all your source files with just one `gate_level_netlist.v`.
We have a GitHub action you can use that automatically fetches the `gate_level_netlist.v` file, copies it to the right place and then run the test.

Copy these lines into your `.github/workflow/gds.yaml` action file in your repository after the GDS job. Here's the [verilog demo project's as an example](https://github.com/TinyTapeout/tt05-verilog-demo/blob/eab5e0c48c3ebc198e1d1ba3328b196a710de6b4/.github/workflows/gds.yaml#L19).

```yaml
  gl_test:
    needs: gds
    runs-on: ubuntu-latest
    steps:
      - name: checkout repo
        uses: actions/checkout@v3
        with:
          submodules: recursive

      - name: GL test
        uses: TinyTapeout/tt-gds-action/gl_test@tt05
```

Now when you make an update, your test and Gate Level test should both be run automatically!

If you get stuck, let us know in the #github-actions channel of the [discord chat](https://discord.gg/U8fAcjxCYY).

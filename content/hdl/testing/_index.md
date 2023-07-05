---
title: "Testing your design"
description: "Automatically running cocotb tests"
---

Thanks to community member **Tholin** for originally writing this article.

To make absolutely sure that your hardware design is functional as you want it, it is possible to write Verilog unit tests. This guide will show you how to write a simple test for your hardware design, and create a GitHub actions pipeline to automatically run your tests every time you push to your repository.

## Required packages

There is a good chance you already have most of what you need to get started if you’ve developed in Verilog before (for an FPGA, for instance). But just in case you don’t:

The first thing you need is a verilog simulator. You can either install the full [OSS CAD Suite](https://github.com/YosysHQ/oss-cad-suite-build) (recommended), or you can install just the required packages:

```
sudo apt install iverilog verilator
pip3 install cocotb pytest
```

{{% notice tip %}}
You should install pytest even if using the full CAD Suite, as it enables cocotb to print more verbose error messages if a test fails, helping you track down the issue faster.
{{% /notice %}}

## Testbench module

To enable running tests on your Verilog, you will need to instantiate your top level module inside a testbench module. You can start out by copying this code into a new file called `tb.v`. You can also 
adapt the testbench in the [Verilog demo](https://github.com/TinyTapeout/tt04-verilog-demo/blob/main/src/tb.v).

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

    wire [7:0] uo_out;
    wire [7:0] ui_in;
    wire [7:0] uio_out;
    wire [7:0] uio_in;
    wire [7:0] uio_oe;
    wire clk;
    wire rst_n;
    wire ena;

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

Replace both instances of `toplevel_module` with the actual name of your top level module. In the [case of the demo](https://github.com/TinyTapeout/tt04-verilog-demo/blob/main/src/tt_um_seven_segment_seconds.v), it's `tt_um_seven_segment_seconds`.

It can help make things clearer if you have 'convenience wires' that basically rename the important inputs and outputs of your design. In the demo, we want to reference the
seven segment display output pins, which are output on `ui_out[6:0]`. So we make a new wire and connect it to those outputs:

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

You can also use the [demo Makefile](https://github.com/TinyTapeout/tt04-verilog-demo/blob/main/src/Makefile), which is a bit more complex because it handles gate level testing. 

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

Check the [demo's test bench here](https://github.com/TinyTapeout/tt04-verilog-demo/blob/main/src/test.py).

{{% notice tip %}}
Print debug messages using `dut._log.info("test")`
{{% /notice %}}

## Viewing the waveforms generated by your test

After you've run `make`, you should also have a `tb.vcd` file. You can open this with GTKWave, which is included in the OSS CAD Suite:

```shell
gtkwave tb.vcd
```

This can be very helpful to debug your tests and see your design in operation.

## Auto-running tests in GitHub actions

If you’re like me, and often forget to run your tests after a change, you may want to set up a GitHub actions pipeline to do it for you on every push. Luckily, a solution for this already exists! You can download a pre-made actions pipeline [right here!](https://github.com/tinytapeout/tt04-verilog-demo/blob/main/.github/workflows/test.yaml)

Drop this into the `.github/workflows` directory of your repository to enable it. Add the file to git and push, and you should see a new pipeline pop up along the usual GDS and Docs ones. This one will tell you if your tests are failing or not. If you want the status of the tests to be displayed in your readme, add the following snippet to it `![](../../workflows/test/badge.svg)`

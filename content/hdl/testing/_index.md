---
title: "Testing your design"
description: "Automatically running cocotb tests"
---

Thanks to community member **Tholin** for writing this article.

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

To enable running tests on your Verilog, you will need to wrap your top level module in a testbench module. You can start out by copying this code into a new file called `tb.v`:

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

    wire [7:0] inputs;
    wire [7:0] outputs;

    toplevel_module toplevel_module (
        .io_in (inputs),
        .io_out (outputs)
    );

endmodule
```

Towards the bottom, replace both instances of `toplevel_module` with the actual name of your top level module. In my case, it is `logisim_demo`.

Next, you need to create your inputs and outputs. Go back to the module definition at the top, and add them. You can actually name them here. For instance, for my project, I would put:

```verilog
module tb (
    input CLK,
    input RST,
    output [3:0] OUT
    );
```

Next, you need to assign those ins and outs to the `inputs` and `outputs` wires below. Firstly, go to the line with `wire [7:0] inputs` and expand it to properly connect your named inputs to the chip inputs. Mine looks like this:
```verilog
wire [7:0] inputs = {6'b0, RST, CLK};
```

You have to read this from right to left. It is assigning CLK to pin 1, RST to pin 2, and sets the remaining pins to constant 0s.

For the outputs, you need to add new lines assigning them values from `outputs`. For a single output pin, you may write:
```verilog
assign OUT1 = outputs[0];
```

Which would connect an output named OUT1 from the testbench module definition to the output pin 1 of the chip.

In my case, I have a 4-bit value being output, so I take care of that all at once using
```verilog
assign OUT = outputs[3:0];
```

## Makefile

You will be using a makefile to run the tests. To get started, simply copy this code to a new file called `Makefile`:
```
SIM ?= icarus
TOPLEVEL_LANG ?= verilog

VERILOG_SOURCES += $(PWD)/tb.v

TOPLEVEL = tb

MODULE = test

include $(shell cocotb-config --makefiles)/Makefile.sim
```

You will not need to modify this much. Only thing to do is to give it a list of all your verilog source files. To do that, go to the line starting with `VERILOG_SOURCES`, and expand it to list all your files. Separate entries by spaces. Paths are relative to the directory the makefile is in (which sould be 'src'). If you only have a single verilog file, you only need one additional entry: `$(PWD)/my_custom_verilog.v`

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

Here, you can use the name of any of the inputs or outputs from `tb.v` as values to set or read. `assert` is, in this case, a statement that will fail the test if the expression following it does not evaluate to True. A delay is also inserted in-between setting the input, and checking the output.

If your circuit relies on the clock at pin 1, you can have the clock signal generated for you:
```python
clock = Clock(dut.CLK, 1, units="ms")
cocotb.start_soon(clock.start())
```

This will also allow you to wait for a certain number of clock cycles to pass, as shown in this bit of code, which activates the reset for exactly 10 clock cycles:
```python
dut.RST.value = 1
await ClockCycles(dut.CLK, 10)
dut.RST = 0
```

This can, of course, also be used in tests:
```python
await ClockCycles(dut.clk, 100)
assert int(dut.segments.value) == segments[i]
```

{{% notice tip %}}
Print debug messages using `dut._log.info("test")`
{{% /notice %}}

## Auto-running tests in GitHub actions

If you’re like me, and often forget to run your tests after a change, you may want to set up a GitHub actions pipeline to do it for you on every push. Luckily, a solution for this already exists! You can download a pre-made actions pipeline [right here!](https://github.com/tinytapeout/tt03-verilog-demo/blob/main/.github/workflows/test.yaml)

Drop this into the `.github/workflows` directory of your repository to enable it. Add the file to git and push, and you should see a new pipeline pop up along the usual GDS and Docs ones. This one will tell you if your tests are failing or not. If you want the status of the tests to be displayed in your readme, add the following snippet to it `![](../../workflows/test/badge.svg)`

---
hidden: true
title: "48 4-bits sequential ALU"
weight: 49
---

## 48 : 0b 000 110 000 : 4-bits sequential ALU

{{< tt-scanchain-switches "000110000" >}}

* Author: Diego Satizabal
* Description: A 4-bits sequential ALU that takes operands and opcode seqentially and performs operations and outputs results
* [GitHub repository](https://github.com/dsatizabal/tt03-dsp-4bits-sequential-alu)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The ALU takes 4-bits wide Operators and Operation sequentially with every clock cycle if the enabled signal is set to high, it takes an additional clock to output the result


### How to test

Run `make` from the command line in the src directory to perform all tests suites, you must have Python, cocotb and Icarus Verilog installed
If you have GTK Wave installed you can run the command `make test_gtkwave` to generate the VCD output, the run `gtkwave tb.vcd` to see the waveforms


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | result_0 |
| 1 | reset  | result_1 |
| 2 | enabled  | result_2 |
| 3 | none  | result_3 |
| 4 | Opx_opcode_0  | done_flag |
| 5 | Opx_opcode_1  | carry_flag |
| 6 | Opx_opcode_2  | zero_flag |
| 7 | Opx_opcode_3  | sign_flag |

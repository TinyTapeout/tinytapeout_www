---
hidden: true
title: "357 Poor Person's Boundary Scan"
weight: 19
---

## 357 : Poor Person's Boundary Scan

* Author: Verneri Hirvonen
* Description: JTAG test logic with a 8-bit TDR for 'external' boundary scan
* [GitHub repository](https://github.com/chiplet/tt04-jtag)
* [GDS submitted](https://github.com/chiplet/tt04-jtag/actions/runs/6125687622)
* HDL project
* [Extra docs](https://github.com/chiplet/tt04-jtag/blob/main/README.md)
* Clock:  Hz
* External hardware: JTAG debug adapter



### How it works

The design contains JTAG test logic with four test data registers:

```
1. boundary_scan
2. blink_in
3. blink_out
4. blink_dir
```

boundary_scan is connected between fixed input and output registers and can be used to either read the input pins or drive the output pins.

blink_in, blink_out, and blink_dir are connected to pins 6 and 7 of the bidirectional IO and can be used to read/write the bidirectional pins.

The default clk and rst_n are left unconnected because the JTAG interface provides its own clock and reset and those are routed through user IO.


### How to test

The cocotb simulation contains helper routines for driving the JTAG state machine and can be used as a example of how to shift values into different JTAG internal registers.

In general the design is controlled with the following procedure:

```
1. Reset core either through the TRSTn input or through a reset sequence on TMS. The reset sequence is achieved by holding TMS high and cycling TCK at least 5 times.
2. Shift in IR value to select appropriate TDR
3. Shift bits to TDR to read/write its value.
```

Blinky pins are controlled with the following JTAG TDRs. Each TDR is two bits wide.

```
- blink_in  IR=0x02 = blink pin inputs
- blink_out IR=0x03 = blink pin outputs
- blink_dir IR=0x04 = blink pin directions, high = output, low = input
```

For example, to assign blink[0] high and blinky[1] low, execute the following sequence:

```
1. Shift 0x04 to IR to select blink_dir TDR
2. Shift 0b11 to the selected TDR to set both pins as outputs
3. Shift 0x02 to IR to select blink_in TDR
4. Shift 0b01 to set blink[0] to high and blink[1] to low
```


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | boundary_scan input 0  | boundary_scan output 0 | JTAG TCK (hardcoded input) |
| 1 | boundary_scan input 1  | boundary_scan output 1 | JTAG TMS (hardcoded input) |
| 2 | boundary_scan input 2  | boundary_scan output 2 | JTAG TDI (hardcoded input) |
| 3 | boundary_scan input 3  | boundary_scan output 3 | JTAG TRSTn (hardcoded input) |
| 4 | boundary_scan input 4  | boundary_scan output 4 | JTAG TDO (hardcoded output) |
| 5 | boundary_scan input 5  | boundary_scan output 5 | JTAG state machine in state Test-Logic Reset (hardcoded output) |
| 6 | boundary_scan input 6  | boundary_scan output 6 | Blink pin 0 (bidirectional) |
| 7 | boundary_scan input 7  | boundary_scan output 7 | Blink pin 1 (bidirectional) |

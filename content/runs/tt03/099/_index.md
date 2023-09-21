---
hidden: true
title: "99 binary clock"
weight: 100
---

## 99 : binary clock

* Author: Azdle
* Description: A binary clock using multiplexed LEDs
* [GitHub repository](https://github.com/azdle/binary-clock-asic)
* [Most recent GDS build](https://github.com/azdle/binary-clock-asic/actions/runs/3467191965)
* HDL project
* [Extra docs](https://github.com/azdle/binary-clock-asic)
* Clock: 200 Hz
* External hardware: This design expects a matrix of 12 LEDs wired to the outputs. The LEDs should be wired so that current can flow from column to row.
Optionally, a real time clock or GPS device with PPS output may be connected to the `pps` pin for more accurate time keeping. If unused this pin must be pulled to ground.


Image path is broken

### How it works

Hours, minutes, and seconds are counted in registers with an overflow comparison. An overflow in one, triggers a rising edge on the input of the successive register.
The values of each register are connected to the input to a multiplexer, which is able to control 12 LEDs using just 7 of the outputs.
This design also allows use of the PPS input for more accurate time keeping. This input takes a 1 Hz clock with a rising edge on the start of each second.
The hours[4:0] inputs allow setting of the hours value displayed on the clock when coming out of reset. This can be used for manually setting the time, so it can be done on the hour of any hour. It can also be used by an automatic time keeping controller to ensure the time is perfectly synced daily, for instance at 03:00 to be compatible with DST.


### How to test

After reset, the output shows the current Hours:Minutes that have elapsed since coming out of reset, along wit the 1s bit of seconds, multiplexed across the rows of the LED array.
The matrix is scanned for values:
    rows[2:0] = 4'b110; cols[3:0] = 4'bMMMS;
    rows[2:0] = 4'b101; cols[3:0] = 4'bHHMM;
    rows[2:0] = 4'b011; cols[3:0] = 4'bHHHH;

(M: Minutes, H: Hours, x: Unused)
Directly out of reset, at 0:00, a scan would be:
    rows[2:0] = 4'b110; cols[3:0] = 4'b0000;
    rows[2:0] = 4'b101; cols[3:0] = 4'b0000;
    rows[2:0] = 4'b011; cols[3:0] = 4'b0000;

After one second, at 00:00:01, a scan would be:
    rows[2:0] = 4'b110; cols[3:0] = 4'b0001;
    rows[2:0] = 4'b101; cols[3:0] = 4'b0000;
    rows[2:0] = 4'b011; cols[3:0] = 4'b0000;

After one hour and two minutes, at 1:02, a scan would be:
    rows[2:0] = 4'b110; cols[3:0] = 4'b0110;
    rows[2:0] = 4'b101; cols[3:0] = 4'b0100;
    rows[2:0] = 4'b011; cols[3:0] = 4'b0000;

The above can be sped up using the PPS (Pulse Per Second) input, as long as the PPS pulses are kept to 1 pulse per 2 clock cycles or slower.
The hours input can be tested by applying the binary value of the desired hour. Asserting reset for at least one clock cycle, and checking the value of hours displayed in the matrix.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | col 0 |
| 1 | reset  | col 1 |
| 2 | pps  | col 2 |
| 3 | hours_b1  | col 3 |
| 4 | hours_b2  | row 0 |
| 5 | hours_b4  | row 2 |
| 6 | hours_b8  | row 3 |
| 7 | hours_b16  | none |

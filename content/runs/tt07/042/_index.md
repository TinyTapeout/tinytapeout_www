---
hidden: true
title: "42 Adiabatic PSU sequencer test"
weight: 1
---

## 42 : Adiabatic PSU sequencer test

* Author: Chris Pacejo
* Description: test of a power supply sequencer for adiabatic circuits
* [GitHub repository](https://github.com/cpacejo/adia_psu_seq_test)
* [GDS submitted](https://github.com/cpacejo/adia_psu_seq_test/actions/runs/9312875587)
* HDL project
* [Extra docs]()
* Clock: 32000000 Hz

### How it works

This is a simple sequencer for a 9-step 4-phase combined power-clock PSU for
adiabatic circuitry.  The rate of each phase is 1/32 the input clock rate.

It generates two sets of control signals, for phases 0 and 1.  The control
signals indicates which step of the charging circuitry should be activated.
(Phases 2 and 3 simply invert the meaning of the steps.)

Since there are not enough output pins to represent all steps, pin `ui[0]`
selects whether phase 0 or 1 is routed to the output pins.  Steps 1 through
7 of the selected phase are routed to `uo[1]` through `uo[7]`.  Steps 0 and
8 of both phases 0 and 1 are routed to pins `uio[0]` through `uio[3]`
regardless of the setting of `ui[0]` .

Finally, four "digital sync" signals are generated and routed to pins
`uio[4]` through `uio[7]`.  These mark appropriate clock cycles when data
can be latched in to or out from an adiabatic gate on phase 0 or 1.

### How to test

This project is free-running.  Simply issue a reset, then use `ui[0]` to
select which phase you wish to monitor, and monitor it.

### External hardware

No external hardware is necessary.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | phase select (X)  | selected phase (X)  | phase 0 step 0        |
| 1 |   | phase X step 1  | phase 0 step 8        |
| 2 |   | phase X step 2  | phase 1 step 0        |
| 3 |   | phase X step 3  | phase 1 step 8        |
| 4 |   | phase X step 4  | digital sync phase 0 read        |
| 5 |   | phase X step 5  | digital sync phase 1 read        |
| 6 |   | phase X step 6  | digital sync phase 0 write        |
| 7 |   | phase X step 7  | digital sync phase 1 write        |


### Chip location

{{< shuttle-map "tt07" "42" >}}

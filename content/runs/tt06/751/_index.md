---
hidden: true
title: "751 Voting thingey"
weight: 207
---

## 751 : Voting thingey

* Author: Zoda + Jade
* Description: Does modified-consensus voting for redundant microcontrollers, as a vaguely functional-safety thing
* [GitHub repository](https://github.com/jadebuilds/tt06-mcu-voting)
* [GDS submitted](https://github.com/jadebuilds/tt06-mcu-voting/actions/runs/8731482013)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

### How it works

Our project used the 8 inputs as voters, expecting 1 as "FAIL" and 0 as "PASS" for votes in the system. As a default, if all systems vote for a pass, the consensus is pass. However, we also give the user the ability to customize the number of voters and the threshold of passing.

For instnace, a user may have 8 voters and fail if 3 votes fail.

This is for a safety system where redundant microcontrollers are used to control some safety critical hardware and we want to avoid single point faults.

### How to test

Tested with the unit tests running `make -B` in test subfolder.

### External hardware

N/A


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | vote0  |   |      |
| 1 | vote1  |   |      |
| 2 | vote2  |   |      |
| 3 | vote3  |   |      |
| 4 | vote4  |   |      |
| 5 | vote5  |   |      |
| 6 | vote6  |   |      |
| 7 | vote7  |   |      |


### Chip location

{{< shuttle-map "tt06" "751" >}}

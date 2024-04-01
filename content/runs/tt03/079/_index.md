---
hidden: true
title: "79 Asynchronous 3-Bit Down Counter"
weight: 80
---

## 79 : 0b 001 001 111 : Asynchronous 3-Bit Down Counter

{{< tt-scanchain-switches "001001111" >}}

* Author: Dikshant, Mohit, Sanidhya
* Description: This Project works as a down counter which counts from 7 to 0
* [GitHub repository](https://github.com/DIKSH4NT0615/tt03-submission-template)
* [Wokwi](https://wokwi.com/projects/362336485347742721) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

See The [Wokwi gate and simulation](https://wokwi.com/projects/362336485347742721).
* The sequence in which the counter works is as follows :
7: 0111
3: 0011
5: 0101
1: 0001
6: 0110
2: 0010
4: 0100
0: 0000
Here's how the counter works : first, all the three flip flops are set to 1 then for changing the inputs i have used the switch 1 of the Dip switch.
 * When the count signal is triggered, the first flip-flop (least significant bit) toggles from 1 to 0, which produces the binary number 0111 (decimal 7).
 * The second count signal should not trigger a change in the counter value, as the next count is 3, not 6.
 * The third count signal triggers a change in the counter value, where the second flip-flop toggles from 1 to 0, which produces the binary number 0101 (decimal 5).
 * The fourth count signal should not trigger a change in the counter value, as the next count is 1, not 4.
 * The fifth count signal triggers a change in the counter value, where the first flip-flop toggles from 0 to 1, and the third flip-flop toggles from 0 to 1, which produces the binary number 0110 (decimal 6).
 * The sixth count signal should not trigger a change in the counter value, as the next count is 2, not 5.
 * The seventh count signal triggers a change in the counter value, where the second flip-flop toggles from 0 to 1, which produces the binary number 0100 (decimal 4).
 * The eighth count signal triggers a change in the counter value, where all three flip-flops toggle from 0 to 1, which produces the binary number 0000 (decimal 0).
 * The counter stays at 000 until the count signal is triggered again, which causes all three flip-flops to be set back to 1, and the counting process starts again from the beginning of the sequence.
In summary, the 3-bit asynchronous down counter counts down in the sequence 7, 3, 5, 1, 6, 2, 4, 0 using three flip-flops and asynchronous inputs to trigger each flip-flop in the sequence.


### How to test

For Testing this project, the user has to use the switch 1 of the dip switch to give different inputs and then get the desired output on the 7-segment display.
 


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a - OUT0 |
| 1 | reset  | segment b - OUT1 |
| 2 | I0 - Input  | segment c - OUT2 |
| 3 | I1 - None  | segment d - OUT3 |
| 4 | I2 - None  | segment e - OUT4 |
| 5 | I3 - None  | segment f - OUT5 |
| 6 | I4 - None  | segment g - OUT6 |
| 7 | Unused  | dot - None |

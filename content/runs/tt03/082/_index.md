---
hidden: true
title: "82 Tiny Teeth Toothbrush Timer"
weight: 83
---

## 82 : 0b 001 010 010 : Tiny Teeth Toothbrush Timer

{{< tt-scanchain-switches "001010010" >}}

* Author: Noah Hoffman
* Description: Simple 2 minute timer that gives visual feedback on the seven-segment display for each 30-second increment that passes. This indicates when to move to the next quarter of the mouth. Each 30 second increment can be blocked by an input switch so the user has to acknowledge they are done with that section before moving forward. At the end of 2 minutes, all segments of the display will flash
* [GitHub repository](https://github.com/13arn/tt03-toothbrush-timer)
* [Most recent GDS build](https://github.com/13arn/tt03-toothbrush-timer/actions/runs/4788280213)
* [Wokwi](https://wokwi.com/projects/362867354023533569) project
* [Extra docs]()
* Clock: 10000 Hz
* External hardware: 



### How it works

This project expects a 10KHz clock. It divides it by 2^15 to get about 0.305Hz clock with a period of about 3.27 seconds. This time is reflected by the blinking of the decminal on the seven segment dispaly. After 10 clock cycles, the first input goes high to signify the first 30-second increment is done and the top-right segment of the display will turn on. After the next 30-second increment, the top left segment will turn on. Then the bottom right, and finally the bottom left. Once they are all lit, the 3 segments in the middle will flash to indicate it is done. Each of the 4 increments can be blocked by an enable switch for each one. If desired, a physical input can be used to ensure the timer does not continue to the next section until the user is done the current task.


### How to test

The timing is dependent on a 10KHz clock. From a hard reset, the first increment may be less than 30 seconds, so it is best to start with at least the "reset first increment" switch off (input 3) or the "enable first increment" switch off (input 7). With the other inputs on (1,2,4,5,6), one should be able to time each segment lighting up after 30 seconds and the 3 middle segments flashing at 2 minutes. If the decimal is not flashing or is flashing at a different period than 3.27 seconds, that indicates either the clock is off (input 1 to connect the clock or 2 to enable the clock dividing) or something other than a 10KHz clock was applied. If one wants to try the gated incremental mode, make sure inputs 4,5,6 start off. As one sees the timer indicate it is time to move on, the user can toggle that section's switch. Each section is sequentially dependent on the next, so if a user want to go back to increment 2, the timer will start from 2 and then 3 and then 4. If it is desired to freeze the process where it is at while not resetting anything, the input 8 "pause" switch can be turned high. For normal operation it should stay low.  


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | segment a- complete |
| 1 | reset clock  | segment b- first increment done |
| 2 | reset first increment  | segment c- third increment done |
| 3 | enable fourth increment  | segment d- complete |
| 4 | enable third increment  | segment e- fourth increment done |
| 5 | enable second increment  | segment f- second increment done |
| 6 | enable first increment  | segment g- complete |
| 7 | pause  | dot- clock (3.27 seconds) |

---
title: Customisable Design - Padlock
tags: [customisable]
description: "Set a custom code for your digital safe"
weight: 100
---

This design implements a customizable padlock. Set a code for your digital safe!

**Controls**
* Switch 2 is used to reset the safe. 
* Switch 8 is used to set your code (on = set, off = locked)
* Switches 3 to 5 are used to set the code.
* The push button is used to enter your code.


| SW      | Function| 
|---------|---------|
| 1       | N/A     | 
| 2       | Reset   | 
| 3       | Code 0  |
| 4       | Code 1  | 
| 5       | Code 2  | 
| 6       | N/A     |
| 7       | N/A     | 
| 8       | Set Code| 

### To begin

Press the green button in the top left of the simulation pane. 

Set your desired code using Switches 3 to 5. Once you've done so, toggle Switch 8 to on, press the button, then toggle Switch 8 back off--the safe is now set!

Turn on Switch 2, and press the push button. The red LED labeled "Locked" should turn on and the seven segment display should show "L" (for locked).

Next turn off Switch 2 to begin entering codes.  

If you enter a correct code, you will see cyan LED labeled "Unlocked!" turn on. Congratulations! The seven segment display should also show "U" (for unlocked).

{{< wokwi 397142450561071105 >}}
<br>

{{% feedback %}}

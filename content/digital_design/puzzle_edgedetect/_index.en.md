---
title: Logic Puzzle - Edge Detect
tags: [puzzle]
description: "Detect the rising and falling edge of a signal"
weight: 30
---

In this puzzle, you will learn how to detect an instantaneous change in a signal.

**Background**

In the world of digital circuits, these changes will correspond to either a rising edge (i.e. signal going from low to high) or a falling edge (i.e. signal going from high to low). Detecting rising and falling edges is extremely important for digital circuits. For example, *did a user just press a button*? *Did they just release a button*?

So how are edge detect circuits built? Before diving into the schematic, let's think about the problem we are trying to solve:
* We need to detect a *change* in a signal over time...so we probably need store information in a [flip flop](/digital_design/puzzle_flipflop/), and
* We need to *compare* the values of the signal to see if it changed from low to high or high to low...so we probably need [logic gates](/digital_design/logic_gates/).

**Puzzle**

With this information, check out the rising edge detect circuit below. **Can you figure out how to build the falling edge detect circuit to light the blue LED?**

{{% notice tip %}}
you might need to add a gate
{{% /notice %}}

{{< wokwi 346661018698515028 >}}
<br>

| D       | Q       | Output |
|---------|---------|--------|
| 0       | 0       | 0      |
| 0       | 1       | 0      |
| 1       | 0       | 1      |
| 1       | 1       | 0      |

Feel free to play around to try to figure it out. You can always return to the [logic gate tutorial](/digital_design/logic_gates) or the [flip flop puzzle](/digital_design/puzzle_flipflop/) if you need a refresher. 

You can also check out the [**solution**](https://wokwi.com/projects/346662484165263955).

For more information: [https://web.mit.edu/6.111/volume2/www/f2019/handouts/L06.pdf](https://web.mit.edu/6.111/volume2/www/f2019/handouts/L06.pdf)

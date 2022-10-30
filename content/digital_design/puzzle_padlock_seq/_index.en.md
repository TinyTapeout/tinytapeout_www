---
title: Logic Puzzle - Padlock (hard)
tags: [puzzle]
description: "Figure out the correct code to crack the safe!"
weight: 50 
---

In this puzzle, you will be trying to crack a safe. The circuit used for this puzzle uses both [combinational logic](/digital_design/logic_gates) and [sequential logic](/digital_design/puzzle_flipflop).

**Background**

This puzzle uses D-Flip Flops to create a sequential logic circuit called a finite state machine (FSM).

FSMs are extremely useful in digital design as they enable a digital circuit to progress through tasks programmatically. They enable a system to change its behavior at a given moment based on *the current inputs* to the circuit and *the past state* of the circuit.

In this puzzle, the state machine below is implemented:

{{< mermaid >}}
stateDiagram-v2
  idle: Idle
  locked: Locked
  locked1: 1/3 Correct
  locked2: 2/3 Correct
  unlocked: Unlocked!
  idle   --> idle: !SW2
  idle   --> locked: SW2
  locked --> locked: Incorrect guess
  locked --> locked1: 1st entry correct
  locked1 --> locked: Incorrect guess
  locked1 --> locked2: 2nd entry correct
  locked2 --> locked: Incorrect guess
  locked2 --> unlocked: 3rd entry correct
  unlocked --> unlocked: SW2
  unlocked --> idle: !SW2
{{< /mermaid >}}


**Puzzle**

A padlock has been created using logic gates. Just like locker padlocks, you must enter the correct sequential code to unlock the system.

**Controls**
* The push button is used to enter your code.
* Switch 2 is used to enable the padlock. To reset at any time, toggle Switch 2 to 0 and back to 1.
* Switches 3 to 5 are used to set your guess.

**To begin**

Set all switches to 0 and press the push button. A "-" will appear on the seven segment display.

When you're ready, turn on Switch 2 and press the push button to begin the challenge. The yellow LED will turn on, and the seven segment display will show "L" for locked".

Next set a code using Switches 3 to 5. If you enter a correct code, you will see the colored LED progress from Yellow --> Magenta.

If you succeeded, try again to get to the next stages: White then finally Light Blue! A "U" will appear for unlocked. 

If you fail to enter the correct code at any stage, you will return to the yellow LED.

{{< wokwi 346982355289768532 >}}
<br>


Feel free to play around to try to figure it out. You can always return to the [logic gate tutorial](/digital_design/logic_gates) and [flip flop tutorial](/digital_design/puzzle_flipflop) if you need a refresher. 


{{%expand "Check out the solution" %}} | LED     | SW3     | SW4    | SW5    |
|---------|---------|--------|--------|
| Yellow  | 1       | 0      | 0      |
| Magenta | 0       | 1      | 0      |
| White   | 0       | 0      | 1      |
{{% /expand%}}



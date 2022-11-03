---
title: Logic Puzzle - Padlock
tags: [puzzle]
description: "Figure out the correct code to crack the safe!"
weight: 50
---

In this puzzle, you're a spy trying to gain access to a safe containing precious semiconductor equipment. Can you crack the code to gain access to the safe? 

If the first puzzle is too easy, try the second more challenging one!

**Background**

The circuit used for this puzzle uses both [combinational logic](/digital_design/logic_gates) and [sequential logic](/digital_design/puzzle_flipflop).

This puzzle uses D-flip flops to create a sequential logic circuit called a finite state machine (FSM). Combinational logic is then used to determine under what inputs the circuit switches states. 

For example, using FSMs we could design a basic circuit that becomes active while an input is 1 and remains active until the input goes to 0. To describe this with state machies, we could say that if the circuit is in State 0 (S0) and the input is 1, then it will proceed to State 1 (S1). While the input is 1, the circuit remains in S1. Once the input goes to 0, the circuit then returns to S0.

FSMs can be explained pictorally using state diagrams like this:

{{< mermaid >}}
stateDiagram-v2
  s0: S0
  s1: S1
  s0   --> s0: In = 0
  s0   --> s1: In = 1
  s1   --> s1: In = 1
  s1   --> s0: In = 0
{{< /mermaid >}}

The state diagram depicts all possible states the system can be in while describing how the system transisitions between states. 

Digital logic can then be used to implement the FSM using three main components: next state logic, a state register, and output logic as depicted below (credit: [Prof. Onur Mutlu's 2019 slides, starting on page 49](https://safari.ethz.ch/digitaltechnik/spring2019/lib/exe/fetch.php?media=onur-digitaldesign-2019-lecture6-sequential-logic-afterlecture-corrected.pdf)).

![FSMlogic](images/fsmlogic.png)

### Puzzle 1: Easy Version

A safe containing precious semiconductor equipment has been locked using logic gates. You must enter the correct sequential code to unlock the system and capture the materials!

This puzzle implements the state machine below:

{{< mermaid >}}
stateDiagram-v2
  s0: Locked
  s1: Unlocked
  s0   --> s0: Incorrect or Reset
  s0   --> s1: Correct
  s1   --> s1: !Reset
  s1   --> s0: Reset
{{< /mermaid >}}

Note: "!" is commonly used to represent negation, a.k.a. "not". So !Reset means Reset = 0

**Controls**
* The push button is used to enter your code.
* Switch 2 is used to reset the safe.
* Switches 3 to 5 are used to set code.

**To begin**

Press the green button in the top left of the simulation pane, then click to turn on Switch 2, and press the push button. The red LED labeled "Locked" should turn on and the seven segment display should show "L" (for locked).

Next turn off Switch 2 and begin testing codes. Set a code using Switches 3 to 5. 

If you enter a correct code, you will see the cyan LED labeled "Unlocked!" turn on. Congratulations! The seven segment display should also show "U" (for unlocked).

{{< wokwi 347019916696617554 >}}
<br>

{{%expand "Check out the solution" %}} 
| SW3     | SW4    | SW5    |
|---------|--------|--------|
| 0       | 1      | 1      |

{{% /expand%}}

### Puzzle 2: Harder Version

Uh oh, after your first break-in, the guards have increased security. Now you must enter three correct codes consecutively to gain access to the safe!

This puzzle implements the state machine below:

{{< mermaid >}}
stateDiagram-v2
  idle: Idle
  locked: Locked
  locked1: 1/3 Correct
  locked2: 2/3 Correct
  unlocked: Unlocked!
  idle   --> idle: !SW2
  idle   --> locked: SW2
  locked --> locked: Incorrect
  locked --> locked1: 1st entry correct
  locked1 --> locked: Incorrect
  locked1 --> locked2: 2nd entry correct
  locked2 --> locked: Incorrect
  locked2 --> unlocked: 3rd entry correct
  unlocked --> unlocked: SW2
  unlocked --> idle: !SW2
{{< /mermaid >}}

**Controls**
* The push button is used to enter your code.
* Switch 2 is used to enable the padlock. To reset at any time, toggle Switch 2 to 0 and back to 1.
* Switches 3 to 5 are used to set the code.

**To begin**

Set all switches to 0 and press the push button. A "-" will appear on the seven segment display.

When you're ready, turn on Switch 2 and press the push button to begin the challenge. The yellow LED will turn on, and the seven segment display will show "L" for locked".

Next set a code using Switches 3 to 5. If you enter a correct code, you will see the colored LED progress from yellow --> magenta.

If you succeeded, try to get to the next stages, lighting the white LED then finally the cyan! A "U" will appear for unlocked. 

If you fail to enter the correct code at any stage, you will return to the yellow LED.

{{< wokwi 346982355289768532 >}}
<br>



Feel free to play around to try to figure it out. You can always return to the [logic gate](/digital_design/logic_gates) and [flip flop tutorials](/digital_design/puzzle_flipflop) if you need a refresher. 


{{%expand "Check out the solution" %}} | LED     | SW3     | SW4    | SW5    |
|---------|---------|--------|--------|
| Yellow  | 1       | 0      | 0      |
| Magenta | 0       | 1      | 0      |
| White   | 0       | 0      | 1      |
{{% /expand%}}

{{% feedback %}}

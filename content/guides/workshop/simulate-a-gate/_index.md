---
title: '2 - Simulate a logic gate'
description: 'Draw and simulate a logic gate with Wokwi'
weight: 30
aliases:
    - /guides/workshop/wokwi-get-started
---

This guide will show you how to wire up a logic gate and simulate it in Wokwi.
Wokwi is a web based schematic and simulation tool. As well as ASIC design, it can simulate many popular development boards like Arduino or RP2040.

## Start from our Wokwi Template

To start with, you need to create a copy of the template.

* Open the Wokwi [Template](https://wokwi.com/projects/354858054593504257).
* You'll need to sign up to be able to save. Press the **sign up** button in the top right corner.
* If you already have a GitHub or Google account, you can use that.
* Once you've signed in, press the **Save** dropdown button and choose **Save a copy**.

{{< figure src="images/save_button.png" >}}

{{< figure src="images/save_a_copy.png" >}}

* Change the name of the project to something more descriptive like your "Matt's first Wokwi design", then press the **Save Copy** button.

## Wokwi's user interface

Wokwi is divided into 2 panes. The left is the code view which we won't use today, so you can drag the dividing bar all the way to the left.

There are some useful drawing options in the '3 dot' button like turning on the grid. 

{{< figure src="images/wokwi_layout.png" >}}

* The green blocks represent the inputs and outputs of the chip. Only components connected between the green blocks will get turned into a chip. Right now there are 4 inverters connected between the first 4 inputs and the first 4 outputs. 
* On the left you have:
    * A reset button and a clock button,
    * 8 inputs.
* On the right there are:
    * 8 outputs,
    * A 7 segment LED display wired to the outputs.

{{% notice tip %}}
Wowki will usually inherit your computer or browser's dark or light mode setting.
{{% /notice %}}

## Simulate the template

Wokwi starts in **drawing** mode where we can add new components and wire them up. Switch into **simulation** mode by pressing the **play** button.

{{< figure src="images/wokwi_buttons.png" >}}

* Look at the 7 segment LED display on the right. The first 4 segments are on. 
* Toggle the input switches and see how the outputs are updated to be the inverse of the first 4 inputs.

{{% notice tip %}}
If you select the red input switches with the mouse, you can then type the numbers 1 to 8 to toggle the switches.
{{% /notice %}}

## Add a logic gate

Now it's time to add a new component to your chip!

* First press the **stop** button.
* Then click the **+** button.
* Scroll all the way to the bottom and you'll see the Logic section.

{{< figure src="images/logic_gates.png" >}}

Pick one of the gates. We recommend starting with one of the first 5. Leave the MUX and Flip-Flops for later. Avoid the DSR Flip-Flop.

## Wire it up

After you've chosen a component, it gets added to your schematic. Now let's wire it up.

* Delete the inverters by either:
    * Click on each one and then press the delete key on your keyboard.
    * Shift left-click-drag a box around all of them, then press the delete key.
* Drag the new component into place by left-clicking it and then drag it between the 2 green input and output boxes.
* Wire it up by:
    * Left-clicking the ports on the right edge of the input block to start a wire.
    * Left-click where you want a corner.
    * Left-click on the input to your new logic gate.

{{< figure src="images/and_gate_wired.png" >}}

### Wiring tips

* Click an existing wire to change its colour.
* Double click a wire to remove it.
* If you need to join wires together, add a **junction** component from the *+* menu.
* You can drag components about by left-click-dragging them.
* You can copy and paste a component or groups of components with control+c and control+v.
* Undo and redo with control+z and control+y

For more Wokwi tips, check the [FAQ](https://tinytapeout.com/faq/#how-do-i-do-x-y-z-with-wokwi).

## Simulate

Once you've wired your new logic gate up, press the play button to simulate and see how it works.

{{% notice warning %}}
If you see the ERC Warnings box in the top right, these are important to solve. Ask for help if you can't work it out.
{{% /notice %}}

## Save your design!

Before you go much further, press the **save** button to keep your design safe.

## If you have time, try these next steps

After you've placed and simulated your first components with Wokwi, you can start to build more complex circuits. This tool is mostly useful for beginners making circuits of less than 100 gates. More than that and you'd move onto a hardware description language like Verilog.

* Try a few logic gates in sequence or combination.
    * If you don't know what a gate does, wire it up in Wokwi and then simulate what happens for every input combination.
* Make the 7 segment display the first letter of your name when you set the input to a secret code.
    * Use some logic gates to create a logic high output when the input is set correctly.
    * Then connect that output to the segments you need to light up your initial.
* Try one of the [digital design lesson plans](/digital_design).
* Look at some of the Wokwi designs that people [submitted to a previous shuttle](https://app.tinytapeout.com/shuttles/tt06). Each Wokwi design is marked with the **W** logo, and clicking the logo opens the schematic.
* If you want to try with Verilog, see the [HDL guide](/hdl).

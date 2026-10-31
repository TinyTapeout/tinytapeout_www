---
title: "Logic table to Wokwi gates"
tags: [guide]
description: "Fill in a truth table in your browser, see the reduced logic, and paste the gates straight into Wokwi"
weight: 135
---

Type in a truth table below and the tool works out a small circuit of logic gates that implements it. When you're happy, copy the gates and paste them into your Wokwi project.

{{< logic-table >}}

## How to use it

1. Set the number of **inputs** (up to 4) and **outputs** (up to 8), or pick one of the examples.
2. Click the output cells to set each one to `0`, `1` or `x`. The reduced logic and the gate diagram update as you go.
3. Use **Try it** to check the circuit: flip the inputs (or click an input pin in the diagram, or the input values of a row) and watch the highlighted row move and the outputs change.
4. Click **Copy for Wokwi**.
5. Open your Wokwi project, put the mouse over an empty part of the diagram and press `Ctrl+V` (`⌘+V` on a Mac). The gates appear with all their wires connected, and an LED on each output.
6. Connect the inputs to the switches, **top to top**. The input at the top is bit 0, so it goes to `ui_in[0]` (switch 1), the next one down to `ui_in[1]` (switch 2), and so on. Wire the outputs top to top too: the first output to `uo_out[0]`, the next to `uo_out[1]`, and so on.

The pasted circuit is laid out like the diagram, with the inputs on the left and the outputs on the right. Each input and output is a junction (a small dot) with a text label next to it: wire your input pin to the input's junction and the output's junction to your output pin.

## Inputs and bit order

Each row of the table is a binary number, with the first input as the most significant bit (MSB) and the last input as the least significant bit (LSB). The `#` column shows each row's number in decimal, and **Try it** shows the number the inputs are set to.

In the [Tiny Tapeout Wokwi template](https://wokwi.com/projects/354858054593504257), switch 1 at the top is `ui_in[0]`, the LSB. So that the pasted circuit matches, its inputs are pasted the other way up: the LSB at the top, labelled `(bit 0)`, and the MSB at the bottom. Wire them top to top and the switches will set the same number as the table's `#` column.

## LEDs and the 7-segment display

Every output in the pasted circuit lights an LED, so you can try the circuit in Wokwi straight away. The LEDs are only there to help you test: they are left out when your design is turned into Verilog, so you can keep them or delete them.

The template already has a 7-segment display on its outputs: `uo_out[0]` drives segment A, `uo_out[1]` segment B, and so on up to `uo_out[7]` on the decimal point. Tick **Show the outputs on a 7-segment display** (the *BCD to 7-segment* example does this for you) to see your outputs on a display next to **Try it**, so you can check every digit before you paste. The pasted circuit then has no LEDs: instead its output junctions are stacked one above the other, spaced like the pins of the template's output block, with the first output at the top. Move the circuit so the stack sits next to the output block and wire each junction straight across to `uo_out[0]`, `uo_out[1]`, and so on.

## Don't care

Sometimes an output doesn't matter for some inputs. For example, a BCD to 7-segment decoder only ever sees the digits 0 to 9, so it doesn't matter what the display shows for 10 to 15. Mark those cells `x` and the tool is free to treat each one as a `0` or a `1`, whichever gives the smaller circuit. Try the *BCD to 7-segment* example, then set its `x` cells to `0` to see how many more gates you need.

## Importing and exporting tables

Open **Import or export the table** to copy the table as JSON, or to paste one in. The format is the one used by maehw's [wokwi-lookup-table-generator](https://github.com/maehw/wokwi-lookup-table-generator), so you can load its demo tables and the tables from [Generating Wokwi designs from truth tables](../wokwi_lut_generator/). Don't-care cells are written as `"x"`, which that generator doesn't understand, so replace them with `0` or `1` before using a table there.

## How does it work?

For each output, the tool takes the rows where the output is `1` and finds the simplest *sum of products* (an OR of ANDs) that covers them, making use of any `x` rows, using the [Quine-McCluskey](https://en.wikipedia.org/wiki/Quine%E2%80%93McCluskey_algorithm) method. This is the same simplification you would do by hand with a [Karnaugh map](https://en.wikipedia.org/wiki/Karnaugh_map).

A few extra tricks keep the circuit small:

* If an output is the XOR of some of the inputs (like the sum of an adder) it is built from XOR gates.
* If it is cheaper to describe where the output is `0`, the tool does that and inverts the result, using a NAND or a NOT gate.
* An output that is always `0` or always `1` is connected to GND or VCC.

Wokwi's gates have two inputs, so a product of three inputs becomes a chain of two AND gates, and so on.

The ASIC tools will optimise your design again when it is turned into a chip, so you don't need the smallest possible circuit. Seeing the reduced logic is a good way to learn how truth tables turn into gates, though.

For bigger tables, or to generate a complete test setup, see [Generating Wokwi designs from truth tables](../wokwi_lut_generator/). To check your design against a truth table automatically, see [Simple automated testing using truth tables](../wokwi_automated_testing/).

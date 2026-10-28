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
5. Open your Wokwi project, click on an empty part of the diagram and press `Ctrl+V` (`⌘+V` on a Mac). The gates appear with all their wires connected.
6. Wire your input pins (for example `ui_in[0]`) to the inputs of the buffers labelled with your input names, and the buffers labelled with your output names to your output pins (for example `uo_out[0]`).

The pasted circuit is laid out like the diagram, with the inputs on the left and the outputs on the right. The inputs and outputs are buffer gates with text labels next to them, so the circuit is easy to connect up however your project is laid out. The wires are coloured by what they connect: brown from an input, blue from an inverted input, orange between the gates of a product, purple from a product into an OR gate, green between OR gates and cyan to an output.

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

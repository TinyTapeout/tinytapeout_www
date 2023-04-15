---
title: "Simple automated testing using truth tables"
tags: [guide]
description: "Use a simple description table of the expected inputs and outputs to test a combinatorial or synchronous Wokwi design"
weight: 130
---

Here you'll learn how to use a simple table to have your design tested when changes are made and prior to production.


### Truth Table Testing

The system will automatically test any Wokwi design that has a `truthtable.md` file present.  To create it, use the drop down next to the files tabs on the left to add a `+ New file...` and name it *truthtable.md*

Within that file, you need only create a markdown table with at least two columns, for desired input and expected output.

If your design was just a single inverter, tied to input 0 and coming out on output 0, then having 

<pre>
|  input   |  output  |
|----------|----------|
| 00000000 | xxxxxxx1 |
| 00000001 | xxxxxxx0 |

</pre>

in truthtable.md would be enough to validate the design.  Each row is processed in sequence:
the input wires are set to the logic levels according to the first column (all low in the first row above) and the outputs are checked to see if they match the second column.

A `0` is a logic LOW, and a `1` a logic HIGH.  The `x` bits in the output mean we _don't care_ about these bits.  Columns are representations of all 8 bits as MSB: like with standard decimal numbers, e.g. 123, the left bits are higher powers which is why 'output 0' is the last field in the `xxxxxxx1` entry. 

To function, the truthtable.md files must have a valid markdown table where:
  * there can be *free-form text above* the table, describing your test and circuit;
  * the column *headers* may contain any text description that's appropriate to your circuit;
  * there is a *separator* between the header and the test case rows (the dashed line);
  * there are at least *two columns* in every row;
  * each column, after the header, has *8 bit specifications* (i.e. 8 characters from the set `0`, `1`, and `x` or `-` for don't care/don't change);
  * an output column that only has *don't care* bits will apply the input but not test anything--useful for reset or setup steps; and 
  * whitespaces within the columns are ignored, so you can arrange things clearly.

That all means that this:

<pre>
Simple inverter test (connected on 
pin 0 for both in and out).

It should invert!  OUT == ~IN

| no-connect   IN  |          OUT  |       comment       |
|------------------|---------------|---------------------|
| xxxx   xxx    0  | xxxxxxx   1   |  in low -> out high |
| xxxx   xxx    1  | xxxxxxx   0   |  in high -> out low |

</pre>

would perform the exact same tests as the first truthtable above and, to me, is much clearer. 

You can see a less trivial example of a combinatorial truth table in the 
[4-bit full adder with carry](https://wokwi.com/projects/344249305917293138) project.

### Clocked designs

The details above are sufficient for testing both combinatorial and synchronous designs.

Say you have a circuit like the padlock, where you want to set a combination and clock it in to see the result.

You could do this:

<pre>
|     ComboABC RST   CLOCK |     7-segment      |             |
|--------------------------|--------------------|-------------|
| ---   110     -      -   | --   -----     -   | set combo   |
| ---   ---     -      1   | --   -----     -   | clock  in   |
| ---   ---     -      0   | --   11111     -   | success     |
</pre>

Here, I'm using `-` rather than `x` as a matter of preference.  

The first row sets the inputs to the right combination for the lock, without affecting any of the other inputs.  The two subsequent rows make the clock signal go HIGH, then LOW.  

It is only after that clock cycle that we check that the outputs have changed to indicate success, because in a synchronous design changes may only take effect after this point.

So, you _can_ do it this way but it will make for a very long day of writing truth table rows.

Thus, for convenience and clarity, an extra option is available for bits: `c` for "clocked".  Using this, the above test becomes

<pre>
|     ComboABC RST   CLOCK |     7-segment      |             |
|--------------------------|--------------------|-------------|
| ---   110     -      c   | --   11111     -   | valid combo |
</pre>



And behaves exactly the same.  Any row with an input that has `c` bit(s) will have the effect of 
 
  1) setting any inputs that have changed, other than `c` bits;
  2) inverting all `c` bits; and
  3) inverting all `c` bits again, to return them to their original state
  
in three distinct steps *before* checking that the outputs match the specified values.

This makes it much easier to test clocked designs.  For example, without the `c` bits, the truthtable.md from the [customizable padlock](https://wokwi.com/projects/347417602591556180) would require 39 rows and all the clocking would muddy the waters of what's actually being tested.

With the clock bits, the full test currently looks like this:

<pre>

| PRG  xx  COMBO  RST CLK  |    7-segment    |       comment           |
|--------------------------|-----------------|-------------------------|
|  0   00   000    1   c   |   -- ----- -    | start with reset        |
|  1   xx   110    0   c   |   -- ----- -    | program w/110 combo     |
|  0   xx   000    1   c   |   -- ----- -    | reset                   |
|  x   xx   111    0   c   |   -- 11100 -    | try a bad combo         |
|  x   xx   001    x   c   |   -- 11100 -    | another bad combo       |
|  x   xx   110    x   c   |   -- 11111 -    | the right combo         |
|  x   xx   000    x   c   |   -- 11111 -    | bad but still unlocked  |
|  x   xx   xxx    1   c   |   -- ----- -    | reset                   |
|  x   xx   xxx    0   c   |   -- 11100 -    | now locked again        |
|  1   xx   001    0   c   |   -- ----- -    | program w/001 combo     |
|  0   xx   000    1   c   |   -- ----- -    | reset                   |
|  x   xx   100    0   c   |   -- 11100 -    | try a bad combo         |
|  x   xx   001    x   c   |   -- 11111 -    | the new combo           |
</pre>

And that's it: add a truthtable.md to your design and leverage automated testing easily!

{{% feedback %}}

---
title: "Generating wokwi designs from truth tables"
tags: [guide]
description: "Learn how to use wokwi-lookup-table-generator for design generation and verification from truth tables"
weight: 130
---

**Truth tables**

You have already learned about combinational logic that can be described by using a truth tables, e.g. the [full adder](https://tinytapeout.com/digital_design/puzzle_adder/).

Let's now have a look at at a decoder which converts a binary coded decimal digit (0..9) to control a [7-segment display](https://docs.wokwi.com/parts/wokwi-7segment). The input range can be covered using four bits (0..15=2^4-1), i.e. four input signals. We specify that valid input values are in the range 0..9, other values will show a blank display.

The truth table below maps the four **input** signals (`w`, `x`, `y` and `z`) to the seven **output** signals (`A` to `G`) driving the seven segments of the display:

| BCD | Binary | w | x | y | z | A | B | C | D | E | F | G |
| --- | ------ | - | - | - | - | - | - | - | - | - | - | - |
| 0   | 0000   | 0 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1   | 0001   | 0 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 2   | 0010   | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 3   | 0011   | 0 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 4   | 0100   | 0 | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 5   | 0101   | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 6   | 0110   | 0 | 1 | 1 | 0 | 0 | 0 | 1 | 1 | 1 | 1 | 1 |
| 7   | 0111   | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8   | 1000   | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 1 | 1 |
| 9   | 1001   | 1 | 0 | 0 | 1 | 1 | 1 | 1 | 0 | 0 | 1 | 1 |
| \-  | 1010   | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1011   | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1100   | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1101   | 1 | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1110   | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| \-  | 1111   | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Some examples:

The decimal digit `0` is represented as `0000` in binary. We want to switch on all seven segments except segment `G` - the middle segment. This is why we set output signals `A` to `F` to `1` and output signal `G` to `0`.

The decimal digit `1` is represented as `0001` in binary (starting with the most significant bit on the left). We now only want to switch on the top-right and the bottom-right segments (segments B and C), thus placing a `1` only for output signals `B` and `C` and setting all other values to `0`.

The decimal digit `8` is represented as `1000` in binary. We now only want to switch on all of the seven segemtns, thus placing a `1` for output every output signal.

There are also some binary values that cannot be represented by a single decimal digit, e.g. `1101` (decimal value of 2^4 + 2^3 + 2^0 = 8 + 4 + 1 = 13). This is why we set all output signals to `0` in order to completely blank out the display.

---

**Usage of wokwi-lookup-table-generator for design generation**

There's a Python based tool called [wokwi-lookup-table-generator](https://github.com/maehw/wokwi-lookup-table-generator) which can be used to generate a wokwi schematic from truth tables. The generator implements the those truth tables in conjunctive normal form which means only using AND and OR gates.

In a first step, the truth tables are re-written as equations functions of boolean algebra (using so called minterms, or "sum of products") for every output signal.

The conversion from truth table to boolean algebra is done with a Python implementation of the Quine McCluskey algorithm. Please note that these optimizations are not really required as the ASIC toolchain will take care of optimization (and know the kind of hardware cells being available on the target hardware), but it helps to understand own digital designs and their implementation.

In the next step those functions of boolean algebra are layed out as wokwi schematic by placing all required AND and OR gates and connecting them with each other.

In order to run the tool, the truth table needs to be converted into JSON format. The names of the input signals are listed in the `inputs` array.
The same way a single column of the truth table describes if an output signal is a 1 or a 0, so does a row in the JSON `outputs` dictionary:

```
{
  "version": 1,
  "description": "Lookup table to translate a binary coded decimal (BCD) number to wokwi 7-segment display (https://docs.wokwi.com/parts/wokwi-7segment). Valid values are in the range 0..9, other values will show a blank display.",
  "inputs": ["w", "x", "y", "z"],
  "outputs": {
    "A": [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    "B": [1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    "C": [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    "D": [1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "E": [1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    "F": [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    "G": [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0]
  }
}
```

We're now ready to run the generator by specifying the logic input file (`-f`) and the wokwi schematic output file (`-o`):

```
python3 generate.py -f ./demos/bcd_7segment_lut.logic.json -o bcd_7segment_lut.diagram.json --tinytapeout
```

Also do not forget to activate the flag `--tinytapeout` (or `-tt`) so that the default parts from the tinytapeout wokwi template are also generated.


We can open and inspect the output file with wokwi's [diagram.json file format](https://docs.wokwi.com/diagram-format). It defines the parts (basically AND and OR gates) and the connections between those parts:

```
{
    "version": 1,
    "author": "maehw",
    "editor": "wokwi",
    "parts": [
        {
            "type": "wokwi-gate-buffer",
            "id": "input_a",
            "top": 0,
            "left": 0,
            "attrs": {}
        },
        {
            "type": "wokwi-gate-not",
            "id": "input_not_a",
            "top": 60,
            "left": 0,
            "attrs": {}
        },
        ...
    ],
    "connections": [
        [
            "input_not_a:IN",
            "input_a:IN",
            "black",
            [
                "h-20",
                "*",
                "h-20"
            ]
        ],
        ...
    ]
}
```

Let's simulate the design!

1. Open the [Wokwi template](https://wokwi.com/projects/339800239192932947).
1. Switch the editor view from tab `tiny-tapeout-poc-new-internal-pulls.ino` to tab `diagram.json`.
1. Select the whole file content, delete it and replace it by the contents of the generated JSON file `bcd_7segment_lut.diagram.json`.
1. Please note that your browser may be unresponsive for a moment (several seconds) as wokwi is processing the new JSON contents.
1. Start the simulation.
1. Toggle the input switches and check if the 7-segment display lights up the expected segments.

*(The finished generated demo project can be found here: https://wokwi.com/projects/347688030570545747)*

---

**Usage of wokwi-lookup-table-generator for automated design verification**

As manual verification can be quite tedious, especially for designs with many input signals, `wokwi-lookup-table-generator` provides an option for automated verification: call the tool again, but replace the `--tinytapeout` (or `-tt`) flag with the `--test` (or `-t`) flag.

```
python3 generate.py -f ./demos/bcd_7segment_lut.logic.json -o bcd_7segment_lut.diagram.json --test
```

Adding the flag will have the following two effects:
* New contents inside of `bcd_7segment_lut.diagram.json`.
* A new file `sketch.ino` is created.

When we inspect `bcd_7segment_lut.diagram.json` we will find four major modifications (compared to when using the `--tinytapeout` flag instead of `--test`):

The default parts from the wokwi template have been removed.

The parts list is extended by an [Arduino Mega](https://docs.wokwi.com/parts/wokwi-arduino-mega):

```
{
    "type": "wokwi-arduino-mega",
    "id": "mega",
    "top": -400,
    "left": -500,
    "rotate": 90,
    "attrs": {}
}
```

A section for including a [serial monitor](https://docs.wokwi.com/guides/serial-monitor) is added:

```
"serialMonitor": {
    "display": "always",
    "newline": "lf"
}
```

And the fourth major change is that the generated digital design's inputs and outputs are automatically wired with digital I/O pins of the Arduino Mega.

The `sketch.ino` file contains generated code to automatically verify the digital design by applying all possible input combinations and checking the digital design outputs against the expectations from the truth table.

This is what the lookup table of expected value looks like in the `sketch.ino` code for our BCD to 7-segment decoder:

```
uint16_t expected_out_val[2 << (DESIGN_NUM_USED_INPUTS-1)] = {
    0b1111110,
    0b0110000,
    0b1101101,
    0b1111001,
    0b0110011,
    0b1011011,
    0b0011111,
    0b1110000,
    0b1101111,
    0b1110011,
    0b0000000,
    0b0000000,
    0b0000000,
    0b0000000,
    0b0000000,
    0b0000000,
};
```

Let's simulate and verify the design!

1. Open the [Wokwi template](https://wokwi.com/projects/339800239192932947).
1. In the editor view `tiny-tapeout-poc-new-internal-pulls.ino` select the whole file content, delete it and replace it by the contents of the newly generated `sketch.ino` file.
1. Switch the editor view from tab `tiny-tapeout-poc-new-internal-pulls.ino` to tab `diagram.json`.
1. Select the whole file content, delete it and replace it by the contents of the newly generated JSON file `bcd_7segment_lut.diagram.json`.
1. Start the simulation.
1. On the bottom right of the wokwi simulation window an area with serial output data from the Arduino Mega should pop up and show the results of the verification for every combination of input signals and finally an overall result.

*(The finished generated demo project can be found here: https://wokwi.com/projects/347688283983053395)*

Here is a snippet from wokwi's serial monitor showing the results of the verification run:

```
Design has 4 inputs.
Design has 7 outputs.
Testing all 2^4 input combinations.
Stop verification on error? Yes

Wrote input: 0b0000
  Expected output:  0b1111110
  Read back output: 0b1111110
  [PASS]

Wrote input: 0b0001
  Expected output:  0b0110000
  Read back output: 0b0110000
  [PASS]

Wrote input: 0b0010
  Expected output:  0b1101101
  Read back output: 0b1101101
  [PASS]

...

Wrote input: 0b1110
  Expected output:  0b0000000
  Read back output: 0b0000000
  [PASS]

Wrote input: 0b1111
  Expected output:  0b0000000
  Read back output: 0b0000000
  [PASS]

[PASSED]
```

---

**References**

* [Installation of `wokwi-lookup-table-generator`](https://github.com/maehw/wokwi-lookup-table-generator#installation-and-dependencies)
* [Insights](https://github.com/maehw/wokwi-lookup-table-generator#how-does-this-work-internally): How does `wokwi-lookup-table-generator` work internally?
* [Issues](https://github.com/maehw/wokwi-lookup-table-generator/issues): How to improve the tool and its usage

{{% feedback %}}

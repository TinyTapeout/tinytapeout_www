---
title: 'Analog pins'
description: 'Analog pin specifications'
weight: 15
---

### Analog pins

The analog pins are labeled `ua[0]` through `ua[7]` (ua stands for "user analog"). The number of pins that will actually be connected to pads depends on the number of analog pins that you defined in the `pinout` section in info.yaml (and paid for).

For example, if you purchased two analog pins, only `ua[0]` and `ua[1]` will be connected to the pads. The remaining pins will **not be connected**.

### Specifications and limitations

The path between the analog pads and the your project (the ua pins) is expected to have the following properties:

- Resistance: < 500 ohm
- Capacitance: < 5 pf

Analog pins are **limited to 1.8V**. If you require 3.3V for your design, please contact us to discuss options.

You are not allowed to use the **metal 5** layer in your design, as it's used by Tiny Tapeout's power grid.

### Pricing

Projects with analog pins must be two tiles high. This means that the minimum price for the area of the project is $100 (each tile is $50).

In addition, there is a per-pin cost. The price for analog pins is $40 per pin for the first four pins (in a project), and $100 per pin for additional pins.

Example: a design that takes 1x2 tiles and uses 4 analog pins would cost $260 ($100 for the tiles, and $160 for the analog pins). This price is only for including the design in the shuttle, and does not include the cost of the ASIC, PCB, or shipping.

### Pin locations

The pin locations must match one of the [Tiny Tapeout templates](https://github.com/TinyTapeout/tt-support-tools/tree/tt06/def/analog). The templates are available in DEF format, which is compatible with the [Magic VLSI layout tool](http://opencircuitdesign.com/magic/).

There are several templates available, each for a different number of tiles. The templates include all the eight analog pins, but only the pins that you paid for will be connected to the pads. In addition, the templates also include all the [standard digital pins](../gpio).

Most analog designs should fit into the smallest template, _tt_block_1x2_pg_ana.def_.

#### Power ports

The power ports need to be named `VPWR` and `VGND` and need to be placed on `metal 4`. They both need to have the same width, between 1.2 and 2.0 um. Their height should be at least 95% of the design's total height.

The actual metal area can be larger, but the port area must fit these dimensions.

#### Generating the LEF file for your submisson

If you use magic to create your design, make sure to export the LEF file with the "-pinonly" option, e.g.:

```
lef write ./lef/tt_um_project_name.lef -pinonly
```

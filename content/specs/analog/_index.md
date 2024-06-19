---
title: 'Analog pins'
description: 'Analog pin specifications'
weight: 15
---

## PDK

All Tiny Tapeout shuttles run on the Sky130A PDK. Make sure you simulate with Sky130A.

## Analog pins

The analog pins are labeled `ua[0]` through `ua[5]` (ua stands for "user analog"). The number of pins that will actually be connected to pads depends on the number of analog pins that you defined in the `pinout` section in info.yaml (and paid for).

For example, if you purchased two analog pins, only `ua[0]` and `ua[1]` will be connected to the pads. The remaining pins will **not be connected**.

## Specifications and limitations

The path between the analog pads and your project (the ua pins) is expected to have the following properties:

- Resistance: < 500 ohm
- Capacitance: < 5 pf
- Max current: 4 mA

You are not allowed to use the **metal 5** layer in your design, as it's used by Tiny Tapeout's power grid.

## Pin locations

The pin locations must match one of the [Tiny Tapeout templates](https://github.com/TinyTapeout/tt-support-tools/tree/tt08/def/analog). The templates are available in DEF format, which is compatible with the [Magic VLSI layout tool](http://opencircuitdesign.com/magic/).

There are several templates available, each for a different number of tiles. The templates include all the eight analog pins, but only the pins that you paid for will be connected to the pads. In addition, the templates also include all the [standard digital pins](../gpio).

Most analog designs should fit into the smallest template, _tt_analog_1x2.def_, which is 160x225um in size.

**Important**: Do not leave any floating digital output pins in your design. Connect any unused `uo_out`, `uio_out` and `uio_oe` pins to GND.

## Power pins

The following power pins are available:

* VGND: Ground rail
* VDPWR: 1.8V digital core voltage
* VAPWR: 3.3V analog supply rail (optional, requires a different template)

Power pins need to be vertical stripes on met4 layer and must adhere to the following rules:

1. Start within the bottom 10 µm of the module and extend at least to the top 10 µm of the module.
2. Minimum width of 1.2 um.
3. Projects utilizing the 3.3V rail MUST use the `tt_analog_*_3v3.def` templates.
4. Multiple power pins of each type can be used with varying dimensions as long as the above constraints are met.
5. The actual metal area can be larger or have a different shape, but the area defined as a pin must comply with these constraints.

## Pricing

Projects with analog pins must be two tiles high. This means that the minimum price for the area of the project is $100 (each tile is $50).

In addition, there is a per-pin cost. The price for analog pins is $40 per pin for the first four pins on each Tiny Tapeout shuttle, and $100 per pin for additional pins.

Example: a design that takes 1x2 tiles and uses 2 analog pins would cost $180 ($100 for the tiles, and $80 for the analog pins). Another design that takes 2x2 tiles and uses 3 analog pins would cost $380 ($200 for the tiles, and $180 for the analog pins), assuming both designs are on the same shuttle.

This price is only for including the design in the shuttle, and does not include the cost of the ASIC, PCB, or shipping.

---

# Instructions for creating and submitting an analog design

{{< youtube DQAA4MrG8pM >}}

These instructions assume you are using the [Magic VLSI tool](http://opencircuitdesign.com/magic/), but you can do the same with Klayout or proprietary tools.

Make sure the version of Magic matches the PDK.

## Create the repository

Start your design from the [tt08-analog-template repository](https://github.com/TinyTapeout/tt08-analog-template). Click on the green "Use this template" on top of the page, and select "Create a new repository".

## Decide on the size of your design

Tiny Tapeout provides templates for custom GDS submissions. These templates include all the required pins on the metal 4 layer. Do not change the pin sizes or positions. 
Download one of the [analog pin templates](https://github.com/TinyTapeout/tt-support-tools/tree/tt08/def/analog) as a starting point for your design.

The following templates are currently available:

- `tt_analog_1x2.def` - 1x2 tiles, digital power supply (1.8V)
- `tt_analog_2x2.def` - 2x2 tiles, digital power supply (1.8V)
- `tt_analog_1x2_3v3.def` - 1x2 tiles, both 1.8V (VDPWR) and 3.3V (VAPWR) power supplies
- `tt_analog_2x2_3v3.def` - 2x2 tiles, both 1.8V (VDPWR) and 3.3V (VAPWR) power supplies

## Edit the info.yaml file

It's important that you are consistent with your naming. The name of the project must match the final GDS and LEF files.

Decide on a name for your module (top cell). The top level module name must start with 'tt_um_', and it must be unique on the shuttle, so we suggest including your github username, e.g. tt_um_username_amazing_adc.

Edit the `info.yaml` files and the the following properties:

* `top_module` - the name of your top module
* `tiles` - should match your selected template size (1x2 or 2x2)
* `analog_pins` - the number of analog pins you use
* `pinout` - describe the function of each digital / analog pin you use, leave the others empty ("")
* Also fill in the title, author and description fields.

## Edit the verilog stub

This file is used to 'blackbox' your design when we integrate it into the Tiny Tapeout shuttle.

Edit [src/project.v](src/project.v) and replace `tt_um_example` with the actual name of your top module.

## Documentation

Edit [docs/info.md](docs/info.md) and add a description of your project.

## Draw the rest of the owl

Use your preferred analog flow to design, simulate, layout, extract, LVS and post layout simulate.

A quick way to get started is to use this [tcl script](https://gist.github.com/urish/ba71f2fa68505a1b665000bce08d3874) to draw and label the power ports.

* Download the script
* Edit it to change the cellname and GDS and LEF export paths
* Start Magic and in the tcl command window, write `source tt-analog-draw.tcl`

## Resources

* [Drawing an inverter with Magic by Ryan Ridley, Teo Ene, and James E. Stine](https://docs.google.com/document/d/1hSLKsz9xcEJgAMmYYer5cDwvPqas9_JGRUAgEORx1Yw/edit#heading=h.j6gtadx04fb6)
* [Magic cheatsheet by Harald Pretl](https://github.com/iic-jku/osic-multitool/blob/main/magic-cheatsheet/magic_cheatsheet.pdf)
* [Circuit designers etiquette by Harald Pretl](https://github.com/iic-jku/Circuit-Designers-Etiquette)
* [Xschem tutorial by Stefan Schippers (video)](https://www.youtube.com/watch?v=q3ZcpSkVVuc)
* [Analog tutorials by Carsten Wulff (video)](https://www.youtube.com/playlist?list=PLybHXZ9FyEhZfwQTKrLhm6ZZm4IDfGGla)
* [Analog design flow by Carsten Wulff](https://analogicus.com/rply_ex0_sky130nm/tutorial)
* [Analog tutorials by BMinch (video)](https://www.youtube.com/watch?v=iLY49tnKbz4)
* [Magic layout demonstration by Tim Edwards (video)](https://youtu.be/XvBpqKwzrFY?si=AyL0Wr3V4gb954yx)

## Export the GDS and LEF files

Save the resulting GDS file in the `gds` folder, and the LEF file in the `lef` folder. The file names must match your `top_module` property (e.g. `gds/tt_um_example.gds`). 

If you use Magic to create your design, make sure to export the LEF file with the "-pinonly" option, e.g.:

```
lef write ../lef/tt_um_project_name.lef -pinonly
```

Export the GDS by running:

```
gds write ../gds/tt_um_project_name.gds
```

{{% notice tip %}}
If you're using Magic - do not flatten the .mag file, leave it hierarchical to avoid weird DRC issues.
{{% /notice %}}

## Submit your design

Go to [app.tinytapeout.com](https://app.tinytapeout.com) to submit your design.

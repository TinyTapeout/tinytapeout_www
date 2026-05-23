---
title: Laying Out Standard Cells with Magic VLSI
description: Learn how to use Magic VLSI to place standard cells from a PDK into your custom design
---

[Magic VLSI](http://opencircuitdesign.com/magic/) is a layout tool that allows you to draw your own features, but to
also use cells from existing PDKs to create your design. This guide will take you through placing cells from the
SkyWater 130nm PDK and how to wire them together.

## Setting the Grid

First, set the grid to 0.46um by 0.36um and enable grid snapping by running the following commands:

```tcl
grid 0.46um 0.34um
snap user
```

This grid matches the "hd" (high density) cells - for other cell types, you can find the grid sizes in the **second table**
in the [SkyWater PDK docs](https://skywater-pdk.readthedocs.io/en/main/contents/libraries/foundry-provided.html). The
relevant rows are `X-GRID` and `Y-GRID`.

## Instantiating the Cells

To create an instance of a standard cell, select the "Cell" menu on top, and then "Place Instance".

{{< figure src="images/magic-place-instance.png" title="Selecting the \"Place Instance\" option via the dropdown menus">}}

In the dialog that appears, type `$PDK_ROOT` to go to the PDK directory on your computer. Then type: `sky130A/libs.ref/sky10_fd_sc_hd/mag`

This will get you into the directory with all the standard cells.

You can select any cell you want to instantiate. If you want to filter the list, you can also type a word surrounded
by asterisks. For instance, if you only wanted cells containing "xor" in their name, type `*xor*`.

As an alternative, you can browse the standard cell catalog in the "libmgr" panel. Open the "Options" menu and select
"Library Manager". You'll see a list of all the libraries and their cells inside. Select a cell and click "Place" to add
it to your design.

{{< figure src="images/magic-libmgr.png" title="Library Manager window">}}

If you know the name of the cell you'd like to place, you can also use the `getcell` command to place it, e.g.: `getcell sky130_fd_sc_hd__inv_1`

{{% notice tip %}}
The meaning of `sky130_fd_sc_hd` is as follows: `sky130` = node name, `fd` = foundry, `sc` = standard cells, `hd` = high density.
{{% /notice %}}

## Placing the Cells

The standard cells are placed in rows. You must include a tap cell within 15um of every transistor (e.g. `sky130_fd_sc_hd__tapvpwrvgnd_1`),
and the cells should slightly overlap each other. If you are missing tap cells, you'll get DRC errors.

Adhering to the grid settings defined above ensures the overlapping parts of the cells match - otherwise, you'll get DRC errors.

Here's an example of three cells placed, showing how they overlap. The other white rectangle is a `sky130_fd_sc_hd__tap_1`,
which partially overlaps the two surrounding cells.

{{< figure src="images/magic-tap-overlap-grid.png" title="2 DFFs with a tap cell in the middle, grid overlay">}}

{{< figure src="images/magic-tap-overlap-no-grid.png" title="2 DFFs with a tap cell in the middle, no grid overlay">}}

In this example, we're using the `dfxbp` cell, which is a [delay flip-flop with complementary outputs](https://skywater-pdk.readthedocs.io/en/main/contents/libraries/sky130_fd_sc_hd/cells/dfxbp/README.html).

{{% notice tip %}}
To show the contents of a cell, move the mouser over it, press <kbd>I</kbd> and then press <kbd>X</kbd> (for "expand"). To hide the contents
of a cell, press <kbd>Shift</kbd> + <kbd>X</kbd>.
{{% /notice %}}

## Placing Multiple Rows

You can stack multiple rows on top of one another by mirroring the cells vertically on every other row. To mirror a cell
vertically, select the instance (by moving the mouse over it and pressing <kbd>I</kbd>), then press <kbd>Shift</kbd> + <kbd>F</kbd>.

The cells should overlap each other, as shown in the figure below.

{{< figure src="images/magic-overlapping-cells.png" title="A tap cell overlapping a DFF cell">}}

If you are getting DRC errors, you either forgot to flip the cells, or are not snapping the cells to the grid as explained above.

## Wiring the Cells

Connect the `VPB` strip (on metal1) to power, and the `VNB` strip to ground. Then wire the various pins according to your
schematic. In case of multiple rows, you will have to wire multiple strips.

For long strips, it's best to have several connection points due to the resistance of the metal1 strip (~0.125Ω per square).
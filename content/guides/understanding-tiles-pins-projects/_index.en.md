---
title: Understanding tiles, pins and projects
description: A guide to understanding how a Tiny Tapeout shuttle is formed, and what you need to do to submit a project
---

This is a guide to understanding what a Tiny Tapeout shuttle consists of, from tiles to pins. We'll cover different
tile sizes, project types and dealing with analog projects.

---

## The 'Tile' - The Smallest Unit for a Project

A tile is a unit of space available on a shuttle. Shuttles are made up of many tiles. A project may use one or more
tiles, but the default size is 1x1.

Physical tile sizes (measured in µm) vary between different target foundries, but rarely differ between the same foundry.
It is important to acknowledge this difference as a project may fit on one shuttle, but not another. For example,
a project submitted to a TTSKY shuttle with 80% area utilization may not fit on a TTGF shuttle.

Additional sizes (not an exhaustive list) include 1x2, 2x2, 3x2, e.t.c. all the way up to 8x4 for TTSKY and TTIHP shuttles.
Actual usable sizes depend on the currently available shuttle area. You must pay for the additional tiles you use, but
you may want to consider optimizing your design before committing to purchasing extra tiles -- they cannot be refunded
or transferred to another shuttle.

If you are unsure of what tile size will fit your project best, you can experiment with with the `tiles` parameter in
`info.yaml`. Simply push this to GitHub or [harden locally](/guides/local-hardening) and see what the results are.
You won't be charged for extra tiles until you go to submit your project to a shuttle.

<table>
    <tr align="center">
        <td> {{% figure src="/chips/ttsky26b/map.svg" title="TTSKY26b shuttle layout" %}} </td>
        <td> {{% figure src="/chips/ttgf26b/map.svg" title="TTGF26b shuttle layout" %}} </td>
    </tr>
</table>

In the figure above, you can see the difference between the size and amount of projects on a TTSKY shuttle versus a
TTGF shuttle. The difference is caused by a variety of factors, such as node size and cost of tapeout.

## Project Types - Digital, Mixed and Analog

By default, projects starting off with the Verilog or Wokwi templates use a digital core with digital I/O. This is the
simplest way to get started with a project, and is fit for many different types of designs.

Analog and mixed-signal designs are possible, however this depends on your target shuttle, budget and requirements. If
your design ***does not*** require analog pins, then you are free to incorporate analog circuitry into your design as
you wish. You will have access to the standard digital I/O. You are responsible for the schematic, layout, integration
and ensuring that your design passes the design rule checks (DRC) -- be careful and double check your work.

If your design ***does*** require analog pins, then you must use the appropriate analog template for your target shuttle.
There are some additional caveats with submitting an analog project:
- The design must fit into an [analog slot](/faq/#what-is-an-analog-slot) -- this means a minimum project size of
1x2 tiles
- Each analog pin that you intend to use must be purchased individually
- You are limited to six analog pins per project
    - Standard digital I/O is still available

The analog template can provide you with access to a 3.3V power source if you need it. Select your template on the
[analog specs page](/specs/analog/#decide-on-the-size-of-your-design).

You can use our calculator at [app.tinytapeout.com/calculator](https://app.tinytapeout.com/calculator) to price your
configuration before committing.

### Resources

#### Documentation

- Analog slots explained [on our FAQ](/faq/#what-is-an-analog-slot)
- [Technical information about analog projects and features](/specs/analog)

#### Tools
- [Magic VLSI](http://opencircuitdesign.com/magic/) for laying out your design
- [XSCHEM](https://xschem.sourceforge.io/stefan/index.html) for analog circuit schematic capture

See the [Resources section of the analog specs page for guides](/specs/analog/#resources) on how to use these tools.

#### Example Projects

- [QuickBus](https://github.com/MoonbaseOtago/sky-pll-cdr-test/blob/main/docs/info.md) by Paul Campbell - a phase-locked
loop with a programmable clock scaler, clock stability logic, charge pumps and variable frequency oscillators
- [Analog 8 bit 3.3v R2R DAC](/chips/ttsky25a/tt_um_mattvenn_r2r_dac_3v3) by Matt Venn - a digital-to-analog converter
using a resistor-to-resistor ladder
- [TT08 VGA FUN!](/chips/tt08/tt_um_algofoogle_tt08_vga_fun) by Anton Maurovic - a VGA display driver aiming to present
an adequate RGB888 (24-bit) image, with a built-in test mode and pattern generator

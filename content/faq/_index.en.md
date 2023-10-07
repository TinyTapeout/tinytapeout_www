---
title: FAQ
description: Frequently Asked Questions
weight: 90
---

{{% toc %}}

# Support

## I’m stuck, how can I get support?

Join the [discord community with this link](https://discord.gg/rPK2nSjxy8).

# Chip Specs for TT01, TT02 & TT03

## What is the top clock speed?

We think it will be around 12.5KHz. It's slow because we're currently using a serial scan chain to connect all the designs.
We have a built in [clock divider](https://github.com/tinytapeout/tinytapeout-02/blob/tt02/INFO.md#clock-divider) that can further reduce this speed down to 255 times slower than the top clock speed.

We are working on a much [faster mux based version here](https://github.com/TinyTapeout/tt-multiplexer).

## How many ins and outs do I get?

8 ins and 8 outs.

# Chip Specs for TT04 and TT05

## What is the top clock speed?

We think it will be around 50MHz.

## How many ins and outs do I get?

* clock and **nreset** (low to reset)
* 8 ins
* 8 outs
* 8 bidirectional ios

## What PDK is used for the manufacture?

We are using the open source Skywater 130nm [PDK](https://www.zerotoasiccourse.com/terminology/pdk/)

## How big can my design be?

For TT04 and TT05, the standard tile size is 160x100 um. This is enough for about 1000 digital logic gates, depending on their size. 
You can also buy extra tiles if you need more room.

Here's a 3D view of the [GDS](https://zerotoasiccourse.com/terminology/gds) of my [7 segment seconds counter](https://github.com/tinytapeout/tt04-verilog-demo), a small design that increments a counter every second and shows the result on the 7 segment display.

Click the picture to open an interactive viewer.

[![7 seg](/images/faq/7segtt04.png)](https://gds-viewer.tinytapeout.com/?model=https://tinytapeout.github.io/tt04-verilog-demo/tinytapeout.gds.gltf)

## When will the chips get manufactured?

The chips are taking between 6 and 9 months to manufacture. Then we need to do PCBA, test and order fulfillment. So expect up to 1 year's wait time!

You can find an up to date estimate for each shuttle in the [runs page](/runs).

# Wokwi FAQs

## How do I do x, y, z with Wokwi?

Wokwi’s [documentation is here](https://docs.wokwi.com/?utm_source=wokwi). We don’t have much documentation yet for the [ASIC](https://www.zerotoasiccourse.com/terminology/asic/) version of Wokwi.

## Shortcut keys

* select a component and press **delete** to remove it
* select a component (or shift select to add more components), then **d** to duplicate it.
* shift and drag to drag a box around multiple components
* + and - to zoom in and out
* [More here](https://docs.wokwi.com/guides/diagram-editor#keyboard-shortcuts).

## Can I copy and paste from one Wokwi design to another?

1. Select all the parts you want to copy (using shift and click the parts or shift and drag a box)
2. Copy them to clipboard (Ctrl+C or Cmd+C)
3. Go to the target project, click on the diagram editor, and paste (Ctrl+V or Cmd+V) 

## How can I undo / redo?

* Ctrl+Z & Ctrl+Y or ⌘Z / ⌘Y on a Mac.

## How do I find out the wiring of the 7 segment display?

Clicking on a component will bring up a ? in a circle. Click on the ? to [get the help](https://docs.wokwi.com/parts/wokwi-7segment).

## Do I have to use the 7 segment?

No, you can delete it and put whatever you want there. There’s lots of other components you can choose from the + menu. But if you get a PCB, it will only have the 7 segment on it. You’d need to plug the board into a breadboard and add your extra components after.

## How do I add new gates?

Either duplicate an existing one (select it and press **d**), or:

* press the + button menu at the top of the page,
* in the filter box, type 'logic' to filter only the logic gates.

## How do I move a set of gates?

Select all the ones you want to move (using shift and click the parts or shift and drag a box). Then drag the selection.

## How do I use the clock block?

You can use the first input as the clock. If you need to change the clock frequency you have to do it by editing the json diagram file. Set the "frequency" attribute to the frequency you want in Hz (e.g. "10000" or "10k" for 10 KHz).

Tiny Tapeout will support a wide range of clock frequencies (we anticipate up to 50 MHz). However, to make sure Wokwi simulates your design fast enough, you should not use a clock frequency higher than 100 KHz while simulating your design.

![clock](/images/faq/clock_freq.png)

## Are there some examples of projects people have made?

Check the [runs](/runs) page.

## Do I need to delete unused digital gates?

No, unused gates will be optimised out by the ASIC tools.

## I found and fixed a problem in my design - do I need to resubmit?

Yes, you need to 

* [re-run the github action](#i-updated-and-saved-my-wokwi-design-how-do-i-re-run-the-github-action-to-update-the-gds-files).
* Tell us to use your latest version using the (Tiny Tapeout application](https://app.tinytapeout.com/).

## Do I need to use Wokwi, or could I use an HDL?

If you’re an advanced user, you can use the HDL of your choice. See the [HDL page](/hdl) for more information. 

# TinyTapeout FAQs

## Where can I find the the template to get started?

You can access it on the [Getting Started Page](/digital_design/wokwi).

## How many spaces are there?

* For TT01 it was 498, for TT02 we reduced it to 250 to try to fill all the slots. TT03 will be the same as TT02.
* TT04 & TT05, the maximum is around 300, but as different sizes are allowed, there may be less slots.

## Which of my builds will be submitted for fabrication?

If you update your project and want us to use your latest version, you have to [go to your submission](https://app.tinytapeout.com/) and create a new submission.

You can keep updating your design up to the tapeout deadline.

# Github FAQs

## When I commit my change, the GDS action isn't running

You need to enable the actions.

1. Go to the Actions tab,
2. Click the enable actions button.

![actions](/images/faq/enable_action.png)

Also see the next FAQ on the GDS action failing on 'pages'.

## My GitHub action is failing on the 'pages' part.

Due to Github limitations, you need to do make a change to the settings of your repository to get everything to work.

1. Go to Settings tab,
2. Select Pages,
3. Change Source from Deploy from a branch to Github Actions.

![actions](/images/faq/action_pages.png)

## I got an error on my GitHub GDS action.

The best way to let me know is to [open an issue on the template repository with a link to your wokwi design](https://github.com/tinytapeout/tt05-submission-template/issues/new?assignees=mattvenn&labels=&template=bug_report.md&title=) and I’ll get back to you.

## I got an error on my GitHub Documentation action.

You might not have filled in enough fields, we require the following fields to be filled:

    author
    title
    description
    how_it_works
    how_to_test
    language

## I updated and saved my wokwi design, how do I re-run the Github action to update the GDS files?

1. Go to your repository, click the actions tab
2. Then click the ‘gds’ workflow
3. Then click the ‘Run workflow’ button
3. Then click the ‘Run workflow’ button

![actions](/images/faq/rerun_actions.png)

## What are all the files in the artifact?

There are lots!

* src - the source files for your chip:
    * user_module_xxxxx.v the [Verilog](https://www.zerotoasiccourse.com/terminology/hdl/) file that represents your Wokwi design.
    * config.tcl - config file for the [OpenLane](https://www.zerotoasiccourse.com/terminology/openlane/) ASIC tool flow that turns the Verilog into [GDS](https://www.zerotoasiccourse.com/terminology/gds2/).
    * cells.v translates the modules into the [standard cells](https://www.zerotoasiccourse.com/terminology/standardcell/) available for the Skywater 130nm process.
* runs/wokwi/reports/metrics.csv - a detailed summary report of the tool flow. It’s beyond the scope of this doc for now to explain it all.
* runs/wokwi/reports/synthesis/1-synthesis.stat.rpt.strategy4 report of the standard cells used for your design. 
* runs/wokwi/results/final/ (just the most important described here)
    * gds - the final GDS file that will be added to the TinyTapeout submission.
    * lef - an abstract version of the GDS with less information, used for routing.
    * verilog - the gate level verilog of your design.

## Where is the submission repository for the shuttle?

* [TT01 page](/runs/tt01/)
* [TT02 page](/runs/tt02/)
* [TT03 page](/runs/tt03/)
* [TT04 page](/runs/tt04/)

## I can't make a new fork of the submission repository. How do I start a new project?

Start by creating a new empty GitHub repository. 

* Via the command line you can then clone the tinytapeout submission repo, change it to point to your new empty repo using `git remote set-url <remote_name> <remote_url>` and then `git push`
* Via the GitHub web interface, [you can import a repository](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer) using the TT05 repository url: https://github.com/TinyTapeout/tt05-submission-template 

In either case, you may need to enable the Github actions.

# ASIC FAQs


## What do all these acronyms you keep using mean?

Sorry! I’m trying to keep it accessible but I’ll inevitably use some ASIC terminology at some point! See the [terminology guide here](https://zerotoasiccourse.com/terminology/).

## Why do I have fewer / more standard cells than I expected?

Logic synthesis has to convert Verilog to a data structure which has specific properties so that a technology library (like Sky130) can be mapped to it, so that it can actually be fabricated.

If you have 2 inverters in series, Yosys (the synthesis tool) may well optimise them both out, so you end up with less cells than expected.

However, if you have only 8 cells, your design is probably completely optimised out. Maybe you didn't connect the inputs or outputs?

## Why is target density set to 60%? Should I change it to 100% or should I add another tile?

Routing tends to take up more space than the logic. Also, there needs to be space for OpenLane to add extra cells:

* tap cells - make sure the substrate is correctly biased for the transistors.
* [antenna diodes](https://www.zerotoasiccourse.com/terminology/antenna-report/) - protect transitor gates during manufacture.

Some people have successfully increased the target density to around 62%. Alternatively you can buy an additional tile.

## How can I learn more about ASICs and how to design them?

[Check out my Zero to ASIC course!](https://zerotoasiccourse.com/)


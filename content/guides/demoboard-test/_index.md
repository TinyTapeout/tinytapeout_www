---
title: 'Activate and Test a Design'
description: 'Learn how to activate and test designs on the TT05 devkit'
weight: 70
---

This guide will show you how to activate a design on your TT05 devkit and test it successfully. You'll learn how to use the basic features of the devkit and try out different designs.

## Prerequisites

Before you begin, make sure you have:

* A TT05 devkit
* A USB cable to connect the devkit to your laptop
* Access to the internet to load the [commander](https://commander.tinytapeout.com/) interface

## Understanding Your Devkit

Before connecting anything, let's familiarize ourselves with the key components of your devkit:

{{< figure src="images/devkit_annotated.png" title="TT05 Devkit Components" >}}

Key components include:
* Reset button - Resets the current design
* Clock button - Manual clock control
* 7-segment display - Shows the output
* DIP switches - Controls the input signals

## Step-by-Step Guide

### Initial Setup

1. Ensure your devkit is in its default state:
   * All DIP switches should be OFF
   * Nothing should be plugged in except the USB cable
   * The devkit should look exactly like the image above

   {{< figure src="images/devkit_unplugged.png" title="Devkit - Unplugged" >}}

2. Connect to your laptop:
   * Use the provided USB cable
   * You should see the 7-segment display start a binary count
   * This indicates the factory test is running correctly

   {{< figure src="images/devkit_on.png" title="Devkit - Powered On" >}}


   

### Using the Commander Interface

1. Open the [commander](https://commander.tinytapeout.com/) interface
2. Verify your setup:
   * Check that TT05 is detected
   * Confirm firmware version is 2.0.3

   {{< figure src="images/commander_info.png" title="Commander Info" >}}

   * If either check fails:
     * Verify all DIP switches are off
     * Ensure nothing else is plugged in
     * Request a replacement devkit if needed

{{% notice warning %}}
If you don't see firmware version 2.0.3 or the TT05 isn't detected, don't proceed until you've resolved these issues.
{{% /notice %}}

### Testing the Factory Design

The default factory test is a counter that runs automatically.

1. Observe the counter:
   * Watch the 7-segment display counting up
   * Press the reset button. What happens?
2. Experiment with clock speeds:
   * Try different clock speed settings in the commander interface
   * What happens to the counter?

### Loading Your First Test Design

Let's try a simple logic gate design:

1. In the commander interface, enable [this](https://tinytapeout.com/runs/tt05/tt_um_wokwi_380409488188706817) design.
   * Enter "38" in the index field \
   OR
   * Search for "supercon workshop"
   * Click the "Select" button

2. Open the design page:
   * Click the [Wokwi link](https://wokwi.com/projects/380409488188706817) to view the original design
   * You'll see a collection of logic gates

   {{< figure src="images/wokwi_38.png" title="Wokwi Design 38" >}}

3. Test the logic gates:
   * Use the DIP switches to change inputs
   * Compare the 7-segment display output with the simulation
   * Verify that the physical ASIC matches the design simulation

### Try Another Design

Let's explore a different project:

1. Load the counter project:
   * Navigate to the TT05 design [tt_um_wokwi_379764885531576321](https://tinytapeout.com/runs/tt05/tt_um_wokwi_379764885531576321)
   * Select it in the commander interface

2. Experiment with the design:
   * What does it do?
   * Try using the reset button
   * Open the [Wokwi design](https://wokwi.com/projects/379764885531576321) to understand how it works
   * After checking the design, can you reset the counter?

## Next Steps

To explore more:

* Browse other TT05 designs
* Try these recommended projects:
  * [Interesting Pattern Generator](https://tinytapeout.com/runs/tt05/tt_um_wokwi_380412382001715201)
  * [Skullfet Design](https://tinytapeout.com/runs/tt05/tt_um_urish_skullfet)

{{% notice tip %}}
Look for designs with good documentation and clear testing instructions.
{{% /notice %}}
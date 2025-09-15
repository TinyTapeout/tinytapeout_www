---
title: '4 - Submit your design'
description: 'Get your design manufactured on Tiny Tapeout'
weight: 60
aliases:
    - /guides/workshop/wokwi-submit-design
---

This guide will show you how to submit your design to Tiny Tapeout and understand the difference between tiles and chips.

## Prerequisites

Before you begin, make sure you have:

* A GitHub repository created from the latest Wokwi or Verilog Tiny Tapeout template.
* Passing GDS and Docs Actions in your repository. This ensures your design meets the required standards.

{{< figure src="images/passing_indicators.png" >}}

### Understanding Tiles and Chips

In Tiny Tapeout:

* **Tiles** are the individual designs on the chip. If your project gets more complex you can use more tiles.
* **Chips** are the actual physical chips manufactured. They contain all the tiles from all the participants. We mount the chips onto the [demoboard](/specs/pcb) before sending to you.

## Step-by-Step Submission Guide

### Log In to Tiny Tapeout

* Go to: [https://app.tinytapeout.com/projects/create](https://app.tinytapeout.com/projects/create)
* Click the **Sign in with GitHub** button.
* Authorize the application if prompted.

### Submit Your Repository

* Once logged in, press the **Create a new project** button.
* Copy and paste your GitHub repository URL into the Github field.

{{< figure src="images/submit_design_2.png" >}}
{{< figure src="images/submit_design_3.png" >}}

* Click the **"Create Project"** button.

### If you have a coupon code for a free tile

* Ask an assistant for your coupon and type it in the coupon field and make sure to click the 'apply' button.
* This should drop the price to 0 and you can click the **"Submit Project"** button.

### Complete the Submission Process

* You have now submitted your design, but it’s not yet part of the tapeout. 
* You now have to submit a specific version of your design by pressing the **Submit a new revision** button.

{{< figure src="images/submit_design_4.png" >}}

* Your design will then be added to the Tapeout.
  
{{% notice warning %}}
Every time you make a change to your design you'll need to update the GDS and then submit a new revision. Designs can be changed up to the deadline.
{{% /notice %}}

### Congratulations!

You've successfully submitted your design to the Tiny Tapeout shuttle. We usually manufacture 4 chips per year, and we will include your design on the next chip.

## Important: Updating Your Submission

If you make any changes to your design after submission, you **must** update your submission.

### How to Update

1. If you only changed the Wokwi design, you can [re-run the GitHub action](/guides/wokwi-to-gds/#tips).
1. Otherwise, make changes to your design in your GitHub repository.
1. Check the GDS and Docs actions are passing.
1. Log back in to the submission portal: i.e. go to [app.tinytapeout.com](https://app.tinytapeout.com).
1. Select the project you want to update.
1. Click the **Submit a new revision** button.

## If you have time, try these next steps

* You can continue to update your design until the shuttle closing date.
* Take a look at our [previous chips](https://tinytapeout.com/chips/).
* Check out the [Tiny Tapeout 7 datasheet](https://tinytapeout.github.io/tinytapeout-07/datasheet.pdf).
* Once the shuttle run has ended you can update your documentation by following this [guide](/guides/documentation).

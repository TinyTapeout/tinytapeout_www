---
title: '4 - Optional - Submit a design revision'
description: 'Update an already submitted design on a shuttle'
weight: 60
aliases:
    - /guides/workshop/wokwi-submit-design
---

This guide will show you how to submit a new design revision and to understand the difference between tiles and chips.

## Prerequisites

Before you begin, make sure you have:

* A GitHub repository created from the Wokwi Tiny Tapeout template - this is handled by the submission portal from
the [previous exercise](/guides/workshop/create-your-gds).
* Passing GDS action in your repository.
    * Optionally, a passing docs action too.

{{< figure src="images/passing_indicators.png" title="Passing GitHub Actions indicators, visible on your repo's readme.">}}

### Understanding Tiles and Chips

In Tiny Tapeout:

* **Tiles** are the individual designs on the chip. If your project gets more complex you can use more tiles.
* **Chips** are the actual physical chips manufactured. They contain all the tiles from all the participants. We mount the chips onto the [demoboard](/specs/pcb).

## Updating Your Submission

If you've made any changes to your design between the previous exercise and now, you **must** update your design
submission on your website to ensure that the latest version is included. Follow the steps below.

1. If you only changed the Wokwi design, you can [re-run the GitHub action](/guides/workshop/create-your-gds/#tips).
1. Otherwise, make changes to your project in your GitHub repository.
1. Check the GDS (and docs actions, if applicable) are passing.
1. Log back in to the submission portal: i.e. go to [app.tinytapeout.com](https://app.tinytapeout.com).
1. Select the project you want to update.
1. Click the **Submit a new revision** button.

{{< figure src="images/submit_design_4.png" title="Submitting a new revision of a project">}}

{{%notice tip%}}
If you want to swap your Wokwi design for a Verilog project, then follow our guide on [submitting a Verilog project](/guides/submit-verilog-project) to the shuttle.
{{%/notice%}}

{{% notice warning %}}
Every time you make a change to your design you'll need to update the GDS and then submit a new revision. Designs can be
changed up until the shuttle deadline - this can be seen on the [homepage](/#our-open-shuttles). No new revisions will
be accepted after the deadline. **Make sure you account for the time it takes for the GitHub Actions to run.**
{{% /notice %}}



## If you have time, try these next steps

* You can continue to update your design until the shuttle closing date.
* Take a look at our [previous chips](https://tinytapeout.com/chips/).
* Check out the [Tiny Tapeout 7 datasheet](https://tinytapeout.github.io/tinytapeout-07/datasheet.pdf).
* Once the shuttle run has ended you can update your documentation by following this [guide](/guides/documentation).
* Take a look at this great video by Branch Education:

{{< youtube _Pqfjer8-O4 >}}

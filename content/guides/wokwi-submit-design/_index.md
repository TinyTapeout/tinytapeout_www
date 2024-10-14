---
title: 'Submit Wokwi Design'
linktitle: 'Submit Wokwi Design'
description: 'Submit Wokwi Design'
weight: 60
---

# How to Submit Your Design to Tiny Tapeout

## What You'll Achieve

By the end of this guide you'll:

* Submit your design to the Tiny Tapeout shuttle for manufacturing.
* Understand how Tiny Tapeout aggregates hundreds of designs into one chip.
* Learn how to update your submission if you make changes.
* Learn how to purchase a PCB.

## Prerequisites

Before you begin, make sure you have:

* A GitHub repository created from the latest Wokwi or Verilog Tiny Tapeout template.
* Passing GDS and Docs Actions in your repository. This ensures your design meets the required standards.

{{< figure src="images/passing_indicators.png" >}}

## Understanding Tiles and Chips

In Tiny Tapeout:

* **Tiles** are individual design slots on the chip.
* **Chips** are the actual physical chips manufactured. They contain all the tiles from different participants.

> **Note:** While you have a free tile for your design, receiving a physical PCB with your chip requires an additional purchase.

## Step-by-Step Submission Guide

### Log In to Tiny Tapeout

* Go to: [tinytapeout.com](https://tinytapeout.com/)
* Click on **"Login with GitHub"**.
* Authorize the application if prompted.

### Submit Your Repository

{{< figure src="images/submit_design_1.png" >}}

* Once logged in, you'll see a field to paste your repository URL.
* Copy your GitHub repository URL.


{{< figure src="images/submit_design_2.png" >}}
{{< figure src="images/submit_design_3.png" >}}

* Paste it into the field and click **"Submit"**.

### Complete the Submission Process

* You have now submitted your design, but it’s not yet part of the tapeout. 

{{< figure src="images/submit_design_4.png" >}}

* Click **"Submit a New Revision"** to add your design to the shuttle.
* Your design will then be added to the Tapeout.
  
> **Note:** You'll need to submit any revisions if changes are made before final submission.

### If you have a coupon code for a free tile

* During the submission, if you have a coupon for a free tile, paste the code in and press the 'apply' link.
* Validate the coupon to ensure your tile is free of charge.

### Congratulations!

You've successfully submitted your design to the Tiny Tapeout shuttle. Your design is now queued for inclusion in the next manufacturing run.

## Important: Updating Your Submission

If you make any changes to your design after submission, you must update your submission.

### How to Update

1. Make changes to your design in your GitHub repository.
2. Ensure that all Actions (GDS and Docs) are passing.
3. Log back in to the submission portal: i.e. go to [tinytapeout.com](https://tinytapeout.com) and click "Submit your design"
4. Resubmit your repository as before.
5. The system will recognize that you're updating an existing submission.

### Tips

* Double-check your design before submitting to avoid the need for updates.
* Stay aware of submission deadlines to ensure your design is included.

## Purchasing a PCB

If you'd like to receive a physical PCB with your chip:

* Pre-purchase your PCB here: [Tiny Tapeout Prepurchase](https://app.tinytapeout.com/prepurchase).
  
> **Note:** Only the first 100 boards are subsidized by Efabless, so act fast!

## About Efabless

Efabless is our manufacturing partner, helping to make chip fabrication accessible. [Learn more about them here](https://efabless.com/).

## Updating Documentation After the Shuttle Ends

Once the shuttle run has ended, to update your documentation:

* Follow this guide: [Updating Docs Post-Shuttle](https://docs.google.com/document/d/16YdQM4Lh3ZazVcNXhO2Ssty5hzKGp0fj3FKmcbMlFZo/edit#heading=h.mcvyaz7a8clr).

## Get Inspired by Other Designs

Looking for ideas or want to see what others have created?

* Browse past runs: [Tiny Tapeout Runs](https://tinytapeout.com/runs/).
* Check out a sample datasheet: [Sample Datasheet PDF (TT07)](https://tinytapeout.github.io/tinytapeout-07/datasheet.pdf).

---

That's it! You’ve successfully learned how to use the Tiny Tapeout GitHub template to turn your design into ASIC files for manufacturing. Happy hacking!


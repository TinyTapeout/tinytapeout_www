---
title: "Tiny Tapeout 02"
weight: 20
description: Our next run, coming soon!
---

# Get your Tiny Tapeout submission repository ready
Tiny Tapeout takes advantage of GitHub repositories to streamline the submission process. Using automated checks called *GitHub Actions*, you can submit your design for tapeout in just a few minutes! 

Plus, you get interesting statistics about your design, like how many [cells](https://www.zerotoasiccourse.com/terminology/standardcell/) you used, as well as [3D renderings](https://www.zerotoasiccourse.com/post/3drendering/) of your [GDS](https://www.zerotoasiccourse.com/terminology/gds2/) files!

{{< youtube GlvlZzjyUGI >}}

**Submission Overview**

Here are the basic steps for submitting. Please watch the YouTube video for a quick, detailed walkthrough.

1. Come up with a design. Need help? Check out the [Digital Design Guide](/digital_design/) for walkthroughs and [TinyTapeout-01](/runs/tt01/) for inspiration.
2. Choose your design method:
    * Try our [Graphical Design Tool](/digital_design/wokwi/) called *Wokwi*. The template provided has everything you need to start.
    * Create a design using a [high-level design language (HDL)](/hdl/)
3. Fork the [GitHub submission template](https://github.com/TinyTapeout/tt02-submission-template) (a *fork* is a just a copy of a repository)
    * Not familiar with GitHub? Don't worry, Matt's walkthrough video walks you through each step.
    * Don't have a GitHub account yet? [It's fast and easy to create one](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home).
4. Update your fork by following the instructions in the info.yaml file
    * If you used Wokwi, you can find your project ID in the Wokwi URL `https://wokwi.com/projects/<Your Project ID>`
        ![WokwiID](/runs/tt02/images/wokwi_id.png)
    * If you used an HDL, add your design files to the src folder 
5. Sit back and let the GitHub Actions verify your design!
        ![ActionsPass](/runs/tt02/images/actions_pass.png)
6. Still have questions or issues? We've got you covered! There are [answers to common questions in the FAQs](/faq/) 

# Submission opening soon!

To be the first to know when we open the submission form, subscribe to the mailing list.

{{< mailchimp >}}

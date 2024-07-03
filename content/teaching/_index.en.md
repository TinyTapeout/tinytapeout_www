---
title: "Universities & Schools"
date: 2024-07-03T10:12:12+01:00
weight: 10
---

From high schools to universities, Tiny Tapeout is a great way to teach digital design and get real chips back. 

Give your students hands-on experience with building their own application-specific integrated circuits and taking them all the way through to production - with the goal of holding a fully-packaged and ready-to-use chip in their hand at the end of the process.

Our pricing model makes it easy to put many designs onto one chip that is then shared between students, and encourages students to collaborate and share their designs.

> I'm a professor for an Introduction to Digital Systems course and just found this and let's just say this has **fundamentally just changed our entire Computer Engineering curriculum**. It looks like we can actually have first-year students designing ASICs, then be able later to analyse performance while taking their electronics course and learning about MOSFETs as well as their embedded systems and computer architecture.
> <br />_Russell Trafford, Rowan University_

## Pricing

{{< pricing-table plans=`[
  {
    "name": "Small class",
    "price": "$500",
    "features": ["Up to 5 Projects", "1 PCB kits"],
    "link": "https://app.tinytapeout.com/calculator?tiles=5&pcbs=1"
  },
  {
    "name": "Medium class",
    "price": "$2000",
    "features": ["Up to 25 Projects", "3 PCB kits"],
    "link": "https://app.tinytapeout.com/calculator?tiles=25&pcbs=3"
  },
  {
    "name": "Large class",
    "price": "$5000",
    "features": ["Up to 75 Projects", "5 PCB kits"],
    "link": "https://app.tinytapeout.com/calculator?tiles=75&pcbs=5"
  }
]` >}}

Fine print:

* The prices do not include shipping.
* The number of projects assumes each project is one tile (~160 x 100 um). For larger projects, or projects using analog pins, the number of projects will be less.
* Each PCB kit includes one chip with all the projects from the shuttle, assembled on a [PCB](/specs/pcb) and ready to use.
* Check the [shuttle schedule](/runs/) for the deadline of the next shuttle and the expected delivery date.
* All submissions must comply with our [terms of service](/terms).


## For Universities

To run a Tiny Tapeout course at a university level for students with prior experience in hardware design languages (HDLs), you can refer to our [HDL documentation](/hdl/) - though the [digital design tutorial](/digital_design/) is available for students with less experience, while [SiliWiz](/siliwiz) provides a hands-on look at how semiconductors work at the lowest level.

We recommend experimenting with the Tiny Tapeout design flow using a simple FPGA project to begin, before [trying out the submission process](/submission/).

When students have completed their chip designs, whether wholly original or based on [projects from previous Tiny Tapeout chips](/runs/), you can submit them for production using a credit card - or contact us to purchase prepaid credits.

For more advanced students, Tiny Tapeout also supports [mixed-signal and analog designs](/specs/analog).

## For High Schools

Tiny Tapeout's browser-based software and automated build system is designed to offer as low a barrier to entry as possible, while our educational materials begin at a level assuming no prior experience with chip design.

For high school and secondary education teachers looking to introduce Tiny Tapeout into their curriculum, we recommend [watching our introductory video](https://youtu.be/f4w1QOpHzOo) and completing at least some of our [digital design tutorial](/digital_design/) to get a feel for how Wokwi works. Once you're confident with Wokwi, try creating a new design or use one of our [customisable projects](/tags/customisable/) as a quick-start platform before [trying out the submission process](/#get-your-submission-ready).

When introducing a new class to Tiny Tapeout, we recommend beginning with our [workshop slides](https://docs.google.com/presentation/d/1NHFC3NHHFAzqK8HMGjxMHXJJ6r4j15dY86nk-boGDNM) and having the students complete our [digital design tutorial](/digital_design/). As it's browser-based, you won't need to install any software: students can complete the tutorial using a web browser.

When students have completed their chip designs, whether wholly original or using our [customisable project library](/tags/customisable/), you can submit them for production using a credit card - or contact us to purchase prepaid tokens.

## Further Support

If you have questions about how Tiny Tapeout works, how to use Wokwi, or need more information on the build and submission process, check out our [frequently asked questions](/faq/). If you're still stuck, [join our Discord](https://discord.gg/rPK2nSjxy8).

# Our Educational Partners

<div style="display: flex; flex-wrap: wrap; justify-content: center;">
  {{< customer-card "University of California, Santa Cruz" "ucsc.jpg" "https://www.linkedin.com/feed/update/urn:li:activity:7127152173037080576/" >}}
  {{< customer-card "San Jose State University" "sjsu.png" "https://www.linkedin.com/feed/update/urn:li:activity:7126369564975607808/" >}}
  {{< customer-card "Johannes Kepler University Linz" "jku.png" "https://www.jku.at/en" >}}
  {{< customer-card "Oklahoma State" "osu.png" "https://go.okstate.edu/" >}}
  {{< customer-card "Latin Practice" "latinpractice.png" "https://latinpractice.com/" >}}
  {{< customer-card "NYU" "nyu.png" "https://www.nyu.edu/" >}}
  {{< customer-card "Digital University Kerala" "kerala.png" "https://duk.ac.in/" >}}
  {{< customer-card "New York Institute of technology" "nyit.png" "https://www.nyit.edu" >}}
  {{< customer-card "Hochschule Rheinmain" "hrm.png" "https://www.hs-rm.de/de/" >}}
  {{< customer-card "Carnegie Mellon University" "cmu.png" "https://www.cmu.edu" >}}
  {{< customer-card "University of Würzburg" "julius_maximilians_universitat_wurzburg_logo.jpeg" "https://www.informatik.uni-wuerzburg.de/ce/" >}} 
    {{< customer-card "Danmarks Tekniske Universitet" "DTU_Logo_Hvid.jpg" "https://www.dtu.dk/" >}} 
</div>

# Sign up to the mailing list

To receive more information specifically for people using Tiny Tapeout in education, sign up to our mailing list.

{{< mailchimp-teacher >}}

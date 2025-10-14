---
title: 1 - Draw your own MOSFET
description: "Learn the basics of SiliWiz by drawing a MOSFET"
weight: 20
---

SiliWiz will help you get a basic understanding of how semiconductors are built and work. By drawing shapes on the canvas you can create MOSFETs, see their cross section and simulate how they work.

## Draw a MOSFET

In this lesson we will learn how to draw a [MOSFET](https://www.zerotoasiccourse.com/terminology/mosfet/). MOSFET stands for Metal Oxide Semiconductor Field Effect Transistor.

A MOSFET is an active component with 4 ports: gate, drain, source and body.

The gate used to be formed by putting metal on top of an insulating oxide layer, that’s the MO in MOSFET.

![](/siliwiz/images/image51.png)

When a voltage is applied across the gate and the body, an electric field is formed in the channel. This field attracts the charge carriers to the channel region where they can then work to conduct electricity. That’s the FE in MOSFET.

In an N type MOSFET built on a P type substrate, the majority charge carriers are holes, and it’s the minority carriers (the electrons) that get attracted to the gate and form the conductive channel between the drain and source.

That describes what’s happening physically inside a transistor. If that doesn’t make total sense though, don’t worry. How a MOSFET works will become clearer once we start drawing one with SiliWiz!

## SiliWiz

Load the quick start template in a new tab:

* [Quick start MOSFET template](https://app.siliwiz.com/?preset=nmosfet_start).

The tool has 3 important sections:

![](images/image54.png?width=80pc)

### Substrate

The base layer of a silicon chip is called the substrate. In most cases this is a P [doped](https://www.zerotoasiccourse.com/terminology/doping/) silicon wafer. Instead of being pure silicon, it has a minute quantity of impurities added to increase the wafer’s conductivity, changing from an insulator to a semi-conductor.

![](/siliwiz/images/quick_start.png?width=20pc)

The **p substrate** needs to be at 0 volts, so it's connected to the **vss** supply with a *tap*. Click the **Cross Section & DRC** button and move the cross section slider over the tap so you can see its profile.

{{% notice tip %}}
If you hover over a shape in the cross section, you’ll get a popup to tell you the name of the layer.
{{% /notice %}}

![](/siliwiz/images/image33.png?width=80pc)

The **vss** supply connects through the **metal1**, **metal1 via** and into the **p tap** where it connects to the **p substrate**.

The **p tap** is formed inside the substrate and makes it easier to connect to 0 volts. It's made by bombarding the substrate with atoms of a P type semiconductor, for example Boron. The atoms only hit the substrate where there is a hole in the **p tap** mask.

### Start Drawing!

Select the **n diffusion** layer and click and drag to draw a square in the middle. This will form both the drain and the source of the MOSFET. Like the **p tap** layer, **n diffusion** is formed inside the **p substrate**, but using atoms of an N type semiconductor like Arsenic.

![](/siliwiz/images/image14.png?width=80pc)

### Draw the Gate

MOSFETs used to have their gate drawn with metal, but now the gate is much more commonly made from polysilicon. Use the **polysilicon** layer to draw the gate.

![](/siliwiz/images/image50.png?width=80pc)

Move the cross section slider to the middle of the **n diffusion** so you can see the layers clearly. 

Look at the cross section of the MOSFET - the **n diffusion** got split! Now we have 2 **n type** sections with a **p type** in between. What happened?

## Split diffusion

When the chip is made, the gate is created first, and then the diffusion mask is used. The gate protects the P substrate from the N type diffusion, so we end up with 2 regions of N type and a region of P in the middle.

The PN junction is a fundamental part of how diodes, transistors and MOSFETs work.

## Drain, Source and Gate

To see how well our MOSFET works we need to connect up the gate, drain and source. The body is the **p substrate**, and we’ve already connected that to vss.

The red **polysilicon** forms the gate, but which way round is the source and the drain? The cross section shows the MOSFET is symmetrical!

For an N MOSFET to work, the body needs to be kept at the same or lower voltage as one of the remaining terminals. We normally do this by connecting one of the terminals to the same voltage as the body, and because this is where the charge carriers come from, its called the source. The other becomes the drain.

Start by drawing 3 vias with **metal1 via**.

![](/siliwiz/images/metal1vias.png?width=80pc)

Followed by 3 squares of **metal1**.
Label the gate **in**, the source **vss** and the drain **vdd**. If you get stuck, check [the solution here](http://app.siliwiz.com/?preset=nmosfet).

![](/siliwiz/images/image48.png?width=80pc)

## VGS curves

We’re going to see what happens when we increase the gate voltage from 0v to 5v and measure the current that flows from vdd to vss. Current is a measure of how many charge carriers are flowing per second, it tells us how ‘switched on’ the MOSFET is. Current is measured in [Amps](https://en.wikipedia.org/wiki/Ampere).

This is one of the most important experiments we can do with a MOSFET, and it’s going to help us understand how they are used to build the logic gates we use in future exercises.

Click the **Simulation** button and look at the traces.

![](/siliwiz/images/image23.png)

What does the graph show us? To start with, when the gate is less than around one volt, there is no current flowing. The MOSFET is off. Once we get past a threshold, the MOSFET starts to conduct and lets more and more current flow. This value is called the gate-source threshold.

1. Try changing the Width of the gate (in) of the MOSFET and see how this affects the curve. If we want the most current to flow in the saturation region, should we use a short or a long gate?

2. If you zoom into the graph, can you measure what gate voltage is required to get the MOSFET to start conducting?

## SiliWiz stackup

When a factory develops a way to make a chip, they need to share that information with the chip designers - that’s you! 

{{% notice tip %}}
Normally, you’d need to sign a document to say you wouldn't share the information. With the open source [PDK](https://www.zerotoasiccourse.com/terminology/pdk/), you don’t need to sign any paperwork before you start using it.
{{% /notice %}}


The Sky130 stackup we use for real chips is quite complicated, so we’re using a simpler, custom made one for SiliWiz. This helps to keep things approachable and fast. Bear in mind that a real, manufacturable PDK has a [lot more layers](https://skywater-pdk.readthedocs.io/en/main/rules/masks.html). The SiliWiz layer stackup looks like this:

![](/siliwiz/images/image31.png?width=80pc)

After we’ve finished our design we can turn each layer into a mask. A mask allows us to control the shapes made by the light on the photoresist. 

![](/siliwiz/images/image7.png?width=80pc)

[Photolithography](https://www.zerotoasiccourse.com/terminology/photolithography/) is the key technology that allows us to take the patterns we create in a tool like SiliWiz and miniaturise them down to the nanometer scale. It also lets us easily tile the same design over the silicon wafer to make the individual chips. It allows us to use a prepared image of the chip to make millions of copies reliably and rapidly.

## If you have time, try these next steps

* If you're interested to learn more about microelectronics with SiliWiz, you can try going through all the lessons [here](/siliwiz). Have fun!
* I visited IHP semiconductor factory to see how chips are made first hand. You can watch it below.

{{< youtube aBDJQ9NYTEU >}}

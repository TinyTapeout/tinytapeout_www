---
hidden: true
title: "192 FastMagnitudeComparator"
weight: 60
---

## 192 : FastMagnitudeComparator

* Author: Daniel Burke
* Description: Digital neuron threshold detector
* [GitHub repository](https://github.com/drburke3/FastMagnitudeComparator)
* [GDS submitted](https://github.com/drburke3/FastMagnitudeComparator/actions/runs/9195240814)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

For neuron thereshold evaluation in digital approaches,
a fast magnitude determination is often necessary.

This component is based upon well-documented Clint Cole (Digilent) bit-sliced expandable,
structural code re-expressed in AND-INV format to target optimized
ABC9 AIG graph synthesis in OpenLane.
https://www.realdigital.org/doc/a39d855f71772426c968c0151112b476

It is intentionally unclocked for measurements, and can be easily modified as a windowing-comparator
for inference field requirements.

The fast magnitude comparitor is second of a series of common, scaleable library of elements
intended to support CMOS digital neuron biomemetic building blocks, the first being a
scaleable fast accumulator for vector evaluation and integration based upon a generated
Sklansky adder/subtractor.

Each component is intended to be fashioned in structural Verilog for future optimization, scale well
so as to support varying bit-width large vector resolutions, and whenever possible described in
AND-INV form to leverage the OpenLane ABC9 logic optimizer which uses AIG graphs.

### How to test

The user will supply two numbers of appropriate length (A, B, each 8 bits in this case) with returning signals
indicating "A less than B", "A equal to B", or "A greater than B" as LT_out, EQ_out, and GT_out respectively.

### External hardware

Means to supply appropiate width words (in this instance one 8b byte) and read back GT, EQ, LT signals.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | ui_in[0]  | ui_out[0]  | uio[0]        |
| 1 | ui_in[1]  | ui_out[1]  | uio[1]        |
| 2 | ui_in[2]  | ui_out[2]  | uio[2]        |
| 3 | ui_in[3]  | ui_out[3]  | uio[3]        |
| 4 | ui_in[4]  | ui_out[4]  | uio[4]        |
| 5 | ui_in[5]  | ui_out[5]  | uio[5]        |
| 6 | ui_in[6]  | ui_out[6]  | uio[6]        |
| 7 | ui_in[7]  | ui_out[7]  | uio[7]        |


### Chip location

{{< shuttle-map "tt07" "192" >}}

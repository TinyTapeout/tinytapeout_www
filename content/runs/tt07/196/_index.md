---
hidden: true
title: "196 8-bit DEM R2R DAC"
weight: 28
---

## 196 : 8-bit DEM R2R DAC

* Author: Eric Fogleman
* Description: 8-bit segmented mismatch-shaping R2R DAC
* [GitHub repository](https://github.com/ejfogleman/tt07-ef-smsdac8)
* [GDS submitted](https://github.com/ejfogleman/tt07-ef-smsdac8/actions/runs/9201249752)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### Operation

This design implements a linear 8-bit DAC suitable for dc and low-frequency inputs.  The encoder quantizes the 8-bit input to a 55-level signal.  An analog voltage is produced by connecting the encoder's outputs to a modified R-2R ladder on the PCB (see External Hardware).  Quantization noise is shaped in the frequency domain with a 1st order highpass shaped.  The residual high frequency noise is suppressed using an analog lowpass filter.  With a clock frequency of 6.144 MHz and a lowpass filter corner of 24 kHz, the oversampling ratio (OSR) is 256.

This encoder provides quantization noise shaping similar to that of a multibit delta-sigma modulator, but it is a purely feedforward network with no quantization error feedback.  The theory behind this encoder is described in: [A. Fishov, E. Fogleman, E. Siragusa, I. Galton, "Segmented Mismatch-Shaping D/A Conversion", IEEE International Symposium on Circuits and Systems (ISCAS), 2002](https://https://ieeexplore.ieee.org/document/1010547/)

This design is a revision to that on TT06 that implements element mismatch shaping as well as quantization noise shaping.

### External hardware

Ideally, this encoder would be buffered through a clean analog supply and retimed at the output with a clean clock to align the bit transitions.  However, reasonable performance should be possible driving the resistor ladder directly from the encoder through the IO supply.  When used n this way, the IO supply acts as the DAC's reference voltage.

DAC input data is provided through `ui_in[7:0]`, and the encoder updates using the project clock.  Clock frequencies in the range of 1-10 MHz are reasonable.  Higher clock frequency increases the OSR.  The encoder output is `uo_out[7:0]`, and it can be reconstructed by summing the bits with the following weights:

```
v_out = 0.5*vdd_io*(1 + (2**-4)*(8*uo_out[7]+uo_out[6]) + 4*(uo_out[5]+uo_out[4]) + 2*(uo_out[3]+uo_out[2]) + 
(uo_out[1]+uo_out[0])
 - 15)
```

The DAC's output swing ranges from `0.25*vdd_io` to `0.75*vdd_io`, where `vdd_io` is the IO supply voltage.

An external resistor ladder is required to create the analog output voltage, and a capacitor is required to filter high-frequency noise.  The termination resistors are placed at the ends of the ladder to ensure that each section has nominally identical load resistance.

The resistor ladder shown below sums the outputs with this weighting.  Any output network that can create this weighting will work.

![DAC resistor network](images/r-ladder.png)

The suggested unit R value is 10 kOhm, thus all elements marked R should be 10 kOhm, and all 4R elements should be 40 kOhm.  This gives an equivalent output resistance at **v_dac** of 10 kOhm.  A 680 pF output capacitor provides a 23 kHz lowpass corner.  With this choice of R, each IO driver will sink/source a maximum of 55 uA with `vdd_io` at 3.3 V.

Precise resistor matching is not required to obtain 8-bit linearity.  Resistor mismatch error appears as first-order shaped noise in the output and can be removed by analog lowpass filtering.

### Testing

The DAC is free-running off the project clock, and inputs appear at the output immediately after clock synchronization.  A simple dc test can be performed using the input DIP switches and the resistor ladder.

The encoder has four modes of operation determined by `uio_in[1:0]`:

* 3:  1st order shaping with dither
* 2:  randomization (flat spectral shaping)
* 1:  1st order shaping, no dither
* 0:  static encoding (no shaping)

The dc value DAC output can be measured with a DMM.  The DAC's output swing ranges from `0.25*vdd_io` to `0.75*vdd_io`, where `vdd_io` is the IO supply voltage.  The DAC's LSB voltage is `vdd_io/32`.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | d_in[0]  | y8[0]  | en_enc        |
| 1 | d_in[1]  | y8[1]  | en_dith        |
| 2 | d_in[2]  | y16[0]  | y1[0]        |
| 3 | d_in[3]  | y16[1]  | y1[1]        |
| 4 | d_in[4]  | y32[0]  | y2[0]        |
| 5 | d_in[5]  | y32[1]  | y2[1]        |
| 6 | d_in[6]  | y64[0]  | y4[0]        |
| 7 | d_in[7]  | y64[1]  | y4[1]        |


### Chip location

{{< shuttle-map "tt07" "196" >}}

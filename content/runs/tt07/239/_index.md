---
hidden: true
title: "239 Instrumentation Amplifier for Electrocardiogram Signal Adquisition"
weight: 111
---

## 239 : Instrumentation Amplifier for Electrocardiogram Signal Adquisition

* Author: Rocha Judith Rocha-Torres
* Description: The amplifier gatters the electrical signal coming from the skin/muscles over the heart
* [GitHub repository](https://github.com/PatriciaJRT/tt07-analog-template)
* [GDS submitted](https://github.com/PatriciaJRT/tt07-analog-template/actions/runs/9261897248)
* Analog project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The designed instrumentation amplifier extracts very low differencial mode signal from very noisy common mode signals by means of a three opamp array. The differential gain can be changed by two digital bits called  "Sel_26dB" and "Sel_42dB", when Sel_26dB = 0  Sel_42dB = 0 the differential gain is 0 dB, when Sel_26dB = 1 and Sel_42dB = 0 the differential gain is 26 dB, when Sel_26dB = 1 and Sel_42dB = 1 the differential gain is 46 dB. In all cases the CMRR is 120 dB. The designed instrumentation amplifier also included a sense circuits that helps to stabilize the analog ground.

### How to test

1. Apply a DC level equals to vdd = 1.8V and vss = 0V.
2. Set the following bits to Sel_26dB = 0 and Sel_42dB = 0.
3. Apply a 1 mV differential signal into Vip and Vin analog ports using a balum.
4. Measure the differential responds at node Vo using Keysight-E5061B ENA vector network analyzer, a 0 dB gain shall be expected.
5. Apply a 1 mV common signal into Vip and Vin analog ports.
6. Measure the common responds at node Vo using Keysight-E5061B ENA vector network analyzer.
7. Performs the substraction of the differential gain and the common gain, the CMRR responds should be obtined.
8. Set the following bits to Sel_26dB = 1 and Sel_42dB = 0.
9. Apply a 1 mV differential signal into Vip and Vin analog ports using a balum.
10. Measure the differential responds at node Vo using Keysight-E5061B ENA vector network analyzer, a 26 dB gain shall be expected.
11. Apply a 1 mV common signal into Vip and Vin analog ports.
12. Measure the common responds at node Vo using Keysight-E5061B ENA vector network analyzer.
13. Performs the substraction of the differential gain and the common gain, the CMRR responds should be obtined.
14. Set the following bits to Sel_26dB = 1 and Sel_42dB = 1.
15. Apply a 1 mV differential signal into Vip and Vin analog ports using a balum.
16. Measure the differential responds at node Vo using Keysight-E5061B ENA vector network analyzer, a 42 dB gain shall be expected.
17. Apply a 1 mV common signal into Vip and Vin analog ports.
18. Measure the common responds at node Vo using Keysight-E5061B ENA vector network analyzer.
19. Performs the substraction of the differential gain and the common gain, the CMRR responds should be obtined.

### External hardware

- 1 PCB
- 1 Balum
- 1 Keysight-E5061B ENA vector network analyzer
- 3 Female-Female BNC cable.
- 1 Female-Female-Female BNC T-adapter
- 1 Keithly 2231A power supply
- 1 Agilent 34401A digital multimeter


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Sel_42dB  |   |         |
| 1 | Sel_26dB  |   |         |
| 2 |   |   |         |
| 3 |   |   |         |
| 4 |   |   |         |
| 5 |   |   |         |
| 6 |   |   |         |
| 7 |   |   |         |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 5 | vo           |
| 1 | 0 | AGND           |
| 2 | 4 | VirGND_FB           |
| 3 | 1 | VirGND_Out           |
| 4 | 3 | Vin           |
| 5 | 2 | Vip           |

### Chip location

{{< shuttle-map "tt07" "239" >}}

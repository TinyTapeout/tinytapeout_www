---
hidden: true
title: "963 Digitaler Filter"
weight: 1
---

## 963 : Digitaler Filter

* Author: Nico Rathmayr
* Description: FIR-Filter using two coefficents to filter 8-bit signal
* [GitHub repository](https://github.com/NicoRathmayr/jku-tt06-Digitaler-Filter)
* [GDS submitted](https://github.com/NicoRathmayr/jku-tt06-Digitaler-Filter/actions/runs/8628157922)
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

The goal of this project is to design and implement an efficient digital filter capable of filtering unwanted frequencies from a digital signal.

The FIR filter (Finite Impulse Response) is characterized by its finite impulse response defined by a finite number of coefficients. In this case, only two coefficients are used, simplifying the design process and optimizing the implementation on an FPGA (Field-Programmable Gate Array) or another digital circuit.

The two coefficients are carefully selected to achieve the desired frequency response of the filter. It is essential to consider the requirements of the application, whether it be for audio processing, image processing, or any other signal processing application.

Assignment of digital inputs and outputs:

- ui_in: 8-bit input signal 'x'
- uio_in: 8-bit coefficients 'const_h'
- uo_out: 8-bit output signal 'y'
- uio_out: not used!
- uio_oe: not used!

Originally, the filter programming was planned with four coefficients, but due to chip capacity limitations, this ambition had to be reduced to two coefficients. The code includes comments for additional four-coefficient support, ensuring the possibility of future program expansion.

To read all coefficients with just one 8-bit input and store them in the corresponding register, a shift register has been implemented. Each new clock signal edge allows storing a newly read value at the desired position in the register. Once the maximum number of positions in the register is occupied, the flag is set to low, and the counter is reset. The input signal is also read using a shift register by shifting the value in the register by one position in each step.

Now, for the actual filter operation: the desired coefficients are multiplied with the input signal and summed after each step. It is important to note that the two registers have different sizes and need to be adjusted accordingly. The filtered input signal is output as the output signal from a section of the bit sequence stored in the sum. These steps ensure precise signal processing and demonstrate the program's adaptability for potential future expansions.

### How to test

Refer to the Testbench.

### External hardware

You do not need any special external hardware.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | input signal bit 0  | output signal bit 0  | input coefficient bit 0        |
| 1 | input signal bit 1  | output signal bit 1  | input coefficient bit 1        |
| 2 | input signal bit 2  | output signal bit 2  | input coefficient bit 2        |
| 3 | input signal bit 3  | output signal bit 3  | input coefficient bit 3        |
| 4 | input signal bit 4  | output signal bit 4  | input coefficient bit 4        |
| 5 | input signal bit 5  | output signal bit 5  | input coefficient bit 5        |
| 6 | input signal bit 6  | output signal bit 6  | input coefficient bit 6        |
| 7 | input signal bit 7  | output signal bit 7  | input coefficient bit 7        |


### Chip location

{{< shuttle-map "tt06" "963" >}}

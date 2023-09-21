---
hidden: true
title: "103 fft-4-tt"
weight: 73
---

## 103 : fft-4-tt

* Author: Foivos Chaloftis
* Description: A simple FFT Calculator downscaled for deployment with the Tiny Tapeout 04 Physical PCB
* [GitHub repository](https://github.com/f-hal/fft-4-tt)
* [GDS submitted](https://github.com/f-hal/fft-4-tt/actions/runs/6059557206)
* HDL project
* [Extra docs]()
* Clock: 1000 Hz
* External hardware: 2x buttons, Way to input 8-bit data, Way to display/read 8-bit data



### How it works

This is a simplified Fast Fourier Transform implementation (*based on the radix-2 Cooley–Tukey algorithm*) that can be scaled-up to larger precision and more points. Designed for low complexity circuits requiring large DFT calculations, sacrificing speed. This specific implementation offers 4-point, 8-point, and 16-point versions of the Fourier Transform, while having the precision set to 4 bits.

For the first part, it integrates reverse bit ordering, placing data to their corresponding memory address as they are being input from the user. Afterwards, data, along with the weights, are fed through a single butterfly module (2-point DFT), responsible for all the calculations, controlled by the control unit which delegates the data reading/writing throughout each clock cycle. Once finished, the data output process begins.
The FFT is calculated using signed fixed-point arithmetic. The decimal range is between -1 and 0.875. Any results bigger/smaller than the previous, will be capped at the maximum/minimum value possible.


### How to test

Connect the proper I/O for inserting data/controlling the circuit, and displaying/reading output.
Follow the steps as shown below:

- **Step 1**: Reset the IC by momentarily enabling the rst signal.
- **Step 2**: Cycle through the 3 modes (0: 4-point, 1: 8-point, 2: 16-point FFT) shown on the 7-segment display using the mode_change pin, and select the mode you wish to use by using the enter pin.
- **Step 3**: Insert data in the specified format (Q1.3 real and Q1.3 imaginary), and use enter pin to input each point. After inserting all data, the FFT computation will begin.
- **Step 4**: Use the enter pin again to read the data from the output pins.
- **Step 5**: Once all data points are read, the display will show an F, indicating that the data reading is finished.
- **Step 6**: Use enter pin to repeat process form **Step 2**.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | imaginary_in[0]  | segment a/imaginary_out[0] | mode_change |
| 1 | imaginary_in[1]  | segment b/imaginary_out[1] | enter |
| 2 | imaginary_in[2]  | segment c/imaginary_out[2] | none |
| 3 | imaginary_in[3]  | segment d/imaginary_out[3] | none |
| 4 | real_in[0]  | segment e/real_out[0] | none |
| 5 | real_in[1]  | segment f/real_out[1] | none |
| 6 | real_in[2]  | segment g/real_out[2] | none |
| 7 | real_in[3]  | dot/real_out[3] | none |

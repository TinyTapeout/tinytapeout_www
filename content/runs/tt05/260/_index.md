---
hidden: true
title: "260 Multimode Modem"
weight: 118
---

## 260 : Multimode Modem

* Author: Joerdson Silva
* Description: Performs digital modulation and demodulation in amplitude, frequency and phase schemes.
* [GitHub repository](https://github.com/joerdsonsilva/tt05-multimode-modem)
* [GDS submitted](https://github.com/joerdsonsilva/tt05-multimode-modem/actions/runs/6678317413)
* HDL project
* [Extra docs](README.md)
* Clock: 50000000 Hz
* External hardware: oscilloscope or signal analyzer



### How it works

The multimode modem uses a clock signal to generate digitized signals over time, in sinusoidal format (carrier wave).
From this digitized sinusoid, the modulation process is applied using different methods for each scheme, implemented
through specific internal blocks to perform modulations ASK (switching the amplitude of the sine wave), FSK (switching
the frequency of the sine wave through a digital signal modulator) and PSK (phase coding). In the demodulation stage,
these three modulation schemes are analyzed to recover the original information, manifesting as '0' or '1' values that
reflect the data signal already restored after the process.


### How to test

The multimode modem has the following inputs and outputs:

- Input  - clock (1 bit)
- Input  - reset (1 bit)
- Input  - sel (2 bits)
- Output - mod_out (7 bits)
- Output - demod_out (1 bit)

Apply a “clock” of 40~50 MHz. Then, apply a “reset” signal of logic level “1” to synchronize the modem system and then make the
“reset” signal a logic level “0”. After that, select the type of modulation to be used, as per the sequence below:

- Sel = "01" <= ASK modulation and demodulation

- Sel = "10" <= FSK modulation and demodulation

- Sel = "11" <= PSK modulation and demodulation

After selecting the modulation type, the modulated signal is expressed at the “mod_out” output, and the demodulated signal at the
“demod_out” output.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock  | mod_out_0 | none |
| 1 | reset  | mod_out_1 | none |
| 2 | sel_0  | mod_out_2 | none |
| 3 | sel_1  | mod_out_3 | none |
| 4 | none  | mod_out_4 | none |
| 5 | none  | mod_out_5 | none |
| 6 | none  | mod_out_6 | none |
| 7 | none  | demod_out | none |

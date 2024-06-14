---
hidden: true
title: "8 GPS signal generator"
weight: 80
---

## 8 : GPS signal generator

* Author: Grupo de Aplicaciones en Sistemas Embebidos - Universidad Tecnológica Nacional Facultad Regional Haedo
* Description: Generate a GPS IF signals using the following parameters: sat id, code phase, doppler and SNR.
* [GitHub repository](https://github.com/maheredia/tt07-gps_signal_gen)
* [GDS submitted](https://github.com/maheredia/tt07-gps_signal_gen/actions/runs/9330032183)
* HDL project
* [Extra docs]()
* Clock: 16368000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The gps signal generator is a configurable block capable used to test search algorithms for GPS receivers. It is composed by two main blocks:

- Register bank: a set of configuration registers with a uart rx interface for write-only  operations. These registers lets the user control: satellite ID, PRN code phase, doppler frequency, noise level, among others.

- Core: the core of the project is composed by a Gold Code generator, an NCO (numerically controlled oscillator) and PRNGs (pseudo random number generators). The core also provides a 1-bit message input to modulate the generated signal with a "navigation message".

### Block Diagram

![Block Diagram](images/gps_gen_bd.drawio.svg)

### Serial communication

Register bank configuration is performed through the serial interface. The operation to write a single register is divided in two steps:

- Send address byte.
- Send data byte.

### Register bank description

This section describes the registers of the device and its functionality.

#### Control Register:

- Address: 0x0
- Width: 8 bits

| b7 | b6 | b5          | b4         | b3 | b2 | b1 | b0              |
|----|----|-------------|------------|----|----|----|-----------------|
|  X |  X |  signal off |  noise off |  X |  X |  X |  general enable |

- b0: general enable of the core.
- b4: turn off noise generator.
- b6: turn off signal.

#### Sat_id register:

- Address: 0x2
- Width: 5 bits

| b4     | b3     | b2     | b1     | b0     |
|--------|--------|--------|--------|--------|
|  id[4] |  id[3] |  id[2] |  id[1] |  id[0] |

- id[4:0]: Selects the satellite PRN code. There are up to 32 satellite PRN codes.

#### Doppler register:

- Address: 0x3
- Width: 8 bits

| b7     | b6     | b5     | b4     | b3     | b2     | b1     | b0     |
|--------|--------|--------|--------|--------|--------|--------|--------|
|  d[7]  |  d[6]  |  d[5]  |  d[4]  |   d[3] |   d[2] |  d[1]  |   d[0] |

- d[7:0]: Doppler selection. The resultant frequency will be equal to:

$$ \large f_{out} = 4092000.0 -8000.0 + 500.0*(d-176) MHz $$

#### Code phase low register:

- Address: 0x4
- Width: 8 bits

| b7     | b6     | b5     | b4     | b3     | b2     | b1     | b0     |
|--------|--------|--------|--------|--------|--------|--------|--------|
|  p[7]  |  p[6]  |  p[5]  |  p[4]  |   p[3] |   p[2] |  p[1]  |   p[0] |

- p[7:0]: low byte of the PRN code phase.

#### Code phase high register:

- Address: 0x5
- Width: 8 bits

| b7     | b6     | b5     | b4     | b3     | b2     | b1     | b0     |
|--------|--------|--------|--------|--------|--------|--------|--------|
| p[15]  | p[14]  | p[13]  | p[12]  |  p[11] |  p[10] |  p[9]  |   p[8] |

- p[15:8]: high byte of the PRN code phase.

#### SNR register

- Address: 0x6
- Width: 3 bits

| b2      | b1      | b0      |
|---------|---------|---------|
| snr[2]  | snr[1]  | snr[0]  |

- snr[2:0]: This indicates how many right shifts (>>) will be applied to the generated signal. Applying more shifts reduces the amplitude of the signal with respect to the generated noise, reducing the SNR.

### How to test

Clock frequency of the system should be set to 16.368 MHz. The register bank is configured with a uart interface at 115200 bauds. Enable the design by writting the corresponding bit of the control bank.

#### External hardware

A micropocessor or FPGA can be used to modulate the navigation message at the input. The output can be recorded for post-analysis or fed to the digital front end of a GPS receiver. The output is a 1-bit signal.

#### Example: expected output of a search algorithm

![search_example](images/search_example.png)


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | msg_in - Used to modulate GPS signal with custom navigation message.  | sin_out - Sine output with CA+msg modulation + noise.  | Not used        |
| 1 | Not used  | cos_out - Cosine output with CA+msg modulation (no noise).  | Not used        |
| 2 | Not used  | noise_start_out - Start of PRNG sequence used as noise.  | Not used        |
| 3 | rx_in - UART rx input. Used to configure the register bank.  | start_out - Start of GPS signal. This output goes high when the configured phase matches the actual phase of the output signal.  | Not used        |
| 4 | Not used  | clk - Output clock  | Not used        |
| 5 | Not used  | Not used  | Not used        |
| 6 | Not used  | Not used  | Not used        |
| 7 | Not used  | Not used  | Not used        |


### Chip location

{{< shuttle-map "tt07" "8" >}}

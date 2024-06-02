---
hidden: true
title: "200 SerDes"
weight: 71
---

## 200 : SerDes

* Author: Mahaa Santeep G
* Description: The project implements a Serializer and Deserializer (SerDes) module for converting data between parallel and serial formats in digital systems.
* [GitHub repository](https://github.com/Santeep/TT_UM_SERDES)
* [GDS submitted](https://github.com/Santeep/TT_UM_SERDES/actions/runs/9115194729)
* HDL project
* [Extra docs]()
* Clock: 100 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The SerDes project operates by efficiently converting data between parallel and serial formats, enabling seamless communication between systems with different data transfer requirements. Here's how it works:

1. Serialization Path:

   - Parallel data is received through the `data_8b_in` input.
   - Upon the rising edge of the clock (`clk`) and when the data enable signal (`data_en`) is active, the input data is latched to ensure synchronization.
   - The latched parallel data undergoes encoding into a 10-bit format using an 8b/10b encoding scheme. This encoding scheme provides sufficient data integrity and clock recovery capabilities for serial transmission.
   - The encoded data is further latched and transmitted serially through the `ser_out` output when the serializer enable signal (`ser_en`) is asserted.

2. Deserialization Path:

   - Serial data is received through the `ser_in` input.
   - The serial data is shifted in parallel using a Serial-In-Parallel-Out (SIPO) shift register when the parallel enable signal (`par_en`) is active.
   - The parallel data is latched upon the rising edge of the clock (`clk`) and when the data enable signal (`data_en`) is active to ensure synchronization.
   - The latched parallel data undergoes decoding from the 10-bit format back to an 8-bit format, effectively reversing the serialization process.
   - The decoded parallel data is output through the `data_out` output.

3. Synchronization and Reset:

   - Synchronous reset (`rst`) ensures proper initialization of internal state variables and output data.
   - Latch modules are employed throughout the process to synchronize data with the clock and ensure stable output.

4. Integration and Flexibility:

   - The project provides a modular and flexible design, facilitating easy integration into larger systems.
   - Users can adjust control signals (`data_en`, `ser_en`, `par_en`) to tailor the operation to specific requirements.
   - Proper clock domain crossing techniques are employed to ensure reliable data transfer between parallel and serial domains.

Overall, the SerDes project offers an efficient and reliable solution for bidirectional data conversion, enabling seamless communication between systems with disparate data transfer interfaces.

### How to test

The provided RTL project implements a Serializer and Deserializer (SerDes) module capable of converting data between parallel and serial formats. The module, encapsulated within `serdes_top`, features inputs for clock signal (`clk`), active high reset (`rst`), data enable signal (`data_en`), and control signals for serialization (`ser_en`) and deserialization (`par_en`). Parallel data is input through `data_8b_in`, undergoing latching, encoding into 10-bit data, and serial output (`ser_out`) generation during serialization, while serial input (`ser_in`) undergoes deserialization, parallelization, and output (`data_out`) generation. Synchronous reset ensures proper initialization, and latch modules synchronize data. The project facilitates seamless integration into larger systems, offering flexibility and reliability for applications requiring efficient data transmission across parallel and serial interfaces.

### External hardware

There are No External Hardware Used in the Project


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | data_8b_in[0]  | data_out[0]  | ser_in        |
| 1 | data_8b_in[1]  | data_out[1]  | ser_out        |
| 2 | data_8b_in[2]  | data_out[2]  | data_en        |
| 3 | data_8b_in[3]  | data_out[3]  | par_en        |
| 4 | data_8b_in[4]  | data_out[4]  | ser_en        |
| 5 | data_8b_in[5]  | data_out[5]  |         |
| 6 | data_8b_in[6]  | data_out[6]  |         |
| 7 | data_8b_in[7]  | data_out[7]  |         |


### Chip location

{{< shuttle-map "tt07" "200" >}}

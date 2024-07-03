---
hidden: true
title: "642 8-bit Vector Compute-in-SRAM"
weight: 108
---

## 642 : 8-bit Vector Compute-in-SRAM

* Author: Ramyad Hadidi
* Description: 8-bit Vectorized Compute-in-SRAM
* [GitHub repository](https://github.com/ramyadhadidi/tt07-8bit-vector-compute-in-SRAM)
* [GDS submitted](https://github.com/ramyadhadidi/tt07-8bit-vector-compute-in-SRAM/actions/runs/9270763872)
* HDL project
* [Extra docs]()
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it Works

This design is a vector multiplier with stationary weights implemented on 4 tiles in tiny tapeout. The entire design, tests, and documentation took around 10 hours. It contains 8 multiply-and-add (MAC) units, each equipped with two registers, and an adder tree that sums the multiplication results of an 8-element vector without the loss of precision. The design allows for weights and activations to be programmed separately into each MAC unit using specific operation codes (OPs). The weights remain stationary, meaning they are programmed once and reused for multiple activation inputs.

#### Components and Operation

1. **Multiply-and-Add (MAC) Units:**

   - Each MAC unit consists of two registers: one for weights (W) and one for activations (A). The MAC unit performs the multiplication of these two values and stores the result.
   - The weights and activations are loaded into the MAC units using distinct OP codes (`LOAD_W` and `LOAD_A`). The `LOAD_W` OP code (`0b00`) loads the weight into the MAC unit, while the `LOAD_A` OP code (`0b01`) loads the activation value.
   - After the weights and activations are loaded, the MAC unit multiplies these values and stores the result for further processing by the adder tree.

2. **Adder Tree:**

   - The adder tree is responsible for summing the outputs of the 8 MAC units. It ensures that the multiplication results are accumulated accurately without precision loss.
   - The adder tree is structured hierarchically in three levels to sum the results efficiently.
     - **Level 1:** Adds pairs of MAC outputs.
     - **Level 2:** Adds the results of Level 1.
     - **Level 3:** Adds the results of Level 2 to produce the final sum.
   - This hierarchical structure ensures that the final sum of all MAC outputs is computed correctly and efficiently.

3. **Readout Mechanism:**

   - Due to the limited width of the output interface (8 bits), the readout mechanism reads the final result of the adder tree (`s_adder_tree`) over multiple clock cycles.
   - The `READ_S` OP code (`0b10`) is used to initiate the readout process. The final sum is split into three 8-bit chunks, which are read sequentially.
   - The readout process ensures that the most significant bits (MSBs) are read first, followed by the least significant bits (LSBs), reconstructing the complete 19-bit result correctly.

4. **Programming and Operation:**

   - **Loading Weights and Activations:** The design supports separate loading of weights and activations. Each MAC unit is addressed individually, and the corresponding values are loaded using the appropriate OP codes.
   - **Vector Multiplication:** Once the weights and activations are loaded, the MAC units perform the multiplication, and the results are summed by the adder tree.
   - **Result Readout:** The final sum is read out using the `READ_S` OP code, ensuring the complete result is available for further processing or verification.

This design efficiently handles the multiplication and accumulation of vectors, ensuring high precision and accuracy despite the limitations in the size (even with 4 tiles). It provides a robust mechanism for programming and reading the results, making it suitable for various applications requiring vector multiplications.

### How to Test

There are several tests under `test/test.py` that would help anyone to understand how the design works. Due to the limitation of access to the external signals, most of the tests are commented out. Each test also contains its own commented Verilog code since some tests were initially developed to test and verify individual units such as MACs and adders. There are four categories of tests:

- **Single MAC operation test**: This test verifies the basic functionality of a single MAC unit, ensuring that it correctly performs multiplication and stores the result.
- **Multiple MAC units loading weights and activations**: This test checks that multiple MAC units can load weights and activations correctly and simultaneously. It ensures that each MAC unit receives and processes its assigned data independently of the others.
- **Adder tree tests verifying that all levels of adder tree are summing to correct numbers**: These tests validate the correctness of the adder tree at all levels. They ensure that the outputs from the MAC units are correctly summed through the hierarchical adder tree structure, producing accurate intermediate and final sums.
- **Read result tests that would test read out circuit**: These tests focus on the readout circuit, verifying that the `s_adder_tree` result can be correctly read out in multiple 8-bit chunks. This ensures that the readout mechanism accurately reconstructs the full result over several clock cycles.
- - **Read only with external signals**: These tests focus on the entire design only using the external signals. This is the only test not commented in the final version.

The last three tests work on several test vectors to ensure correct operation with various numbers. These test vectors include a wide range of values and scenarios to thoroughly exercise the design and confirm its correctness under different conditions.

#### OP 00: `LOAD_W`

The `LOAD_W` function is an integral part of the testbench, designed to load weight values into the MAC units. This function is invoked by setting the `LOAD_W` opcode, which corresponds to the value `0b00 &amp;lt;&amp;lt; 6`. The opcode is combined with the MAC address to target a specific MAC unit for the weight load operation. The MAC address is specified in the lower bits of the `ui_in` signal, allowing precise selection of the MAC unit.

The process begins by setting the `ui_in` input to the `LOAD_W` opcode combined with the target MAC address. This action signals the DUT to prepare for loading the weight value into the specified MAC unit. Simultaneously, the weight value is provided via the `uio_in` input. To ensure that the command and data are properly registered and processed, the function waits for one clock cycle.

By following these steps, the `LOAD_W` function effectively communicates with the DUT to load weight values into the desired MAC units. This operation is crucial for initializing the MAC units with the appropriate weights for subsequent computations.

***

#### OP 00: `LOAD_W` Code Snippet for Reference:

```python
async def write_weight(mac_address, weight):
    # Set the op code to 00 (write weight) and address
    dut.ui_in.value = (0b00 << 6) | mac_address
    # Set the weight data
    dut.uio_in.value = weight
    # Wait for a clock cycle to simulate the write
    await ClockCycles(dut.clk, 1)
```

#### OP 01: `LOAD_A`

The `LOAD_A` function is another essential component of the testbench, designed to load activation values into the MAC units. This function is activated by setting the `LOAD_A` opcode, which corresponds to the value `0b01 &amp;lt;&amp;lt; 6`. Similar to `LOAD_W`, the opcode is combined with the MAC address to target a specific MAC unit for the activation load operation.

The process starts by setting the `ui_in` input to the `LOAD_A` opcode combined with the target MAC address. This action instructs the DUT to prepare for loading the activation value into the specified MAC unit. Concurrently, the activation value is provided via the `uio_in` input. To ensure the command and data are correctly registered and processed, the function waits for one clock cycle.

By adhering to these steps, the `LOAD_A` function successfully communicates with the DUT to load activation values into the designated MAC units. This operation is vital for initializing the MAC units with the appropriate activation values, enabling accurate computation during the subsequent processing stages.

***

#### OP 01: `LOAD_A` Code Snippet for Reference:

```python
async def write_act(mac_address, a_value):
    # Set the op code to 01 (write a value) and address
    dut.ui_in.value = (0b01 << 6) | mac_address
    # Set the a value data
    dut.uio_in.value = a_value
    # Wait for a clock cycle to simulate the write
    await ClockCycles(dut.clk, 1)
```

#### OP 10: `read_s`

The `read_s` function is a critical part of the testbench designed to read the final result from the adder tree, known as `s_adder_tree`. Since the output interface of the system can only handle 8 bits at a time, the function retrieves the complete result over multiple clock cycles. The process begins by initializing the `READ_S` command. This is achieved by setting the `ui_in` input to the value corresponding to the `READ_S` opcode (`0b10 &amp;lt;&amp;lt; 6`). This command instructs the system to prepare the `s_adder_tree` result for reading. To ensure the command is properly registered and processed by the Device Under Test (DUT), the function waits for one clock cycle.

Following the initialization of the `READ_S` command, the function sets the `ui_in` input to a non-operational value (`0b11 &amp;lt;&amp;lt; 6`). This step ensures that the command remains stable and does not interfere with the readout process. Another clock cycle wait is introduced to guarantee that the data is ready to be read.

The core of the `read_s` function involves reading the `s_adder_tree` result in 8-bit chunks. The function initializes a variable, `result`, to store the combined output. It then enters a loop that iterates three times, corresponding to the three 8-bit chunks required to construct the 24-bit result. During each iteration, the function waits for the rising edge of the clock to synchronize with the DUT’s data output. This synchronization is crucial for accurate data retrieval. The function reads the current 8-bit chunk from the `uo_out` output, shifts the previously read data left by 8 bits, and combines it with the new chunk using a bitwise OR operation. This method ensures that the first chunk read corresponds to the most significant bits (MSBs) and the last chunk read corresponds to the least significant bits (LSBs).

After all three chunks have been read and combined, the function returns the complete `result`, which represents the full 19-bit `s_adder_tree` value. This process highlights the importance of synchronization with the clock signal and handling data in multiple cycles due to the 8-bit limitation of the output interface. By following these steps, the `read_s` function effectively reads and reconstructs the adder tree result, ensuring accurate and reliable verification of the system's computation.

***

#### OP 10: `read_s` Code Snippet for Reference:

```python
async def read_s():
    # Set the op code to 10 (read s_adder_tree)
    dut.ui_in.value = 0b10 << 6
    await ClockCycles(dut.clk, 1)

    # Set to non-operational value to avoid interference
    dut.ui_in.value = 0b11 << 6
    await ClockCycles(dut.clk, 1)

    result = 0
    for i in range(3):
        await RisingEdge(dut.clk)
        result = (result << 8) | int(dut.uo_out.value)
    return result
```

### External hardware

Currently, the compute in SRAM does not interface with any external hardware components, and in reality in should not! It operates entirely within it own resources with its own defined set of control commands. Some external signals might be needed to orchestrate operation of multiple units with a control processor.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Address bit 0  | Data out bit 0  | Data in bit 0        |
| 1 | Address bit 1  | Data out bit 1  | Data in bit 1        |
| 2 | Address bit 2  | Data out bit 2  | Data in bit 2        |
| 3 | Address bit 3  | Data out bit 3  | Data in bit 3        |
| 4 | Address bit 4  | Data out bit 4  | Data in bit 4        |
| 5 | Address bit 5  | Data out bit 5  | Data in bit 5        |
| 6 | Op Code bit 0  | Data out bit 6  | Data in bit 6        |
| 7 | Op Code bit 1  | Data out bit 7  | Data in bit 7        |


### Chip location

{{< shuttle-map "tt07" "642" >}}

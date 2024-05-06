---
hidden: true
title: "206 co processor for precision farming"
weight: 107
---

## 206 : co processor for precision farming

* Author: MITS ECE
* Description: The processor will detect the deviation in sensor data and the sensor fault
* [GitHub repository](https://github.com/mitsece/tt06-verilog-mitssdd)
* [GDS submitted](https://github.com/mitsece/tt06-verilog-mitssdd/actions/runs/8599590031)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

The processor will read the datas from the four sensors sequentially and analyse whether any deviation has been occoured with respect to the previous data and provide a warning signal also it continuously checks the senor datas and identify any fault has been occured and provides another warning signal with a signal providing the sensor identification.

### How to test

If the sensor identifier data is 00 which means it is sensor1 and input data is 10000001 and this compared with the previously stored data which may be 10000100 for example ,then there is a deviation and the processor will provide output as 1 and the bidirectional as 00.

### External hardware

8 bit ADC is needed to convert the sensor data


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Input data from the sensors | Deviation detector | Sensor identifier |
| 1 | Input data from the sensors | Falut warning | Sensor identifier |
| 2 | Input data from the sensors | Falut warning |  |
| 3 | Input data from the sensors | Falut warning |  |
| 4 | Input data from the sensors | Sensor identifier |  |
| 5 | Input data from the sensors | Sensor identifier |  |
| 6 | Input data from the sensors |  |  |
| 7 | Input data from the sensors |  |  |

### Chip location

{{< shuttle-map "tt06" "206" >}}

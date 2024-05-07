---
hidden: true
title: "524 Analog Current Comparator"
weight: 184
---

## 524 : Analog Current Comparator

* Author: Renaldas Zioma
* Description: An analog current comparator with Excitatory (+) and Inhibitory (-) currents formed by summing up digital inputs
* [GitHub repository](https://github.com/rejunity/tt06-analog-current-comparator)
* [GDS submitted](https://github.com/rejunity/tt06-analog-current-comparator/actions/runs/8754839133)
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

A current comparator that compares 2 currents each formed by a sum of 8 digital pins.

### How to test

Set the 8 inputs to form current A and 8 bi-directional inputs to form current B.
The ouptut analog voltage is the result of the comparison operator (sigmoid).

### External hardware

A multimeter to measure the output voltage on analog pin 0.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Inhibitory current bit  |   | Excitatory current bit        |
| 1 | Inhibitory current bit  |   | Excitatory current bit        |
| 2 | Inhibitory current bit  |   | Excitatory current bit        |
| 3 | Inhibitory current bit  |   | Excitatory current bit        |
| 4 | Inhibitory current bit  |   | Excitatory current bit        |
| 5 | Inhibitory current bit  |   | Excitatory current bit        |
| 6 | Inhibitory current bit  |   | Excitatory current bit        |
| 7 | Inhibitory current bit  |   | Excitatory current bit        |

### Analog pins

| `ua`#        | `analog`#        | Description         |
| ------------ | ---------------- | ------------------- |
| 0 | 10 | Main comparator output           |
| 1 | 7 | Summed currents (debug)           |
| 2 | 9 | 2nd comparator input (debug)           |
| 3 | 8 | 2nd comparator output (debug)           |

### Chip location

{{< shuttle-map "tt06" "524" >}}

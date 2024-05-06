---
hidden: true
title: "108 Moving average filter"
weight: 176
---

## 108 : Moving average filter

* Author: Alexander Hofer
* Description: 10-bit moving average filter designed to smooth input data streams.
* [GitHub repository](https://github.com/AlexHoferW23/jku-tt06-averagefilter)
* [GDS submitted](https://github.com/AlexHoferW23/jku-tt06-averagefilter/actions/runs/8627627258)
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

The design implements a moving average filter using a series of registers and a finite state machine (FSM).
The filter calculates the average of a set of recent values in a data stream, determined by the FILTER_POWER parameter.
This smooths out short-term fluctuations and highlights longer-term trends or cycles.
The master module handles input and output processing, including bidirectional IO handling and filter selection based on input control signals.

### How to test

To test the moving average filter, provide a series of digital input values to the 'ui_in' port and observe the smoothed output on 'uo_out'.
The 'uio_in' can be used to control the filter's width and operational parameters.
Test with varying input patterns and filter widths to evaluate the filter's response.

### External hardware

There is no external Hardware


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Input for filter | Output for filter | Strobe input |
| 1 | Input for filter | Output for filter | Strobe output |
| 2 | Input for filter | Output for filter | Additional input bit |
| 3 | Input for filter | Output for filter | Additional input bit |
| 4 | Input for filter | Output for filter | Additional output bit |
| 5 | Input for filter | Output for filter | Additional output bit |
| 6 | Input for filter | Output for filter | Filter width input |
| 7 | Input for filter | Output for filter | Filter width input |

### Chip location

{{< shuttle-map "tt06" "108" >}}

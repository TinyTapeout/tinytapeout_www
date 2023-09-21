---
hidden: true
title: "257 Multi-channel pulse counter with serial output, v01b"
weight: 100
---

## 257 : Multi-channel pulse counter with serial output, v01b

* Author: Adrian Novosel, Dinko Oletic
* Description: Counts number of digital pulses occuring within a time interval across four input channels, and periodically outputs the values out using serial output. Verilog HDL implementation.
* [GitHub repository](https://github.com/DinkoOletic/tt04-HDL_unizgfer_multich_pulse_counter_v01b)
* [GDS submitted](https://github.com/DinkoOletic/tt04-HDL_unizgfer_multich_pulse_counter_v01b/actions/runs/6028614499)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Design consists of four 12-bit counters with overflow detection, a mm:ss real-time clock (RTC), a parallel-input-serial output (PISO) readout register, controlled by a readout state-machine. The counters store number of intermittently-occuring short digital input pulses, accumulated within the RTC's time-measurement interval 00:00 - 59:59, at each of the four input channels. Periodically, after every RTC overflow (1 h with assumed 1 Hz RTC input clock signal), the state-machine performs sequential serial readout of the RTC time and all channels, and resets all channel counters. Additionally, readout and individual channel reset is initiated by overflow at any of individual input channel counter. This an early work-in progress implementation of digital portion of a low-power sensor interface for readout of a multichannel acoustic emission detector, based on MEMS-array of piezoelectric microresonators for passive ultrasonic band-pass filtering: https://ieeexplore.ieee.org/document/9139151. Design is generally applicable for low-power wake-up sensor interfaces, acoustic event detection, non-destructive testing, particle-counters, or as a generic pulse-counting digital building block.


### How to test

Input signals are short rising-edge digital pulses, connected to input pins "ch1", "ch2", "ch3", "ch4". Output data becomes ready for serial readout at the output pin "serial_out" when overflow is signalled via the output "ready" pin ovf_global. Output bits are serially clocked-out using the input pin "clk". Specifically, RTC overflow is signalled via output pin "ovf_RTC_out", and overflow at an individual channel via the pin "ovf_ch_out". The rest of output pins are used for debugging of the state-machine's internal states.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | ch1  | serial_out | none |
| 1 | ch2  | ovf_global | none |
| 2 | ch3  | a0_out | none |
| 3 | ch4  | a1_out | none |
| 4 | RTC  | a2_out | none |
| 5 | clk  | SL_out | none |
| 6 | reset  | ovf_RTC_out | none |
| 7 | none  | ovf_ch_out | none |

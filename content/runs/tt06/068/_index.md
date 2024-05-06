---
hidden: true
title: "68 kstep"
weight: 183
---

## 68 : kstep

* Author: Kevin OConnor
* Description: Generate step/dir pulses for stepper motor drivers
* [GitHub repository](https://github.com/KevinOConnor/tt06-kstep)
* [GDS submitted](https://github.com/KevinOConnor/tt06-kstep/actions/runs/8758110061)
* HDL project
* [Extra docs](None)
* Clock: 50000000 Hz

### How it works

This project can produce timed pulses suitable for controlling stepper
motor drivers.  It is similar to a PWM controller, but has additional
control over the number of pulses generated and an ability to
gradually change the timing between each pulse.

Commands are sent via SPI.  Each SPI message should have 40 bits and
be in the following format:
`&amp;lt;1-bit rw&amp;gt;&amp;lt;7-bit address&amp;gt;&amp;lt;32-bit data&amp;gt;`

The `rw` bit should be 1 to indicate a write.

The following commands are available:

```
W 0x10 <pin polarity>: This controls default state of all uo_out pins.
W 0x11 <any>: Clear shutdown state.
W 0x12 <step_duration>: Set the duration of step pulses (in clock ticks).
W 0x20 <count/add>: Set count (upper 16 bits), add (lower 16 bits), and submit.
W 0x21 <interval>: Set interval between pulses (ticks). Submit with addr 0x20.
W 0x22 <direction>: Set stepper direction (pin uo_out[1]) during step pulses.
W 0x30 <any>: Reset last step time to zero.
W 0x70 <clock>: Set the current clock counter.
R 0x70: Read the current clock counter.
```

There are also two control pins separate from the SPI interface:
`signal_irq` and `signal_shutdown`.  The `signal_irq` signal is raised
high to indicate that there is space to submit a new schedule entry
(via writes to address 0x21 and 0x20).  If the `signal_shutdown` reads
a high value that the device will return all uo_out pins to their
configured polarity (that is it will stop pulsing the step pin).  To
clear the shutdown state, return the `signal_shutdown` to a low state
and issue a write to address 0x11.

### How to test

Configure an SPI device. Ensure that the signal_shutdown line is held
low.  Issue an SPI set pin polarity command.  Issue a set pulse
duration command.  Issue a set clock command.  Issue a set interval
command.  Isuse a set count/add command.  Optionally issue additional
interval,count,add commands.  Observe the step pulses on the uo_out[0]
(step) pin.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 |  | step | spi_cs |
| 1 |  | dir | spi_mosi |
| 2 |  | other2 | spi_miso |
| 3 |  | other3 | spi_sclk |
| 4 |  | other4 | signal_irq |
| 5 |  | other5 | signal_shutdown |
| 6 |  | other6 |  |
| 7 |  | other7 |  |

### Chip location

{{< shuttle-map "tt06" "68" >}}

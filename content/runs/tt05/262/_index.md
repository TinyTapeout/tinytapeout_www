---
hidden: true
title: "262 Analog emulation monosynth"
weight: 40
---

## 262 : Analog emulation monosynth

* Author: Toivo Henningsson
* Description: One synth voice with two oscillators and a 2nd order filter
* [GitHub repository](https://github.com/toivoh/tt05-synth)
* [GDS submitted](https://github.com/toivoh/tt05-synth/actions/runs/6755671643)
* HDL project
* [Extra docs](https://github.com/toivoh/tt05-synth/blob/main/README.md)
* Clock: 50000000 Hz
* External hardware: audio plug to connect to audio input, voltage divider to protect it!

Image path is broken

### How it works

The synth contains two oscillators with controllable frequency and waveform
and a second order low pass filter with controllable cutoff frequency, resonance, and input amplification,
similar to a simple analog synth. (Though the analog synth usually has the variable amplification after the filter.)
The created audio samples are passed through a pulse width modulator (PWM) to create an audio signal on an output pin.

Sweep rates can be programmed for each parameter, to create simple envelopes.
All parameters can be set through a register interface. By changing the sweep rates at specific points in time, more complex envelopes can be created.

The sample rate is 50 MHz/32, or 1.5625 MHz, far above the audible range, to avoid aliasing issues while allowing a fine enough spacing of oscillator frequencies:
the oscillator period is always a whole number of samples, which avoid inharmonic aliasing effects.

The oscillators use counters that count down by a `2^n` each sample. If the counter would become negative, the period is added.
A second (`n` bit) sawtooth counter counts how many times the period has been added.
After one period, the sawtooth counter has incremented `2^n` times, and wraps around.

To reach lower octaves, an octave divider is used. `oct_enables[i]` is high once every `2^i` cycles.
An octave `oct` is specified for the oscillator frequency, and the counter is only update when `oct_enables[oct]` is high.
This keeps the same relative frequency accuracy for each octave.

The octave + period arrangement means that the full period is specified in a simple floating point format.
This serves as a quasi exponential conversion, which emulates the V/octave, V/dB etc scales typically used in analog synths,
and causes a quasi exponential response when sweeping the frequencies.

The filter is two pole filter with two states. Small update steps are taken every sample.
Instead of a multiplier, a barrel shifter (variable right shift) is used to calculate the state change.
The barrel shifter and associated adder is shared between all filter update steps (and the dither step for the PWM).
The synth cycles through the 6 steps for each sample, and adds steps up to 32 to come up to 5 bits of PWM resolution.
The PWM resolution is increased through dithering; at 48 kHz sample rate, it can be considered to be 10 bits.
The resolution should further increase for lower frequencies.

The octave of the cutoff frequency is used to determine the shift amount.
Depending on the position within the octave, the shift amount is decreased by one more or less often, to average the right amplification.

The volume is adjusted by tying the filter update that feeds the input signal into the filter to its own frequency.
In the same way, the damping as adjusted by having a separate frequency for the filter's damping step.

The a dither signal is formed by bit reversing the `oct_counter` counter (which is used for the octave divider),
and added to the output signal before rounding off to 5 bits for the PWM output.

For more details, see `README.md` in the project repository.


### How to test

The synth is controlled by writing to its configuration registers:

- Keep the write strobe low when not writing.
- Set the 4 bit write address, and an 8 bit data value.
- While keeping the address and data stable, bring the write strobe high and then low again.
  - The write address and data are sampled at 2-10 cycles after the rising edge of the write strobe.

The output comes in two forms:

- As a Pulse Width Modulated (PWM) signal.
- As an 8 bit value on the 8 output pins, that can be reconstructed using a resistor ladder.

The PWM signal should be simpler to use, but be sure to reduce the voltage with a resistive divider or similar
before connecting it to an audio device.
**Note:Make sure that you know what you are doing when connecting an audio device to the output.
Don't apply more than 1 V between the terminals of an audio plug that is connected to line in or similar.
3.3 V direct from the chip might damage your audio device.**

Most control registers consume 16 bits of address space each.
The memory map is laid out as follows: (one 16 bit word per line)

```
offset |  high byte |     low byte |
-------|------------|--------------|
 0     |        osc1_period        |
 2     |        osc2_period        |
 4     |      cutoff_period        |
 6     |        damp_period        |
 8     |         vol_period        |
10     | osc2_sweep |   osc1_sweep |
12     | damp_sweep | cutoff_sweep |
14     |        cfg |    vol_sweep |
```

The registers are initialized to all ones at reset, which turns off all oscillators.
The frequency registers are in a kind of floating point format:

- Oscillator periods are 13 bits: 4 bits exponent + 9 bits mantissa
- Cutoff, damping, and volume periods are 9 bits: 4 bits octave + 5 bits period
- Sweep periods are 8 bits signed: 1 bit sign + 4 bits octave + 3 bits mantissa

Increasing the exponent by one doubles the period, and goes down one octave. An exponent of 15 turns off the oscillator.
The volume depends on the ratio between the cutoff and volume periods (not their float representations).
The damping depends on the ratio between the cutoff and damping periods (not their float representations).
As the damping period gets longer than the cutoff period, resonance increases around the cutoff frequency.
If damping is low and/or volume is high, the filter will begin to saturate (which is sometimes a desirable effect).

Each sweep will increase or decrease the corresponding period.

The `cfg` register contains additional settings:

- Bits 0-1: Waveform for oscillator 0: 0 = pulse, 1 = square, 2 = noise, 3 = saw
- Bits 2-3: Waveform for oscillator 1
- Bits 4-5: Unused
- Bits 6-7: Filter mode for oscillator 1 and 2 respectively, 0 = 1st order falloff, 1 = 2nd order falloff

For more details, see `README.md` in the project repository.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | write data bit 0  | sample bit 0 | write address bit 0 |
| 1 | write data bit 1  | sample bit 1 | write address bit 1 |
| 2 | write data bit 2  | sample bit 2 | write address bit 2 |
| 3 | write data bit 3  | sample bit 3 | write address bit 3 |
| 4 | write data bit 4  | sample bit 4 | unused |
| 5 | write data bit 5  | sample bit 5 | unused |
| 6 | write data bit 6  | sample bit 6 | PWM output |
| 7 | write data bit 7  | sample bit 7 | write strobe |

### Chip location

{{< shuttle-map "tt05" "262" >}}

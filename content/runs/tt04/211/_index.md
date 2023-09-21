---
hidden: true
title: "211 Multi Pattern LED Sequencer"
weight: 4
---

## 211 : Multi Pattern LED Sequencer

* Author: Francisco Javier Rodriguez Navarrete
* Description: Project for the MPLS LED lights
* [GitHub repository](https://github.com/RSYO3000/tt04-submission-mpls)
* [GDS submitted](https://github.com/RSYO3000/tt04-submission-mpls/actions/runs/6122691719)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

The 'tt_um_MultiPatternLEDSequencer_RSYO3000.v' is just a wrapper for the tinytapeout I/O. Inside this, theres a top wrapper for the project called 'MultiPatternLEDSequencer.v' that connects to the tinytapeout wrapper and instances the following modules: 'PLL_10MHztoNHz.v' and 'MPLS.v'

The 'PLL_10MHztoNHz.v' contains a verilog that can change the 10MHz frequency input to 1Hz, 2Hz 5Hz and 50Hz, to see the LEDs with various frequencies via the ('clk_selector') signal.

The 'MPLS.v' is the main module, it uses a combination of counters, feedback loops, and pattern selection logic to generate different LED patterns. The pattern selection signal ('pattern_sel') determines which LED pattern to display.

- The 'demo_counter' is used to cycle through all the available patterns when ('pattern_sel') is 31.

- The 'pattern_counter' and 'oh_counter' are used to generate specific timing sequences for the LED patterns.

- The 'lfsr_reg' implements a Linear Feedback Shift Register (LFSR) to generate pseudo-random sequences.

- A 'case' selects from the selected ('pattern_sel') to display the selected pattern out of the 30 available patterns through the 8 outputs. The 30 patterns are the following ones:

  - **Pattern 0: All LEDs OFF**
    Turn off all the LEDs.

  - **Pattern 1: All LEDs ON**
    Turn on all the LEDs at once.

  - **Pattern 2: Blinking LEDs**
    Make the LEDs alternate between on and off, creating a blinking effect.

  - **Pattern 3: Running lights**
    The LEDs move in a sequence, like lights running down a line.

  - **Pattern 4: Alternating LEDs**
    Alternate the LEDs in an on-off pattern.

  - **Pattern 5: Negative running lights**
    Similar to pattern 3, but with the LEDs off where they were on, and vice versa.

  - **Pattern 6: KR effect**
    The LEDs flicker and shift, producing a mysterious "Knight Rider" effect.

  - **Pattern 7: Bouncing lights**
    Lights bounce back and forth.

  - **Pattern 8: LED wave effect**
    Create a wave-like pattern that travels along the LEDs.

  - **Pattern 9: Alternating LED groups**
    Divide the LEDs into groups of 2 that alternate turning on and off.

  - **Pattern 10: Heartbeat**
    Make the LEDs pulse in a heartbeat-like rhythm.

  - **Pattern 11: p-Random LFSR LEDs**
    Use a random number generator to make the LEDs light up in a pseudo-random pattern.

  - **Pattern 12: XOR All**
    XOR all counters, creating a unique show.

  - **Pattern 13: Binary counter**
    Display a binary counting sequence on the LEDs.

  - **Pattern 14: Clockwise LED rotation**
    Rotate the LEDs in a clockwise direction.

  - **Pattern 15: XOR Pattern**
    XOR between one hot counter and binary counter.

  - **Pattern 16: Bouncing lights**
    Similar to pattern 7, but with a slightly different bounce effect.

  - **Pattern 17: Diagonal Bounce**
    Make the LEDs bounce diagonally across the LEDs.

  - **Pattern 18: Circular Bounce**
    Create a circular bounce effect, like lights moving in a loop.

  - **Pattern 19: Random Bounce**
    The LEDs bounce pseudo-randomly.

  - **Pattern 20: Negative Diagonal Bounce**
    Like pattern 17, but with the LEDs off where they were on, and vice versa.

  - **Pattern 21: Accelerating Bounce**
    The bouncing effect speeds up over time.

  - **Pattern 22: Gravity Effect**
    LEDs appear to "fall" downward, creating a gravity-like effect.

  - **Pattern 23: Spring Effect**
    Like pattern 8, but with a spring-like bounce in the wave effect.

  - **Pattern 24: Reflecting Bounce**
    Create a bouncing pattern that reflects off the edges.

  - **Pattern 25: Double Bounce**
    Similar to pattern 17, but with the middle LEDs on.

  - **Pattern 26: Wave Bounce**
    A wave-like pattern that bounces back and forth.

  - **Pattern 27: Breathing Effect**
    Make the LEDs "breathe" by gradually brightening and dimming.

  - **Pattern 28: Alternating Binary and One-Hot**
    Switch between binary counting and one-hot encoding.

  - **Pattern 29: Alternating LFSR and One-Hot**
    Alternate between the LFSR sequence and one-hot encoding.

  - **Pattern 30: Alternating LFSR and Binary**
    Switch between the LFSR sequence and binary counting.

  - **Pattern 31: DEMO**
    This mode cycles through all the available patterns automatically, showcasing the variety of the patterns.


### How to test

To test the `MPLS` module, follow these steps:

- To create a simulation displaying all the patterns, run the target "make mpls_sim" in the src folder, this will run the testbench via icarus verilog for all patterns with a fixed time of simulation enough to see the patterns.

- There is another target that simulates the PLL and 10MHz to 1Hz, 2Hz, 5Hz and 50Hz with the MPLS module by using "make tt_sim" in the src folder, running this one is not recommended since its meant for long testing and the VCD file can go up to 16GB if you let it run everything.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | N/C  | LED[7] | none |
| 1 | pattern_sel[4]  | LED[6] | none |
| 2 | pattern_sel[3]  | LED[5] | none |
| 3 | pattern_sel[2]  | LED[4] | none |
| 4 | pattern_sel[1]  | LED[3] | none |
| 5 | pattern_sel[0]  | LED[2] | none |
| 6 | clk_selector[1]  | LED[1] | none |
| 7 | clk_selector[0]  | LED[0] | none |

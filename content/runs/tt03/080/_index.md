---
hidden: true
title: "80 Ring oscillator with skew correction"
weight: 81
---

## 80 : Ring oscillator with skew correction

* Author: Daniel Wisehart
* Description: Fixing the problem of skew in a ring oscillator with a differential clock ring. 
* [GitHub repository](https://github.com/dwisehart/tt03-ring-grey)
* [Most recent GDS build](https://github.com/dwisehart/tt03-ring-grey/actions/runs/4789418143)
* HDL project
* [Extra docs]()
* Clock: any Hz
* External hardware: 



### How it works

Multiple buffers connected in series have a problem: they skew the incoming waveform on the output because the
rise and fall time of the FETs that buffer the signal have uneven rise and fall times.  The solution used here
is to use a differential clock signal with two rings of buffers running opposite polarity that need to both
have changed before the output is changed.

The clock ring is then tested by driving grey counters to see if the resulting output is stable and at an
expected rate.  The original design--which is still available for testing via cocotb--used multiple rings of
different lengths to detect skew with differential timings, but that extended design would not fit into
hardware.


### How to test

After not reset is desasserted, set the bits of select to read one of the grey counters.  The outputs should
change each half second with something like "7 6 2 ." over two seconds and then repeats.  If a value is not a
good one, a minus sign is shown instead.  A 762. says the divided ratio is 762:1.  The table belows shows what
is being measured and what the divide ratio is.  The clock number is the number of stages in its ring buffer.
In hardware, the only clock that is running is clock 097, which actually has 93 stages.

\begin{tabular}{llr}
Select input & counter                 & divisor \\
000001       & clock 005 vs scan clock & 01,300  \\
000011       & clock 011 vs scan clock & 00,600  \\
000111       & clock 023 vs scan clock & 00,290  \\
000110       & clock 047 vs scan clock & 00,140  \\
001110       & clock 097 vs scan clock & 00,069  \\
001100       & clock 005 vs clock 011  & 01,500  \\
011100       & clock 005 vs clock 023  & 03,000  \\
011000       & clock 005 vs clock 047  & 06,000  \\
111000       & clock 011 vs clock 023  & 12,000  \\
110000       & clock 011 vs clock 047  & 01,500  \\
100000       & clock 023 vs clock 047  & 03,000  \\
default      & digits 4 5 6 . repeat   & n/a     \\
\end{tabular}


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | output[7] LED seg a |
| 1 | not reset  | output[6] LED seg b |
| 2 | select[5]  | output[5] LED seg c |
| 3 | select[4]  | output[4] LED seg e |
| 4 | select[3]  | output[3] LED seg f |
| 5 | select[2]  | output[2] LED seg g |
| 6 | select[1]  | output[1] LED seg h |
| 7 | select[0]  | output[0] LED point |

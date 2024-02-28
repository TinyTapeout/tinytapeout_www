---
hidden: true
title: "29 6-bit FIFO"
weight: 30
---

## 29 : 0b 000 011 101 : 6-bit FIFO

{{< tt-scanchain-switches "000011101" >}}

* Author: Mike Bell
* Description: Implementation of a FIFO
* [GitHub repository](https://github.com/MichaelBell/tt03-fifo)
* HDL project
* [Extra docs]()
* Clock: 50000 Hz
* External hardware: 



### How it works

The design implements a 52 entry 6-bit FIFO.  The oldest 4 entries are accessible by setting the peek address.
The first 48 entries in the FIFO are implemented as a chain of latches.  This allows for high data density in the limited area.
The last 4 entries in the FIFO are implemented by a ring of flip-flops.  This allows random access to the last four entries.

Because of the way the chain of latches works, when entries are popped from the FIFO it takes time for data in the latch
part of the FIFO to move down the chain.  If the FIFO is fairly empty this shouldn't be noticeable, but when the FIFO is
quite full this can cause the FIFO to refuse writes even though it is not full.

A ready output indicates whether the latch chain is ready for more data.  If the FIFO is completely full and one entry is
popped then it takes 48 cycles after the pop for the chain to be ready again.  Therefore, if ready stays low when the FIFO 
is clocked 49 or more times without any data being popped then the FIFO is full.

There are minimal delays on the read side - if any data is in the FIFO then it can always be read, this works because empty latch 
entries can pass the data through them without needing to be clocked.  The only exception to this is that due to input buffering
newly written entries take 2 cycles to appear on the output.


### How to test

New entries, taken from inputs 2-7, are written to the FIFO on a rising clock edge when input 1 is high.
Data writes are ignored when the Ready output is low.

Because of limited inputs, the write enable is used to determine the mode of inputs 2-5.
When not writing, these control reset (active low), pop (active high) and the peek address.

The peek address controls whether the oldest to 4th oldest entry in the FIFO is presented on the data outputs.

Reading the oldest entry when the FIFO is empty always reads 0.  However, peeking at previous entries when the 
FIFO is empty or has fewer occupied entries reads stale data - the values should not be relied upon.

The oldest entry is popped from the FIFO by setting pop.  It is valid to set the peek address to a non-zero value when popping,
but it is always the oldest entry that is popped, which is not the entry being read if peek address is non-zero.
The peek address is considered prior to the pop.

When writing, it is always the last entry in the FIFO that is read (peek address is considered to be zero).  The new
value written when the FIFO is empty is not presented on the outputs until the following cycle.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | Clock  | Ready |
| 1 | Mode (Write enable)  | Empty_n |
| 2 | Reset_n / Data 0  | Data 0 |
| 3 | Pop / Data 1  | Data 1 |
| 4 | Peek A0 / Data 2  | Data 2 |
| 5 | Peek A1 / Data 3  | Data 3 |
| 6 | Unused / Data 4  | Data 4 |
| 7 | Unused / Data 5  | Data 5 |

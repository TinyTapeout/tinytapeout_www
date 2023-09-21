---
hidden: true
title: "177 8-bit FIFO with depth 16."
weight: 67
---

## 177 : 8-bit FIFO with depth 16.

* Author: Steve Jenson
* Description: 8-bit FIFO with depth 16 and FWFT read operation
* [GitHub repository](https://github.com/stevej/tt04-fifo-stevej)
* [GDS submitted](https://github.com/stevej/tt04-fifo-stevej/actions/runs/6103682588)
* HDL project
* [Extra docs](README.md)
* Clock: 0 Hz
* External hardware: 



### How it works

A FIFO queue is a first-in, first-out digital device that allows two parties to communicate with a channel of limited size by following specific rules: one party writes, the other reads. The first thing written will be the first thing read. Reading an empty queue is disallowed and writing to a full queue is disallowed. Empty and full status can be checked via the proper status pin before use.
In psuedo-code, two parties can communicate with this FIFO as follows:

Party A

```
while !full:
  write_entry(item)
```

Party B

```
while !empty:
  item = read_entry()
```

The queue works in First-Word Fall-Through mode meaning that the top item is always available on the read bus even
if you haven't set `read_request` high. If you want to see the next item in the queue on your next read, be sure
to set `read_request` high.

`almost_full` and `almost_empty` signals exist so you can batch reads and writes. Instead of checking for
`full` or `empty` on each read or write you can instead check `almost_full` or `almost_empty` and batch read or writes
based on how many slots are available. For this design taped out in TinyTapeout 4, almost_full means 12 of 16 slots
have been used and almost_empty means that 12 of 16 slots are free.


### How to test

Write an item, read an item. Check the status bits. See the unit tests for more ideas!


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | item[0]  | item[0] | empty (read-only) |
| 1 | item[1]  | item[1] | full (read-only) |
| 2 | item[2]  | item[2] | underflow (read-only) |
| 3 | item[3]  | item[3] | overflow (read-only) |
| 4 | item[4]  | item[4] | almost_empty (read-only) |
| 5 | item[5]  | item[5] | almost_full (read-only) |
| 6 | item[6]  | item[6] | write_enable (set this high to write a value) |
| 7 | item[7]  | item[7] | read_enable (set this high to read the latest entry from the FIFO) |

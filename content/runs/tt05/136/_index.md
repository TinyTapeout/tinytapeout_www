---
hidden: true
title: "136 Asynchronous  Parallel Processor Demonstrator"
weight: 154
---

## 136 : Asynchronous  Parallel Processor Demonstrator

* Author: Paul Schulz
* Description: Implementation for an Asynchronous Parallel Processor
* [GitHub repository](https://github.com/PaulSchulz/tt05-async-proc)
* [GDS submitted](https://github.com/PaulSchulz/tt05-async-proc/actions/runs/6755383334)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

![picture](images/picture.png)

### How it works

See Github: https://github.com/PaulSchulz/tt05-async-proc

This circuit is an investigation into an asynchronous parallel processor design.
(Work in progress.)

Note: This is a very early design and doesn't do very much.

A processing node follows the following state flow:

- Wait for valid data;
- Process the data to produce an output value, and let neighboring nodes
  know that processing in being done;
- Make the result available; and wait for more data to process.

In this example, the processing node is doing a calculation on four(4)
inputs of 4 bits.  The calculation is based on a deconstruction of the
the "Arctic Circle Theorem" model. ([video](https://www.youtube.com/watch?v=Yy7Q8IWNfHM))

In future designs: 1) allow the processing nodes to be programmable; 2)
layout a multinode interconnected array (with global clocking);
3) investigate a clockless version; and 4)


### How to test

Reset to clear internal buffers.

Set inputs and load them into the input buffers.

Set clock to calculate result and display on outputs.

Experiment by trying different input values.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input bit 0  | segment a (up) | bit 0 (not used) |
| 1 | input bit 1  | segment b (right) | bit 1 (not used) |
| 2 | input bit 2  | segment c | bit 2 (not used) |
| 3 | input bit 3  | segment d (processing) | bit 3 (not used) |
| 4 | load input 1 (right)  | segment e | bit 4 (not used) |
| 5 | load input 2 (up)  | segment f (left) | bit 5 (not used) |
| 6 | load input 3 (left)  | segment g (down) | bit 6 (not used) |
| 7 | load input 4 (down)  | dot       (data ready) | bit 7 (not used) |

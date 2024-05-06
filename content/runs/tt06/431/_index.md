---
hidden: true
title: "431 Dual Deque"
weight: 125
---

## 431 : Dual Deque

* Author: Andrew Dona-Couch
* Description: Dual byte-width double-ended queues
* [GitHub repository](https://github.com/couchand/tt06-dual-deque)
* [GDS submitted](https://github.com/couchand/tt06-dual-deque/actions/runs/8694032397)
* HDL project
* [Extra docs](None)
* Clock: 0 Hz

Two independent double-ended queues in one tiny footprint.

### How it works

Each deque is an array of flip flops with a pointer to the top.  The empty and full
status flags for each are directly available on pins.  The push and pop inputs as
well as data bus lines are multiplexed using the deque select line.

Hold `end_select` low to operate as a stack.  Tie `end_select` to `push` to operate
as a queue.

### How to test

To push (if `full` is low):

- Put the data byte on `data_in`
- Select which deque to push to with `deque_select`
- Select which end to push to with `end_select`
- Bring `push` high for one cycle

To pop (if `empty` is low):

- Select which deque to push to with `deque_select`
- Select which end to push to with `end_select`
- Bring `pop` high for one cycle

To replace the last element of the deque (if `empty` is low):

- Select which deque to push to with `deque_select`
- Select which end to push to with `end_select`
- Put the new data byte on `data_in`
- Bring both `push` and `pop` high for one cycle

To read the end of the deque:

- Select which deque to push to with `deque_select`
- Select which end to push to with `end_select`
- Wait one cycle
- Read end of deque from `data_out`

### External hardware

You would probably want to connect this to other devices that would find it useful.


### IO

| # | Input          | Output         | Bidirectional   |
| - | -------------- | -------------- | --------------- |
| 0 | Data In 0 | Data Out 0 | Deque Select |
| 1 | Data In 1 | Data Out 1 | End Select |
| 2 | Data In 2 | Data Out 2 | Push |
| 3 | Data In 3 | Data Out 3 | Pop |
| 4 | Data In 4 | Data Out 4 | Deque 0 Empty |
| 5 | Data In 5 | Data Out 5 | Deque 0 Full |
| 6 | Data In 6 | Data Out 6 | Deque 1 Empty |
| 7 | Data In 7 | Data Out 7 | Deque 1 Full |

### Chip location

{{< shuttle-map "tt06" "431" >}}

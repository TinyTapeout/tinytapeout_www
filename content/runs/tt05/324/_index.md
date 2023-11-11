---
hidden: true
title: "324 4-bit FIFO/LIFO"
weight: 75
---

## 324 : 4-bit FIFO/LIFO

* Author: Haozhe Zhu
* Description: A FIFO/LIFO memory
* [GitHub repository](https://github.com/HaozheZhu/tt05-HZ)
* [GDS submitted](https://github.com/HaozheZhu/tt05-HZ/actions/runs/6668171280)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

This memory module can operate as both a First-In-First-Out (FIFO) and a Last-In-First-Out (LIFO) memory, which can be selected using the mode pin. It can store a maximum of 30 4-bit numbers, which is preserved upon mode switch. In addition, it is equipped with a 7-segment display that displays the current number of stored data entries (not more than nine). Should the stored entries surpass nine, the display will be deactivated, and an overflow flag will be triggered. If the memory is full, further write attempts has no effect on stored data. If the memory is empty, further read attempts will invalidate the output data and clear output valid flag. If no read operation has been performed after the most recent reset, the output is also invalid.


### How to test

Load some data into the memory and then read them out.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Data In [0]  | segment a | Data Out [0] |
| 1 | Data In [1]  | segment b | Data Out [1] |
| 2 | Data In [2]  | segment c | Data Out [2] |
| 3 | Data In [3]  | segment d | Data Out [3] |
| 4 | Write Enable  | segment e | Full Flag Out |
| 5 | Read Enable  | segment f | Empty Flag Out |
| 6 | Mode (FIFO=0)  | segment g | Output Valid Flag Out |
| 7 | Manual Clock  | dot | Display Overflow Flag Out |

### Chip location

{{< shuttle-map "tt05" "324" >}}

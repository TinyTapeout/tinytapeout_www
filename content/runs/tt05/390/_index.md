---
hidden: true
title: "390 No Time for Squares"
weight: 42
---

## 390 : No Time for Squares

* Author: Tommy Thorn
* Description: It's a 12-hour clock, drawn with triangles rendered by a race-the-beam triangle render
* [GitHub repository](https://github.com/tommythorn/no-time-for-squares)
* [GDS submitted](https://github.com/tommythorn/no-time-for-squares/actions/runs/6751927823)
* HDL project
* [Extra docs](TBD)
* Clock: 31500000 Hz
* External hardware: TinyVGA, 31.5 MHz clock, reset, hour & min buttons

![picture](images/picture.png)

### How it works

Every frame the 640x480 VGA matrix is scanned, advancing the
state of the intersecting lines of the three triangles.  If the
(x,y) coordinate of the "beam" lines on the positive side of
each line, the beam is inside the triangle.  Among the visible
triangles, the highest priority triangle sets the color, else we
default to a grey color.  Twelve dots are also marked, to make
it easier to read the clock.

The algorithm might be easily understood by examining the
software model in Rust, in the `sw` directory.


### How to test

Hook up the Tiny VGA interface and connect a VGA monitor.  Hope it works.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | clock  | R1 | debug\[7] |
| 1 | reset  | G1 | debug\[6] |
| 2 | hour, advance hour  | B1 | debug\[5] |
| 3 | minute, advance minute  | vsync | debug\[4] |
| 4 | unused  | R0 | debug\[3] |
| 5 | unused  | G0 | debug\[2] |
| 6 | debugsel\[1]  | B0 | debug\[1] |
| 7 | debugsel\[0]  | hsync | debug\[0] |

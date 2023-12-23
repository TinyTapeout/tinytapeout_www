---
hidden: true
title: "161 Lion cage"
weight: 169
---

## 161 : Lion cage

* Author: Axel Andersson & Per Andersson
* Description: Count up to 15 lions, moving through a tunnel between a cage and an enclosure.
* [GitHub repository](https://github.com/Muncherkin/tt_um_muncherkin_lioncage)
* [GDS submitted](https://github.com/Muncherkin/tt_um_muncherkin_lioncage/actions/runs/6744691816)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 



### How it works

Two sensors are set in the tunnel. The sensor closest to the cage is G1,
the other G2. Only one lion can walk through the tunnel at a time. A lion
is allowed to reverse in the tunnel.

As the lion starts walking out, (G1, G2) = (1, 0), the counter increments by 1.
One of two scenarios then occurs: either the sensors read (G1, G2) = (0, 0) before it
reads (G1, G2) = (0, 1). In that case, the counter will decrement as the lion must have gone
back into the cage. Otherwise, the sensors will read (G1, G2) = (0, 1) before it reads
(G1, G2) = (0, 0), thereby letting us know that it has passed (G1, G2) = (1, 1) as well. The
counter will not change in this case.

If we read (G1, G2) = (1, 1) before reading (G1, G2) = (1, 0), we know a lion is moving from the
enclosure to the cage. We then repeat the above two cases. This allows us to create a two
state graph of the problem, transitioning from S0 to S1 on either (G1, G2) = (1, 0) or
(G1, G2) = (1, 1) and returning back on (G1, G2) = (0, 1) or (G1, G2) = (0, 0), incrementing
the counter if S0->S1 on (G1, G2) = (1, 0) and decrementing the counter if S1->S0 on
(G1, G2) = (0, 0).


### How to test

After reset, the counter should increase by 1 if a lion moves from the cage to the enclosure, and the opposite if
vice versa.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | G1, first sensor in tunnel  | segment a | They do nothing. |
| 1 | G2, second sensor in tunnnel  | segment b | n/a |
| 2 | n/a  | segment c | n/a |
| 3 | n/a  | segment d | n/a |
| 4 | n/a  | segment e | n/a |
| 5 | n/a  | segment f | n/a |
| 6 | n/a  | segment g | n/a |
| 7 | n/a  | n/a | n/a |

### Chip location

{{< shuttle-map "tt05" "161" >}}

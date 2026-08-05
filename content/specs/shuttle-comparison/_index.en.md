---
title: Shuttle Comparison
description: Comparing differences and similarities between the different available shuttles
---

Tiny Tapeout runs shuttles which target different foundries and their PDKs. Currently supported PDKs are:
- SKY130A
- IHP-SG13G2
- GF180mcuD

No PDK is equivalent -- they all offer a different set of features, constraints and target different node sizes. We
attempt to abstract these away in order to make the submission process as streamlined and as easy to understand as
possible, but we appreciate that some may want understand the differences between them and how Tiny Tapeout uses them.

<table>
<thead>
  <tr>
    <th rowspan="2">PDK</th>
    <th rowspan="2">Node Size</th>
    <th colspan="2">Metal Layers</th>
    <th colspan="4">Tile Sizes<br></th>
    <th rowspan="2">Analog Support</th>
    <th rowspan="2">Available Voltage Sources</th>
    <th rowspan="2">Pinout</th>
  </tr>
  <tr>
    <th>Total</th>
    <th>Available to User</th>
    <th>Configurations</th>
    <th>Minimum Tile Size (width x height, µm)</th>
    <th>Maximum Tile Size (width x height, µm)</th>
    <th>Logic Cell Density (approximate, per tile)</th>
  </tr></thead>
<tbody>
  <tr>
    <td>SKY130A</td>
    <td rowspan="2">130nm</td>
    <td rowspan="3">5<br></td>
    <td rowspan="3">4</td>
    <td>1x1, 1x2, 2x2, 3x2, 3x4, 4x2, 4x4, 5x4, 6x2, 6x4, 8x2, 8x4</td>
    <td>161.00 x 111.52</td>
    <td>1378.16 x 511.36</td>
    <td rowspan="3">~1000</td>
    <td>Yes</td>
    <td>1.8V, 3.3V (analog only)</td>
    <td rowspan="3">10 inputs, 8 outputs, 8 bidirectional<br><br>Analog pins available for supported shuttles</td>
  </tr>
  <tr>
    <td>IHP-SG13G2</td>
    <td>1x1, 1x2, 2x1, 2x2, 3x1, 3x2, 3x4, 4x1, 4x2, 4x4, 5x4, 6x1, 6x2, 6x4, 8x1, 8x2, 8x4</td>
    <td>202.08 x 154.98</td>
    <td>1724.16 x 710.64</td>
    <td>Yes</td>
    <td>1.8V</td>
  </tr>
  <tr>
    <td>GF180mcuD</td>
    <td>180nm</td>
    <td>1x1, 1x2, 2x2, 3x2, 3x4, 4x2, 4x4</td>
    <td>346.64 x 160.72</td>
    <td>1440.32 x 736.96</td>
    <td>No</td>
    <td>3.3V</td>
  </tr>
</tbody>
</table>
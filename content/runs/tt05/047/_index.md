---
hidden: true
title: "47 Intructouction to PRBS"
weight: 61
---

## 47 : Intructouction to PRBS

* Author: Chih-Kuan Ho and David Parent 
* Description: This is a simple design used to verify the design flow, so that we can teach lower division college studdnts IC desgin.
* [GitHub repository](https://github.com/davidparent/PRBS-ASIC)
* [GDS submitted](https://github.com/davidparent/PRBS-ASIC/actions/runs/6750498255)
* [Wokwi](https://wokwi.com/projects/380409904919056385) project
* [Extra docs]()
* Clock: 10k Hz
* External hardware: 



### How it works

This takes a 4 bit LSFR confugred as a PRBS=X^3+X^2+1  Reset sets four DFF to zero   to make sure the osiclation starts. This uses XNOR because there was a synth warning The outpus are for a 7 segment displant and the last out put is for the PRBS


### How to test

Set the clock, pulse reser and it it should givne RBS stream.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | Clock  | segment a | none |
| 1 | Reset  | segment b | none |
| 2 | none  | segment c | none |
| 3 | none  | segment d | none |
| 4 | none  | segment e | none |
| 5 | none  | segment f | none |
| 6 | none  | segment g | none |
| 7 | none  | segment PRBS | none |

### Chip location

{{< shuttle-map "tt05" "47" >}}

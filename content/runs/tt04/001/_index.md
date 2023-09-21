---
hidden: true
title: "1 TinyTapeout 04 Factory Test"
weight: 32
---

## 1 : TinyTapeout 04 Factory Test

* Author: Sylvain Munaut
* Description: Factory test module
* [GitHub repository](https://github.com/TinyTapeout/tt04-factory-test)
* [GDS submitted](https://github.com/TinyTapeout/tt04-factory-test/actions/runs/5622553373)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

If input 0 is high, then a counter is output on the outputs and the bidirectional outputs. Otherwise the inputs are mirrored to the outputs.


### How to test

Set input 0 high. Check the outputs are toggling.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | sel / data_i[0]  | data_o[0] (when sel=0) / counter_o[0] (when sel=1) | counter_o[0] |
| 1 | data_i[1]  | data_o[1] (when sel=0) / counter_o[1] (when sel=1) | counter_o[1] |
| 2 | data_i[2]  | data_o[2] (when sel=0) / counter_o[2] (when sel=1) | counter_o[2] |
| 3 | data_i[3]  | data_o[3] (when sel=0) / counter_o[3] (when sel=1) | counter_o[3] |
| 4 | data_i[4]  | data_o[4] (when sel=0) / counter_o[4] (when sel=1) | counter_o[4] |
| 5 | data_i[5]  | data_o[5] (when sel=0) / counter_o[5] (when sel=1) | counter_o[5] |
| 6 | data_i[6]  | data_o[6] (when sel=0) / counter_o[6] (when sel=1) | counter_o[6] |
| 7 | data_i[7]  | data_o[7] (when sel=0) / counter_o[7] (when sel=1) | counter_o[7] |

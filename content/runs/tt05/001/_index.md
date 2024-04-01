---
hidden: true
title: "1 TinyTapeout 05 Factory Test"
weight: 66
---

## 1 : TinyTapeout 05 Factory Test

* Author: Sylvain Munaut
* Description: Factory test module
* [GitHub repository](https://github.com/TinyTapeout/tt05-factory-test)
* [GDS submitted](https://github.com/TinyTapeout/tt05-factory-test/actions/runs/6500162402)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

If `sel` is high, then a counter is output on the output pins and the bidirectional pins (`data_o = counter_o = counter`).
If `sel` is low, the bidirectional pins are mirrored to the output pins (`data_o` = `data_i`).


### How to test

Set `sel` high and observe that the counter is output on the output pins (`data_o`) and the bidirectional pins (`counter_o`).

Set `sel` low and observe that the bidirectional pins are mirrored to the output pins (`data_o` = `data_i`).


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | sel  | data_o[0] | data_i[0] / counter_o[0] |
| 1 | none  | data_o[1] | data_i[1] / counter_o[1] |
| 2 | none  | data_o[2] | data_i[2] / counter_o[2] |
| 3 | none  | data_o[3] | data_i[3] / counter_o[3] |
| 4 | none  | data_o[4] | data_i[4] / counter_o[4] |
| 5 | none  | data_o[5] | data_i[5] / counter_o[5] |
| 6 | none  | data_o[6] | data_i[6] / counter_o[6] |
| 7 | none  | data_o[7] | data_i[7] / counter_o[7] |

### Chip location

{{< shuttle-map "tt05" "1" >}}

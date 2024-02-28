---
hidden: true
title: "218 4:2 Compressor"
weight: 219
---

## 218 : 0b 011 011 010 : 4:2 Compressor

{{< tt-scanchain-switches "011011010" >}}

* Author: saicharan0112
* Description: A Basic 4:2 compressor which contains 4 inputs and 1 carry_in bit which compresses to 2 outputs and 1 carry_out bit
* [GitHub repository](https://github.com/saicharan0112/tt02-submission-template)
* [Wokwi](https://wokwi.com/projects/349813388252021330) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

It compressors 4 inputs to 2 inputs. This is used to compress partial products inside multipliers

### How to test

Follow the truth table of 4:2 compressor online with 4 inputs and carry_in bit and observe the 2 outputs and carry_out bit

### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | a1 is one of the 4 main input bits  | o1 is the one of the 3 compressed output bits |
| 1 | a2 is one of the 4 main input bits  | o2 is the one of the 3 compressed output bits |
| 2 | a3 is one of the 4 main input bits  | cout is the carry_out bit |
| 3 | a4 is one of the 4 main input bits  | none |
| 4 | cin is the carry_in input bit  | none |
| 5 | none  | none |
| 6 | none  | none |
| 7 | none  | none |

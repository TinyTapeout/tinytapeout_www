---
hidden: true
title: "556 Hardware Trojan Part II"
weight: 103
---

## 556 : Hardware Trojan Part II

* Author: Jeremy Hong
* Description: Pseudorandom number generator with and without hardware trojan
* [GitHub repository](https://github.com/hongselectronics/HW_Trojan_Rev2)
* [GDS submitted](https://github.com/hongselectronics/HW_Trojan_Rev2/actions/runs/8755314719)
* [Wokwi](https://wokwi.com/projects/395055455727667201) project
* [Extra docs]()
* Clock: 10000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### Credit

My School and Instructor: [Wright State University](https://www.wright.edu/) EE-4550/6550 IC Hardware Security and Trust by [Dr. Saiyu Ren](https://people.wright.edu/saiyu.ren)

My employer: [Two Six Technologies](https://twosixtech.com/)

My teammates: [Celeste Irwin](https://www.linkedin.com/in/celeste-irwin-91b122225/) and [Nicholas Nissen](https://www.linkedin.com/in/nicholas-nissen-a512a823/)

### How it works

This pseudorandom number generator (PRNG) is compromised of scan flip-flops (SFF) and XOR gates. There are two PRNGs in this design, a PRNG with and without a hardware trojans

### How to test

Test by giving design a clock signal, and then set the PRNG by setting the scanin pins, and then toggle the scan enable pin. To reset turn off all the scanin pins and then leave the scan enable pin on for a few seconds.

### External hardware

Pattern generator and logic analyzer recommended.


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | Scan Enable  | PRNG 1 output Trojan Free  | Input, ScanIn 8        |
| 1 | ScanIn 1  | PRNG 2 output trojan inserted  | Input, ScanIn 9        |
| 2 | ScanIn 2  |   | Input, ScanIn 10        |
| 3 | ScanIn 3  |   | Input, External Trojan Trigger        |
| 4 | ScanIn 4  |   | Output, single inverter test        |
| 5 | ScanIn 5  |   | Input, single inverter test        |
| 6 | ScanIn 6  |   | Input, 8 inverters test        |
| 7 | ScanIn 7  |   | Output, 8 inverters test        |


### Chip location

{{< shuttle-map "tt06" "556" >}}

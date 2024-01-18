---
hidden: true
title: "76 BCDtoDECIMAL"
weight: 77
---

## 76 : 0b 001 001 100 : BCDtoDECIMAL

{{< tt-scanchain-switches "001001100" >}}

* Author: Giresh and Aditya 
* Description: The objective of this project is to create a circuit that can convert Binary Coded Decimal (BCD) numbers to their decimal equivalents. This will enable users to easily convert BCD numbers, which are commonly used in electronic devices, into the decimal format that is more commonly understood.
* [GitHub repository](https://github.com/MIKEPENCE10CENT/tt03-submission-template)
* [Most recent GDS build](https://github.com/MIKEPENCE10CENT/tt03-submission-template/actions/runs/4773049696)
* [Wokwi](https://wokwi.com/projects/362371515213982721) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works : A BCD to decimal generator on a seven-segment display works by converting Binary Coded Decimal (BCD) input signals into the corresponding decimal digits that can be displayed on a seven-segment display. The BCD input consists of four binary digits, where each digit corresponds to a decimal number between 0 and 9. These four digits are converted into their corresponding decimal values by using a decoder circuit. The decoder circuit uses logic gates to decode the BCD input signals into the corresponding outputs for each of the seven segments in the seven-segment display. Each segment is either turned on or off, depending on the decimal value of the BCD input.


### How to test

Explain how to test your project : To test this project we have connected the output pins of this circuit to the seven segment pins.To display the decimal digit on the seven-segment display, the corresponding segments are turned on or off, depending on the decimal value of the BCD input. For example, if the BCD input is 0010, the decoder circuit will turn on segment A, segment F, and segment G to display the decimal digit 2 on the seven-segment display.


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | {'B': 'connected to IN0'}  | {'segment a': 'connected to OUT0'} |
| 1 | {'C': 'connected to IN1'}  | {'segment b': 'connected to OUT1'} |
| 2 | {'D': 'connected to IN2'}  | {'segment c': 'connected to OUT2'} |
| 3 | {'E': 'connected to IN3'}  | {'segment d': 'connected to OUT3'} |
| 4 | none  | {'segment e': 'connected to OUT4'} |
| 5 | none  | {'segment f': 'connected to OUT5'} |
| 6 | none  | {'segment g': 'connected to OUT6'} |
| 7 | none  | dot |

---
hidden: true
title: "206 UART Transceiver"
weight: 37
---

## 206 : UART Transceiver

* Author: Nathan Zhu
* Description: UART Transceiver with tx and rx functions at 9600 baud rate
* [GitHub repository](https://github.com/njzhu/tt05_uart_transceiver)
* [GDS submitted](https://github.com/njzhu/tt05_uart_transceiver/actions/runs/6739921756)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Given paramaters of the clock frequency and the desired baud rate,
we can calculate the number of ticks of the clock to correspond to a tick
at the desired baud rate. Then we can send the start bit, 8 data bits, and
a stop bit. Our design uses oversampling to get the value at the middle of
the pulse, and then returns our data bit with a read_done signal. For the transmitter,
we take a data byte of input and, using the pulse width calculated earlier,
send a proper UART sequence with the correct timing.


### How to test

After reset, the receiver will wait for the start bit, and then 8 data bits,
and then a stop bit. After reset, we can set the 8 data bits and a data_ready bit
and the resulting uart transmission sequence will appear on the tx output signal.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | rx bit to signal the bits we receive, dataReady highlighting data is ready for tx  | segment a / dataOut[0] / tx for uart packet bits | finished_read - finished reception / dataIn[0] |
| 1 | none  | segment b / dataOut[1] | dataIn[1] |
| 2 | none  | segment c / dataOut[2] | dataIn[2] |
| 3 | none  | segment d / dataOut[3] | dataIn[3] |
| 4 | none  | segment e / dataOut[4] | dataIn[4] |
| 5 | none  | segment f / dataOut[5] | dataIn[5] |
| 6 | none  | segment g / dataOut[6] | dataIn[6] |
| 7 | bit to test if we want tx or rx  | segment h / dataOut[7] | dataIn[7] |

---
hidden: true
title: "256 (11,7) hamming code encoder and decoder with UART"
weight: 28
---

## 256 : (11,7) hamming code encoder and decoder with UART

* Author: LEOGLM
* Description: (11,7) hamming code encoder and decoder using UART Protocol
* [GitHub repository](https://github.com/LEOGLM0312/tt04-submission-hamming_code)
* [GDS submitted](https://github.com/LEOGLM0312/tt04-submission-hamming_code/actions/runs/6112232908)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

The project is divided into two parts: a (11,7) Hamming code encoder connected to a UART transmitter, and a decoder connected to a UART receiver. Both the encoder and decoder share the same set of input/output ports, which can be switched by inserting an impulse at ui_in[0]. The encoder adds four parity bits to a sequence of parallel data, improving its error detection and correction capabilities. The UART transmitter then rearranges and sends the coded data in series. On the receiving end, the UART receiver receives the message in series and converts it back to parallel form for further processing. Finally, the decoder decodes the message, corrects any potential errors, and outputs the original message, ensuring reliable and accurate data transmission.


### How to test

To test the encoder, a sequence of parallel data can be inserted and the resulting coded data in series can be checked for accuracy. For the decoder, a sequence of coded data in series can be inputted, with a maximum of one bit error, to verify whether the decoder can output the correct data.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | encoder and decoder switching  | state | encoder_input/decoder_output |
| 1 | encoder_enable  | encoder_output | encoder_input/decoder_output |
| 2 | decoder_input  | decoder_output | encoder_input/decoder_output |
| 3 | encoder_input  | decoder_output | encoder_input/decoder_output |
| 4 | encoder_input  | decoder_output | encoder_input/decoder_output |
| 5 | encoder_input  | decoder_output | encoder_input |
| 6 | encoder_input  | decoder_output | none |
| 7 | encoder_input  | decoder_output | none |

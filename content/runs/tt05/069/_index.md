---
hidden: true
title: "69 Stream Cipher w/ LSR (8 bit key)"
weight: 13
---

## 69 : Stream Cipher w/ LSR (8 bit key)

* Author: Fiona Fisher
* Description: Uses a stream cipher and linear shift register to encrypt a message.
* [GitHub repository](https://github.com/Fiona-CMU/streamcipher)
* [GDS submitted](https://github.com/Fiona-CMU/streamcipher/actions/runs/6713796630)
* HDL project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Holds an internal linear shift register of eight bytes.

When encrypting, each increment of IO_0 takes in the byte currently on the inputs, XORs it with the most recent byte stored in the LSR, and then puts it into the LSR.

When not encrypting, the message can be viewed by putting an index zero to seven on the inputs. The output will either be the encrypted message or the decrypted message, based on I0_2.

The LSR can only be reset with the rst_n signal. If more than sixteen bytes are inputted into the LSR without resetting, encrypted bytes will be lost, meaning the decryption of the last byte will not be accurate.

You can toggle between encryption and viewing the message with IO_1. You do not have to finish inputting the message before viewing the current encryption.


### How to test

Set IO_1 to high to indicate encryption. Place a number on the input. Set the IO_0 to high to put it into the LSR. Set the IO_0 to low before adding the next number. Repeat up to seven times.

Set IO_1 to low to view the message. Use IO_2 to toggle between viewing the message encrypted (high) or decrypted (low). Use the input to indicate the index of the message you want to view.

Reset to place a new message on the LSR.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | bit0  | bit0 | inc    (indicate that input to encryption is valid) |
| 1 | bit1  | bit1 | encrypt |
| 2 | bit2  | bit2 | view   (high shows encrypted message, low shows decrpted message) |
| 3 | bit3  | bit3 | none |
| 4 | bit4  | bit4 | none |
| 5 | bit5  | bit5 | none |
| 6 | bit6  | bit6 | none |
| 7 | bit7  | bit7 | none |

### Chip location

{{< shuttle-map "tt05" "69" >}}

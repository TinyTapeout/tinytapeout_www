---
hidden: true
title: "718 Shaman: SHA-256 hasher"
weight: 50
---

## 718 : Shaman: SHA-256 hasher

* Author: Pat Deegan, psychogenic.com
* Description: Generate a SHA256 digest for data of arbitrary length
* [GitHub repository](https://github.com/psychogenic/tt05-shaman)
* [GDS submitted](https://github.com/psychogenic/tt05-shaman/actions/runs/6685122913)
* HDL project
* [Extra docs](README.md)
* Clock: 10000000 Hz
* External hardware: An MCU or something to feed in the bytes and receive the results

![picture](images/picture.jpg)

### How it works

This implements the SHA-256 digest to create hashes of the data you feed in.  It is a naive, mostly unoptimized, implementation
of the algorithm (though you can interleave data input while it's processing, using parallel mode, if you respect busy).

Data is fed into the system in 64 byte blocks.  The hash is available after each 64 byte block has been input (allowing for
some cycles to finish processing).

The process is to:

- toggle start, to reset the digest
- put data byte on the databyte input (the "in" port)
- wait until busy is de-asserted (if required)
- clock the clockin_data pin

After each complete block, the digest will become available after some clocks.  In short if

- busy is not asserted; and
- result_ready goes high

The first hash byte will be available on the out port.  To get the next bytes, clock result_next and read the port.

Parallel mode allows you to start feeding in more input data while the system is still processing the previous
block.  You need to pay attention to and respect "busy", here, or things will get badly munged.  
Also, in parallel mode, you need to hold the clockin_data for an extra cycle when you bring it high.

Pinout looks a little weird but it is hoped this will be a nice match for the PMOD arrangement on the demo boards.

NOTES

It does NOT massage the input data into suitable blocks. Messages need to be appended with an 0x80 byte, padded
such that the entire thing, along with an 8 byte suffix containing the length (big end), is a multiple of 512
bits (64 bytes). You can see this in action in the message_to_blocks() function, in test.py.

I don't think it's super fast but, in parallel mode, I *think* simulation indicates it takes on the order of 8.3 microseconds
per byte using a 1MHz system clock.  So, if we could feed this say a 50MHz clock, we'd get down to 166 ns/byte.  
That's only on the order of 6 megabytes per second, I dunno maybe 100x slower than my laptop, but my
laptop doesn't run on a 50MHz clock and whatevs: should do the job if it holds in realy life.  All this
is when processing longer messages, to swamp out the minor overhead of setup etc.

When loading input data, if using parallel mode, hold clockin_data for an extra system clock.  So

- data byte on inputs
- clockin_data HIGH
- hold one system clock
- clockin_data LOW
- ... loop for next byte


### How to test

Might be good to run the cocotb test to get VCDs if you really want to see it in action.  But we want to play with hardware!
So... There will be a python script in the repository to convert any content into the expected 512 bit blocks of bytes
padded and everything to make the system happy.

With that list of bytes in hand, this should work nicely:

1) hold n_reset low for a few clock cycles
2) bring n_reset high, and give it a few cycles
3) start a new message digest my clocking start (bring high for one cycle, then low)
4) for each block in your message
   - while "busy" is HIGH, wait a bit and check again
   - for each byte in that block
     - put the byte on in port (dedicated input pins)
     - while "busy" is HIGH, wait a bit and check again
     - bring clockin_data HIGH
     - if using parallel mode, hold for an extra clock cycle
     - bring clockin_data LOW

Check and wait until "busy" is LOW and "result_ready" goes HIGH.
Your first result byte will already be present on the output port.
Grab it and stash it.
Then, for the next 31 bytes:
bring result_next HIGH
hold it there for one clock cycle
bring result_next LOW
grab and stash the byte on output pins

If the hash is going to be, say "90fc0a268f8b81b...", they'll be present in that order
0x90, then 0xfc, then 0x0a etc


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | data_input bit 0  | result_byte bit 0 | OUTPUT, result_ready |
| 1 | data_input bit 1  | result_byte bit 1 | OUTPUT, begin processing data debug |
| 2 | data_input bit 2  | result_byte bit 2 | INPUT,  parallel loading enable |
| 3 | data_input bit 3  | result_byte bit 3 | INPUT,  result_next |
| 4 | data_input bit 4  | result_byte bit 4 | OUTPUT, busy |
| 5 | data_input bit 5  | result_byte bit 5 | OUTPUT, processing data block debug |
| 6 | data_input bit 6  | result_byte bit 6 | INPUT,  start new digest |
| 7 | data_input bit 7  | result_byte bit 7 | INPUT,  clockin_data |

### Chip location

{{< shuttle-map "tt05" "718" >}}

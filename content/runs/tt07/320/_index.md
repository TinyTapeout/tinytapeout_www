---
hidden: true
title: "320 VGA player"
weight: 8
---

## 320 : VGA player

* Author: shadow1229
* Description: 80 x 60 binary pixel video player with PCM/PWM audio playing feature
* [GitHub repository](https://github.com/shadow1229/tt07-vga-player)
* [GDS submitted](https://github.com/shadow1229/tt07-vga-player/actions/runs/9245447864)
* HDL project
* [Extra docs]()
* Clock: 31500000 Hz

<!---

This file is used to generate your project datasheet. Please fill in the information below and delete any unused
sections.

You can also include images in this folder and reference them in the markdown. Each image must be less than
512 kb in size, and the combined size of all images must be less than 1 MB.
-->


### How it works

This project plays binary-colored 80px x 60px @ 24fps video recorded in SPI NOR flash, playing with 640px x 480px @72Hz VGA.
Additionally, the project plays PCM or PWM Audio recorded in same flash chip.
The input chooses type of audio(PCM/PWM), type of VGA PMOD, and the color of the video.
Also, uio[7:2] is used for SPI communication and uio[1:0] is used for audio output.
Finally, output is used as video output.

### How to test

Hook up a VGA monitor to the outputs and provide a clock at 31.5 MHz.
choose the type of audio output with input[0], and choose the type of VGA PMOD with the input[1].
color of pixels which turned off (which data of the pixel is 0) is selected with inputs[4:2] (2:R, 3:G, 4:B), and
color of pixels which turned on (which data of the pixel is 1) is selected with inputs[7:5] (5:R, 6:G, 7:B).

Data structure of SPI flash chip:

1. Data address starts with 0x000000.
2. Each frame takes 65 x 128 bit, where each 128 bits are used for video/audio data for each line(640px x 8px).
   2.1. Since the video uses 24fps, while the VGA uses 72Hz, each frame is shown three times in the VGA.
   2.2. Thus, each line(=128 bits) are uses as following way:
   line[127:0] = {audio_0[15:0], audio_1[15:0], audio_2[15:0], video[79:0]},
   where audio_i is audio data for the line in the (i+1)th iteration.
   2.3 The first 5 lines in the frame are used for porch and vsync, which means video data in the line is ignored.
   However, audio data in the line still valid. Also, this is why each frame uses 65 x 128 bit and not 60 x 128 bit.
3. Due to limitation of data, maximum amount of 16131 frames will be supported. reaching 16132th frame will restart the project. (check overflow in tt_vga_player.v)
   For more infomation, check bit_dump_8060_wav.py in bad_apple folder.

### External hardware

Audio - For PCM, using piezo on uio[1:0] would work. For PWM, external DAC like LTC2644 chip is needed (not tested though)
Set input[0] low to use 74880Hz 1-bit PCM mode and high to 9360Hz 8-bit PWM mode.

VGA PMOD - you can use one of these VGA PMODs:

* https://github.com/mole99/tiny-vga
* https://github.com/TinyTapeout/tt-vga-clock-pmod
  Set input[1] low to use tiny-vga and high to use vga-clock

SPI flash (W25Q128JVSSIQ)

* https://www.adafruit.com/product/5634


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | 74880Hz 1-bit PCM(0) / 9360Hz 8-bit PWM(1)  | hsync / R1  | sound n        |
| 1 | Tiny VGA(0) / VGA clock PMOD(1)  | vsync / G1  | sound p        |
| 2 | color_off(0) - R  | B0 / B1  | spi I/O 0 (W25Q128JVSSIQ NOR SPI flash chip)        |
| 3 | color_off(0) - G  | B1 / VS  | spi I/O 1        |
| 4 | color_off(0) - B  | G0 / R0  | spi I/O 2        |
| 5 | color_on(1)  - R  | G1 / G0  | spi I/O 3        |
| 6 | color_on(1)  - G  | R0 / B0  | spi flash clock        |
| 7 | color_on(1)  - B  | R1 / HS  | spi chip select        |


### Chip location

{{< shuttle-map "tt07" "320" >}}

---
hidden: true
title: "302 ping pong asic"
weight: 20
---

## 302 : ping pong asic

* Author: Timonas Juonys
* Description: Hardware implemented ping pong for two players on a 16x24 led matrix as a display
* [GitHub repository](https://github.com/Timonas04/pong_game)
* [GDS submitted](https://github.com/Timonas04/pong_game/actions/runs/6755804748)
* [Wokwi](https://wokwi.com/projects/380361576213660673) project
* [Extra docs]()
* Clock: 0 Hz
* External hardware: 



### How it works

Explain how your project works
The game uses a up/down counter for x/y for each player plus the ball. Button inputs are stored in input register, so bouncing should not be an issue.
Rest pin (active low) should be pulsed low at every start up to clear all the clock registers. If this is not done,
the multiple internal clock divider flip flops might start out wrong, and that could mess up other functions. The ball gets updated with every ball_en pulse, while the padles are updated
with the padles_en pulse. These canot happen at the same time because then the could jump past the padles. The comparator logic is asyncronous, and it will reverse the balls direction if it
registers a collision.

Since the led matrix can only light 1 collum or 1 row at any one time, the 3 objects to be lit(padle1, padle2, and the ball) have to be lit for a period of time before the next object is lit.
this is achieved by the inner multiplexer which is driven byt a mod 3 counter which is driven byt the multiplexer clock. The chip outputs are the outputs of this multiplexer (some logic is done after
the multiplexer but it is irrelevant). The x pixels (horizontal axis) is not decoded internally, and thus have to be decoded externally. They are connected as horz0 to horz4 pins.
Even though there are 5 bits, the led display is only 24leds wide, so only a 5 to 24 decodes is necesary. The y pixels are decoded internaly since they need some processing done on them because
they have to light multiple leds if a padle is to be lit contra one led for the ball. Thats why the y pixels get decoded and placed in a piso shift register which is controlled by D0 and D1.
Shifting out these bits needs to be carefully timed with the multiplexer clock since the mux_clk is the one who decites which outputs (padle1, padle2, or ball) are in the shift register in the first place.
Muxes for horixzontal pins and vertical pins are driven byt he same celect lines, so both x and y bits represent the same object at anny given time.

player1 and player 2 points pins are meant to go into a decade cointer driveing a 7 segment display. If a pause is wanted after a point os scored, these two can be monitored and the clk_in can be stoped
to pause the game. The position registers are reset internally, so its not necessary to reset the whole chip at every point score.

maybe important:
pixel[0,0] is in the bootm left corner


### How to test

Explain how to test your project
easiest way to test some functionality would be to hook up left right buttons for player 1, pull padels_en high, set the mux_clk low, and a clk on the clock line. As long as the board has been reset and the mux clk has not
been active after that, the outputs will be of padle1. Then the horz0 to horz4 bits can be monitored. They should be still if no button has been presed, count up when the right button is pressed,
and count down when teh left button is pressed. The ball_en should be puuled low to freze the ball. If the ball goes of the screen, padles1_x will reset to 0.

for full functionality the chip will need 16 bit sipo shift register, 5 to 24 decoder, 16*24 led matrix, 8 input buttons, bcd counters + 7 segment displays to display points and a timing unit
to generate the necesary timing signals, padles_en, ball_en, mux_clk, shift_reg_en, shift_reg_clk and inp_reg_en


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | player1_up button  | horz0 (lsd) | shift_reg_en (when D0 low, shift register ff mirror vertical pixels,when D0 high, then the shifting can start) |
| 1 | player1_down button  | horz1 binary encoded position in the x direction | shift_reg_clk for vertical pixels |
| 2 | player1_left button  | horz2 | not used, pulled low internally |
| 3 | player1_right button  | horz3 | not used, pulled low internally |
| 4 | player2_up button  | horz4 | mux_clk - multiplexes between padle1, padle2, and ball, as the led matrix can only display one at a time |
| 5 | player2_down button  | points player1 pulses when player 1 gets a point | padles_en enable padle counters |
| 6 | player2_left button  | points player2 | ball_en enable ball counters |
| 7 | player2_right button  | vertical pixels shift register out | inp_reg_en enables input register. this should happen when clk=1, ball_en=0, padles_en=0 |

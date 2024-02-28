---
hidden: true
title: "22 Random Number Guessing Game"
weight: 23
---

## 22 : 0b 000 010 110 : Random Number Guessing Game

{{< tt-scanchain-switches "000010110" >}}

* Author: Yufei Zhen, Elaina Zodiatis, Khadijatou Dibba
* Description: Guess 6-bit random number, 3 attemps in one round. 
* [GitHub repository](https://github.com/lastminwarrior-fei/tt03-random-num-guess-game)
* HDL project
* [Extra docs]()
* Clock: manual Hz
* External hardware: 



### How it works

Uses '$random' to generate 6-bit random numbers, and input [7:2] to make a guess. 

Some combinatorial logics are used to check if the guessed bit matches the random number bit on positive clock edges. 
If they match, the corresponding bit in the output [5:0] is set to 1; otherwise, it is set to 0. 

Of course a correct guess will output 6'b111111 and reset random numebr to enter a new round. 
If the player uses all 3 guesses, the game outputs 6'b000000 and resets with a new random number as well. 


### How to test

After reset, output [5:0] should zero out. 


### IO

| # | Input        | Output       |
|---|--------------|--------------|
| 0 | clock  | result[0] |
| 1 | rst  | result[1] |
| 2 | guess[0]  | result[2] |
| 3 | guess[1]  | result[3] |
| 4 | guess[2]  | result[4] |
| 5 | guess[3]  | result[5] |
| 6 | guess[4]  | none |
| 7 | guess[5]  | none |

---
hidden: true
title: "208 Tamagotchi"
weight: 46
---

## 208 : Tamagotchi

* Author: Fabian Alvarez
* Description: Simple Console Tamagotchi
* [GitHub repository](https://github.com/SantaCRC/tamagotchi)
* [GDS submitted](https://github.com/SantaCRC/tamagotchi/actions/runs/6079720790)
* HDL project
* [Extra docs]()
* Clock: 27000000 Hz
* External hardware: 



### How it works

Connect rx and tx to a serial terminal. The game will start automatically, if the tamagotchi dies, press the reset button to start again.
feed all the stats to keep the tamagotchi alive (food, sleep, happiness, hygiene, social), when the tamagotchi are sleeping, you cannot interact with it.
Controls:

- E: feed
- S: sleep
- P: play
- B: clean
- T: talk
- W: wake up


### How to test

Use a 27MHz clock. Connect rx and tx to a serial terminal. The game will start automatically, if the tamagotchi dies, press the reset button to start again.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | rx  | tx | none |
| 1 | none  | none | none |
| 2 | none  | none | none |
| 3 | none  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |

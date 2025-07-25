---
title: "Tiny Tapeout 3"
weight: 30
description: 249 designs, closed 24th April 2023
---

{{% toc %}}

# Detalles del diseño

* [Repositorio de Github](https://github.com/TinyTapeout/tinytapeout-03)
* [Hoja de Datos en PDF](https://github.com/TinyTapeout/tinytapeout-03/raw/main/datasheet.pdf)
* [Verificación](https://github.com/TinyTapeout/tinytapeout-03/blob/main/VERIFICATION.md)
* [Envío de Efabless](https://platform.efabless.com/projects/1971)

# Estadísticas de lanzamiento

* Lanzamiento: 1 de marzo de 2023
* Presentación cerrada: 24 de abril de 2023
* Envíado al shuttle Efabless [2304C chipIgnite](https://efabless.com/shuttle-status) utilizando Skywater 130nm open source PDK.
* Se espera que lleguen en octubre de 2023, y las PCB en diciembre de 2023.

# Estadísticas de proyecto

* 100 proyectos enviados, 149 projects agregados desde [TT02](/chips/tt02)
* Tiempo de fabricación para todos los proyectos de 22.68 horas
* Total de celdas de 79674
* Máximo de celdas de 1287 para [project 072](./072)
* La máxima utilización fue del 59.95% para [project 044](./044)
* Longitud total de 4079 mm
* 94 usaron el editor gráfico de Wokwi, 135 Verilog, 1 myhdl, 7 Amaranth, 1 spade, 2 xls, 1 migen, 3 systemverilog, 1 mixed radix circuit synthesis (mrcs), 1 chisel.
* 10 etiquetas más utilizadas:
    - test      : 21
    - experiment: 6
    - cpu       : 6
    - timer     : 5
    - risc      : 5
    - game      : 4
    - pwm       : 4
    - music     : 4
    - counter   : 4

# Renderizado de la matriz completa

![whole die](images/tinytapeout-03.png)

# Exhibición de proyectos

* [PDP8 de 12 bits](./019)
* [Detector primario](./031)
* [Moduladores de densidad de pulso](./033)
* [La mayoría de las celdas Sky130](./045)
* [Sensor de temperatura digital sintetizable](./047)
* [Afinador de guitarra Neptune](./052)
* [Reloj MSF](./066)
* [Sensor de temperatura del oscillador anular](./058)
* [QTCore-A1 bloqueado](./072)

# Testimonios / Avales

Increible! Envié mi diseño a #TinyTapeout ! Estoy emocionado! Gracias 
@matthewvenn , @marunmagesh y al equipo por hacerlo posible!

---

¡Ya está aquí el envío de #tinytapeout 3! Estoy muy agradecido de formar parte de un proyecto tan increíble, aunque mi proyecto sea pequeño.

---

Me tomaré el tiempo para decir, ¡gracias! No creía que en algún momento podría hacer algo como esto,  especialmente con tan bajo costo o estrés.
Para contextualizar, en el trabajo estuve probando un ASIC que un proveedor diseñó para nosotros, y eso fue todo lo contrario a estas dos cosas.

---

¡Hurra! También lo mandé a último minuto, no había sentido esa prisa desde la fecha límite de la última tarea de mi universidad... Es genial que el diseño de un chip pueda ser hecho en un fin de semana, espero tener los demás diseños, y gracias a todos los que han contribuído a la plataforma, ¡es realmente fácil de usar!

---

Acabo de enviar mi proyecto a último minuto a tt03, ¡quiero felicitarlos por todos los recursos y el proyecto en general!

Nunca había hecho hardware antes (solo software), pero después de leer el codigo actualizado por Petzold a principios de este año y escuchando a una entrevista con Jim Keller, tuve mi interés centrado por ver qué ocurre con las capas que usualmente doy por sentadas. Es realmente genial encontrar algo como tiny tapeout, una buena motivación para instalar algunas de las herramientas y probarlas.

---
Más en [Twitter](https://twitter.com/search?q=tinytapeout).

# Todos los proyectos
| Índice | Título | Autor |
| ----- | ----- | -------|
| 0 | [Test Inverter Project](000) | Matt Venn|
| 1 | [ChipTune](001) | Wallie Everest|
| 2 | [7 Segment Life](002) | icegoat9|
| 3 | [Another Piece of Pi](003) | Meinhard Kissich, EAS Group, Graz University of Technology|
| 4 | [Wormy](004) | nqbit|
| 5 | [Knight Rider Sensor Lights](005) | Kolos Koblasz|
| 6 | [Single digit latch](006) | Dylan Garrett|
| 7 | [4x4 Memory](007) | Yannick Reiß|
| 8 | [KS-Signal](008) | Yannick Reiß|
| 9 | [Hovalaag CPU](009) | Mike Bell|
| 10 | [SKINNY SBOX](010) | Niklas Fassbender|
| 11 | [Stateful Lock](011) | Tim Henkes|
| 12 | [Ascon's 5-bit S-box](012) | Fabio Campos|
| 13 | [8bit configurable galois lfsr](013) | Alexander Schönborn|
| 14 | [Sbox SKINNY 8 Bit](014) | Thorsten Knoll|
| 15 | [BinaryDoorLock](015) | Marcus Michaely|
| 16 | [bad apple](016) | shadow1229|
| 17 | [TinyFPGA attempt for TinyTapeout3](017) | Emilian Miron|
| 18 | [4bit Adder](018) | Carin Schreiner|
| 19 | [12-bit PDP8](019) | Paul Campnell|
| 20 | [CTF - Catch the fish](020) | Carin Schreiner|
| 21 | [Dot operation calculator](021) | Yannick Reiß|
| 22 | [Random Number Guessing Game](022) | Yufei Zhen, Elaina Zodiatis, Khadijatou Dibba|
| 23 | [Desperate Tapeout](023) | Etienne de Maricourt|
| 24 | [Simple multiply](024) | Anton Maurovic|
| 25 | [Parallel Nibble to UART](025) | Andrew M|
| 26 | [tiny logic analyzer](026) | yubex|
| 27 | [XOR Stream Cipher](027) | Luke Vassallo|
| 28 | [LED Panel Driver](028) | Tom Keddie|
| 29 | [6-bit FIFO](029) | Mike Bell|
| 30 | [ezm_cpu](030) | guianmonezm#4787|
| 31 | [31b-PrimeDetector](031) | Aidan McNay|
| 32 | [4-bit ALU](032) | ReJ aka Renaldas Zioma|
| 33 | [Pulse-Density Modulators](033) | Marco Merlin|
| 34 | [CRC Decelerator](034) | Grant Hernandez (@grant-h)|
| 35 | [Simple clock](035) | Søren Poulsen|
| 36 | [Binary to DEC and HEX](036) | Norberto Hernandez-Como|
| 37 | [Simon Says (fastclk)](037) | Uri Shaked|
| 38 | [Shift Register Ram](038) | Dakotath|
| 39 | [tinysat](039) | Emmanouel Matigakis|
| 40 | [POV display](040) | Balint Kovacs|
| 41 | [Toy CPU](041) | jordan336|
| 42 | [Base-10 grey counter counts from zero to a trillion](042) | Daniel Wisehart|
| 43 | [ttFIR: Digital Finite Impulse Response (FIR) Filter](043) | Georg|
| 44 | [QTCore-A1](044) | Hammond Pearce|
| 45 | [MicroTapeout (of sky130 cells)](045) | htfab|
| 46 | [nipple multiplier](046) | ’Mohamed Nasser|
| 47 | [Synthesizable Digital Temperature Sensor](047) | Harald Pretl|
| 48 | [4-bits sequential ALU](048) | Diego Satizabal|
| 49 | [Brightness control of LED with PWM](049) | Ioannis G. Intzes, International Hellenic University - Department of Information and Electronic Engineering|
| 50 | [Microtapeout](050) | Enno Schnackenberg|
| 51 | [Neptune guitar tuner (fixed window)](051) | Pat Deegan|
| 52 | [Neptune guitar tuner (proportional window)](052) | Pat Deegan|
| 53 | [M segments](053) | Matt Venn|
| 54 | [7 segment seconds](054) | Matt Venn|
| 55 | [7 segment wokwi counter](055) | Matt Venn|
| 56 | [Straight through test](056) | Matt Venn|
| 57 | [Combo lock](057) | Benjamin Collier|
| 58 | [ro-based_tempsense](058) | Jorge Marin, Daniel Arevalos|
| 59 | [FSM_LAT](059) | Juan Sanchez|
| 60 | [MMM Lab's Micro-robot Control Module](060) | Kevin Guan|
| 61 | [MMM Finite State Machine (4 States)](061) | Alexandra Zhang Jiang|
| 62 | [FSK modem](062) | Balint Kovacs|
| 63 | [QTChallenges](063) | Jason Blocklove|
| 64 | [HiddenCPU](064) | HiddenRoom|
| 65 | [Simple UART interface](065) | Aleksandr Zlobin|
| 66 | [MSF Clock](066) | Jamie Wood & Daniel Cannell|
| 67 | [Hamming(7,4) encoder decoder](067) | Robbert|
| 68 | [I2S reeceiver, data mix and transmitter](068) | Clemens Nasenberg|
| 69 | [S4GA: Super Slow Serial SRAM FPGA](069) | Jan Gray(TT02), Marco Merlin (TT03)|
| 70 | [7 Segment Random Walk](070) | Richard Miller|
| 71 | [Tiny binarized neural network](071) | ReJ aka Renaldas Zioma|
| 72 | [RTL Locked QTCore-A1](072) | Luca Collini and Hammond Pearce|
| 73 | [Arbiter Game](073) | Martin A. Heredia|
| 74 | [Frequency Divider](074) | Tanish Khanchandani|
| 75 | [FullAdderusing4is1](075) | Marushika Suri  , Siya Sharma  , Rudakshi  Arora |
| 76 | [BCDtoDECIMAL](076) | Giresh and Aditya |
| 77 | [AI Decelerator](077) | Hunter Scott|
| 78 | [3BitParallelAdder](078) | Anish Paul , Pancham Mittal , Ramandeep |
| 79 | [Asynchronous 3-Bit Down Counter](079) | Dikshant, Mohit, Sanidhya|
| 80 | [Ring oscillator with skew correction](080) | Daniel Wisehart|
| 81 | [3 bit multiplier ](081) | Ananya|
| 82 | [Tiny Teeth Toothbrush Timer](082) | Noah Hoffman|
| 83 | [2's Compliment Subtractor](083) | Naman Garg and Aryan Chaudhary|
| 84 | [Customizable Padlock](084) | Tiny Tapeout 02 (J. Rosenthal)|
| 85 | [Customizable UART String](085) | Tiny Tapeout 02 (J. Rosenthal)|
| 86 | [Customizable UART Character](086) | Tiny Tapeout 02 (J. Rosenthal)|
| 87 | [7-Seg 'Tiny Tapeout' Display](087) | Tiny Tapeout 02 (J. Rosenthal)|
| 88 | [Hola](088) | Pascual Bravo|
| 89 | [5_1MUX](089) | saurabh kumar and diksha bothra |
| 90 | [3-bit 4-position register](090) | Chris Burton|
| 91 | [Simple adder used for educational purposes](091) | Francisco Brito Filho|
| 92 | [SIMON Cipher](092) | Fraser Price|
| 93 | [HD74480 Clock](093) | Tom Keddie|
| 94 | [Scrolling Binary Matrix display](094) | Chris|
| 95 | [Power supply sequencer](095) | Jon Klein|
| 96 | [Duty Controller](096) | Marcelo Pouso / Miguel Correia|
| 97 | [ALU](097) | Ryan Cornateanu|
| 98 | [The McCoy 8-bit Microprocessor](098) | Aidan Good|
| 99 | [binary clock](099) | Azdle|
| 100 | [TinySensor](100) | Justin Pelan|
| 101 | [Water-Level-Indicator-With-Auto-Motor-Control](101) | Ashutosh Kumar|
| 102 | [16x8 SRAM & Streaming Signal Generator](102) | James Ross|
| 103 | [German Traffic Light State Machine](103) | Jens Schleusner|
| 104 | [4-spin Ising Chain Simulation](104) | Seppe Van Dyck|
| 105 | [Avalon Semiconductors '5401' 4-bit Microprocessor](105) | Tholin|
| 106 | [small FFT](106) | Rice Shelley|
| 107 | [Stream Integrator](107) | William Moyes|
| 108 | [tiny-fir](108) | Tom Schucker|
| 109 | [Configurable SR](109) | Greg Steiert|
| 110 | [LUTRAM](110) | Luis Ardila|
| 111 | [chase the beat](111) | Emil J Tywoniak|
| 112 | [BCD to 7-segment encoder](112) | maehw|
| 113 | [A LED Flasher](113) | Ben Everard|
| 114 | [4-bit Multiplier](114) | Fernando Dominguez Pousa|
| 115 | [Avalon Semiconductors 'TBB1143' Programmable Sound Generator](115) | Tholin|
| 116 | [RGB LED Matrix Driver](116) | Matt M|
| 117 | [Tiny Phase/Frequency Detector](117) | argunda|
| 118 | [Loading Animation](118) | Andre & Milosch Meriac|
| 119 | [tiny egg timer](119) | yubex|
| 120 | [Potato-1 (Brainfuck CPU)](120) | Pepper Gray (they/them)|
| 121 | [heart zoe mom dad](121) | zoe nguyen.  taylor|
| 122 | [Tiny Synth](122) | Nanik Adnani|
| 123 | [5-bit Galois LFSR](123) | Michael Bikovitsky|
| 124 | [prbs15](124) | Tom Schucker|
| 125 | [4-bit badge ALU](125) | Rolf Widenfelt|
| 126 | [Pi (π) to 1000+ decimal places](126) | James Ross|
| 127 | [Siren](127) | Alan Green|
| 128 | [YaFPGA](128) | Frans Skarman|
| 129 | [M0: A 16-bit SUBLEQ Microprocessor](129) | William Moyes|
| 130 | [bitslam](130) | Jake "ferris" Taylor|
| 131 | [8x8 Bit Pattern Player](131) | Thorsten Knoll|
| 132 | [XLS: bit population count](132) | proppy|
| 133 | [RC5 decoder](133) | Jean THOMAS|
| 134 | [chiDOM](134) | Maria CHiara Molteni|
| 135 | [Super Mario Tune on A Piezo Speaker](135) | Milosch Meriac|
| 136 | [Tiny rot13](136) | Phase Noise|
| 137 | [4 bit counter on steamdeck](137) | 13arn|
| 138 | [Shiftregister Challenge 40 Bit](138) | Thorsten Knoll|
| 139 | [TinyTapeout2 4-bit multiplier.](139) | Tholin|
| 140 | [TinyTapeout2 multiplexed segment display timer.](140) | Tholin|
| 141 | [XLS: 8-bit counter](141) | proppy|
| 142 | [XorShift32](142) | Ethan Mahintorabi|
| 143 | [XorShift32](143) | Ethan Mahintorabi|
| 144 | [Multiple Tunes on A Piezo Speaker](144) | Jiaxun Yang|
| 145 | [TinyTapeout 2 LCD Nametag](145) | Tholin|
| 146 | [UART-CC](146) | Christina Cyr|
| 147 | [3-bit 8-channel PWM driver](147) | Ivan Krasin|
| 148 | [LEDChaser from LiteX test](148) | Nick Østergaard|
| 149 | [8-bit (E4M3) Floating Point Multiplier](149) | Clive Chan|
| 150 | [Dice roll](150) | Tholin|
| 151 | [CNS TT02 Test 1:Score Board](151) | Bryan Bonilla Garay, Devin Alvarez, Ishaan Singh, Yu Feng Zhou, and N. Sertac Artan|
| 152 | [CNS002 (TT02-Test 2)](152) | Bryan Bonilla Garay, Devin Alvarez, Ishaan Singh, Yu Feng Zhou, and N. Sertac Artan|
| 153 | [Test2](153) | Shaos|
| 154 | [7-segment LED flasher](154) | Joseph Chiu|
| 155 | [Nano-neuron](155) | Daniel Burke|
| 156 | [SQRT1 Square Root Engine](156) | Davit Margarian (UDXS)|
| 157 | [Breathing LED](157) | argunda|
| 158 | [Fibonacci & Gold Code](158) | Daniel Estevez|
| 159 | [tinytapeout2-HELLo-3orLd-7seg](159) | Rakesh Peter|
| 160 | [Non-restoring Square Root](160) | Wallace Everest|
| 161 | [GOL-Cell](161) | Shaos|
| 162 | [7-channel PWM driver controlled via SPI bus](162) | Ivan Krasin|
| 163 | [hex shift register](163) | Eric Smith|
| 164 | [Ring OSC Speed Test](164) | Eric Smith|
| 165 | [TinyPID](165) | Aidan Medcalf|
| 166 | [TrainLED2 - RGB-LED driver with 8 bit PWM engine](166) | cpldcpu|
| 167 | [Zinnia+ (MCPU5+) 8 Bit CPU](167) | cpldcpu|
| 168 | [4 bit CPU](168) | Paul Campell|
| 169 | [Stack Calculator](169) | David Siaw|
| 170 | [1-bit ALU](170) | Leo Moser|
| 171 | [SPI Flash State Machine](171) | Greg Steiert|
| 172 | [r2rdac](172) | youngpines|
| 173 | [Worm in a Maze](173) | Tim Victor|
| 174 | [8 bit CPU](174) | Paul Campell|
| 175 | [Pseudo-random number generator](175) | Thomas Böhm <thomas.bohm@gmail.com>|
| 176 | [BCD to 7-Segment Decoder](176) | JinGen Lim|
| 177 | [Frequency Counter](177) | Andrew Ramsey|
| 178 | [Taillight controller of a 1965 Ford Thunderbird](178) | Hirosh Dabui|
| 179 | [FPGA test](179) | myrtle|
| 180 | [chi 2 shares](180) | Maria Chiara Molteni|
| 181 | [chi 3 shares](181) | Molteni Maria Chiara|
| 182 | [Whisk: 16-bit Serial RISC CPU](182) | Luke Wren|
| 183 | [Scalable synchronous 4-bit tri-directional loadable counter](183) | Steven Bos|
| 184 | [Asynchronous Binary to Ternary Converter and Comparator](184) | Steven Bos|
| 185 | [Vector dot product](185) | Robert Riachi|
| 186 | [Monte Carlo Pi Integrator](186) | regymm|
| 187 | [Funny Blinky](187) | regymm|
| 188 | [GPS C/A PRN Generator](188) | Adam Greig|
| 189 | [Sigma-Delta ADC/DAC](189) | Adam Greig|
| 190 | [BCD to Hex 7-Segment Decoder](190) | JinGen Lim|
| 191 | [SRLD](191) | Chris Burton|
| 192 | [Counter](192) | Adam Zeloof|
| 193 | [2bitALU](193) | shan|
| 194 | [A (7, 1/2) Convolutional Encoder](194) | Jos van 't Hof|
| 195 | [Tiny PIC-like MCU](195) | myrtle|
| 196 | [RV8U - 8-bit RISC-V Microcore Processor](196) | David Richie|
| 197 | [Logic-2G97-2G98](197) | Sirawit Lappisatepun|
| 198 | [Melody Generator](198) | myrtle|
| 199 | [Rotary Encoder Counter](199) | Vaishnav Achath|
| 200 | [Wolf sheep cabbage river crossing puzzle ASIC design](200) | maehw|
| 201 | [Low-speed UART transmitter with limited character set loading](201) | maehw|
| 202 | [Rotary encoder](202) | Wim Dams|
| 203 | [FROG 4-Bit CPU](203) | ChrisPVille|
| 204 | [Configurable Gray Code Counter](204) | Eric Swalens|
| 205 | [Baudot Converter](205) | Arthur Hazleden|
| 206 | [Marquee](206) | Christopher 'ctag' Bero|
| 207 | [channel coding](207) | Asma Mohsin|
| 208 | [Chisel 16-bit GCD with scan in and out](208) | Steve Burns|
| 209 | [Adder with 7-segment decoder](209) | cy384|
| 210 | [Hex to 7 Segment Decoder](210) | Randy Glenn|
| 211 | [Multiple seven-segment digit buffer](211) | Zach Mason|
| 212 | [LED Chaser](212) | Bradley Boccuzzi|
| 213 | [Rolling Average - 5 bit, 8 bank](213) | Kauna Lei|
| 214 | [w5s8: universal turing machine core](214) | Andrew Foote|
| 215 | [Test3](215) | Shaos|
| 216 | [Seven Segment Clock](216) | Greg Davill|
| 217 | [serv - Serial RISCV CPU](217) | Greg Davill|
| 218 | [4:2 Compressor](218) | saicharan0112|
| 219 | [PS2 keyboard Interface](219) | Tanish Khanchandani|
| 220 | [Hello Generator](220) | Skyler Saleh|
| 221 | [MicroASIC VI](221) | Mikhail Svarichevsky|
| 222 | [Optimised Euclidean Algorithm](222) | Recep Said Dulger|
| 223 | [CRC-16 and Parity calculator](223) | Chris Burton|
| 224 | [SevSegFX](224) | Mazen Saghir, ECE Department, American University of Beirut (mazen@aub.edu.lb)|
| 225 | [LAB11](225) | Thomas Zachariah|
| 226 | [Option23 Serial](226) | bitluni|
| 227 | [Option23](227) | bitluni|
| 228 | [Option22](228) | bitluni|
| 229 | [4x4 RAM](229) | Michael Bartholic|
| 230 | [Digital padlock](230) | Jean THOMAS|
| 231 | [FFT Butterfly in Wokwi](231) | James R|
| 232 | [Femto 4-bit CPU](232) | Majdi Abdul Samad, ECE Dept., American University of Beirut (mia42@mail.aub.edu)|
| 233 | [Logisim demo - LED blinker](233) | Tholin|
| 234 | [Secret File](234) | bitluni|
| 235 | [Basic 4 bit cpu ](235) | Noah Gaertner|
| 236 | [Adi counter](236) | Prabal Dutta|
| 237 | [Clock divider ASIC](237) | Sad Electronics|
| 238 | [Amaranth 6 Bits Gray counter](238) | Camilo Soto|
| 239 | [Laura's L](239) | Laura|
| 240 | [Two Bit Universal FSM](240) | Emilio Alvarez|
| 241 | [Super Mario Tune on A Piezo Speaker](241) | Milosch Meriac|
| 242 | [PSRANDOM](242) | CMUA F.Segura-Quijano, J.S.Moya|
| 243 | [Gameshow Buzzer](243) | Christopher Haddad, Jenna Nandlall, Matthew Nunez, Farhan Kobir|
| 244 | [Balanced Ternary Calculator](244) | Steven Bos|
| 245 | [RiscV Scan Chain based CPU -- block 1 -- clocking](245) | Emilian Miron|
| 246 | [RiscV Scan Chain based CPU -- block 2 -- instructions](246) | Emilian Miron|
| 247 | [RiscV Scan Chain based CPU -- block 3 -- registers](247) | Emilian Miron|
| 248 | [RiscV Scan Chain based CPU -- block 4 -- ALU](248) | Emilian Miron|

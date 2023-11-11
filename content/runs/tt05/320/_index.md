---
hidden: true
title: "320 A Boolean function based pseudo random number generator (PRNG)"
weight: 125
---

## 320 : A Boolean function based pseudo random number generator (PRNG)

* Author: SEAL, CSE Department, IIT Kharagpur
* Description: Boolean function based pseudo random number generator implemented using finite field
* [GitHub repository](https://github.com/fleathlushby/tt05_boolean_pseudo_random_generator)
* [GDS submitted](https://github.com/fleathlushby/tt05_boolean_pseudo_random_generator/actions/runs/6755691077)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: 

Image path is broken

### How it works

**Principle of operation of Boolean function based pseudo random number generator (PRNG)**  
This implementation of a PRNG contains linear mappings to and from the following blocks:

- one $GF(2^4)$ normal base,
- three instances of $GF(2^4)$ multipliers,
- one $GF(2^4)$ inverter, and
- one square scaler.  
  The input and output strings of the PRNG are split into five and three shares, respectively. Our PRNG generates random values based on the five input bytes or variables. Instead of relying solely on a single seed or input, it takes several inputs thereby introducing more control over the randomness of the generated values. Thus, the multiple input bytes are used as seeds. The seeds are generated from external factors like time, user-provided data, and environmental conditions. Additionally, previous random values produced by our PRNG design can also be considered as a valid seed. This results in a more tailored or context-aware randomness, which finds its application in simulations, games, cryptography, or data generation. The operation of the Boolean function based PRNG can be classified into three phases, namely, Affine transformation ($1^{st}$ phase), Finite field inversion ($2^{nd}$ phase) and the combination of Finite field multiplication and inverse linear mapping ($3^{rd}$ phase) as evident from the block diagram in Figure 1. The working procedure of these phases are discussed as follows:

**First phase- Affine transformation**  
In the first phase, three shares are processed by the linear input mapping and afterwards fed into a multiplier. Similarly, a uniform reduction to two shares is fed into the square scaler.  
$$(a,b,c)\mapsto(a,b \oplus c)\ \ \ \ (1)$$
The output of the multiplier is partially re-masked by 8 bits of randomness while the square scaler output is left as it is. We use fresh randomness at the end of the first phase to satisfy uniformity during the combination of the square scaler’s and the multiplier’s outputs. The result is saved in a register, $P_1$ as illustrated in the block diagram.

**Second phase- Finite field inversion**  
In the second phase, the overall five shares are combined into four shares. Due to the previous remasking, this can be done uniformly as such:
$$(x,y,a,b,c)\mapsto(x,y \oplus (r_1 \oplus r_2),a \oplus (b \oplus r_1),c \oplus r_2)\ \ \ \ (2)$$

In the above equation, $x,y$ denote the square scaler output, while $a,b,c$ denote the multiplier output. Note that a register needs to hold all five shares before recombination to prevent leakage. After recombination, the four shares are fed into the inverter and re-masked with 8 bits of randomness. A register stage named $P_2$, preventing glitches, follows this inverter.

**Third phase- Finite field multiplication and inverse linear mapping**  
In the final stage, the re-masked outputs are reduced to three shares uniformly by the following function.
$$(a,b,c,d)\mapsto(a \oplus (b \oplus r_3),c \oplus r_4,d \oplus r_3 \oplus r_4)\ \ \ \ (3)$$
Subsequently, these shares are fed into two multipliers. Finally, the inverse linear mapping follows. With this construction, it is enough to have three input shares to the generator since the multiplier block requires only three shares. At this stage, we again add a randomness after the inverter to break the dependency between the inputs of the multipliers in the third phase.  
In general, we need to reduce the number of shares from five to four at the end of the first phase as the inverter in the second phase can process four input strings. Moreover, the multipliers in the final stage is capable of processing three shares of input thus enforcing the reduction of shares from four to three at the end of the second phase.  
A working example is presented below for a better understanding:

In this example, the five input bytes are assigned values of $0x62, 0x04, 0x05, 0xf8$ and $0x95$, respectively. Preliminarily, the 'ena', an active high input signal is assigned a logic '0'. After the power on reset, the 'ena' is pulled up to logic '1', thus enabling the input data loading. The five input bytes are loaded sequentially into an input buffer which is $40$ bits wide. As soon as the buffer is populated, the 'ena' signal is set to active low. This marks the end of the data loading procedure. After the data loading stage, the input values are then processed by linear mapping and three shares of data are produced which are $IN1=0xa8$, $IN2=0x81$ and $IN3=0x7e$. In the first and second phase, the remaining two input values of $R_0=0xf8$ and $R_1=0x95$ are utilized for introducing randomness.

The two inputs to the square scaler are $SQ_{IN1}=0x2$ and $SQ_{IN2}=0x0$. Our design acquires $SQ_{IN1}$ by XOR-ing the first and last $4$ bits of $IN1$ , whereas $SQ_{IN2}$ is acquired by XOR-ing the first and last $4$ bits of $IN2 \oplus IN3$. The strings $IN1[7:4],IN2[7:4],IN3[7:4],IN1[3:0],IN2[3:0]$, and $IN3[3:0]$ are given as inputs to the multiplier and represented by $MUL_{IN1}, MUL_{IN2}, MUL_{IN3}, MUL_{IN4}, MUL_{IN5}$ and $MUL_{IN6}$, respectively. The signals, $r_1$ and $r_2$ are $4$ bits wide, the values of which are obtained by slicing $R_0$. At the end of the first phase, five shares of data are produced along with the randomness, namely, $SQ_{OUT1}, SQ_{OUT2}, MUL_{OUT1}, MUL_{OUT2}, MUL_{OUT3}$ and $r$, respectively. The values of the individual signals are summarized below:  
**Inputs:**  
$r_1 \gets 0xf$, $r_2 \gets 0x8$,  
$MUL_{IN1} \gets 0xa$, $MUL_{IN2} \gets 0x8$, $MUL_{IN3} \gets 0x7$, $MUL_{IN4} \gets 0x8$, $MUL_{IN5} \gets 0x1$, $MUL_{IN6} \gets 0xe$  
**Outputs:**  
$r \gets 0x7$,  
$SQ_{OUT1} \gets 0x0$, $SQ_{OUT2} \gets 0x6$,  
$MUL_{OUT1} \gets 0xf$, $MUL_{OUT2} \gets 0xe$, $MUL_{OUT3} \gets 0x8$  
In the second phase, the corresponding input values, $INV_{IN1}, INV_{IN2}, INV_{IN3}$ and $INV_{IN4}$ to the inverter are $0x0, 0x1, 0xe$ and $0x0$. The subsequent outputs, $INV_{OUT2}$ and $INV_{OUT3}$ are again combined with the random values $r_3$ and $r_4$, whereas the outputs, $INV_{OUT1}$ and $INV_{OUT4}$ are left as is. The values of $r_3$ and $r_4$ are acquired by slicing $R_1$. At the end of this phase, there are four shares of data along with the randomness bits, $r$. The remaining input and output values of this stage are summarized below:  
**Inputs:**  
$r_3 \gets 0x9$, $r_4 \gets 0x5$,  
**Outputs:**  
$r \gets 0xc$,  
$INV_{OUT1} \gets 0x6$, $INV_{OUT2} \gets 0xb$, $INV_{OUT3} \gets 0x2$, $INV_{OUT4} \gets 0x0$

In the final stage, $MUL_{IN1}, MUL_{IN2}$ and $MUL_{IN3}$ are given as inputs to each of the multipliers (see Equation 3). The corresponding outputs of the two multipliers, $MUL_{OUT1}, MUL_{OUT2}, MUL_{OUT3}, MUL_{OUT4}, MUL_{OUT5}$ and $MUL_{OUT6}$ are concatenated to form three strings of eight bits each and fed to the inverse linear mapping module. Thus, we acquire the final output bytes, $OUT1, OUT2$ and $OUT3$. These values are outlined below:  
**Inputs:**  
$MUL_{IN1} \gets 0x4$, $MUL_{IN2} \gets 0x7$, $MUL_{IN3} \gets 0xc$,  
**Outputs:**  
${MUL_{OUT1},MUL_{OUT4}} \gets 0xbb$, ${MUL_{OUT2},MUL_{OUT5}} \gets 0xa6$, ${MUL_{OUT3},MUL_{OUT6}} \gets 0x68$,  
$OUT1 \gets 0x55$, $OUT2 \gets 0xa2$, $OUT3 \gets 0x0c$


### How to test

After reset, the ena signal is set to logic '1'. This enables the device to load input values in multiple shares. After loading all the input shares, the ena signal is reset.
After two clock cycles, the output ready (uio_out) is set to logic '1' and the multiple output shares are generated.


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | input bit  | output bit | output ready |
| 1 | input bit  | output bit | none |
| 2 | input bit  | output bit | none |
| 3 | input bit  | output bit | none |
| 4 | input bit  | output bit | none |
| 5 | input bit  | output bit | none |
| 6 | input bit  | output bit | none |
| 7 | input bit  | output bit | none |

### Chip location

{{< shuttle-map "tt05" "320" >}}

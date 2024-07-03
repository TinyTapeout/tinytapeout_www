---
hidden: true
title: "782 SPELL"
weight: 21
---

## 782 : SPELL

* Author: Uri Shaked
* Description: SPELL is a minimal, cryptic, stack-based programming language crafted for The Skull CTF
* [GitHub repository](https://github.com/urish/tt07-spell)
* [GDS submitted](https://github.com/urish/tt07-spell/actions/runs/9274545565)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz

### How it works

SPELL is a minimal, stack-based programming language created for [The Skull CTF](https://skullctf.com).

The language is defined by the following [cryptic piece of Arduino code](https://skullctf.com/spell):

```c
void spell() {

                  uint8_t*a,pc=16,sp=0,
               s[32]={0},op;while(!0){op=
            EEPROM.read(pc);switch(+op){case
          ',':delay(s[sp-1]);sp--;break;case'>':
         s[sp-1]>>=1|1;break;case'<':s[sp-1]<<=1;
        break;case'=':pc=s[sp-1]-1;sp--;break;case
       '@':if(s[sp-2]){s[sp-2]--;pc=s[sp-1]-1;sp+=
      1;}sp-=2;break;case'&':s[sp-2]&=s[sp-1];sp-=1;
      break;case'|':s[sp-2]|=s[sp-1];sp-=1;break;case
    '^':s[sp-2]^=s[sp-1];sp--;break;case'+':s[sp-2]+=
   s[sp-1];sp=sp-1;break;case'-':s[sp-2]-=s[sp-1];sp--;
   break;case'2':s[sp]=s[sp-1];sp=sp+1;break;case'?':s[
 sp-1]=EEPROM.         read(s[sp-1]|0        );break;case
  "!!!"[0]:             666,EEPROM              .write(s
   [sp-1]                ,s[sp-2]                );sp=+
    sp-02;               ;break;                 1;case
    "Arr"[               1]:  s[+               sp-1]=
    *(char*)            (s[+   sp-1           ]);break
      ;case'w':*   (char*)(     s[+sp-1])  =s[sp-+2];
        sp-=2;break;case+       'x':s[sp] =s[sp-1
           ];s[sp-1]=s[sp   +    -2];s[sp-2]=s[
            0|sp];break;    ;;    case"zzz"[0
             ]:sleep();"   Arrr  ";break;case
             255  :return;;  default:s  [sp]
              =+   op;sp+=    1,1   ;}pc=
               +    pc  +      1;      %>

}
```

This design is an hardware implementation of SPELL with the following features:

- 256 bytes of program memory (volatile, simulates EEPROM)
- 32 bytes of stack memory
- 32 bytes of data memory
- 8 bidirectional pins and up to 8 output-only pins

Initially, all the program memory is filled with `0xFF`, and the stack and data memory are filled with `0x00`.
The program counter is set to `0x00`, and the stack pointer is set to `0x00`.

To load a program or inspect the internal state, the design provides access to the following registers via a simple serial interface:

| Address | Register name | Description                                        |
|---------|---------------|----------------------------------------------------|
| 0x00    | PC            | Program counter                                    |
| 0x01    | SP            | Stack pointer                                      |
| 0x02    | EXEC          | Execute-in-place (write-only)                      |
| 0x03    | STACK         | Stack access (read the top value, or push a value) |

The serial interface is implemented using a shift register, which is controlled by the following signals:

| Pin         | Type   | Description                                                       |
|-------------|--------|-------------------------------------------------------------------|
| `reg_sel`   | input  | Select the register to read/write                                 |
| `load`      | input  | Load the selected register with the value from the shift register |
| `dump`      | input  | Dump the selected register value to the shift register            |
| `shift_in`  | input  | Serial data input                                                 |
| `shift_out` | output | Serial data output (when `porta[3]` is disabled)                  |

When `load` is high, the value from the shift register is loaded into the selected register. When `dump` is high, the value of the selected register is dumped into the shift register, and can be read after two clock cycles by reading `shift_out` (MSB first).

For example, if you want to read the value of the program counter (PC), you would:

1. Set `reg_sel` to 0x00 and set `dump` to 1
2. Wait for two clock cycles for the first bit (MSB) to appear on `shift_out`.
3. Read the remaining bits from `shift_out` on each clock cycle.

To write a value to the program counter, you would:

1. Write the value to the shift register, one bit at a time, starting with the **MSB**.
2. Set `reg_sel` to 0x00 and set `load` to 1.
3. Wait for a single clock cycle for the value to be loaded.

Writing an opcode to the `EXEC` register will execute the opcode in place, without modifying the program counter (unless the opcode is a jump instruction).

The `STACK` register is used to push a value onto the stack or read the top value from the stack (for debugging purposes).

#### Data memory and registers

The data memory space is divided into two regions:

| Address range | Description                                |
|---------------|--------------------------------------------|
| 0x00 - 0x1F   | General-purpose data storage (data memory) |
| 0x20 - 0x5F   | I/O and control registers                  |

Other addresses are reserved for future use, and should not be accessed.

The following registers are available in the data memory space:

| Address | Name  | Description                                                              |
|---------|-------|--------------------------------------------------------------------------|
| 0x36    | PINB  | Read the value of the `portb` pins, or toggle the output when written to |
| 0x37    | DDRB  | Set the direction of the `portb` pins (0 = input, 1 = output)            |
| 0x38    | PORTB | Write to the `portb` pins                                                |
| 0x39    | PINA  | Toggle the output on `porta` pins (write only; read returns 0x00)        |
| 0x3A    | DDRA  | Enables of the `porta` pins (0 = disabled, 1 = output)                   |
| 0x3B    | PORTA | Write to the `porta` (output only) pins                                  |

For example, to toggle the value of the `portb[2]` (`uio[2]`) pin, you would write `0x04` to the `PINB` register.

The `porta[3:0]` pins are also used for debug output, and their function is determined by the `DDRA` register:

| Output pin | DDRA[n] == 0 | DDRA[n] == 1 |
|------------|--------------|--------------|
| 0          | `sleep`      | `porta[0]`   |
| 1          | `stop`       | `porta[1]`   |
| 2          | `wait_delay` | `porta[2]`   |
| 3          | `shift_out`  | `porta[3]`   |
| 4          | 0            | `porta[4]`   |
| 5          | 0            | `porta[5]`   |
| 6          | 0            | `porta[6]`   |
| 7          | 0            | `porta[7]`   |

### How to test

To test SPELL, you need to load a program into the program memory and execute it. You can load the program by repeatedly executing the following steps for each byte of the program:

1. Write the byte to the top of the stack (using the `STACK` register)
2. Write the address of the byte in the program memory to top of the stack
3. Write the opcode `!` to the `EXEC` register

After loading the program, you can execute it by writing the address of the first byte in the program memory to the `PC` register, and then pulsing the `run` signal.

#### Test programs

The following program will spell "SPELL" on the Tiny Tapeout demo board's 7-segment display: (see what we did there?)

```python
[127, 58, 119, 0, 129, 57, 57, 244, 62, 116, 109, 50, 0, 38, 94, 59, 119, 250, 44, 0, 59, 119, 25, 44, 11, 64, 3, 61]
```

The program bytes should be loaded into the program memory starting at address 0.

And of course, the obligatory blink, rapidly blinking an LED connected to the `uio[0]` pin:

```python
[1, 55, 119, 1, 54, 119, 250, 44, 3, 61]
```

### External hardware

None


### IO

| #             | Input    | Output   | Bidirectional   |
| ------------- | -------- | -------- | --------------- |
| 0 | run  | sleep/porta[0]  | portb[0]        |
| 1 | step  | stop/porta[1]  | portb[1]        |
| 2 | load  | wait_delay/porta[2]  | portb[2]        |
| 3 | dump  | shift_out/porta[3]  | portb[3]        |
| 4 | shift_in  | porta[4]  | portb[4]        |
| 5 | reg_sel[0]  | porta[5]  | portb[5]        |
| 6 | reg_sel[1]  | porta[6]  | portb[6]        |
| 7 |   | porta[7]  | portb[7]        |


### Chip location

{{< shuttle-map "tt07" "782" >}}

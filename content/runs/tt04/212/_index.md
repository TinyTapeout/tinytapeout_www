---
hidden: true
title: "212 Generador de PWM"
weight: 25
---

## 212 : Generador de PWM

* Author: Rodrigo Garcia
* Description: This is PWM generator
* [GitHub repository](https://github.com/gar19085/tt04-PWM)
* [GDS submitted](https://github.com/gar19085/tt04-PWM/actions/runs/6061048277)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: Dos push buttons y un osciloscopio



### How it works

####### General Description

```
The project is a simple Pulse Width Modulation (PWM) generator with a variable duty cycle. The duty cycle is controlled 
using two buttons: one to increase and another to decrease the duty cycle. The project is designed to operate with a 10 
MHz clock as its time base.
```

####### Button Signals

```
increase_duty and decrease_duty are signals directly connected to ui_in[0] and ui_in[1], respectively.
```

####### Debounce Logic

```
The code includes debounce logic for the buttons. It uses a counter (counter_debounce) to generate a slow clock enable signal 
(slow_clk_enable). This slow clock is used to sample the button states and eliminate debounce.
```

####### PWM Logic

```
The code utilizes a 4-bit counter (counter_PWM) to generate a PWM signal. The duty cycle of the PWM signal is controlled by the 
DUTY_CYCLE variable, which can be increased or decreased using the debounce logic signals (duty_inc and duty_dec).
```

####### DFF_PWM Module

```
This is a simple D flip-flop used for debounce. It samples the D input when the en (enable) signal is high.
```


### How to test

####### Button Connections

```
Connect two buttons to the system. These buttons are used to control the duty cycle of the PWM signal.
```

- Connect input pin 0 to one of the buttons. This button is used to increase the duty cycle of the PWM signal. Make sure the button has
a pull-down resistor connected to ensure a defined logical level when not pressed.

- Connect input pin 1 to the other button. This button is used to decrease the duty cycle of the PWM signal. Just like the first
  button, ensure that this one also has a pull-down resistor connected.

####### Oscilloscope Connection

```
Connect an oscilloscope to output pin 0 of the dedicated outputs of the system. Adjust the oscilloscope settings to 
measure and display the PWM signal correctly. 
```


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | increase_duty  | out_pwm | none |
| 1 | decrease_duty  | none | none |
| 2 | none  | none | none |
| 3 | none  | none | none |
| 4 | none  | none | none |
| 5 | none  | none | none |
| 6 | none  | none | none |
| 7 | none  | none | none |

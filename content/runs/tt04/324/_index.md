---
hidden: true
title: "324 Octal classifier"
weight: 77
---

## 324 : Octal classifier

* Author: Eduardo Zurek, Margarita Narducci, Diana Rueda
* Description: Classifies images of numbers from 0 to 7 using the 16 most significant pixels
* [GitHub repository](https://github.com/mnarducci80/tt04-verilog-demouninorte)
* [GDS submitted](https://github.com/mnarducci80/tt04-verilog-demouninorte/actions/runs/6122236152)
* HDL project
* [Extra docs]()
* Clock: 10000000 Hz
* External hardware: N.A



### How it works

The system classifies images of numbers from 0 to 7 using the 16 most significant pixels
The system´s input or features are the 16 most significant pixels of an 8x8 image with a number from 0 to 7.
The output is shown in the 7 segments display.


### How to test

In order to emulate an image in the input, the features must be set to one or zero according to the number of the image
Example of the image of a zero:
feature_10=0  feature_13=1  feature_18=0  feature_19=1  feature_20=0  feature_21=0  feature_26=0  feature_27=1
feature_28=0  feature_34=0  feature_36=0  feature_42=0  feature_43=1  feature_45=0  feature_60=0  feature_61=1


### IO

| # | Input        | Output       | Bidirectional      |
|---|--------------|--------------| -------------------|
| 0 | feature_10 = ui_in[0];  | segment a | feature_28 = uio_in[0]; |
| 1 | feature_13 = ui_in[1];  | segment b | feature_34 = uio_in[1]; |
| 2 | feature_18 = ui_in[2];  | segment c | feature_36 = uio_in[2]; |
| 3 | feature_19 = ui_in[3];  | segment d | feature_42 = uio_in[3]; |
| 4 | feature_20 = ui_in[4];  | segment e | feature_43 = uio_in[4]; |
| 5 | feature_21 = ui_in[5];  | segment f | feature_45 = uio_in[5]; |
| 6 | feature_26 = ui_in[6];  | segment g | feature_60 = uio_in[6]; |
| 7 | feature_27 = ui_in[7];  | dot | feature_61 = uio_in[7]; |

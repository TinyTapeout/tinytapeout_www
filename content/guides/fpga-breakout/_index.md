---
title: 'FPGA ASIC simulator breakout'
linkTitle: Using the FPGA ASIC simulator breakout
description: 'Test digital projects using the demoboard compatible FPGA'
weight: 65
---


You don't have to wait for an ASIC to test your digital design using the demoboard, with this FPGA breakout board.

Here we'll

 * get an overview of the breakout;
 * harden a digital design; and
 * get it running on the demoboard; 

    
## Overview

The [FPGA breakout](https://github.com/TinyTapeout/breakout-pcb/tree/nextgenv3/ASIC-simulator/ttdbv3-fpga-ICE40UP5k) has a [Lattice UP5K](https://www.latticesemi.com/en/Products/FPGAandCPLD/iCE40UltraPlus) FPGA on a PCB with headers and a [pinout](https://github.com/TinyTapeout/breakout-pcb/blob/nextgenv3/ASIC-simulator/ttdbv3-fpga-ICE40UP5k/fabricfox.pcf) compatible with the [Tiny Tapeout demoboard](https://github.com/TinyTapeout/tt-demo-pcb), which includes all the digital I/O as well as the project reset and clock (both routed to global buffer input pins on the FPGA).

{{< figure src="images/ttetrdb-top.jpg" title="FPGA breakout on demoboard" >}}

In addition to required supporting components, the board has an RGB LED, and a LED to indicate when it is in an unprogrammed state.  What it does *not* have is a flash chip to hold bitstream data.

Instead, the FPGA is configured such that it awaits configuration on power-up/reset.  The demoboard handles this by controlling the FPGA reset and SPI lines in a way that is transparent: just as you would with a TT ASIC, on the demoboard REPL provided with the [microPython SDK](https://github.com/TinyTapeout/tt-micropython-firmware), you can use the shuttle to enable any of the bitstreams present, e.g.

```
>>> tt.shuttle.tt_um_factory_test.enable()
```

This will actually reset the FPGA, and feed the contents of the `tt_um_factory_test.bin` bitstream to configure the FPGA.  All the standard SDK features work as well, so if there's a relevant section in the [config.ini](https://github.com/TinyTapeout/tt-micropython-firmware?tab=readme-ov-file#automatic-load-and-default-config) file specifying, say, a clock frequency then the project will be auto-clocked on loading.



## Harden a Design

It is easy to harden Verilog projects targetting the FPGA breakout.

### Requirements and Setup

You only really need three things to transform your HDL into a valid bitstream for the FPGA:

  1) The yosys, project IceStorm and supporting tools that do the heavy lifting;
  
  2) The [PCF file](https://github.com/TinyTapeout/breakout-pcb/blob/nextgenv3/ASIC-simulator/ttdbv3-fpga-ICE40UP5k/fabricfox.pcf) that indicates the pin mappings and lets the PnR complete the process; and 
  
  3) To then upload the resulting bitstream binary file to the right place (under `/bitstreams`) on the demoboard, and perhaps configure it.
  
To make this a whole lot easier and straightforward, YosysHQ releases [**OSS CAD Suite**](https://github.com/YosysHQ/oss-cad-suite-build), a binary software distribution that includes everything needed for synthesis and place-and-route.

To handle the specifics related to our boards and SDK, the [Tiny Tapeout Tools](https://github.com/tinyTapeout/tt-support-tools) include utilities that make life a lot easier.

Steps for setup:

  1) Follow the directions for [OSS CAD Suite Installation](https://github.com/YosysHQ/oss-cad-suite-build?tab=readme-ov-file#installation) on your platform;
  
  2) Enable the OSS CAD Suite environment.  E.g. under linux 

```
  user@computron:~$ source /path/to/oss-cad-suite/environment
  ⦗OSS CAD Suite⦘ user@computron:~$ 
```

  
  3) Get the TT support tools
```
 ⦗OSS CAD Suite⦘ user@computron:~$ git clone https://github.com/TinyTapeout/tt-support-tools.git tt
```

  4) Install the TT support tools requirements
```
 ⦗OSS CAD Suite⦘ user@computron:~$ cd tt
 ⦗OSS CAD Suite⦘ user@computron:~/tt$ pip install -r requirements.txt
```


### Harden a Tiny Tapeout Design

If you have a design based on a [Tiny Tapeout Verilog Template](https://github.com/TinyTapeout/ttsky-verilog-template), then you have a configured *info.yaml* file which makes the process of targetting the FPGA boards very easy.  Follow this process:

  0) Be inside your project's top level directory, e.g.
```
  user@computron:/tmp$ git clone https://github.com/TinyTapeout/ttsky25b-factory-test.git ftest
  user@computron:/tmp$ cd ftest
  user@computron:/tmp/ftest$ ls
  docs  info.yaml  LICENSE  README.md  src  test

```
  
  1) Enable the OSS CAD Suite environment
  
```
  user@computron:/tmp/ftest$ source /path/to/oss-cad-suite/environment
  ⦗OSS CAD Suite⦘ user@computron:/tmp/ftest$
```

  2) Get a copy of the `tt-support-tools` in there
```
  ⦗OSS CAD Suite⦘ user@computron:/tmp/ftest$ git clone https://github.com/TinyTapeout/tt-support-tools.git tt
```

  3) Harden the design by running `tt_fpga.py` with the **harden** argument
```
 (OSS CAD Suite⦘ user@computron:/tmp/ftest$ tt/tt_fpga.py harden 
 
 2026-01-17 10:03:09,518 - tt_fpga    - INFO     - Creating FPGA bitstream for [000 : unknown]
 /----------------------------------------------------------------------------\     
 |  yosys -- Yosys Open SYnthesis Suite                                       |                                                                                                           
 |  Copyright (C) 2012 - 2025  Claire Xenia Wolf <claire@yosyshq.com>         |                                                                                                           
 |  Distributed under an ISC-like license, type "license" to see terms        |                                                                                                           
 \----------------------------------------------------------------------------/   
 
 
 [... snip ... ]                                  
 
 
 Info: [ 37080,  37234) | 
 Info: [ 37234,  37388) |** 
 Info: [ 37388,  37542) | 
 Info: [ 37542,  37696) |** 

 Info: Program finished normally.
 2026-01-17 10:03:10,190 - tt_fpga - INFO - Bitstream created successfully: /tmp/ftest/build/tt_um_factory_test.bin
```

And you are done.  The bitstream will be present within the `build/` sub-directory, named according to the top level module specified in the *info.yaml* file.


### Harden any Verilog design

The above is really the simplest way to do this, but you don't actually need to have the *info.yaml* or to have used the Tiny Tapeout template to leverage the tt-support-tool.

If you simply try to run `tt/tt_fpga.py harden` as above, you will get an error

```
 ⦗OSS CAD Suite⦘ user@computron:/tmp/ftest$ tt/tt_fpga.py harden
 2026-01-17 10:10:18,520 - tt_fpga    - INFO     - Creating FPGA bitstream for None
 No project yaml, must specify source_dir
```

However, the `tt_fpga.py` script provides a number of options to allow you to specify what the script normally gets through the info.yaml.  The `harden --help` argument lists available options and flags

```
 (OSS CAD Suite⦘ user@computron:/tmp/ftest$ tt/tt_fpga.py harden --help
 usage: tt_fpga.py harden [-h] [--name FILE] [--breakout-target {classic,fabricfox}] [--source_dir DIR] [--source FILE] [--top_module TOP]

 options:
  -h, --help            show this help message and exit
  --name FILE           Output file and project name (default: top_module name)
  --breakout-target {classic,fabricfox}
                        Select target breakout: classic (TT04), fabricfox (TT ETR db) default: fabricfox
  --source_dir DIR      Directory containing source verilog files (default from info.yaml)
  --source FILE         Source file(s) to harden (specify multiple times for multiple source files, default from info.yaml)
  --top_module TOP      Name of the top module (default from info.yaml)
```

The only required arguments are `--top_module` `--source_dir` and as many `--source` arguments as you have .v files you wish to include.

Steps:

  0) be inside your project top level directory
  
  1) Enable the OSS CAD Suite environment
  
```
  user@computron:/tmp/ftest$ source /path/to/oss-cad-suite/environment
  ⦗OSS CAD Suite⦘ user@computron:/tmp/ftest$
```

  2) Get a copy of the `tt-support-tools` in there
```
  ⦗OSS CAD Suite⦘ user@computron:/tmp/ftest$ git clone https://github.com/TinyTapeout/tt-support-tools.git tt
```

  3) Harden the design by running `tt_fpga.py` with the **harden** argument along with the required information, to get the bitstream binary file generated.
```
  (OSS CAD Suite) user@computron:/tmp/ftest$ tt/tt_fpga.py harden --top_module tt_um_factory_test \
                                               --source_dir src  --source tt_um_factory_test.v
                                               

 [ ... snip ... ]

Info: Program finished normally.
2026-01-17 10:14:51,166 - tt_fpga - INFO - Bitstream created successfully: /tmp/ftest/build/tt_um_factory_test.bin

```

## Get the Design Running

You generated a valid bitstream, using the process above, but now it's just sitting on your computer.  This is how to get it running on the FPGA.

The SDK will actually treat any *.bin file in /bitstreams on the demoboard filesystem as an available project.  Meaning that when you are on the uPython REPL, you can do

```
>>> tt.shuttle.my_project.enable()
```

To load it, assuming there's a `/bitstreams/my_project.bin` file in there.

To make uploading and configuring the bitstreams easier, the `tt_fpga.py` script also has a *configure* command.

```
 $ tt/tt_fpga.py configure --help
 usage: tt_fpga.py configure [-h] [--port COMPORT] [--set-default] [--upload] [--clockrate RATE] [--name FILE]

 options:
  -h, --help        show this help message and exit
  --port COMPORT    Port for uploads (default: /dev/ttyACM0)
  --set-default     set this project as the default on startup
  --upload          upload the bitstream.bin from build/
  --clockrate RATE  Clock rate in Hz
  --name FILE       Output file and project name (default: top_module name)
```

### Bitstream Installation

Though you can use any means to get the bitstream installed, the `--upload` flag makes this easy.

For projects based on the Tiny Tapeout template, this is as simple as

```
 $ tt/tt_fpga.py configure --port /dev/ttyACM0 --upload
```

The `--port` is where your demoboard is found, so */dev/ttyACMX* under Linux, COMsomething with windows.


If you hardened this bitstream without an *info.yaml* you can specify the name of the project that was previously generated to help the script find which .bin you're uploading

```
 $ tt/tt_fpga.py configure --port /dev/ttyACM0 --upload --name my_project
```


### Project Configuration

You can configure how projects are loaded and which project is loaded on power-up through the [config.ini](https://github.com/TinyTapeout/tt-micropython-firmware?tab=readme-ov-file#automatic-load-and-default-config) file, but the *configure* command can also make this simpler for you.

To set your project as the default to load on power-up, use the `--set-default` flag.  

To specify a clock rate to auto-clock the project at on load, use the `--clockrate` option.  


You may combine all of these, including upload, into a single command


```
 
 $ tt/tt_fpga.py configure --port /dev/ttyACM0 --upload \
                           --name my_project \
                           --set-default \
                           --clockrate 2000000
```



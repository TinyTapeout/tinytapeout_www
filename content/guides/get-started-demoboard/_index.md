---
title: 'Getting started with the Tiny Tapeout 04+ demo board'
linkTitle: TT04+ demoboard quickstart
description: 'Bring-up, manage, program and upgrade the demoboard'
weight: 50
---


If you've got hold of a TinyTapeout 04/05/06/07 ASIC and demoboard, this quickstart guide will get you going by walking through:

 * overview and bring-up;
 * interaction through the browser, using the commander app;
 * accessing and using the microPython SDK and filesystem; and
 * easy updates to the OS and SDK.
 
Here's a little video that goes through much of this so you can see it in action (the board shape has changed a bit since it was recorded, but the functionality is quite similar)

{{< youtube dSuhCZxXQcw >}}



### Overview and bring-up

The Tiny Tapeout ASICs include hundreds of different designs--[143 on TT04](https://tinytapeout.com/runs/tt04/#all-projects) and [369 on TT09](https://tinytapeout.com/runs/tt09/)--any of which present on the chip you have may be *enabled* so that you can send and receive information to it using whichever combination of the

 * 8 input;
 * 8 output;
 * 8 bi-directional 

pins that specific project is using.  Since [TT06](https://tinytapeout.com/runs/tt06/), there are also up to 6 [analog](https://tinytapeout.com/specs/analog/) support for analog and mixed signal, users.


{{< figure src="images/tt07db.jpg" title="TT07 demoboard" >}}

The ASIC comes installed on a [breakout PCB](https://github.com/tinytapeout/breakout-pcb) which is itself installed on the [TT Demoboard](https://github.com/TinyTapeout/tt-demo-pcb#tinytapeout-demo-board)

The demoboard is designed to allow for interaction with design either through the on-board input DIP switches and 7-segment display, or with external circuits through the various pin and PMOD headers on the board. Having the ASIC on a breakout, rather than directly on the demoboard, leaves the adventurous free to design their own custom PCB and easily migrate the chip.

The demoboard has a number of headers for interaction and expansion.  The "PMODs" follow the [digilent PMOD spec and spacing](https://digilent.com/reference/pmod/start) and make it pretty simple to create extensions to interact with designs.  Some of these, like for [VGA Output](https://tinytapeout.com/specs/pinouts/#vga-output), [Gamepad Controllers](https://tinytapeout.com/specs/pinouts/#vga-output) are listed on the [pinout specs](https://tinytapeout.com/specs/pinouts/) page.

## Power

Power, and communications with the management RP2040 that is on the demoboard, comes in via the USB Type-C connector, at the top right of the PCB.

All the I/O expects 3.3V logic levels, so the 5V coming in through the USB receptacle isn't strictly necessary (it could be back-powered by sending 3v3 on a header pin marked as such), but this is a very convenient way to both power and control the system.

## Bring-up

After inspecting the boards for damage, and ensuring the breakout board is well seated on the demoboard, give the system 5V through the USB connector.

Operating normally, the power LEDs on the top right of the demoboard will light up, and the letter "t" will hold on the 7-segment for a moment, then go through a speedy little sequence and finally start toggling the segments in a binary counter dance (see the video for an example).

This is the [factory test](https://tinytapeout.com/runs/tt07/tt_um_factory_test) project, loaded by default, being ticked and shows the system is alive.

If you have a way to monitor power use, you should see a draw of around 180-200 milliAmps, on the 5V supply and not much more.


## Selecting Projects 

Maybe you'd like to enable a project other than the factory test?  

Since TT04 a multiplexer on the chip decides which projects are powered and enabled to communicate through the I/O. This MUX, needs to be told just which project you'd like to interact with.

To handle most of the details, we put a microcontroller (an RP2040, like in the [Raspberry Pi Pico](https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html)) on the demoboard.  But you still have to somehow tell it which project you'd like to enable.

There are a few ways to do this, the commander app being the easiest, but there's also a config.ini file and a whole Python SDK you can use.  All are described below.

### Commander App

The commander app lets you interact with and configure the demoboard from a web browser.

It uses the web serial API, so is currently limited to either [Chrome](https://www.google.com/search?q=chrome+browser), [Edge](https://www.microsoft.com/en-us/edge), [Opera](https://www.opera.com/) and [Brave](https://brave.com/).


With the demoboard USB plugged into a computer, use one of those browsers to access [https://commander.tinytapeout.com/](https://commander.tinytapeout.com/).


{{< figure src="images/commander-connectpage.png" title="Commander connect page" >}}

Clicking on *CONNECT TO BOARD* will, assuming the board is connected and detected, open a popup from which you can select the device.

{{< figure src="images/commander-selectdevice.png" title="Commander select device" >}}

The one marked "Board connected in FS mode" or similar is the one you want.  Select it and click connect.

If all went well you'll see something like this:
{{< figure src="images/commander-connected.png" title="Commander connected" >}}

With the shuttle being set to *tt07* (or whichever chip you actually have on hand).  Some debug output is visible in the black box at the bottom, where you can glean more info, such as the SDK release detected.

To activate a project:

   1)  Click the project drop-down and find the project you want.  All the projects for the detected chip shuttle will be present
 
{{< figure src="images/commander-projectselect.png" title="Commander project selection" >}}

   2)  Click the *SELECT* button to actually enable the project
   
   
   3)  If this is a design that needs to be _clocked_ (a synchronous logic design), you can set the clock frequency and press *SET* to start the clocking.
   
You might skip that step and single step the clock, using the *INTERACT* tab.

  

{{< figure src="images/commander-interact-tab.png" title="Commander interaction tab" >}}

Here you can also reset the project, set the inputs.  If the author provided it, some information on the project pinout and access to the REPL are available in their own tabs.

### Troubleshooting

In case the commander app does not detect your TT chip correctly, it'll report the shuttle name as "unknown". This is usually caused by driving the ui_in pins through the INPUT Pmod port, and, in older firmware versions (pre 2.0.3), by having some of the input switches in the "on" position.

To fix this, do the following:

1. Make sure that the INPUT Pmod port is not connected to anything.
2. Make sure that all the input switches are in the "off" position or upgrade to the [latest firmware](https://github.com/TinyTapeout/tt-micropython-firmware/releases). Note that upgrading the firmware will erase all files on the Demo Board, including any changes
you made to config.ini or any files you uploaded to it.
3. You can also skip the shuttle detection by setting the `force_shuttle` option in config.ini (see below).

### SDK and REPL 

The microcontroller on the demoboards, the [RP2040](https://www.raspberrypi.com/documentation/microcontrollers/rp2040.html) is powerful enough to run [MicroPython](https://micropython.org/)--a lean implementation of Python3--and is connected not only to the project MUX but to all the ASIC I/O as well as the clock and reset pins.

So a [micropython SDK](https://github.com/TinyTapeout/tt-micropython-firmware#tt4-micropython-sdk) was was created to make common tasks simple and most interactions with projects quite easy.


## Accessing the REPL

You can interact with the SDK and projects in real-time, through a REPL (a [Read-Evaluate-Print Loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop), a kind of interactive programming shell), and write scripts to automate testing and interaction with designs on the board.


The same serial terminal used by the commander app, e.g. */dev/ttyACM0* under linux or COM4 under windows, can be accessed using a serial terminal program instead similar to those used with the Arduino IDE to access Serial.print() messages and such, on that platform.

This is over USB and the baudrate doesn't really matter, so I just use gtkterm or even

```

screen /dev/ttyACM0

```

to get in.  Once you've accessed the REPL, by default you'll have access to a `tt` object, which is a DemoBoard object and the main handle into the system.



## Selecting and controlling Projects

The *Demoboard* object, `tt`, has a `shuttle` attribute that allows you to list, find and enable projects easily.

If you already know the project's official fullname, say *tt_um_myproject* it is a simple matter of calling

```
tt.shuttle.tt_um_myproject.enable()
```

to select and enable it.  


You can search projects by (partial) name matching:

```
tt.shuttle.find('traffic')
[<Design 71: wokwi_german_traffic_light>, <Design 180: wokwi_traffic_light>, <Design 115: wokwi_traffic_light_1>]


tt.shuttle.find('traffic')[1].enable()
ttboard.project_mux: Enable design wokwi_traffic_light




```

And tab-completion should work, too: `tt.shuttle.tt_um<TAB><TAB>` will list all the projects you can enable.


You can control the auto-clocking using

```
tt.clock_project_once() # just toggle clock a single time

# or

tt.clock_project_PWM(10e6) # start auto-clocking at 10MHz

# stop it with

tt.clock_project_stop() # or, equivalently
tt.clock_project_PWM(0) # 0Hz == stopped.
```


## Scripting  


Once you are familiar with the SDK through the REPL, you may want to automate tasks.  

You can simply edit [main.py](https://github.com/TinyTapeout/tt-micropython-firmware/blob/main/src/main.py) and get it to do what you want, or create independent modules and scripts to keep the seperation nice and clean.

In your scripts and modules, the easiest thing is to treat the DemoBoard object as a singleton, and get access to it like this:

```
from ttboard.demoboard import DemoBoard

tt = DemoBoard.get()

tt.shuttle.tt_um_myproject.enable()

tt.ui_in = 0xfe
print(f'Output from project is now: {tt.uo_out}')

# ...
```

## cocotb tests

You're encouraged to create [cocotb](https://www.cocotb.org/) testbenches when creating a design.  If you took the time to do that, I have great news: it's fairly easy to re-use these tests and run them, pretty much as-is, against the actual chip with hardware-in-the-loop.

To do this, the installed SDK includes [microcotb](https://github.com/psychogenic/microcotb), a miny version of cocotb that can run right on the demo boards.  There are some [examples included in the SDK](https://github.com/TinyTapeout/tt-micropython-firmware/tree/main/src/examples) and a [video is available](https://www.youtube.com/watch?v=g8cmUiP3KGQ) that goes over using the library.


Other than that, the [SDK documentation](https://github.com/TinyTapeout/tt-micropython-firmware#tt4-micropython-sdk) and various [sample tests](https://github.com/TinyTapeout/tt-micropython-firmware/tree/main/src/examples) will be your best guides.




### Filesystem Access

The underlying micropython OS is the standard system used by the Raspberry Pi Pico and if you want to use uPython shouldn't need much thought or maintenance.  The SDK, scripts and configuration reside in the filesystem provided and you may want to tweak these, add your own scripts, etc.

The important things on the filesystem are:

  * config.ini: default startup and project-specific configuration
  * main.py: runs on boot
  * ttboard/ has all the SDK modules
  * shuttles/ contains the design listings as both JSON files and more efficient binary blobs for the chip

Any standard means of accessing the micropython FS should work.  [rshell](https://pypi.org/project/rshell/) may be used but is lacking in some regards.  Another option is [mpy-repl-tool](https://pypi.org/project/mpy-repl-tool/).  

You can learn about that in [its documentation](https://mpy-repl-tool.readthedocs.io/en/latest/).  It lets you easily detect connected boards

```
python3 -m there detect

```

inspect files

```
python3 -m there cat /config.ini
```

and transfer files back and forth

```
# recursively pull all the SDK under /ttboard
python3 -m there pull -r /ttboard /tmp

```

I do find the `-m there` syntax cumbersome and a bit weird, so I added a function

```

tt() {
	python3 -m there $@; 
}

```

to my `~/.bashrc` file and a shorthand, so now I can just use `tt` in its place


```

$ tt  ls
/config.ini
/examples
/first_boot.log
/main.py
/release_v1.0.0
/shuttles
/ttboard

$ tt push config.ini /
```

### OS/SDK Updates

The complete directions for OS updates are part of the [SDK documentation, under Installation](https://github.com/TinyTapeout/tt-micropython-firmware#installation) but really the process is simply to:

  * download anything on the filesystem that you wish to preserve (for instance, if you've customized the [config.ini](https://github.com/TinyTapeout/tt-micropython-firmware?tab=readme-ov-file#initialization) it would be overwritten by this process)
  * get the UF2 file for the [latest SDK release](https://github.com/TinyTapeout/tt-micropython-firmware/releases)
  * hold the BOOT button on the demoboard while connecting to USB
  * release the BOOT button, see the RPI-RP2 drive appear
  * copy the UF2 file, e.g. `tt-demo-rp2040-v2.0.3.uf2`, to the RPI-RP2 drive
  * wait until the drive disappears
  
At this point, the entire flash will have be re-written with a fresh OS, SDK and supporting files.


### Automatic Configuration

The SDK includes support for a `config.ini` file that can setup default behaviour on a system-wide basis, as well as do preliminary setup on an individual project basis.

The configuration file is split into sections, indicated by `[brackets]`, and they are of two types:

`[DEFAULT]`
Which is always present, and contains settings applied at boot-up and whenever there is no override in project sections, and

`[project_name]`
sections, which apply only when a specific project is loaded (who's name must match the section name exactly whatever).

Each entry in a section is of the form:
```
name = value
```
where the name is one from the list below, and the value may be a string, a boolean or a numerical value, depending on the particular option.


#### Example

A simple configuration for system defaults and a single project might be

```
[DEFAULT]
project = tt_um_urish_simon
mode = ASIC_RP_CONTROL

[tt_um_urish_simon]
clock_frequency = 50000
mode = ASIC_MANUAL_INPUTS
```

This would load the *tt_um_urish_simon* project by default, letting the PMOD extension board drive the inputs, but for other projects assume the inputs are driven by the RP2040 (hence the *ASIC_RP_CONTROL* default mode).



### System defaults

In the `[DEFAULT]` section, the following options are recognized:

#### `project`
A string value with the name of the default project to load at start-up, e.g.

```
project = tt_um_test
```

#### `mode`
The tinytapeout chip inputs may be driven by the RP2040 on-board, or from external sources (the DIP switch, the PMODs).  When

```
mode = ASIC_RP_CONTROL
```
The pins from the RP2040 that are tied to the TT chip project inputs are setup as outputs (meaning you can write values from the RP2040 to the project inputs).
If you want to use the PMOD or DIP switches, set this instead to

```
mode = ASIC_MANUAL_INPUTS
```


#### `rp_clock_frequency`
There are two clocks involved with the TT demoboard: one is the project clock, the other is the clock internal to the RP2040.  There are instances, for example to get an exact value of clocking for the project which is derived from the RP2040 clock using PWM, where you may want to specify the clocking for the MCU.  This option allows you to set this.  You may pass an integer, or a scientific notation value, i.e.

```
rp_clock_frequency = 125000000
```
and
```
rp_clock_frequency = 125e6
```
are equivalent.


#### `start_in_reset`
The project may be put in reset by default by specifying 

```
start_in_reset = yes
```
In this case, it will require code somewhere that actually uses the SDK to perform a 
```
   tt.reset_project(False)
```
call on the demoboard object.  If you don't want this, leave the value to `no`.

#### `log_level`
The verbosity of the SDK logging may be set using this option.  Valid values are `DEBUG`, `INFO`, `WARN` and `ERROR`.



### Project-specific settings

Projects may have their own `[section]` in the config.ini file, my creating such a section using the official project name, e.g.

```
[tt_um_urish_simon]
# ...

```

for Uri's simon game.  The settings in this section would apply any time this project is loaded, including during boot-up if this is the project specified by the default `project` option.  

All lines until the next `[section]` or the end of the file will apply to this project.  The following options are available and behave identically as in the *DEFAULT* section described above:

   * mode (ASIC_RP_CONTROL or ASIC_MANUAL_INPUTS)
   * rp_clock_frequency (the RP2040 internal clock frequency)
   * start_in_reset (`yes` or `no` boolean to indicate "hold on reset" when loaded)
   
In addition to these, there are a few project related options that make life easier:


#### `clock_frequency`

Most projects are synchronous logic and need to be clocked.  This option allows you to specify that auto clocking of the project should be enabled, and to state at which frequency this should be.  The value is an integer, so you can spell it out or use scientific notation

```
clock_frequency = 50000

# or, say 10MHz

clock_frequency = 10e6
```

#### `ui_in`

If you need to send a stream of input, it'll be necessary to script something up, but for setting initial state of the inputs to some known and valid value, the *ui_in* option is ideal.  Set this value to an integer and the various input bits will be set accordingly.

```
ui_in = 255
```
would set all the inputs high, whereas

```
ui_in = 0b00010011
```
would set the 0th, first and fourth bits high, all others low.

Note that this setting is only respected when mode is `ASIC_RP_CONTROL`.


#### `uio_oe_pico`

The 8 bidirectional (uio) pins may be configured as either inputs or outputs. To specify the direction of these pins, use the *uio_oe_pico* option.  Any bit set to one will make the corresponding pin on the RP2040 an output.  E.g.

```
uio_oe_pico = 0b11110000
```
would configure the pins connected to the high nibble as outputs.

#### `uio_in`

If any of the RP2040 pins connected to the bidir I/O is configured as an output, the corresponding bit in *uio_in* will be written accordingly on project load.  This only applies to pins set as outputs with the *uio_oe_pico* option above.  For example, if that was set to *0b11110000* as above, then 
both

```
uio_in = 0b00010000
```
and 
```
uio_in = 0b00011111
```
would set `uio[4]` HIGH, uio 5-7 LOW, and leave the lower pins alone. 

### Sample config.ini

```
#### DEFAULT Section ####

[DEFAULT]
# project: project to load by default: simon says
project = tt_um_urish_simon

# start in reset (bool)
start_in_reset = no

# mode can be any of
#  - SAFE: all RP2040 pins inputs
#  - ASIC_RP_CONTROL: TT inputs,nrst and clock driven, outputs monitored
#  - ASIC_MANUAL_INPUTS: basically same as safe, but intent is clear
mode = ASIC_RP_CONTROL

# log_level can be one of
#  - DEBUG
#  - INFO
#  - WARN
#  - ERROR
log_level = INFO


# default RP2040 system clock
rp_clock_frequency = 125e6

# force_shuttle
# by default, system attempts to figure out which ASIC is on board
# using the chip ROM.  This can be a problem if you have something
# connected to the demoboard.  If you want to bypass this step and
# manually set the shuttle, uncomment this and set the option to
# a valid shuttle
# force_shuttle = tt06


#### PROJECT OVERRIDES ####

[tt_um_factory_test]
clock_frequency = 10
start_in_reset = no
ui_in = 1

[tt_um_vga_clock]
# need to set RP clock freq to get a nice
# VGA clock at 31.5MHz
rp_clock_frequency = 126e6
clock_frequency = 31.5e6
mode = ASIC_RP_CONTROL

[tt_um_urish_simon]
clock_frequency = 50000
mode = ASIC_MANUAL_INPUTS
```

# Errata

## TT06 Specific Errata

### Analog pull-downs

The pull-down values are too low.

The analog I/O from the breakout board is accessed via u.fl connectors on the breakout itself.  However they also go through the header down to the demoboard, where they terminate with pull-downs to ground.  The values used on the TT06 board were specified with a value that is too low for most (if not all) projects, excessively loading the outputs.

If you wish to interact with an analog project, remove the offending resistors (R42-R48, R51-R55) or replace them with a high value (>=1Meg):


{{< figure src="images/tt06-analog-pulldowns.png" title="TT06 analog pulldowns" >}}


## TT07 Specific Errata

### ASIC project MUX

For Tiny Tapeout 7, we had an error in the breakout board, swapping the `CTRL_SEL_nRST` and `CTRL_SEL_INC` pins. The MicroPython SDK already [includes a workaround for this issue](https://github.com/TinyTapeout/tt-micropython-firmware/commit/eee4e08dddeacb91c1e6828b3fde60dc5cf6a8ef), so this shouldn't have any impact for most users. However, if you are writing your own firmware or designing a custom PCB that interfaces with the breakout board, you should be aware of this issue.


### Analog pull-downs (bis)

Back for an encore, the analog pull-down issue from TT06 has returned, this time thanks to the assembly house somehow using out of date information.

You can get more info [above, in the TT06 errata](#analog-pull-downs), but short version is the Analog I/O pulldowns on the demoboard have low values that excessively load analog outputs.  The easiest solution is to depopulate R42-R48, and R51-R55 (or at least those tied to the I/O of interest), located under the breakout board.




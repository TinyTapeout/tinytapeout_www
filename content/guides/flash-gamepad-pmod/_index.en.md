---
title: Flashing the Gamepad PMOD
description: Guide on how to flash the firmware of the gamepad PMOD
weight: 66
---

Clone controllers may report incorrect values when the PMOD attempts to read from it, rendering them unusable.
This issue can be fixed with a simple firmware reflash of the PMOD, using your demoboard as the programmer.

## Steps

1. Get the flashing code:

    ```sh
    git clone https://github.com/psychogenic/gamepad-update
    cd gamepad-update
    git submodule update --init
    ```

2. Fix a bug in the flashing code: open `src/pico_ch32v003_prog/flash_ch32v003.py` in a text editor, go to line 278,
   change `open(filename, "b")` to `open(filename, "rb")` and save the file.

3. If you have an older RP2040 demoboard (TT06/07/08), open `src/pinmap.py` and change the last line to
   `PinMapSelected = PinMapTT06`. Skip this step for the TT ETR (RP2350) demoboard.

4. Put the gamepad PMOD in programming mode by connecting the `PRJ` and `SWIO` pins together with a jumper.

    {{< figure src="images/gamepad-programming-jumper.png" title="PRJ and SWIO must be connected together with a jumper to enable programming mode.">}}

5. Plug the gamepad PMOD into the **INPUT** PMOD port of your demoboard, and connect the demoboard to your PC.
   You don't need any controllers plugged in yet.

6. Run the flashing script:

    ```sh
    cd src
    mpremote mount . + run main.py
    ```

    If you have more than one USB serial device connected, `mpremote` may pick the wrong one. Run `mpremote devs`
    to list them, then name the demoboard's port, for example `mpremote connect /dev/ttyACM1 mount . + run main.py`.

7. When prompted, press the RESET button on the demoboard. Wait until it prints `Done.`

8. Plug a controller into the gamepad PMOD and press some buttons. You should see them printed in the terminal.
   Press RESET when you are done.

Your gamepad PMOD should now work nicely with clone controllers!

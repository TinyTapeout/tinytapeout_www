'''

Replacement main to run gamepad sop

@author: Pat Deegan
@copyright: Copyright (C) 2024 Pat Deegan, https://psychogenic.com
'''


GamepadFirmwareFile = '/remote/ch32gamepad.bin'
SkipBurn = False


import utime
import gc
import micropython
from gamepad_mem import flush_mem
print("BOOT: Tiny Tapeout Gamepad Burner")

    


flush_mem('prior to imports')
# import ttboard.util.colors as colors
# import ttboard.log as logging

flush_mem('before bnt')
import gamepad_bnt as gpad

flush_mem('before db')
from gamepad_db import BareDemoboard

flush_mem('before db ctor')
Demoboard = BareDemoboard()
# colors.color_start('magenta', False)

def mainloop():
    global Demoboard
    while True:
        print("\n\n")
        print(f"The gamepad burn/test start.")
        print("Connect PMOD to INPUT port.")
        print("\n")
        if gpad.burn_and_test_loop(Demoboard, fw_file=GamepadFirmwareFile, skip_burn=SkipBurn):
            print("SUCCESS! :-)\n\n")
        else:
            print("  There was an issue with this board... ")
            print("  Press CLOCK or RESET to proceed.")
            gpad.wait_for_go(Demoboard)
        
        
mainloop()




if __name__ == "__main__":
    main()




















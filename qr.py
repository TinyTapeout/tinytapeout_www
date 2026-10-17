from pathlib import Path
import qrcode

out_dir = Path(__file__).parent / "QR"
out_dir.mkdir(exist_ok=True)

img = qrcode.make("https://www.tinytapeout.com/chips/tt07/tt_um_urish_simon")
img.save(out_dir / "simon_says_qr.png")


import qrcode

out_dir = Path(__file__).parent / "QR"
out_dir.mkdir(exist_ok=True)

img = qrcode.make("https://meet.jit.si/yosys-users-group")
img.save(out_dir / "YUG_Meetup_qr.png")
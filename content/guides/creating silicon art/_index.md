---
title: 'Creating Silicon Art'
description: 'Learn how to add a doodle to your project'
weight: 50
---

This guide will show you how to add silicon art (a doodle) to your TinyTapeout project.

# Prerequisites

To add your silicon art to your project, you need to have it prepared and ready as files:
- GDS
- LEF

Save them in a folder of your liking :)

# Let's make some tiny art!

## Adding art as macro

The easiest way to add silicon art to a TinyTapeout project is by adding it as a macro—it's quick and simple:

In `config.json` add the following lines:
```
"MACROS": {
      "my_logo": {
        "instances": {
          "logo": {
            "location": [30, 10],
            "orientation": "N"
          }
        },
        "gds": ["dir::../macros/my_logo.gds"],
        "lef": ["dir::../macros/my_logo.lef"]
      }
    },
    "IGNORE_DISCONNECTED_MODULES": [
      "my_logo", "logo"
    ],
    "ERROR_ON_DISCONNECTED_PINS": false,
```

I called the macro `my_logo` and the placed instance `logo`. You can set the location and orientation for the instance.

In the config block above, define the paths to your GDS and LEF files.

Finally, set `IGNORE_DISCONNECTED_MODULES` and `ERROR_ON_DISCONNECTED_PINS` so you don't get errors during checks (assuming your silicon art doesn't need power ;)).

If you're creating *only* silicon art with *no functionality* on the tile, add these lines to suppress further errors:

```
"ERROR_ON_PDN_VIOLATIONS": false,
"RUN_PDN": false,
"RUN_LVS": false,
```
## Adding macro to project

Next, add the macro to your Verilog project. In `project.v`, define a blackbox module before your main module:

```
(* blackbox *) (* keep *)
module my_logo ();
endmodule
```

I also added an extra keep after the main module—I'm not sure if it's really necessary:
```
(* keep *)
my_logo logo();
```

You're basically good to go!

## Fine-Tuning
Depending on your layout and macro placement, you may want to do some fine-tuning in `config.json`:
```
"FP_PDN_VPITCH": <your value>,
"FP_PDN_VOFFSET": <your value>,
```
Adjust the power line spacing and offset so they don't interfere with your artwork.

# Optional: Make your art from Code

If you don't have your art or logo otherwise prepared, you can of course create them via code! I recommend using the python library `gdstk`, which is very easy to get into!

In the following segments, I have some tips for you.

### Getting Started
The basic steps to create a shape in `gdstk` are as follows:

```
#import the library 
import gdstk

# The GDSII file is called a library, which contains multiple cells.
lib = gdstk.Library()

# Geometry must be placed in cells.
cell = lib.new_cell("my_logo")

# Create a basic shape like a rectangle
rect = gdstk.rectangle(3, 3, layer=71, datatype=20)

# Add our shape to the cell
cell.add(rect)

# Save the library in a GDSII or OASIS file.
lib.write_gds("my_logo.gds")

# Optionally, save an image of the cell as SVG.
cell.write_svg("my_logo.svg")
```

### What about the LEF file?
You might have already realized: one important file is missing, if we create a .gds file via code. That's our .lef description! So far I just created a little function, that saves a matching .lef. You might need to adapt it to your case.

```
def write_lef_file(filename, cell_name, cell_bounds):
    """Write a LEF file for the cell"""
    with open(filename, 'w') as f:
        f.write("# LEF file generated for {}\n".format(cell_name))
        f.write("VERSION 5.8 ;\n")
        f.write("NAMESCASESENSITIVE ON ;\n")
        f.write("DIVIDERCHAR \"/\" ;\n")
        f.write("BUSBITCHARS \"[]\" ;\n")
        f.write("UNITS\n")
        f.write("   DATABASE MICRONS 1000 ;\n")
        f.write("END UNITS\n\n")
        
        # Define the cell
        f.write("MACRO {}\n".format(cell_name))
        f.write("   CLASS BLOCK ;\n")
        f.write("   FOREIGN {} 0 0 ;\n".format(cell_name))
        f.write("   SIZE {:.3f} BY {:.3f} ;\n".format(cell_bounds[2] - cell_bounds[0], cell_bounds[3] - cell_bounds[1]))
        f.write("   SYMMETRY X Y ;\n")
        
        f.write("END {}\n".format(cell_name))

# Write LEF file - example call
# You need to calculate the size for cell_bounds depending on what your art looks like
write_lef_file("my_logo.lef", "my_logo", <cell_bounds>)
```

### Filling pattern for SKY architectures
When I tried to submit for SKY-shuttles, I found out I need a filling pattern to satisfy constraints. Here is my example loop to create them. You might want to adapt the size in x and y direction to your needs:
```
active_dist = 1.5
active_size = 3.0 
overhang = 0.18

for i in range(36):
    for j in range(27):
        tx = i * (active_size + active_dist)
        ty = j * (active_size + active_dist)

       
        rect1 = gdstk.rectangle((tx, ty), (tx+active_size, ty+active_size), layer=1, datatype=22)
        cell.add(rect1)
        
        poly_rect = gdstk.rectangle((tx-overhang, ty-overhang), (tx+active_size+overhang, ty+active_size+overhang), layer=5, datatype=22)
        cell.add(poly_rect)
```

### Layer and Datatype Numbers
Here is a quick lookup on layer and datatype numbers that worked for me. You should be able to also look them up in the shuttle sdk description

#### IHP Shuttles
```
Art (top metal): layer=71, datatype=20 
PR boundary: layer=235, datatype=4
```

#### SKY Shuttles
```
Art (top metal): layer=126
PR boundary:  layer=189, datatype=4
Active Filler: layer=1, datatype=22
Poly Rect: layer=5, datatype=22
```


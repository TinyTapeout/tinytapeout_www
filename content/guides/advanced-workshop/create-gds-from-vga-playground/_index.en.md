---
title: 2 - Create GDS from VGA Playground
description: Learn how to generate the files needed to manufacture your VGA design
weight: 20
---

This guide will teach you how to create all the files that you need to get your VGA design manufactured. At the end of
this, you'll have a GitHub repository containing your modified VGA design which is ready for submission.

## Prerequisites
- Modified VGA Playground project: see the [previous exercise](../verilog-with-vga-playground) if you haven't done it already.
- GitHub Account: if you don't have a GitHub account, sign up for one [here](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).

## Prepare your project
### Set up the repository
You'll need to create a repository using our IHP template. It contains all the files and settings necessary to convert
your design to the GDS we need for manufacture.

- Visit [github.com/TinyTapeout/ttihp-verilog-template](https://github.com/TinyTapeout/ttihp-verilog-template).
- Click "Use this template" and then "Create a new repository".

{{< figure src="images/git-repo-template.png" title="Using the IHP template repository to create a new one" >}}

### Allow GitHub Actions to publish
GitHub Actions allow automated tasks to run. They are enabled by default, but we need to allow them to publish the
results.

- Go to Repository Settings.
- Go to the "Pages" section and set the build and deploy source to GitHub Actions.

{{< figure src="images/gitpages.png" title="Enable publishing by going to Settings 🠒 Pages 🠒 Source 🠒 Select 'GitHub Actions'" >}}

### Download and commit your project
You'll need to download your modified VGA project from VGA Playground, and upload it to GitHub to begin preparing for
submission. You may either commit these files via git from the terminal, or upload them directly to GitHub through
the website interface - choose whichever you're most comfortable with.

- Download your VGA Playground project by clicking the download icon next to the presets.

{{< figure src="images/vgap-download-button.png" title="Download your VGA Playground project via the download button">}}

You'll now have a zip file containing a collection of source files.

{{< figure src="images/vgap-zip-contents.png" title="Downloaded project from VGA Playground">}}

- Commit **all** of these files to the GitHub repository.

{{% notice info %}}
You must retain the folder structure - the files in `src` must go into the repo's `src` folder.
{{% /notice %}}


{{% notice tip %}}
Follow the section below regarding committing files to GitHub if you're unsure how. You don't need to follow it if
you're already familiar with the GitHub web interface or using git via the terminal.
{{% /notice %}}

#### Commit using GitHub web interface
- Navigate to your repository on GitHub.
- Click the "+" button next to the "<> Code" button, and select "Upload files".

{{< figure src="images/github-upload-button.png" title="Upload files via the GitHub web interface">}}

- Upload all of the files from the zip archive.
- Click the green "Commit changes" button.

{{< figure src="images/github-commit-uploaded-files.png" title="Committing uploaded files to the repository">}}

## Edit your project

### Update your module name
We'll need to make changes to a couple files to ensure that the submission process goes smoothly. We need to make sure
that our module name is unique - it is currently set to `tt_um_vga_example` in the source files. It is recommended that
it follows the following format: `tt_um_USERNAME_PROJECTNAME`, where `USERNAME` is your username, and `PROJECTNAME` is
what you decided to call the project.

- Update the module name in `src/project.v` to be unique.
- Update the module name in `test/tb.v` to the one you just used.
- Commit your changes to the repo.

### Update info.yaml
`info.yaml` is used to tell us the important details of your project: who it's by, what it does, its source files and
its pinout. Make sure you fill out these sections carefully.

- Edit the corresponding variables to update your project information:
    - `title`: Give your project a memorable name.
    - `author`: Enter the name(s) of the author(s) (use a comma to separate them if there are multiple).
    - `discord`: Optional, add your discord tag and [join our discord](https://tinytapeout.com/discord) to stay informed.
    - `description`: One line description of your project.
    - `top_module`: Update this string to the unique module name you made in the previous section.
- Commit your changes to the repo.


{{% notice warning %}}
Do not modify `clock_hz`, `tiles` or `source_files` unless you know what you're doing!
{{% /notice %}}

If your design makes use of additional pins for input or output, you should edit the corresponding pin under `pinout`.

| Label | Description |
| :- | :- |
| `ui` | User input |
| `uo` | User output |
| `uio` | User input/output (bidirectional pins) |

You should briefly describe their functionality or role - aim for this to be a label or ~3 words max. You'll have an
opportunity later to describe them in more detail if you need to.

### Edit test.py
TODO

### Write some documentation
Everybody submitting to a shared shuttle ends up getting a copy of your design, so having clear and concise documentation
allows everybody to use and explore your design! We also combine all the project documentation together into one big
datasheet which is available to view from the shuttle's online page.

Please write in English and use the Markdown syntax appropriately to describe and explain your design.

- Edit `docs/info.md` to include information about your design.
    - "How it works" and "How to test" sections **must** be updated.
- Commit your changes to the repo.

{{%notice warning%}}
Leaving the "How it works" and "How to test" sections unchanged will cause the GitHub Actions to fail.
{{%/notice%}}

## Submitting your project
Your project will be ready for submission once the `docs` and `gds` actions light up green - you
can see the status of them if you navigate to your `README.md` online or to the "Actions" tab in the repository.

{{< figure src="images/github-actions-button.png" title="Actions button in the repository">}}

GitHub Actions are a service provided free-of-charge for open-source projects. We make use of these to automatically
run a set of programs every time a commit is made to the repository. We use a selection of different actions to do
various tasks:

- `docs`: Compile your project documentation into a PDF - uses content in `info.yaml` and `docs/info.md`.
- `gds`: Generate the GDS for your project and shows you some interesting information.
- `test`: Uses `test.py` to automatically test your design with CocoTB.
- `fpga`: Create an FPGA bitstream to upload your design onto an FPGA.

{{%notice tip%}}
You only need to have `docs` and `gds` passing (lit up green) in order to submit your design.
{{%/notice%}}


### Docs Action
This action generates a preview of how your documentation will look. You can download a PDF preview to check it.

If you have a failure, you can check the log to see what caused the issue. The most common error is missing fields in
`info.yaml` or leaving `docs/info.md` unchanged.

{{< figure src="images/github-docs-fail.png" title="Example of failing docs action">}}

### GDS Action
This action generates the GDS for your project, along with warnings, utilisation statistics, and cell usage details. If
you have a failure, you can check the log to see what the problem is. The most common errors are:

- Not [allowing the GitHub action](#allow-github-actions-to-publish) to publish.
- Using unsynthesizable Verilog.

{{%notice tip%}}
If you get stuck, ask a TA!
{{%/notice%}}


## Explore the design!
Within the GDS action, you can view all the gritty details about your design - types of cells being used and how many,
total area and wire usage, precheck results and your design rendered in 2D & 3D!

### Cell usage
Take a look at the standard cell usage summary. These cells are a part of the PDK provided by IHP. The details of each
cell can be viewed by clicking the links.

{{< figure src="images/github-gds-cell-summary.png" title="Viewing NOR2Bx cell documentation from the GDS action">}}

The cell usage table also includes additional cells such as fill cells and tap cells that are not a part of your original
design. These types of cells are automatically inserted during the physical design stage to ensure the integrity of the
layout and meet manufacturing requirements.

### Precheck
The precheck summary shows the results of all the tests we run on the design. All the checks need to be green to submit
on the chip.

### Viewer
This section gives you the 3D viewer link and the 2D render of your design. Open the 3D viewer by clicking the "Open
3D viewer" link.

Explore the design - you can rotate, zoom and hide certain layers or cells. Can you find the I/O?

{{< figure src="images/3dviewer-whole-tile.png" title="Zoomed out view of a tile">}}

#### Controls
##### Keyboard
1. Hide Fill, Decap, Tap cells.
2. Hide top cell geometry.
3. Isolate selection/back.
4. Zoom to selection.

##### Mouse
- Use mouse wheel or zoom gesture to zoom.
- Pan and tilt by clicking and dragging.
- Move tile with shift + left click & dragging.

##### Additional options
- Toggle layer visibility with the checkboxes under the "Layers" section.
- Toggle cell visibility with the checkboxes under the "Cells/Instances" section.

{{< figure src="images/3dviewer-zoomed-tile.png" title="Zoomed in view of a sky130A OR gate">}}



## If you have time, try these next steps

- Check out our video on [how the GitHub action works behind the scenes](/making_asics).
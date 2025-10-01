---
title: 'Hardening Tiny Tapeout Projects Locally'
linkTitle: 'Local hardening'
description: 'Hardening your Tiny Tapeout projects with LibreLane, to speed up iteration times'
weight: 60
---

This document explains how to harden your Tiny Tapeout projects locally, to speed up iteration times. The whole process should take roughly 10 minutes.

It uses the [factory-test](https://github.com/TinyTapeout/ttsky25b-factory-test) project as an example.

### 1. Environment Setup

You need Python 3.11 or newer installed on your system. You can test which python version you have by running:

```sh
python3 --version
```

Note: On some systems, the python binary is called `python` and not `python3`.

If you have an older python version, you can [install uv](https://docs.astral.sh/uv/getting-started/installation/) as an alternative.

You also need a recent version of Docker installed on your system.

We assume your project was cloned to `~/factory-test`. If you don't have a project yet, and want to follow these instructions to prepare your local setup, you can clone the `factory-test` repo by running the following command:

```sh
git clone https://github.com/TinyTapeout/ttsky25b-factory-test ~/factory-test
```

### 2. Clone tt-support-tools

Clone the [tt-support-tools](https://github.com/TinyTapeout/tt-support-tools) repo (`main` branch) inside the `tt` directory of your project:

```sh
cd ~/factory-test
git clone https://github.com/TinyTapeout/tt-support-tools tt
```

### 3. Python and Pip Dependencies

Create a dedicated directory for the virtual Python environment and initialize it:

```sh
mkdir ~/ttsetup
python3 -m venv ~/ttsetup/venv
source ~/ttsetup/venv/bin/activate
```

Or, if you are using [uv](https://docs.astral.sh/uv/):

```sh
mkdir ~/ttsetup
uv venv --python 3.12 ~/ttsetup/venv
source ~/ttsetup/venv/bin/activate
```

Then install the dependencies:

```sh
pip install -r ~/factory-test/tt/requirements.txt
```

### 4. Set up environment variables

Set up `PDK_ROOT` to the path of the directory that will contain the PDK. `PDK` and `LIBRELANE_TAG` specify, respecively, the version of the PDK and the version of [LibreLane](https://librelane.readthedocs.io/en/latest/) you will use:

```sh
export PDK_ROOT=~/ttsetup/pdk
export PDK=sky130A
export LIBRELANE_TAG=2.4.2
```

Note: the values of these values may change in the future - you can consult the [tt-gds-action](https://github.com/TinyTapeout/tt-gds-action/blob/main/action.yml) yaml for the latest values (look at the "default" value for the input called "librelane-version")

#### GF180 (GlobalFoundries 180nm) Specific Instructions

For GF180 projects, you need to set the following environment variables, in addition to the ones above:

```sh
export PDK=gf180mcuD
```

### 5. Install LibreLane

```sh
pip install librelane==$LIBRELANE_TAG
```

#### IHP Specific Instructions

For IHP projects, you need to set the following environment variables:

```sh
export PDK=ihp-sg13g2
export LIBRELANE_TAG=3.0.0.dev39
```

And then install LibreLane as mentioned above (`pip install librelane==$LIBRELANE_TAG`).

Finally, you need to install the IHP PDK by running the following command:

```sh
git clone -b tt2025 https://github.com/TinyTapeout/IHP-Open-PDK $PDK_ROOT
```

### 6. Harden your project

Congratulations, you are ready to harden your project!

Note: for IHP projects, you would need to add the `--ihp` flag to all the `tt_tool.py` commands below, and for
GF180 projects, you would need to add the `--gf` flag.

First, generate the LibreLane configuration file:

```sh
cd ~/factory-test
./tt/tt_tool.py --create-user-config
```

Then run the following command to harden the project locally.
Notice that this command **requires you to have Docker** (or a compatible container engine) installed and running.

```sh
./tt/tt_tool.py --harden
```

It's also recommended to run the following command, checking for any synthesis / clock warnings:

```sh
./tt/tt_tool.py --print-warnings
```

### Rehardening

Once you set your environment, you can reharden at any time. Before running `tt_tool.py`, make sure to set the environment variables (as explained in step 1 above), and reactivate the Python virtual environment by running the following command:

```sh
source ~/ttsetup/venv/bin/activate
```

If you make changes to your project configuration (e.g. increase the number of tiles), you'll need to update the LibreLane configuration file by running the following command in your project's directory:

```sh
./tt/tt_tool.py --create-user-config
```

To reharden, run:

```sh
./tt/tt_tool.py --harden
```

### Running the RTL tests

```sh
cd test
pip install -r requirements.txt
make -B
```

### Running the gate level tests

```sh
cd test
pip install -r requirements.txt
TOP_MODULE=$(cd .. && ./tt/tt_tool.py --print-top-module)
cp ../runs/wokwi/final/pnl/$TOP_MODULE.pnl.v gate_level_netlist.v
make -B GATES=yes
```

### Viewing the design in OpenROAD GUI and KLayout

To view the hardened design in the OpenROAD GUI, you can use the following command:

```sh
./tt/tt_tool.py --open-in-openroad
```

For KLayout, you can use:

```sh
./tt/tt_tool.py --open-in-klayout
```

### Exporting the hardened design to a PNG file

Make sure you have the `librsvg2-bin` and `pngquant` packages installed:

```sh
sudo apt install librsvg2-bin pngquant
```

then you can use `tt_tool` to generate a render of the GDS as follows:

```sh
./tt/tt_tool.py --create-png
```

The resulting optimised PNG file is called `gds_render.png` (but note that other `gds_render*` intermediate files are also left behind).

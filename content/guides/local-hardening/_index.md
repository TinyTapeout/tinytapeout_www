---
title: 'Hardening Tiny Tapeout Projects Locally'
linkTitle: 'Local hardening'
description: 'Local equivalent to the GitHub Actions workflow, using OpenLane 2'
weight: 60
---

This document explains how to harden your Tiny Tapeout projects locally, to speed up iteration times. The whole process should take roughly 10 minutes.

It uses the [factory-test](https://github.com/TinyTapeout/tt08-factory-test) project as an example.

### 1. Environment Setup

You need Python 3.11 or newer installed on your system. You can test which python version you have by running:

```sh
python3 --version
```

Note: On some systems, the python binary is called `python` and not `python3`.

We assume your project was cloned to `~/factory-test`. If you don't have a project yet, and want to follow these instructions to prepare your local setup, you can clone the `factory-test` repo by running the following command:

```sh
git clone https://github.com/TinyTapeout/tt08-factory-test ~/factory-test
```

### 2. Python and Pip Dependencies

Create a dedicated directory for the virtual Python environment and initialize it:

```sh
mkdir ~/ttsetup
python3 -m venv ~/ttsetup/venv
source ~/ttsetup/venv/bin/activate
```

Then install the dependencies:

```sh
pip install -r ~/factory-test/tt/requirements.txt
```

### 3. Set up environment variables

We will set up `PDK_ROOT` to point to the directory that will contain the PDK. `PDK` and `OPENLANE` specify, respecively, the version of the PDK and of OpenLane 2 we will use: 

```sh
export PDK_ROOT=~/ttsetup/pdk
export PDK=sky130A
export OPENLANE2_TAG=2.0.8
```

Note: the values of these values may change in the future - you can consult the [tt-gds-action](https://github.com/TinyTapeout/tt-gds-action/blob/main/action.yml) yaml for the latest values (look for the step named "Set up environment variables") 

### 4. Install OpenLane 2

```sh
pip install openlane==$OPENLANE2_TAG
```

### 5. Download the PDK

We will first install the [volare](https://github.com/efabless/volare) PDK version manager:
```sh
pip install volare
```

Then we will download and enable, e.g., version `cd1748bb197f9b7af62a54507de6624e30363943` of the PDK:
```
volare fetch --pdk sky130 cd1748bb197f9b7af62a54507de6624e30363943
volare enable --pdk sky130 cd1748bb197f9b7af62a54507de6624e30363943
```
To see all available versions, you can issue the command `volare ls-remote`.

### 6. Clone tt-support-tools

Clone the [tt-support-tools](https://github.com/TinyTapeout/tt-support-tools) repo (`tt08` branch) inside the `tt` directory of your project:

```sh
cd ~/factory-test
git clone -b tt08 https://github.com/TinyTapeout/tt-support-tools tt
```

### 7. Harden your project

Congratulations, you are ready to harden your project!

First, generate the openlane configuration file:

```sh
cd ~/factory-test
./tt/tt_tool.py --create-user-config --openlane2
```

Then run the following command to harden the project locally:

```sh
./tt/tt_tool.py --harden --openlane2
```

It's also recommended to run the following command, checking for any synthesis / clock warnings:

```sh
./tt/tt_tool.py --print-warnings --openlane2
```

### Rehardening

Once you set your environment, you can reharden at any time. Before running `tt_tool.py`, make sure to set the environment variables (as explained in step 1 above), and reactivate the Python virtual environment by running the following command:

```sh
source ~/ttsetup/venv/bin/activate
```

If you make changes to your project configuration (e.g. increase the number of tiles), you'll need to update the openlane configuration file by running the following command in your project's directory:

```sh
./tt/tt_tool.py --create-user-config --openlane2
```

To reharden, run:

```sh
./tt/tt_tool.py --harden --openlane2
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

### Exporting the hardened design to a PNG file

Make sure you have the `librsvg2-bin` and `pngquant` packages installed:

```sh
sudo apt install librsvg2-bin pngquant
```

then you can use `tt_tool` to generate a render of the GDS as follows:

```sh
./tt/tt_tool.py --create-png --openlane2
```

The resulting optimised PNG file is called `gds_render.png` (but note that other `gds_render*` intermediate files are also left behind).

### Speeding up Routing

For larger designs (or when close to maximum utilisation), routing can take a long time.  If you have multiple CPU cores, you can try adding the following line to your `config.json`:

```none
"ROUTING_CORES": 8,
```

to speed things up (replace 8 with the number of CPU cores in your system).  Note you should not commit this change to git.

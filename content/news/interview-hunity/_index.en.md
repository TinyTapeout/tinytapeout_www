---
title: Interview TT chips heading to space on Hunity
description: Hunity, the PocketQube satellite that's taking our chips to space.
author: Tiny Tapeout Team
date: "2025-05-02"
type: news
tags: ['partnership']
layout: single
cover:
    image: images/header.jpg
    alt: Testing your ASIC in Space! An interview with Tibor Herman and Pat Deegan
---

We recently sat down with Tibor Herman from the Budapest [University of Technology and Economics'](https://www.bme.hu/) nanosatellite team to talk about Hunity, the PocketQube satellite that's taking our chips to space.

### The HUNITY Mission

Hunity (Hungarian University and Unity) is a 3-unit PocketQube satellite built by the university's space engineering program. PocketQubes are one-eighth the size of traditional CubeSats, roughly the size of a Rubik's cube, developed by Bob Twiggs to make space more accessible for educational purposes. 

The team has already launched four successful PocketQube missions, including [Smog-P](https://www.nanosats.eu/sat/smog-p), which mapped electromagnetic pollution across the entire planet from orbit.

Hunity uses a polar orbit (90-93° inclination) that passes over both poles. This orbit enables global coverage, and the sun-synchronous characteristics mean the satellite passes over Hungary at roughly the same time each day, about three times in the morning and three times at night.

### Technical Innovation

The satellite employs a mixed attitude determination and control system (ADCS) using both [magnetorquers](https://www.winding-technology.com/eu-en/wiki/magnetorquer) (magnetic rods for orientation control) and magnetic reluctance reaction wheels (a type of motor without permanent magnets). 

This hybrid approach allows rapid satellite slewing while conserving power in low Earth orbit. The magnetorquers provide finer control and desaturation capability, while the reaction wheels enable quicker maneuvers.

### The Tiny Tapeout Experiment Platform

Pat Deegan designed a specialized PCB that mounts our Tiny Tapeout ASIC onto Hunity's experimental payload panel. The board integrates an RP2040 microcontroller, which communicates with the satellite computer via I²C protocol and manages user experiments submitted in MicroPython. The RP2040 controls design selection and provides a command interface for experiments running on the ASIC.

What makes this remarkable is that anyone worldwide can submit experiments using the Tiny Tapeout SDK!

The experiments run on actual silicon in orbit, and participants can download the results using standard radio receivers and the provided modulator and decoder.

### Broader Educational Impact

Hunity carries far more than our experiments. High school students from Hungary who won the 2024 NKCS competition have their own scientific payloads aboard, radiation sensors, temperature experiments, and various semiconductor-based detection methods. All designed, built, and tested by high schoolers who will receive telemetry data from their own hardware running in space.

### Mission Lifetime and Community Reception

Hunity is expected to operate for approximately one year, with continued functionality possible thereafter. The satellite has undergone rigorous environmental testing including vibration profiles specified by [SpaceX](https://www.spacex.com/) and thermal-vacuum baking to remove volatile compounds, achieving Technology Readiness Level 8 (environmentally tested on the ground) and positioning it for Level 9 (flight-proven) status after mission success.

The project is sponsored by Hungary's National Media and Info-Communications Authority ([NMHH](https://nmhh.hu/)) and supported by the university's faculty and radio club. 

Global participation is encouraged: amateurs and professionals alike can track Hunity using [G-predict](https://oz9aec.dk/gpredict/) and publicly available TLE data from [Space-Track](https://www.space-track.org/), receiving telemetry from anywhere with line-of-sight to the satellite.

For anyone interested in submitting experiments, the Tiny Tapeout project list and Pat's [repository](https://github.com/psychogenic/spasics) contain full instructions. 

The SpASICs project represents an unprecedented collaboration between open-source hardware design and space science education.

Catch the full interview:

{{< youtube SRuBDMZZiI0 >}}
---
title: Submitting a Verilog project instead of Wokwi
description: Change your submitted project from Wokwi to Verilog.
weight: 70
---

This guide will show you how to repurpose your tile for a Verilog-based project instead of a Wokwi one. This is suitable
if you know some Verilog and want to submit a Verilog design, but already have submitted a Wokwi project to the shuttle.

## Steps

- Go to your submitted repository's settings and rename the repository to anything else. Click the "Rename" button.

{{< figure src="images/github-rename-repo.png" title="Renaming a repository from 'vga-project' to 'vga-project-wokwi' via the repo settings" >}}

- Create a new repository based on the [ttsky-verilog-template](https://github.com/TinyTapeout/ttsky-verilog-template) with the **same name** as the original repository.

{{< figure src="images/github-repo-template-ttsky.png" title="Using the Skywater template repository to create a new one">}}

- Add your design source files, documentation and update info.yaml. Commit these files to the newly created repo.

- Iterate on your design until the GDS and Docs actions go green.

- Go to [app.tinytapeout.com](https://app.tinytapeout.com), click on your project name, then click on the big blue "SUBMIT A REVISION" button.
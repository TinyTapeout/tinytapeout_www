---
title: Submitting a Verilog project instead of Wokwi
description: Change your submitted project from Wokwi to Verilog.
weight: 70
---

This guide will show you how to repurpose your tile for a Verilog-based project instead of a Wokwi one. This is suitable
if you know some Verilog and want to submit a Verilog design, but already have submitted a Wokwi project to the shuttle.

## Steps

- Navigate to your project on the [Tiny Tapeout submission app](https://app.tinytapeout.com). Click the "Change" button.

{{< figure src="images/app-change-repo-button.png" title="Change repo button available next to the repo URL" >}}

- You will be prompted to enter a new repo URL. Enter it and click the "Change Repo" button. Your repo must be based on
[one of our templates](/#submission-templates).

{{< figure src="images/app-new-repo-link-prompt.png" title="Enter a new repo URL prompt" >}}

- For the changes to take effect, you **must** submit a new revision. The project in the newly linked repository must
have a passing GDS action. Click on the "Submit a new revision" button to automatically fetch the latest build.

You should now have a different repository submitted - happy building! Make sure to fill out the documentation so that
others can learn and experiment with your design.

If you run into any issues, please let us know via our [Discord](/discord). Our community can also help you troubleshoot
any issues you are having with your submission.
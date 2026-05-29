---
title: '3 - Create the GDS and submit your design'
description: 'Create the GDS and submit your design by using our submission portal'
weight: 40
aliases:
    - /guides/workshop/wokwi-to-gds
---

This guide will walk you through the process of preparing and submitting your Wokwi design using the Tiny Tapeout Wokwi
submission portal. We’ll cover the necessary steps to convert your design into the ASIC files required for chip
manufacturing and also view your files with the 3D viewer.

## Prerequisites

* Wokwi Project: the project must have been started from the [Tiny Tapeout Wokwi Template](https://wokwi.com/projects/354858054593504257).
* GitHub Account: If you don’t have a GitHub account, sign up for one [here](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).


## Filling in the Submission Form

To submit your Wokwi project to a shuttle, we will use a helpful submission portal that will take care of creating
the GitHub repository, setting up GitHub Actions and populating the relevant files.

The submission portal is available <a href="https://app.tinytapeout.com/projects/create/wokwi" target="_blank">here</a>. 

{{% figure src="images/submission_portal_step1_empty.png" title="Wokwi project submission portal" %}}

### Step 1 - Project Information

At this stage, you should have a Wokwi project which you can submit. **Make sure you have saved the Wokwi project**,
as that will generate the unique project ID which you will need to proceed.

- Copy the Wokwi project URL and paste it into the form.

{{% figure src="images/wokwi_copy_url.png" title="Copy the Wokwi project URL from your browser"%}}

- Select the target shuttle - this is where your project will live. Ask someone if you're unsure!

{{% figure src="images/submission_portal_step1_filled.png" title="Submission form with the details filled in" %}}


### Step 2 - Project Details

In this step, you will have to fill out information about your project - a title, description, expected/required
clock frequency, and labels for each used pin.

{{% figure src="images/submission_portal_step2.png" title="Project details form" %}}

**Make sure you are descriptive.** Your project will be available to others, and it is helpful to be able to
understand what your project does. Parts of this form will be used to generate the shuttle datasheet.

- Fill out every applicable field - be as descriptive as possible.

### Step 3 - Create & Build

To make submitting easier, the portal creates the relevant GitHub repository (containing your Wokwi project) on your
behalf.

- Grant us permission via the portal to create the repository by clicking on the "Authorize GitHub" button.

{{% figure src="images/submission_portal_step3.png" title="Repository creation authorization request" %}}

If successful, the webpage should refresh with a success notification.

{{% figure src="images/submission_portal_step3_success.png" title="Submission portal authorization success" %}}

You can now allow us to create the repository containing your Wokwi project.

- Click on the "Create Repo" button.

The repository will now be created and the GDS will now start building!

{{% figure src="images/submission_portal_step3_create_repo.png" title="Creating the repository" %}}

{{% figure src="images/submission_portal_step3_build_gds.png" title="Automatically building the GDS using GitHub Actions" %}}

- Sit back and relax while your design gets built :) It usually takes about 5 minutes.


### Step 4 - Submit to Shuttle

The final stage - submit your design onto your selected shuttle! You will need either a coupon code, or to buy some
tiles to proceed.

{{% notice note %}}
**If you have a coupon code for a free tile** then please ask a teaching assistant for your coupon. Enter it into the
field, click 'apply' to reduce the cost to 0, and then click submit.
{{% /notice %}}

{{% figure src="images/submission_portal_step4.png" title="Project ready for submission to the shuttle" %}}

{{% notice tip %}}
Your project will be automatically submitted to a shuttle, and a revision of it will be included onto the shuttle.
To update your project, you will need to make your changes and then submit a new revision - this is covered in the
next exercise.
{{% /notice %}}

---

## Exploring the Repository

The newly created repository contains several files and features that you should know about.

### The `info.yaml` File

`info.yaml` tells us the important details of your project: which Wokwi project it is, who it's by, it's nominal clock
speed, the amount of tiles it uses and a description of all the pins it uses. This is populated by the information you
entered in step 2 of the form.

{{% figure src="images/wokwi_metadata.png" title="An example info.yaml file" %}}

### Project Documentation

We collect all the project information into a datasheet (<a href="https://tinytapeout.github.io/tinytapeout-sky-25b/datasheet.pdf" target="_blank">example from TTSky25b</a>) and onto the website itself. You can use Markdown to write your documentation,
and tell everyone what your chip does, and how to test it properly.

You may notice that the docs action has failed on your repository - projects with a failing docs action
will still be included onto the shuttle, but your project information will **not** be included onto the shuttle datasheet.

To add documentation, follow these steps:

* Edit `docs/info.md` - this should be pre-populated with some example text already.
* You need to change both the 'how it works' and 'how to test' sections.
* Save and commit your changes.

{{% notice warning %}}
Leaving the info.md unmodified will cause the 'docs' action to fail. 
{{% /notice %}}

{{% figure src="images/doc_example.png" title="Example documentation to help you or someone else test a design" %}}


## GitHub Actions

GitHub Actions are a service provided free of charge for open source projects. They usually start a virtual machine, install and then run some software.
Each commit will trigger these actions to run. 
We use a few different actions to do different tasks:

- **docs**: This action checks your docs and then generates a PDF preview.
- **gds**: This action generates the GDS for your project, and shows the results.
- **wokwi test**: This action will test the design if you created a truth table for your Wokwi design.

To see the currently running and historical actions, go to the ‘Actions’ tab in your repository.

![](images/actions_button.png?width=50pc)
    
{{% notice tip %}}
Red indicates failure and green indicates success. Only the gds action needs to be green to submit your design.
{{% /notice %}}

### Docs Action

This action generates a preview of how your documentation will look. You can download a PDF preview to check it.

If you have a failure, you can check the log to see what the problem is. The most common error is missing fields in `info.yaml` or leaving `info.md` unchanged.

{{< figure src="images/checkerrors.png">}}   

### GDS Action

This action generates the GDS for your project, along with warnings, utilization statistics, and cell usage details. 
If you have a failure, you can check the log to see what the problem is. The most common errors are:

* Not [enabling the GitHub action](/guides/workshop/create-your-gds/#allow-github-actions-to-publish) to publish
* Not resolving [ERC warnings](/guides/workshop/simulate-a-gate/#simulate) in the Wokwi design
* If you get stuck, ask a TA!

#### Cell usage

Take a look at the standard cell usage summary. These cells are part of the PDK from [Skywater Technologies](https://skywater-pdk.readthedocs.io/en/main/index.html).
The details for each of the standard cells can be viewed by clicking the links.

{{< figure src="images/view_std_cells.png">}}   

The cell usage table includes additional cells such as fill cells and tap cells that are not part of your original design. Certain cells like fill cells and tap cells are automatically inserted during the physical design stage to ensure the integrity of the layout and meet the manufacturing requirements. 

#### Precheck

The precheck summary shows the results of all the tests we run on the design. All the checks need to be green to submit to the chip.

#### Viewer

This section gives you the 3D viewer link and the 2D render of your design. Open the 3D viewer by clicking the "open 3D viewer" link.

Can you match the logic gates you used in the Wokwi design with the standard cells in the physical layout?

{{< figure src="images/gdsoutput.png">}}   

**Keyboard Controls:**
1. Hide Fill, Decap, Tap cells.
2. Hide top cell geometry.
3. Isolate selection / back.
4. Zoom to selection.

**Mouse Controls:**
- Use the mouse wheel or zoom gesture to zoom.
- Pan and tilt by clicking and dragging.
- Shift with shift left click and drag.
- The layer visibility can be toggled using the checkboxes on the right of viewer under the 'layers' section.

{{< figure src="images/or_layout_annotated.png">}}   

## Congratulations!

The GDS action should have completed successfully, and the project should now be submitted to your selected shuttle!

## If you have time, try these next steps

* Add a new cell in your Wokwi design and re-trigger the GitHub action to see the result (see the tips section below for how to do that).
* If you're familiar with Verilog or Chisel, you can take a look at the [HDL templates](/hdl/templates) and see how more advanced designs can be realised.
* Take a look at the Verilog exported from your design. Here's what [gets exported from the template](https://wokwi.com/api/projects/354858054593504257/verilog). Edit the URL and change the ID for your design's.
* Watch the video about [how the GitHub action works behind the scenes](/making_asics).

## Tips

On each commit the GitHub actions runs automatically. However, if you change your Wokwi design, you can force the action to run again by using the 'Run workflow' button.

{{< figure src="images/manual_action_test_gds.png" title="Re-run Workflow" >}}   

---
title: 'Create GDS from Tinytapeout Git Templates'
linkTitle: 'Template to GDS'
description: 'preparing your design for submission using the TinyTapeout GitHub template'
weight: 60
---


This guide will walk you through the process of preparing your design for submission using the TinyTapeout GitHub template. We’ll cover the necessary steps to convert your design into the ASIC files required for chip manufacturing and also view your files with the 3d viewer.
If you don't already have a GitHub account, please create one before proceeding.

## Pre-requisites

**Check Wokwi Project**: The digital design that you want to tapeout can be created following this [video tutorial](https://tinytapeout.com/digital_design/wokwi/). Note that your wokwi project should comply with the [Tiny Tapeout Wokwi template](https://wokwi.com/projects/354858054593504257).

**Github Account**:  If you don’t have a GitHub account, sign up for one from [here](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).


## Access the GitHub Template

1. **Navigate to the Template Repository**: 
   - GitHub templates are predefined configurations or starter files that streamline the creation of new repositories, issues, or pull requests.
   - Repository Templates are used to create new repositories with predefined structure and files (e.g., documentation, configuration files). 
   - There two types of template repositories: one for Wokwi designs and another for Verilog or other HDLs. For this guide, we'll use the [Wokwi Template](https://github.com/TinyTapeout/tt09-wokwi-template). 


2. **Create Your Repository**:
   - Click the ‘Use this template’ button to generate your own copy of the repository.

   <img src="images/template.png" alt="Use Template Repository" width="600" style="border: 1px solid #000;"/>
<!-- ![Use Template Repository](images/template.png) -->

## Enable GitHub Actions
GitHub Actions allow automated tasks to run. They are enabled by default, but we need to enable them to publish the results.
1. **Go to Repository Settings**:
   - Access your repository’s settings page of the repo that is created by you from the template.

2. **Configure Build and Deploy Source**:
   - Navigate to the “Pages” section and set the build and deploy source to GitHub Actions.

3. **Allow Actions**:
   - Ensure that actions are enabled to create the results page.

   <img src="images/gitpages.png" alt="Enable Git Actions" width="550" style="border: 1px solid #000;" />
<!-- ![Enable GitHub Actions](images/gitpages.png) -->
##  Edit the `info.yaml` File

1. **Adjust Wokwi ID**:
   - For Wokwi projects, update the Wokwi ID in the `info.yaml` file of yur repository to match the ID from your Wokwi project.
   
    <img src="images/WOKWI_Project_ID.png" alt="Wokwi ID" width="550" style="border: 1px solid #000;"/>
<!-- ![Set the Wokwi ID](images/WOKWI_Project_ID.png) -->

2. **Fill Metadata**:
   - Enter the 'title', 'author', and your 'discord' username if applicable.
   - It is recommended to include a brief project description in the 'description' field.
   - For the Wokwi projects, the 'language' field should be set to 'Wokwi'.
   - If your project has clock frequency specification, provide the frequency in Hz under the 'clock_hz' field.

    <img src="images/wokwi_metadata.png" alt="WokwiMD" width="550" style="border: 1px solid #000;"/>
3. **Describe Pins**:
   - Provide descriptions for the pins to aid in testing the designs. 
   - The Pin description are the inputs and outputs utilised in your Wokwi Project. You can refer the Wokwi project diagram to fill the pin description fields. 
   - Note that the unused pins are to be left blank and additional pins cannot be included. 

        <img src="images/info_yaml.png" alt="yamlinfo" width="200" style="border: 1px solid #000;"/>

    - Save your changes by clicking the commit button.

       <img src="images/commitinfo.png" alt="commitinfo" width="550" style="border: 1px solid #000;"/>
<!-- 
![info.yaml](images/info_yaml.png)  -->

<!-- ![Commit the modified info.yaml](images/commitinfo.png) -->
##  Edit the `info.md` File in the Docs Directory

  **Update Documentation**:
   - Include detailed instructions on how to experiment with your design. - This documentation is useful for users receiving the chip and for you to recall design details later and also generates the datasheet for your project. 
   - Note that leaving the info.md unmodified will cause the 'docs' action to fail. 
   - Save and commit your changes as you did before.

      <img src="images/documentation.png" alt="doc" width="550" style="border: 1px solid #000;"/>
<!-- ![Documentation](images/documentation.png) -->


## Wokwi Actions

1. **Access Actions Tab**:
   - Go to the ‘Actions’ tab in your repository to view results. Note that each commit will trigger these actions to run again. Find out more: how the GitHub actions work to build the [GDS](https://www.zerotoasiccourse.com/terminology/gds2/) files for your project, you can check [here](https://tinytapeout.com/making_asics/).
    
2. **Actions for Wokwi**:

    - __docs__: This action generates a preview of how your documentation will look.
    - __fpga__: This action generates bitstream for a compatible FPGA
    - __gds__: This action generates the gds for your project, results for warnings, utilization statistics, and cell usage.
    - __wokwi test__: This action will test the design if you created a truth table for your wokwi design.
    

       <img src="images/actions.png" alt="actionslist" width="300" style="border: 1px solid #000;"/>

    Note that red indicates failure and green indicates success. Only the actions 'docs' and 'gds' need to be green.

## Troubleshoot Action Failures 

1. **Docs Action**:

   - This action generates a preview of how your documentation will look.
   - Check the action result to get the status of the check. 

   <img src="images/CheckActions.png" alt="Docs Action Result" width="550"/>
   
   - View the Errors and Modify your Docs based on the Error showed, commit the new info.md for actions to rerun. [Tips]() for common cause of errors is shown in the end of this guide.

   <img src="images/checkerrors.png" alt="Docs Action error" width="550"/>

   - Committing the change will re-run the action and you will be able to check if your change has fixed the problem.

    <img src="images/changes_docscheck_success.png" alt="Docs Action success" width="550"/>

    - Download the PDF to verify formatting and content.

    <img src="images/actions_pdf.png" alt="Docs Action pdf" width="300"/>


<!-- ![Docs Action Result](images/CheckActions.png)
![Docs Error Result](images/checkerrors.png) -->
<!--    
![Docs Success Result](images/changes_docscheck_success.png)
![Docs Success PDF](images/actions_pdf.png) -->

2. **GDS Action**:

   - This action results in warnings, utilization statistics, and cell usage.
   - View Action results.
   - what do the metrics mean - what standard cells are in use? is that what you expected? explain why the results here might not match your drawing
   - Use the 3D viewer to inspect your design by panning, zooming, and toggling layer visibility. open the 3d viewer
    guide to the viewer, what each part does, the short cut keys.
    - isolate a cell, where are the mosfets


3. **Manual Action Check**:

    - Usually, on each commit, the workflow runs automatically, However in a scenario that you changed WOKWI design itself and now you want to check the action result, Manual action workflow is to be opted. 

    <img src="images/manual_action_test_gds.png" alt=" Action Manual" width="550"/>

## Next Steps

try adding a new standard cell and re-run the action (how to re-run)


## Tips
where to look if an action fails.  common causes
    no permissions to publish page
    issue with info.yaml incorrect wowi Id
    issue with no docs / default docs

<!-- 

## Working with an HDL
look at the verilog template, this is what we’d use for more advanced designs.
link to the HDL page on the website
1. **Overview**:
   - Learn how to submit a Verilog or other HDL project to TinyTapeout. Refer to the resources available on the ‘working with HDLs’ page.

2. **Verilog Demo**:
   - Review the Verilog demo repository. Ensure that the Wokwi ID is set to zero and list all necessary source files and the top module name.

3. **Testing Your HDL Design**:
   - Use a Makefile and a top-level test bench for testing. Consider gate-level verification to ensure accuracy. -->
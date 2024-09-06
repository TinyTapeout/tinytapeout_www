---
title: 'Create GDS from Tinytapeout Git Templates'
linkTitle: 'Template to GDS'
description: 'preparing your design for submission using the TinyTapeout GitHub template'
weight: 60
---


### Introduction

This guide will walk you through the process of preparing your design for submission using the TinyTapeout GitHub template. We’ll cover the necessary steps to convert your design into the ASIC files required for chip manufacturing. If you don't already have a GitHub account, please create one before proceeding.

### Working with WOKWI Designs

## Step 1: Access the GitHub Template

1. **Create a GitHub Account**: If you don’t have a GitHub account, sign up for one.

2. **Navigate to the Template Repository**: 
   - We offer two types of repositories: one for Wokwi designs and another for Verilog or other HDLs. For this guide, we'll use the Wokwi template.

3. **Create Your Repository**:
   - Click the ‘Use this template’ button to generate your own copy of the repository.
![Use Template Repository](images/template.png)
## Step 2: Enable GitHub Actions

1. **Go to Repository Settings**:
   - Access your repository’s settings page.
   
2. **Configure Build and Deploy Source**:
   - Navigate to the “Pages” section and set the build and deploy source to GitHub Actions.

3. **Allow Actions**:
   - Ensure that actions are enabled to create the results page.
![Enable GitHub Actions](images/gitpages.png)
## Step 3: Edit the `info.yaml` File

1. **Adjust Wokwi ID**:
   - For Wokwi projects, update the Wokwi ID in the `info.yaml` file to match the ID from your Wokwi project.
   - For HDL projects, use the source files section as covered in a separate guide titled “Working with an HDL”.
![Set the Wokwi ID](images/WOKWI_Project_ID.png)
2. **Configure Design Settings**:
   - Set the number of tiles for your design. Start with 1 tile and adjust as necessary for larger designs.

3. **Fill Out Metadata**:
   - Enter the title, author information, and your Discord username if applicable. This will help in assigning a special role on Discord upon submission.

4. **Describe Pins**:
   - Provide descriptions for the pins to aid in testing other designs. Save your changes by clicking the commit button.

![info.yaml](images/info_yaml.png) 

![Commit the modified info.yaml](images/commitinfo.png)
## Step 4: Edit the `info.md` File in the Docs Directory

1. **Update Documentation**:
   - Include detailed instructions on how to experiment with your design. This documentation is useful for users receiving the chip and for you to recall design details later.

2. **Enhance Documentation**:
   - Add pictures and links to additional resources if needed. Save and commit your changes.
![Documentation](images/documentation.png)
## Step 5: Review GitHub Actions Results

1. **Access Actions Tab**:
   - Go to the ‘Actions’ tab in your repository to view results.

2. **Check Docs Action**:
   - This action generates a preview of how your documentation will look. Download the PDF to verify formatting and content.
![Docs Action Result](images/CheckActions.png)
![Docs Error Result](images/checkerrors.png)
   - Modify your Docs based on the Error showed, commit the new info.md for actions to rerun.
![Docs Success Result](images/changes_docscheck_success.png)
3. **Review GDS Action**:
   - Examine the GDS action results for warnings, utilization statistics, and cell usage. Use the 3D viewer to inspect your design by panning, zooming, and toggling layer visibility. 

4. **Share Your Design**:
   - Post a screenshot of your design on social media with a description and the hashtag #TinyTapeout.

## Step 6: Troubleshoot Problems

1. **Handle GDS Action Failures**:
   - If the GDS action fails, it might be due to issues with your design or its size. Review logs and GDS artefacts for errors. If necessary, join the Discord chat server for assistance.

2. **Check Logs**:
   - Examine the synthesis log file for design errors. For size issues, consider reducing the design size or increasing the number of tiles in the `info.yaml`.

## Step 7: Submit Your Design

1. **Go to Submission Page**:
   - Visit [TinyTapeout’s submission page](https://tinytapeout.com) and click the button to access the submission application.

2. **Sign In and Submit**:
   - Log in with your GitHub account. Paste the URL of your GitHub repository into the submission form and press submit. Apply any coupons if you have them; otherwise, proceed with payment.

3. **Submit a Revision**:
   - To finalize your project, submit a revision. Once committed to the shuttle, any changes will require creating a new version.


### Working with an HDL

1. **Overview**:
   - Learn how to submit a Verilog or other HDL project to TinyTapeout. Refer to the resources available on the ‘working with HDLs’ page.

2. **Verilog Demo**:
   - Review the Verilog demo repository. Ensure that the Wokwi ID is set to zero and list all necessary source files and the top module name.

3. **Testing Your HDL Design**:
   - Use a Makefile and a top-level test bench for testing. Consider gate-level verification to ensure accuracy.

## GitHub Actions for ASIC File Creation

1. **Understand GitHub Actions**:
   - GitHub actions in the `.github` directory automate the process of creating GDS files. The workflows are defined in YAML files.

2. **GDS Action**:
   - This action includes steps for using OpenLane to generate GDS files. Check the composite action file for environment variables and configuration.

3. **OpenLane**:
   - OpenLane converts your design into ASIC files. Learn more about OpenLane and its role in the design-to-manufacturing process.

## Conclusion

You’ve now completed the steps to prepare and submit your design for TinyTapeout. Happy designing, and we look forward to seeing your ASIC creations!

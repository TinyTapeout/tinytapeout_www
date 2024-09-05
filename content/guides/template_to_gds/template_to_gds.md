---
title: 'GDS File Creation from Template'
linkTitle: 'Create GDS Files With Our Github Template'
description: 'The detailed procedure to get GDS from a wokwi template repo'
weight: 60
---


This guide will help you through the essential steps to set up a GitHub repository, enable actions, and successfully commit your design for TinyTapeout. Follow each step carefully.

## Use the Template Repository
-------------------------------

Start by using the template repository to create your own copy of the project. This will help you build upon an existing foundation.

![Use Template Repository](template.png)

## Enable GitHub Actions
-------------------------

Enabling GitHub Actions allows automated tasks to run, like testing or building your project. Make sure to activate actions for your repository.

![Enable GitHub Actions](gitpages.png)

## Update info.yaml
--------------------

The `info.yaml` file contains important configuration details about your project. Follow the subsections below to update this file properly.

### a. Name and Description

Update the `name` and `description` fields in the `info.yaml` file. These fields describe your project and give it a unique identity.

name: "Your Project Name"
description: "A brief description of your project"
        

### b. Set the Wokwi ID

Add your Wokwi project ID in the `info.yaml` file under the `wokwi_id` field to connect your design to your Wokwi simulation.

wokwi\_id: '408122667678580737'
        

wokwi\_id is found from the number succeeding the URL in your WOKWI Project

![Set the Wokwi ID](WOKWI_Project_ID.png)

### c. Using More Tiles

If your design needs more than one tile, update the `tiles` field in the `info.yaml` file. This allows you to expand the area for your design.

![info.yaml](infoyaml.png) ![Commit the modified info.yaml](commitinfo.png)

## Documentation
-----------------

Make sure to write clear documentation about your project for others to understand it. The `README.md` file is a good place to start.

![Documentation](documentation.png)

## Commit Changes
------------------

After making changes to the files, commit them to your repository. This saves your progress and updates the code.

![Commit Changes](commit-changes.png)

## Actions
-----------

GitHub Actions will automatically run after committing. You can see the results under the "Actions" tab in your repository.

![Actions](actions-tab.png)

## Docs Action Result
----------------------

The Docs action generates project documentation. Check the result to ensure your documentation is correctly built.

![Docs Action Result](docs-action-result.png)

## GDS Action Result
---------------------

The GDS action generates the physical layout of your design. Review the results to ensure the GDS file is correctly generated.

![GDS Action Result](gds-action-result.png)

## 3D Viewer
-------------

You can view the 3D model of your chip layout in the 3D viewer. This helps visualize how your design will look.

![3D Viewer](3d-viewer.png)

## Post your GDS!
-------------------

Once everything is set up, submit your GDS file for fabrication.

![Post Your GDS!](post-gds.png)

## Status Lights
------------------

Status lights give you a quick overview of whether your actions are passing or failing. Check these lights to monitor progress.

![Status Lights](status-lights.png)

## GDS Fail
-------------

If the GDS generation fails, review the error logs in the Actions tab and correct the design.

![GDS Fail](gds-fail.png)

## Submitting
---------------

Finally, after ensuring everything is correct, submit your design to the team for final review and fabrication.

![Submitting Your Design](submitting.png)
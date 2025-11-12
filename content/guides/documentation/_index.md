---
title: 'Updating your project documentation'
description: 'Learn how to update your project documentation in the Tiny Tapeout shuttle repository'
weight: 60
---

This guide will show you how to update your project's documentation in the Tiny Tapeout shuttle repository.

{{% notice warning %}}
Note: only changes to the project's documentation (including title, author, pinout, etc.) will be accepted. We will not accept changes to the sources, top level module name, number of tiles / analog pins, etc.
{{% /notice %}}

## Step-by-Step Guide

1. Go to the shuttle's GitHub repo:

| Shuttle              | Repo                                                                                                     |
| -------------------- | -------------------------------------------------------------------------------------------------------- |
| Tiny Tapeout 6       | [https://github.com/TinyTapeout/tinytapeout-06](https://github.com/TinyTapeout/tinytapeout-06)           |
| Tiny Tapeout 7       | [https://github.com/TinyTapeout/tinytapeout-07](https://github.com/TinyTapeout/tinytapeout-07)           |
| Tiny Tapeout 8       | [https://github.com/TinyTapeout/tinytapeout-08](https://github.com/TinyTapeout/tinytapeout-08)           |
| Tiny Tapeout 0p2     | [https://github.com/TinyTapeout/tinytapeout-ihp-0p2](https://github.com/TinyTapeout/tinytapeout-ihp-0p2) |
| Tiny Tapeout IHP 25a | [https://github.com/TinyTapeout/tinytapeout-ihp-25a](https://github.com/TinyTapeout/tinytapeout-ihp-25a) |
| Tiny Tapeout IHP 25b | [https://github.com/TinyTapeout/tinytapeout-ihp-25b](https://github.com/TinyTapeout/tinytapeout-ihp-25b) |
| Tiny Tapeout SKY 25a | [https://github.com/TinyTapeout/tinytapeout-sky-25a](https://github.com/TinyTapeout/tinytapeout-sky-25a) |
| Tiny Tapeout SKY 25b | [https://github.com/TinyTapeout/tinytapeout-sky-25b](https://github.com/TinyTapeout/tinytapeout-sky-25b) |

For other shuttles, you can find the repo link in the [chips page](https://tinytapeout.com/chips/): click on the shuttles name, the look for the "Github repository" link in the "Design details" section.

2. Go to your project's directory: `projects/tt_um_project_name`

3. You can edit the `info.yaml` (or `docs/info.md`) directly via the GitHub web interface.

   {{< figure src="images/edit_info_via_web.png" title="Editing info.yaml directly via the web interface" >}}

   Alternatively, if you want to make changes to multiple files (e.g. add a picture, or edit both info.yaml and info.md), you'll need to fork the repo first. Here's how:

   - Look for the "Fork" button in the top-right corner of the repository page and click it. This creates your own copy of the repository.

   {{< figure src="images/fork_repo1.png" title="Click the Fork button to create your own copy" >}}

   - On the next screen, you can keep the default settings (fork name and description). Just click "Create fork" to continue.

   {{< figure src="images/fork_repo2.png" title="Confirm the fork settings and create it" >}}

   Once you have your fork, you can press "." in the GitHub web interface to bring up an interactive code editor (VS Code web edition) that can help you make and commit changes.

   You can also check out the repo to your computer, but this might take several minutes, as the shuttle repositories tend to be large.

4. When you commit, start your commit message with "docs(tt_um_project_name):". For example:

```
docs(tt_um_urish_simon): update pinout info
```

5. Creating a Pull Request:

   - Go to your fork of the shuttle repository on GitHub
   - You should see a message saying "This branch is X commits ahead of TinyTapeout:main" with a "Contribute" button

   {{< figure src="images/fork_ahead.png" title="Fork ahead of main branch" >}}

   - Click the "Contribute" button and select "Open pull request"

   {{< figure src="images/open_pr.png" title="Opening a pull request" >}}

   - In the pull request title, use the format: `docs(tt_um_project_name): brief description`
   - In the description, provide:
     - A clear explanation of what documentation you've updated
     - Any relevant context or reasoning for the changes
     - If you've added images, mention them

   {{< figure src="images/pr_description.png" title="Pull request title and description" >}}

   - Review the "Files changed" tab to ensure only documentation files are modified

   {{< figure src="images/files_changed.png" title="Reviewing changed files" >}}

   - Click "Create pull request"

6. After Creating the Pull Request:
   - Wait for the automated checks to complete
   - If any checks fail, review the error messages and make necessary corrections
   - A maintainer will review your pull request
   - Address any feedback or requested changes from the maintainer
   - Once approved, your documentation updates will be merged

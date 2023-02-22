---
title: Draw a CMOS inverter
description: "Understand the benefit of CMOS and explore standard cells"
weight: 80
---


#8 Draw a CMOS inverter
-----------------------

### Aim

*   Understand the benefit of CMOS
*   Learn what a standard cell is
*   Compare your design to the Sky130 standard cell
*   Next steps

As we’ve seen, an NMOS inverter is inefficient because it’s wasting energy through the resistor. CMOS logic replaces the pull up resistor with a P type mosfet. As the P type is the complementary version of the N type, we call this type of logic Complementary Metal Oxide Semiconductor or CMOS for short.

![](../images/image35.png?width=20pc)

There are many ways to draw this, but it’s fairly usual to use the same piece of polysilicon as the gate for both the P type and N type. If you get stuck you can check [my solutio](https://www.google.com/url?q=https://app.siliwiz.com/?preset%3Dinverter&sa=D&source=editors&ust=1677096507882858&usg=AOvVaw16w4Sklb5KXveeniSpaa8N)[n here](https://www.google.com/url?q=https://app.siliwiz.com/?preset%3Dinverter&sa=D&source=editors&ust=1677096507883367&usg=AOvVaw3Z7j2YOuggPBfhNrv0A6jZ).

![](../images/image56.png)

And the simulation shows the CMOS inverter is working nicely:

![](../images/image40.png)

I also added the current in the simulation traces. You can see we get a little spike as the inverter operates, but in either high or low states, the current is very low. This efficiency is the reason why CMOS is still the most commonly used type of logic gates used in computer chips.

### Standard cells

We’ve seen how to draw and make a logic inverter, but there are many other types of logic gates like AND, OR and NOT gates. Feel free to try drawing some yourself! Share your designs with us in the [Discord community channel](https://www.google.com/url?q=https://discord.gg/e3FK68Z98y&sa=D&source=editors&ust=1677096507885259&usg=AOvVaw1pIrT3WpzY6P4WJp0CquRy). Use the hashtag [#SilliWiz](https://www.google.com/url?q=https://twitter.com/search?q%3D%2523siliwiz&sa=D&source=editors&ust=1677096507885631&usg=AOvVaw2FA_YkfxOXubxQVDFoXVAv) on social media.

A typical PDK will include hundreds of standard cells. Here’s the Skywater 130nm inverter standard cell:

![](../images/image62.png)

Can you identify the P and N type MOSFETs? Can you see the input and output ports? [Here’s a 3D view](https://www.google.com/url?q=https://gds-viewer.tinytapeout.com/?model%3Dhttps://tinytapeout.github.io/sky130B-cells-gltf/cells/sky130_fd_sc_hd__inv_1.gds.gltf&sa=D&source=editors&ust=1677096507886787&usg=AOvVaw3qc6k2CXCpibo2qH9bFddo) of the same cell:

![](../images/image18.png)

One thing that makes standard cells standard is that they all have the same height and the top and bottom always includes the power supply vdd and vss. This lets us put lots of cells all together on a grid.

Here’s a 3D view of some standard cells all together, powered by the blue vss and vdd lines.

![](../images/image11.png)

Can you spot an inverter?

And here we see how the wires connect up the cells into a more complex digital machine:

![](../images/image43.png)

If you want to explore this design yourself:

*   [here’s the 3D viewer](https://www.google.com/url?q=https://gds-viewer.tinytapeout.com/?model%3Dhttps://tinytapeout.github.io/tt02-test-invert/tinytapeout.gds.gltf&sa=D&source=editors&ust=1677096507888832&usg=AOvVaw0n6FMqH5enC06upkUj0WFp)
*   [the logic design](https://www.google.com/url?q=https://wokwi.com/projects/341535056611770964&sa=D&source=editors&ust=1677096507889212&usg=AOvVaw2pXUbPa4nZI0BDFQUAlI6Q)
*   [more information about the design](https://www.google.com/url?q=https://tinytapeout.com/runs/tt02/000/&sa=D&source=editors&ust=1677096507889590&usg=AOvVaw0ndEnrQeNyrfgml8RVCe2_)

### What next?

[Leave feedback!](https://www.google.com/url?q=https://forms.gle/fY5phQRc2dnzBRmf9&sa=D&source=editors&ust=1677096507890290&usg=AOvVaw23b6Urq4ydkiOmA92woqgk) Please let us know your thoughts and ideas for improvements. You can also use this form to request more information about SiliWiz and TinyTapeout for schools and universities.

*   Share a picture of your design on social media with the [#SiliWiz](https://www.google.com/url?q=https://twitter.com/search?q%3D%2523siliwiz&sa=D&source=editors&ust=1677096507890958&usg=AOvVaw2Pqary8NUr6LgxwTOD7xHu) [hashtag](https://www.google.com/url?q=https://twitter.com/search?q%3D%2523siliwiz&sa=D&source=editors&ust=1677096507891252&usg=AOvVaw23WH0NMMrrNnZuxMTY_1A5)
*   [Learn how to use logic gates to build simple circuits and get them manufactured!](https://www.google.com/url?q=http://tinytapeout.com&sa=D&source=editors&ust=1677096507891693&usg=AOvVaw1a00zQLiEpc63Oz04wGe1E)
*   [Take Matt’s highly rated and more advanced Zero to ASIC course](https://www.google.com/url?q=https://zerotoasiccourse.com&sa=D&source=editors&ust=1677096507891987&usg=AOvVaw08RwuIPWU-5Z7WfVdR7Zza)
*   Try drawing stick diagrams with [Stixu](https://www.google.com/url?q=https://stixu.io/&sa=D&source=editors&ust=1677096507892273&usg=AOvVaw0Wn1k9XnCNm1VYNoR8A2fs)
*   [Watch videos on the Zero to ASIC course youtube channel](https://www.google.com/url?q=https://youtube.com/zerotoasic&sa=D&source=editors&ust=1677096507892536&usg=AOvVaw1lAxJkJ8Gfuq5hNtitr90S)
*   [Sign up to the mailing list](https://www.google.com/url?q=https://zerotoasiccourse.com/newsletter&sa=D&source=editors&ust=1677096507892810&usg=AOvVaw3PsiMt612VzTGW53Ug_PsA)
*   [Join the community discord](https://www.google.com/url?q=https://discord.gg/e3FK68Z98y&sa=D&source=editors&ust=1677096507893229&usg=AOvVaw2OkGpsdxs6ucvlFJ9ay3J0) and let us know what you think about SiliWiz!
*   [Contribute to SiliWiz](https://www.google.com/url?q=https://github.com/wokwi/siliwiz/issues&sa=D&source=editors&ust=1677096507893721&usg=AOvVaw3csmNkwjxmWYQh8h6yarA7)

Thanks and credits
------------------

SiliWiz is a project by [Matt Venn](https://www.google.com/url?q=https://mattvenn.net/&sa=D&source=editors&ust=1677096507894454&usg=AOvVaw0TScpfx2uUxKvP3L7lWnKW) and [Uri Shaked](https://www.google.com/url?q=https://urish.org/&sa=D&source=editors&ust=1677096507894736&usg=AOvVaw1wjlCnTnUIAASkkiP8R7v2). Thanks to all the testers and in particular to:

*   Tim Edwards & Holger Vogt for help with creating SiliWiz,
*   Eric Smith and Thomas Parry for lesson ideas and review.

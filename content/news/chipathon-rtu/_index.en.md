---
title: Chipathon 2026 at Riga Technical University
description: 90 participants submitted 75 tapeouts, learning chip design through songs, hands-on tools, and step-by-step guides.
author: Tiny Tapeout Team
date: "2026-10-21"
type: news
tags: ['event']
layout: single
cover:
    image: images/matt.jpg
    alt:  Matt at Chipathon 2026 - Riga Technical University
---

Tiny Tapeout was invited to run a workshop at Riga, Latvia, during the Chipathon 2026.

 [Chipathon](https://latvianccc.lv/2026/09/03/16-18-oktobri-rtu-notiks-chip-design-sprint-chipathon/) is a hands-on microchip and integrated circuit (IC) design event, which took place from October 16 to 18 at [Riga Technical University](https://www.rtu.lv/en). Ninety participants came ready to learn how a chip goes from idea to silicon.

<div class="tt-gallery" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
<img src="images/a.jpg" alt="a" data-index="0" style="width:100%; cursor:pointer;">
<img src="images/b.jpg" alt="b" data-index="1" style="width:100%; cursor:pointer;">
<img src="images/c.jpg" alt="c" data-index="2" style="width:100%; cursor:pointer;">
<img src="images/d.jpg" alt="c" data-index="2" style="width:100%; cursor:pointer;">
<img src="images/e.jpg" alt="e" data-index="3" style="width:100%; cursor:pointer;">
<img src="images/f.jpg" alt="f" data-index="4" style="width:100%; cursor:pointer;">
<img src="images/g.jpg" alt="g" data-index="5" style="width:100%; cursor:pointer;">
<img src="images/h.jpg" alt="h" data-index="6" style="width:100%; cursor:pointer;">
<img src="images/i.jpg" alt="i" data-index="7" style="width:100%; cursor:pointer;">
</div>

<div id="tt-lightbox" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.9); z-index:2147483647; align-items:center; justify-content:center; margin:0; padding:0; border:none;">
  <div id="tt-wrap" style="position:relative; display:inline-block; margin:0; padding:0; border:none; line-height:0;">
    <img id="tt-img" src="" alt="" style="display:block; max-width:90vw; max-height:90vh; margin:0; padding:0; border:none; box-shadow:none; background:none;">
    <button id="tt-prev" type="button" style="position:absolute; left:10px; top:50%; transform:translateY(-50%); width:56px; height:56px; margin:0; padding:0; font-size:40px; line-height:56px; text-align:center; color:#fff; background:rgba(0,0,0,0.6); border:none; border-radius:50%; cursor:pointer;">&#8249;</button>
    <button id="tt-next" type="button" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); width:56px; height:56px; margin:0; padding:0; font-size:40px; line-height:56px; text-align:center; color:#fff; background:rgba(0,0,0,0.6); border:none; border-radius:50%; cursor:pointer;">&#8250;</button>
  </div>
  <button id="tt-close" type="button" style="position:fixed; top:16px; right:20px; margin:0; padding:0; font-size:36px; line-height:1; color:#fff; background:none; border:none; cursor:pointer;">&times;</button>
</div>

<script>
(function () {
  var imgs = Array.prototype.slice.call(document.querySelectorAll('.tt-gallery img'));
  var box = document.getElementById('tt-lightbox');
  var big = document.getElementById('tt-img');
  var current = 0;

  // Move the overlay to the top of the page so theme containers can't hide it
  document.body.appendChild(box);

  function show(i) {
    current = (i + imgs.length) % imgs.length;
    big.src = imgs[current].src;
  }
  function open(i) { show(i); box.style.display = 'flex'; }
  function close() { box.style.display = 'none'; }

  imgs.forEach(function (img, i) {
    img.addEventListener('click', function () { open(i); });
  });
  document.getElementById('tt-next').addEventListener('click', function (e) { e.stopPropagation(); show(current + 1); });
  document.getElementById('tt-prev').addEventListener('click', function (e) { e.stopPropagation(); show(current - 1); });
  document.getElementById('tt-close').addEventListener('click', function (e) { e.stopPropagation(); close(); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });
  document.addEventListener('keydown', function (e) {
    if (box.style.display !== 'flex') return;
    if (e.key === 'ArrowRight') show(current + 1);
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'Escape') close();
  });
})();
</script>

The room had plenty of energy. Matt kept the tempo lively with his enthusiasm and musical talent.

> "I really enjoyed the songs, they were funny and had a lot of useful information in them."
> "I like the tempo and the approach Matt demonstrated. It's like you are enjoying the show + gaining new knowledges."

The workshop focused a lot around hands-on practice. Participants used [Wokwi](https://wokwi.com/) to build and test their designs in the browser, and [SiliWiz](https://app.siliwiz.com/) to work through transistor-level designs, including a CMOS inverter.

> "The wokwi was awesome! Got to learn new stuff in that site!!" 

> "the siliWiz propably the most exciting thing." Participants also said, "I liked that everthing has a tool ready and that they are easy to use."

The TAs were always there to give extra help, going deeper into the topics and answering the harder questions.

By the end of the workshop, participants had submitted 75 tapeouts. That means 75 designs that are now on their way to becoming real chips as part of the [TTSKY26d](https://app.tinytapeout.com/shuttles/ttsky26d) shuttle.

Thank you to everyone who joined us in Riga, and to the Riga Technical University for hosting!

 {{< figure src="images/RTU.jpg" title="Riga Technical University" >}}
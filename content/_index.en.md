---
title: "Tiny Tapeout"
images: [/images/tinytapeout.jpeg]
LastModifierDisplayName: matt venn
---

# From idea to chip design in minutes!

{{< youtube eMvZ5xsPXhA >}}

TinyTapeout is an educational project that makes it easier and cheaper than ever to get your digital designs manufactured on a real chip!

We ran [TinyTapeout-01 in August](/runs/tt01/) and received 150 submissions in just a couple of weeks.

[**Submissions are now open for Tiny Tapeout 2! Closing on 14th November at 18:00 CET**](/#submit-your-design)

{{<mermaid>}}
gantt
        dateFormat  YYYY-MM-DD
        axisFormat %d-%b
        section You
        Work on your design       :   active,2022-10-20,2022-11-14
        Submit your design        :   active,2022-11-09,2022-11-14
        
        section Us
        Join all designs          :   2022-11-14, 1d
        Send to Efabless          :   2022-11-15, 1d
{{</mermaid>}}

<!-- ![timeline](/images/timeline.png) -->

> **Testimonial** Thank you for doing it - I always wanted to join these OpenMPW shuttles, but never felt ready for it. TinyTapeout provided a way for me to get in, while only spending 1 evening of effort on my end. That's amazing! 

See what [people are saying about TinyTapeout](https://twitter.com/search?q=tinytapeout)!

---

# Get started

* If you're new to digital design - start by taking some of our [lessons here](digital_design).
* Then create your own design with the [Wokwi template](https://wokwi.com/projects/339800239192932947) or for advanced users, [an HDL](/hdl).
* For help and support, check the [FAQ](faq) and [join the fast & friendly conversations on Discord](https://discord.gg/qZHPrPsmt6).

---

# Get your submission ready

{{< youtube GlvlZzjyUGI >}}

* [GitHub submission template](https://github.com/TinyTapeout/tt02-submission-template).
* If you want to use an HDL like Verilog, please take a look [here](/hdl).

---

# Submit your design

* Design + Physical PCB + ASIC = $100 + p&p
* Design only = $25

<style>
  [x-cloak] { display: none !important; }
  .checkout--product { display: flex; align-items: baseline; font-weight: normal; }
  .checkout--product small { display: block; color: gray; }
</style>

<div x-data="checkout" x-cloak>

  <div x-show="soldOut" style="color: red">Sorry, we are sold out!</div>

  Project Repository URL:

  <input x-model="repo" x-bind:disabled="validating || validated" type="text" placeholder="https://github.com/user/repo" />

  <div x-show="loading">Loading...</div>
  <button class="button" x-on:click="next()" x-show="!loading" x-bind:disabled="validating || validated">Next</button>

  <div style="color:red" x-show="errorMessage" x-text="errorMessage"></div>
  <div style="color:purple" x-show="validating">Validating repo...</div>

<div x-show="validated">

### Please choose your package:

<fieldset>
  <label class="checkout--product">
    <input x-model="selectedProduct" value="tt-asic-pcb" type="radio" x-bind:disabled="stock['tt-asic-pcb'] <= 0" />
    <div>
      Design slot + Physical PCB with the chip ($100)
      <small><span x-text="stock['tt-asic-pcb']"></span> available</small>
    </div>
  </label>

  <label class="checkout--product">
    <input x-model="selectedProduct" value="tt-design-only" type="radio" x-bind:disabled="stock['tt-design-only'] <= 0"/>
    <div>
      Design slot only ($25) 
      <small><span x-text="stock['tt-design-only']"></span> available</small>
    </div>
  </label>
</fieldset>

<button x-on:click="payment()" x-bind:disabled="redirecting">Continue to Payment</button> 
<!-- **<div x-bind:disabled>Submissions will be open on November 9th</div>** -->

<div style="color:red" x-show="checkoutError" x-text="checkoutError"></div>

</div> <!-- validated -->

</div> <!-- checkout -->

{{< checkout-script >}}

{{% feedback %}}

---

# Sign up

Sign up to the mailing list for the latest news, and to make sure you don't miss your chance to submit a design.

{{< mailchimp >}}

---

> **Testimonial** Just made a 4-bit barrel shifter by using this http://tinytapeout.com toolkit. It's quick and fun to use. The GDS even generated within minutes. Everyone should try this.

---
title: "Tiny Tapeout"
images: [/images/tinytapeout.jpeg]
LastModifierDisplayName: matt venn
---

# From idea to chip design in minutes!

{{< youtube fblSVCPvCiY >}}

TinyTapeout is an educational project that makes it easier and cheaper than ever to get your digital designs manufactured on a real chip! See what other people are making by [taking a look at what was submitted for the last run](/runs/tt02).

[**Submissions are now open for Tiny Tapeout 3!**](/#submit-your-design)

<div x-data="checkout"> There are currently 
<b x-text="stock['tt-asic-pcb']">...</b> Design + PCB + ASIC slots and <b x-text="stock['tt-design-only']">...</b> Design only slots available</small>. 
</div>

{{<mermaid>}}
gantt
        dateFormat  YYYY-MM-DD
        axisFormat %d-%b
        section You
        Work on your design       :   active,2023-03-01,2023-04-23
        Submit your design        :   active,2023-03-03,2023-04-23
        
        section Us
        Join all designs          :   2023-04-24, 1d
        Send to Efabless          :   2023-04-24, 1d
{{</mermaid>}}

> **Testimonial** Thank you for doing it - I always wanted to join these OpenMPW shuttles, but never felt ready for it. TinyTapeout provided a way for me to get in, while only spending 1 evening of effort on my end. That's amazing!

See what [people are saying about TinyTapeout](https://twitter.com/search?q=tinytapeout)!

---

# Get started

* If you're new to digital design - start by taking some of our [lessons here](digital_design).
* Then create your own design with the [Wokwi template](https://wokwi.com/projects/357178660283991041) or for advanced users, [an HDL](/hdl).
* For help and support, check the [FAQ](faq) and [join the fast & friendly conversations on Discord](https://discord.gg/qZHPrPsmt6).

---

# Get your submission ready

{{< youtube 5l_TVgu__pg >}}

* [GitHub submission template](https://github.com/TinyTapeout/tt03-submission-template).
* If you want to use an HDL like Verilog, please take a look [here](/hdl).

---

<style>
  .fullbleed-bg {
    position: absolute;
    top: -8px;
    left: 50%;
    right: 50%;
    margin-left: calc(-50vw - 158px);
    width: 100vw;
    bottom: -8px;
    z-index: -1;
  }
  @media only all and (max-width: 59.938em) {
    .fullbleed-bg {
      margin-left: calc(-50vw - 124px);
    }
  }
  @media only all and (max-width: 47.938em) {
    .fullbleed-bg {
      margin-left: calc(-50vw - 8px);
    }
  }
</style>

<div style="position: relative; padding: 8px 0 16px; margin-bottom: 32px">
  <!-- background color strip -->
  <div style="background: #c8b2f3;" class="fullbleed-bg"></div>

# Submit your design

* Design + Physical PCB + ASIC = $100 + p&p
* Design only = $25
* By making an order, you agree to our [terms of service](terms).

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

</div>

{{% feedback %}}

---

# Sign up

Sign up to the mailing list for the latest news, and to make sure you don't miss your chance to submit a design.

{{< mailchimp >}}

---

> **Testimonial** Just made a 4-bit barrel shifter by using this http://tinytapeout.com toolkit. It's quick and fun to use. The GDS even generated within minutes. Everyone should try this.

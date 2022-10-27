---
title: 'Submit'
weight: 30
description: Submit your design for Tiny Tapeout-02
hidden: true
---

<style>
  [x-cloak] { display: none !important; }
  .checkout--product { display: flex; align-items: baseline; font-weight: normal; }
  .checkout--product small { display: block; color: gray; }
</style>

## Submit your design

<div x-data="checkout" x-cloak>

  <div x-show="soldOut" style="color: red">Sorry, we are sold out!</div>

  Project Repository URL:

  <input x-model="repo" x-bind:disabled="validating || validated" type="text" placeholder="https://github.com/user/repo" />

  <div x-show="loading">Loading...</div>
  <button x-on:click="next()" x-show="!loading" x-bind:disabled="validating || validated">Next</button>

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
<div style="color:red" x-show="checkoutError" x-text="checkoutError"></div>

</div> <!-- validated -->

</div> <!-- checkout -->

{{< checkout-script >}}

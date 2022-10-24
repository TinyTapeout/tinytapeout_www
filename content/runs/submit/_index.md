---
title: 'Submit'
weight: 30
description: Submit your design for Tiny Tapeout-02
hidden: true
---

## Submit your design

Available slots: <span id="available-slots">Loading...</span>

Project Repository URL:

<input id="url-input" type="text" placeholder="https://github.com/user/repo" />

<button onclick="Submit.nextClick()" id="next-button">Next</button>
<div style="color:red" id="error-message"></div>
<div style="color:purple; display: none" id="validating-message">Validating repo...</div>

<div id="payment-section" style="display: none">

### Please choose your package:

<fieldset id="package-type">
  <label><input name="package" value="full" type="radio" checked  /> Design slot + Physical PCB with the chip ($100)</label>
  <label><input name="package" value="design-only" type="radio" /> Design slot only ($25) </label>
</fieldset>

<button onclick="Submit.goToPayment()" id="payment-button">Continue to Payment</button>

</div>

<script type="text/javascript" module src="/scripts/checkout.js"></script>

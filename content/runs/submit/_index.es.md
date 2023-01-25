---
title: 'Enviar'
weight: 30
description: Envía tu diseño para el Tiny Tapeout-02
hidden: true
---

<style>
  [x-cloak] { display: none !important; }
  .checkout--product { display: flex; align-items: baseline; font-weight: normal; }
  .checkout--product small { display: block; color: gray; }
</style>

## Envía tu diseño

<div x-data="checkout" x-cloak>

  <div x-show="soldOut" style="color: red">Lo sentimos, ¡Estamos agotados!</div>

  URL del repositorio del proyecto:

  <input x-model="repo" x-bind:disabled="validating || validated" type="text" placeholder="https://github.com/user/repo" />

  <div x-show="loading">Cargando...</div>
  <button x-on:click="next()" x-show="!loading" x-bind:disabled="validating || validated">Siguiente</button>

  <div style="color:red" x-show="errorMessage" x-text="errorMessage"></div>
  <div style="color:purple" x-show="validating">Validando repositorio...</div>

<div x-show="validated">

### Por favor, elige tu paquete:

<fieldset>
  <label class="checkout--product">
    <input x-model="selectedProduct" value="tt-asic-pcb" type="radio" x-bind:disabled="stock['tt-asic-pcb'] <= 0" />
    <div>
      Espacio de diseño + PCB físico con el chip (100 dólares)
      <small><span x-text="stock['tt-asic-pcb']"></span> disponible</small>
    </div>
  </label>

  <label class="checkout--product">
    <input x-model="selectedProduct" value="tt-design-only" type="radio" x-bind:disabled="stock['tt-design-only'] <= 0"/>
    <div>
      Sólo el espacio de diseño (25 dólares)
      <small><span x-text="stock['tt-design-only']"></span> disponible</small>
    </div>
  </label>
</fieldset>

<button x-on:click="payment()" x-bind:disabled="redirecting">Continua con el pago</button>
<div style="color:red" x-show="checkoutError" x-text="checkoutError"></div>

</div> <!-- validated -->

</div> <!-- checkout -->

{{< checkout-script >}}

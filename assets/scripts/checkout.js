const checkoutServer = 'https://tt-payment-gateway.wokwi.workers.dev/';
const urlInputElement = document.getElementById('url-input');
const nextButtonElement = document.getElementById('next-button');
const validatingMessageElement = document.getElementById('validating-message');
const errorMessageElement = document.getElementById('error-message');
const availableSlotsElement = document.getElementById('available-slots');
const paymentSectionElement = document.getElementById('payment-section');
const paymentButtonElement = document.getElementById('payment-button');

let available = 0;

function updateAvailability() {
  // TODO: check availablity for the selected product
  fetch(checkoutServer + 'stock/tt-asic-pcb')
    .then((req) => req.json())
    .then((response) => {
      available = parseInt(response.available, 10);
      availableSlotsElement.innerText = response.available;
    })
    .catch((err) => {
      console.error(err);
      availableSlotsElement.innerText = 'error';
    });
}

setInterval(updateAvailability, 30000);
updateAvailability();

let repoUrl = null;

window.Submit = {
  async nextClick() {
    errorMessageElement.innerText = '';
    repoUrl = urlInputElement.value;
    if (!repoUrl || !repoUrl.startsWith('https://github.com/')) {
      errorMessageElement.innerText = 'Please enter a valid GitHub URL';
      return;
    }
    if (!available) {
      errorMessageElement.innerText = 'Sorry, we are sold out!';
      return;
    }

    nextButtonElement.setAttribute('disabled', '');
    urlInputElement.setAttribute('readonly', 'readonly');
    validatingMessageElement.style.display = 'block';
    const apiEndpoint = new URL('/validate', checkoutServer);
    const req = await fetch(`${apiEndpoint}?repo=${encodeURIComponent(repoUrl)}`);
    const response = await req.json();
    validatingMessageElement.style.display = 'none';
    if (response.result) {
      paymentSectionElement.style.display = '';
    } else {
      errorMessageElement.innerText = response.message ?? response.error;
      nextButtonElement.removeAttribute('disabled');
      urlInputElement.removeAttribute('readonly');
    }
  },

  async goToPayment() {
    paymentButtonElement.setAttribute('disabled', '');
    const product = document.querySelector('#package-type input:checked').value;
    location.href = `${checkoutServer}payment/${product}?repo=${encodeURIComponent(repoUrl)}`;
  },
};

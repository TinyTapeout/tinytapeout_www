const checkoutServer = 'https://tt-payment-gateway.wokwi.workers.dev/';
const repoRegex = /https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/i;

document.addEventListener('alpine:init', () => {
  Alpine.data('checkout', () => ({
    stock: {},
    soldOut: false,
    loading: true,

    // First step state
    validating: false,
    validated: false,
    repo: '',
    errorMessage: '',

    // Second step state
    selectedProduct: 'tt-asic-pcb',
    checkoutError: '',
    redirecting: false,

    init() {
      setInterval(() => {
        if (!document.hidden) {
          this.updateStock()
        }
      }, 30000);
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
          this.updateStock();
        }
      });
      this.updateStock();
    },

    async updateStock() {
      const apiEndpoint = new URL('/stock', checkoutServer);
      apiEndpoint.searchParams.set('t', Date.now());
      const req = await fetch(apiEndpoint);
      this.stock = await req.json();
      this.soldOut = this.stock['tt-asic-pcb'] <= 0 && this.stock['tt-design-only'] <= 0;
      this.loading = false;
    },

    async next() {
      if (this.soldOut) {
        this.errorMessage = 'Sorry, we are sold out!';
        return;
      }

      if (!this.repo) {
        this.errorMessage = 'Please enter a GitHub repository URL';
        return;
      }

      if (!this.repo.match(repoRegex)) {
        this.errorMessage = 'Please enter a valid GitHub repository URL, in the form https://github.com/user/repo';
        return;
      }

      if (this.repo.endsWith('/')) {
        this.repo = this.repo.slice(0, -1);
      }

      this.errorMessage = '';

      this.validating = true;
      const apiEndpoint = new URL('/validate', checkoutServer);
      apiEndpoint.searchParams.set('repo', this.repo);
      apiEndpoint.searchParams.set('t', Date.now());
      const req = await fetch(apiEndpoint.toString());
      const response = await req.json();
      this.validating = false;

      if (response.result) {
        this.validated = true;
      } else {
        this.errorMessage = response.message ?? response.error;
      }
    },

    payment() {
      if (this.stock[this.selectedProduct] <= 0) {
        this.checkoutError = 'This product is sold out, please select another one.';
        return;
      }
      this.checkoutError = '';
      const paymentUrl = new URL(`/payment/${this.selectedProduct}`, checkoutServer);
      paymentUrl.searchParams.set('repo', this.repo);
      paymentUrl.searchParams.set('t', Date.now());
      this.redirecting = true;
      location.href = paymentUrl.toString();
    }
  }));
});

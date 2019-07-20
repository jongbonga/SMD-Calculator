<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card shadow-lg border-0">
        <div class="card-header text-center">
          <img alt="Vue logo" src="../assets/logo.png" width="100" />
        </div>
        <div class="card-body">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Bid Amount</span>
            </div>
            <input type="text" class="form-control text-right" v-model="bid" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Buyer’s premium (5%)</span>
            </div>
            <input
              type="text"
              class="form-control text-right"
              :value="this.premium()| decimals"
              readonly
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Document handling fee</span>
            </div>
            <input type="text" class="form-control text-right" v-model="handling" readonly />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">VAT on that total (15%)</span>
            </div>
            <input
              type="text"
              class="form-control text-right"
              :value="this.vat()| decimals"
              readonly
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Towing</span>
            </div>
            <input type="text" class="form-control text-right" v-model="towing" />
          </div>
        </div>
        <div class="card-footer text-center">
          <h6 class="font-weight-bold">Total:</h6>
          <h5 class="text-danger font-weight-bold">{{this.total() | decimals | currenty}}</h5>
        </div>
      </div>
    </div>
    <div class="col-12 text-center">
      <a href="mailto:jongbonga@gmail.com?Subject=SMD%20Calculator" class="text-white">
        <span class="badge badge-warning">contact</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bid: 0,
      handling: 1850,
      towing: 0
    };
  },
  methods: {
    total() {
      let bid = this.isNumeric(this.bid),
        handling = this.isNumeric(this.handling),
        towing = this.isNumeric(this.towing),
        total = bid + this.premium() + handling + this.vat() + towing;

      return !bid ? 0 : total;
    },
    vat() {
      let bid = this.isNumeric(this.bid),
        handling = this.isNumeric(this.handling),
        vat = (bid + this.premium() + handling) * 0.15;

      return !bid ? 0 : vat;
    },
    premium() {
      let bid = this.isNumeric(this.bid);
      return this.isNumeric(bid * 0.05);
    },
    isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n) ? parseFloat(n) : 0;
    }
  },
  filters: {
    decimals(n) {
      return parseFloat(n).toFixed(2);
    },
    currenty(n) {
      const curency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ZAR",
        minimumFractionDigits: 2
      });

      return curency.format(n);
    }
  }
};
</script>

<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">
        <p v-if="valid">
            Coupon Redeemed: {{ message }}
        </p>
        <p v-else>
            Invalid Coupon Code
        </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      coupons: [
        {
          //this should be coming form database
          code: "50OFF",
          message: "50% Off",
          discount: 50
        },
        {
          //this should be coming form database
          code: "FREE",
          message: "100% Off",
          discount: 100
        }
      ],
      valid: false
    };
  },

  computed: {
    selectedCoupon() {
      return this.coupons.find(coupon => coupon.code == this.code);
    },
    message() {
      return this.selectedCoupon.message;
    }
  },
  methods: {
    validate() {
      this.valid = !!this.selectedCoupon;

      if (this.valid) {
        this.$emit("applied", this.selectedCoupon.discount);
      }
    }
  }
};
</script>

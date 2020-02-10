<template>
  <div>
    <table class="table table-secondary table-sm">
      <thead>
        <th></th>
        <th>品名</th>
        <th>數量</th>
        <th>單價</th>
      </thead>
      <tbody>
        <tr v-for="item in cart.carts" :key="item.id">
          <td class="align-middle">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </td>
          <td class="align-middle">
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
          </td>
          <td class="align-middle">{{ item.qty }} {{ item.product.unit }}</td>
          <td class="align-middle text-right">{{ item.final_total | currency}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="text-right">總計</td>
          <td class="text-right">{{ cart.total | currency }}</td>
        </tr>
        <tr v-if="cart.final_total !== cart.total">
          <td colspan="3" class="text-right text-success">折扣價</td>
          <td class="text-right text-success">{{ cart.final_total }}</td>
        </tr>
      </tfoot>
    </table>
    <div class="input-group mx-3 mb-2 input-group-sm">
      <input type="text" class="form-control w-25" v-model="couponCode" placeholder="請輸入優惠碼" />
      <div class="input-group-append">
        <button class="btn btn-secondary"
          type="button"
          @click="addCouponCode()"
        >套用優惠碼</button>
      </div>
    </div>
    <button class="btn btn-secondary"
      type="button"
    >前往結帳</button>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getCart');
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  data() {
    return {
      couponCode: '',
    };
  },
  methods: {
    removeCartItem(id) {
      this.$store.dispatch('removeCartItem', id);
    },
    addCouponCode() {
      const vm = this;
      this.$store.dispatch('addCouponCode', vm.couponCode);
    },
  },
};
</script>

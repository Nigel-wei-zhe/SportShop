<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand px-1" href="#">BALL</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" href="#" to="/">首頁</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >商品列表</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link class="dropdown-item" href="#" to="CustomerOrder">全部商品</router-link>
              </div>
            </li>
          </ul>
          <form class="form-inline ml-auto">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-cart"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart text-light fa-2x"></i>
                <span class="badge badge-pill badge-danger">{{ cartQty }}</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-right bg-secondary text-center"
                aria-labelledby="dropdownMenuButton"
                style="min-width: 300px"
              >
                <h4 class="text-light font-weight-bold">購物車清單</h4>
                <!-- <table class="table table-secondary table-sm">
                  <tbody>
                    <tr>
                      <td>籃球</td>
                      <td>1 顆</td>
                      <td>$ 500</td>
                    </tr>
                    <tr>
                      <td>棒球</td>
                      <td>6 顆</td>
                      <td>$ 800</td>
                    </tr>
                  </tbody>
                </table>
                <a href="shoppingCart-checkout.html" class="btn btn-secondary font-weight-bold">
                  <i class aria-hidden="true"></i> 結帳去
                </a> -->
                <shoppingCart/>
              </div>
            </div>
            <router-link to="Signin" href="#" class="btn ml-2 btn-cart text-light">登入</router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import shoppingCart from './shoppingCart.vue';

export default {
  components: {
    shoppingCart,
  },
  computed: {
    cartQty() {
      const Qty = this.$store.state.cart.carts.length;
      return Qty;
    },
  },
};
</script>

<style lang="scss">
.btn-cart {
  background-color: transparent;
  position: relative;
}
.btn-cart .badge {
  position: absolute;
  top: -1px;
  right: -1px;
}
</style>

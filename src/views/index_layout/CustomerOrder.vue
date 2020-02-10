<template>
  <div class="container mt-2">
    <loading :active.sync="isLoading"></loading>
    <div class="row">
      <div class="col-md-2">
        <leftList/>
      </div>
      <div class="col-md-10">
        <div class="row">
          <div class="col-md-4 mb-4" v-for="item in products" :key="item.id">
            <div class="card border-0 card-shadow">
              <div
                style="height: 300px; background-size: cover; background-position: center"
                :style="{backgroundImage: `url(${item.imageUrl})`}"
              ></div>
              <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title">
                  <a href="#" class="text-dark">{{ item.title }}</a>
                </h5>
                <p class="card-text">{{ item.content }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                  <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                  <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                  <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
                </div>
              </div>
              <div class="card-footer border-top-0 bg-white d-flex">
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-sm"
                  @click="getProduct(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ml-auto"
                  @click="addtoCart(item.id)"
                >
                  <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品列表 ↑ -->
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="product.imageUrl" class="img-fluid" alt />
            <blockquote class="mt-3 blockquote">
              <p class="mb-0">{{ product.content }}</p>
              <footer class="blockquote-footer text-right">{{ product.description }}</footer>
            </blockquote>
            <div class="d-flex justify-content-between align-item-baseline">
              <div class="h4" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
              <div class="h4" v-if="product.price">現在只要 {{ product.price }} 元</div>
            </div>
            <select name class="form-control mt-3" v-model="product.num">
              <option :value="num" v-for="num in 10" :key="num">
                選購 {{ num }} {{product.unit}}
              </option>
            </select>
          </div>
          <div class="modal-footer">
            <div class="text-muted text-nowrap mr-3">
              小計
              <strong>{{ product.num * product.price }}</strong> 元
            </div>
            <button
              type="button"
              class="btn btn-primary"
              @click="addtoCart(product.id, product.num)"
            >
              <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
              加到購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 查看更多 ↑ -->
    <div class="my-5 row justify-content-center">
      <ValidationObserver
        ref="observer"
        tag="form"
        v-slot="{ invalid }"
        @submit.prevent="createOrder"
      >
        <div class="form-group">
          <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
            <label for="useremail">Email</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="useremail"
              v-model="form.user.email"
              placeholder="請輸入 Email"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider name="收件人姓名" rules="required" v-slot="{ errors }">
            <label for="username">收件人姓名</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="username"
              v-model="form.user.name"
              placeholder="輸入姓名"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider name="收件人手機電話" rules="required|telRegExp" v-slot="{ errors }">
            <label for="usertel">收件人電話</label>
            <input
              type="tel"
              class="form-control"
              id="usertel"
              v-model="form.user.tel"
              placeholder="請輸入電話"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider name="收件人地址" rules="required" v-slot="{ errors }">
            <label for="useraddress">收件人地址</label>
            <input
              type="text"
              class="form-control"
              name="address"
              id="useraddress"
              v-model="form.user.address"
              placeholder="請輸入地址"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <label for="comment">留言</label>
          <textarea
            name
            id="comment"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-right">
          <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
        </div>
      </ValidationObserver>
    </div>
    <!-- 訂單 ↑ -->
  </div>
</template>
<script>
import $ from 'jquery';
import leftList from '../../components/index_components/leftlist.vue';

export default {
  components: {
    leftList,
  },
  data() {
    return {
      product: {},
      status: {
        loadingItem: '',
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    products() {
      return this.$store.state.products;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    getProduct(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        vm.product = response.data.product;
        $('#productModal').modal('show');
        console.log(response);
        vm.status.loadingItem = '';
      });
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
      $('#productModal').modal('hide');
    },
    getCart() {
      this.$store.dispatch('getCart');
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/order`;
      const order = vm.form;
      const isValid = this.$refs.observer.validate();
      vm.$store.dispatch('updateLoading', true);
      if (!isValid) {
        vm.$store.dispatch('updateLoading', false);
        console.log('欄位錯誤');
      } else {
        this.$http.post(url, { data: order }).then((response) => {
          console.log('訂單已建立', response);
          if (response.data.success) {
            vm.$router.push(`Customer_Checkout/${response.data.orderId}`);
          }
          vm.$store.dispatch('updateLoading', false);
        });
      }
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss">
.card-shadow {
  box-shadow: 0 3px 5px rgba($color: #000000, $alpha: 0.5);
  transition: all 0.2s;
}
.card-shadow:hover {
  box-shadow: 7px 7px 10px rgba($color: #000000, $alpha: 0.7);
}
</style>

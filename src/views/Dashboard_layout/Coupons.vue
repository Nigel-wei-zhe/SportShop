<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary" @click="openModel(true)">建立新的優惠劵</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th class="text-center">優惠劵名稱</th>
          <th class="text-center">優惠代號</th>
          <th class="text-center">折扣%</th>
          <th class="text-center">截止日期</th>
          <th class="text-center">是否啟用</th>
          <th class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td class="text-center">{{ item.title }}</td>
          <td class="text-center">{{ item.code }}</td>
          <td class="text-center">{{ item.percent }} %</td>
          <td class="text-center">{{ item.due_date | timestampToFormatTime}}</td>
          <td class="text-center">
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-right">未啟用</span>
          </td>
          <td class="btn-group d-flex justify-content-center">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="openModel(false, item)"
            >編輯</button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="openDelModel(item)"
            >刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination @changePage="getCoupons" :page="pagination"></pagination>
    <!-- add/edit modal -->
    <div
      class="modal fade bd-example-modal-sm"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="mySmallModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">新增\編輯 優惠劵</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入標題"
                v-model="tempCoupon.title"
              />
            </div>
            <div class="form-group">
              <label for="title">折扣</label>
              <div class="input-group">
                <input
                  type="number"
                  class="form-control"
                  id="title"
                  placeholder="請輸入折扣"
                  v-model="tempCoupon.percent"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="title">截止日期</label>
              <input
                type="date"
                class="form-control"
                id="title"
                placeholder="請輸入截止日期"
                v-model="tempCoupon.due_date"
              />
            </div>
            <div class="form-group">
              <label for="title">優惠代碼</label>
              <input
                type="text"
                class="form-control"
                id="title"
                placeholder="請輸入優惠碼"
                v-model="tempCoupon.code"
              />
            </div>
            <div class="form-group">
              <label for="title">狀態</label>
              <div class="custom-control custom-switch d-flex justify-content-center">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customSwitch1"
                  v-model="tempCoupon.is_enabled"
                  :true-value="1"
                  :false-value="0"
                />
                <label class="custom-control-label" for="customSwitch1">是否啟用</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- delete modal -->
    <div
      class="modal fade bd-example-modal-sm"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>刪除優惠劵</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠劵 (刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="deleteCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import pagination from '../../components/pagination.vue';

export default {
  components: {
    pagination,
  },
  data() {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isNew: false /* determine request methods */,
      isLoading: false,
    };
  },
  methods: {
    getCoupons(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.coupons = response.data.coupons;
        vm.pagination = response.data.pagination;
      });
    },
    openModel(isNew, item) {
      const vm = this;
      if (isNew) {
        vm.tempCoupon = {};
        vm.isNew = true;
      } else {
        vm.tempCoupon = Object.assign({}, item);
        vm.isNew = false;
        const month = new Date(vm.tempCoupon.due_date * 1000).getMonth() < 10
          ? 0 + (new Date(vm.tempCoupon.due_date * 1000).getMonth() + 1)
          : new Date(vm.tempCoupon.due_date * 1000).getMonth() + 1;
        const date = new Date(vm.tempCoupon.due_date * 1000).getDate() < 10
          ? 0 + new Date(vm.tempCoupon.due_date * 1000).getDate()
          : new Date(vm.tempCoupon.due_date * 1000).getDate();
        const formatTime = `${new Date(
          vm.tempCoupon.due_date * 1000,
        ).getFullYear()}-${month}-${date}`;
        vm.tempCoupon.due_date = formatTime;
      }
      $('#couponModal').modal('show');
    },
    openDelModel(item) {
      this.tempCoupon = Object.assign({}, item);
      $('#delCouponModal').modal('show');
    },
    updateCoupon() {
      const vm = this;
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`;
      let httpMethod = 'post';
      const timestamp = new Date(vm.tempCoupon.due_date).getTime();
      vm.tempCoupon.due_date = Math.floor(timestamp / 1000);

      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: vm.tempCoupon }).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $('#couponModal').modal('hide');
          vm.getCoupons();
        } else {
          $('#couponModal').modal('hide');
          vm.getCoupons();
          console.log('新增失敗');
        }
      });
    },
    deleteCoupon() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
      this.$http.delete(api).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
        } else {
          $('#delCouponModal').modal('hide');
          vm.getCoupons();
          console.log('刪除失敗');
        }
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>

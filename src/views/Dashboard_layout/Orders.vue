<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">單號</th>
          <th width="120">姓名</th>
          <th width="120">電話</th>
          <th width="120">Email</th>
          <th width="120">付款狀態</th>
          <th width="120">詳細資料</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.tel }}</td>
          <td>{{ item.user.email }}</td>
          <td>
            <div v-if="item.is_paid" class="text-success">
              <i class="fas fa-check-circle"></i>
            </div>
            <div v-else class="text-danger">
              <i class="fas fa-times"></i>
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-outline-primary btn-sm" @click="openModel(item)">
              詳情</button>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination @changePage="getOrders" :page="pagination"></pagination>
    <!-- detail model -->
    <div
      class="modal fade"
      id="detailModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-light text-dark">
            <h5 class="modal-title" id="exampleModalLabel">
              <span>訂單詳情</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body text-dark d-flex flex-column">
            <strong>訂單成立時間: {{ itemDetail.create_at | timestampToFormatTime }}</strong>
            <strong>單號: {{ itemDetail.id }}</strong>
            <strong v-if="itemDetail.user">
              顧客資料: {{ itemDetail.user.name }} - {{ itemDetail.user.email }} -
              {{ itemDetail.user.address }} - {{ itemDetail.user.tel }}
            </strong>
            <strong>是否付款: {{ itemDetail.is_paid }}</strong>
            <strong>付款日期: {{ itemDetail.paid_date | timestampToFormatTime }}</strong>
            <strong>付款方式: {{ itemDetail.payment_method }}</strong>
            <strong>顧客留言: {{ itemDetail.message }}</strong>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
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
      orders: [],
      pagination: {},
      itemDetail: {},
      isLoading: true,
    };
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
    openModel(item) {
      $('#detailModal').modal('show');
      const vm = this;
      vm.itemDetail = Object.assign({}, item);
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

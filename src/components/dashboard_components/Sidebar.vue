<template>
  <div>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
      <div class="sidebar-sticky">
         <h6 class="sidebar-heading d-flex justify-content-between align-items-center
          px-3 mt-4 mb-1 text-info font-weight-bold">
          <span>管理員</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link"
            :class="{'active' : $route.name === 'Products' }">
            <i class="fas fa-boxes"></i>  產品列表</router-link>
          </li>
          <li class="nav-item">
          <router-link to="/admin/orders" class="nav-link"
          :class="{'active' : $route.name === 'Orders' }">
          <i class="far fa-list-alt"></i>  訂單列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link"
            :class="{'active' : $route.name === 'Coupons' }">
            <i class="fas fa-ticket-alt"></i>  優惠券</router-link>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center
          px-3 mt-4 mb-1 text-info font-weight-bold">
          <span>前台</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i>  首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Customer_Order" class="nav-link"
            :class="{'active' : $route.name === 'Customer_Order' }">
            <i class="fas fa-shopping-cart"></i>  產品列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand px-1 " href="#">
         S-SHOP
        </a>
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
              <router-link class="nav-link" href="#" to="/">
                首頁
              </router-link>
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
            <router-link to="Signin"
              href="#"
              class="btn btn-outline-light mr-1"
            ><i class="fas fa-users"></i></router-link>
            <router-link to="/admin"
              href="#"
              class="btn btn-outline-light mr-1"
            ><i class="fas fa-shopping-cart"></i></router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

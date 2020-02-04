<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="h-1" />
    <navbar />
    <header>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item header-carousel-item bg-cover active"
            style="background-image: url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
          >
            <div class="carousel-caption d-none d-md-block px-3">
              <h5>痛 就是軟弱離開身體的感覺</h5>
              <p>
                如果不疼，你練它幹嘛？
                撐不住時，可以對自己說「我好累」
                <br />但永遠不要在心裡承認說「我不行」
              </p>
            </div>
          </div>
          <div
            class="carousel-item header-carousel-item bg-cover"
            style="background-image: url(https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
          >
            <div class="carousel-caption d-none d-md-block px-3">
              <h5>時間會證明一切，汗水從不會騙人</h5>
              <p>給自己定一個目標，雖然最後不一定到達終點，但你每天都在超越自己</p>
            </div>
          </div>
          <div
            class="carousel-item header-carousel-item bg-cover"
            style="background-image: url(https://images.unsplash.com/photo-1528304270437-714a2d6fbb6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)"
          >
            <div class="carousel-caption d-none d-md-block px-3">
              <h5>最大的愉悅，就是做了別人說你做不了的事</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </header>
    <router-view />
    <myFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '../components/index_components/navbar.vue';
import myFooter from '../components/index_components/footer.vue';

export default {
  name: 'home',
  components: {
    navbar,
    myFooter,
  },
};
</script>

<style lang="scss">
.header-carousel-item {
  height: 450px;
}
.bg-cover {
  background-size: cover;
  background-position: 50% 20%;
}
.carousel-caption {
  background-color: rgba($color: #000000, $alpha: 0.5);
}
</style>

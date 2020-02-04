<template>
  <div>
    <header class="mb-0">
      <div class="imgg mb-0"></div>
      <marquee class="bg-dark text-light mb-0 carousel-text">輸入指定優惠碼，立即享優惠</marquee>
    </header>
    <section>
      <div class="parallax"></div>
    </section>
    <section class="bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="mb-2">
              <i class="fas fa-user-friends fa-5x"></i>
            </div>
            <h3>交朋友</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div class="col-md-4">
            <div class="mb-2">
              <i class="fas fa-fist-raised fa-5x"></i>
            </div>
            <h3>身體健康</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
          <div class="col-md-4">
            <div class="mb-2">
              <i class="fas fa-smile-wink fa-5x"></i>
            </div>
            <h3>心情愉悅</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item header-carousel-item bg-cover active"
            style="background-image: url(https://images.unsplash.com/photo-1520642375575-d21ff7b96d49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80)"
          >
            <div class="carousel-caption d-none d-md-block px-3 carousel-text">
              <p>還在這麼多人搶一顆球??</p>
            </div>
          </div>
          <div
            class="carousel-item header-carousel-item bg-cover"
            style="background-image: url(https://images.unsplash.com/flagged/photo-1571358607210-1691cb0ea07c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
          >
            <div class="carousel-caption d-none d-md-block px-3 carousel-text">
              <p>球 飛太遠??</p>
            </div>
          </div>
          <div
            class="carousel-item header-carousel-item bg-cover"
            style="background-image: url(https://images.unsplash.com/photo-1521413031099-02c8d240cf6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)"
          >
            <div class="carousel-caption d-none d-md-block px-3 carousel-text">
              <p>想打球 沒有球</p>
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
    </section>
  </div>
</template>

<style lang="scss">
.imgg {
  background-image: url("https://images.unsplash.com/photo-1542652694-40abf526446e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");
  background-position: 50% 20%;
  background-size: cover;
  height: 500px;
}
.header-carousel-item {
  height: 600px;
}
.bg-cover {
  background-size: cover;
  background-position: 50% 50%;
}
.carousel-caption {
  background-color: rgba($color: #000000, $alpha: 0.1);
}
.carousel-text {
  font-size: 4vw;
}
.parallax {
  /* 設定背景圖片/居中/不重覆 */
  background-image: url("https://images.unsplash.com/flagged/photo-1568733278674-2de10ea3ded1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80");
  background-position: 50% 50%;
  background-size: cover;
  height: 300px;

  /* 背景自動縮放/固定 */
  background-attachment: fixed;
  background-size: cover;
}
</style>

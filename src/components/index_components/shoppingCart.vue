<template>
  <div class="circle fixed-bottom m-3 fix-right d-flex">
    <div class="font-size">
      <i class="fas fa-shopping-cart"></i>
    </div>
  </div>
</template>

<style lang="scss">
.circle {
  width: 7vw;
  height: 7vw;
  border-radius: 999em;
  background-color: black;
  z-index: 999;
}
.fix-right {
  left: 90%;
}
.font-size {
  display: flex;
  color: white;
  font-size: 3vw;
  justify-content: center;
  align-items: center;
}
</style>

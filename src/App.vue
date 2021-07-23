<template>
  <div>
    <router-view></router-view>
    <Login></Login>

    <div class="main">我是一个div</div>
  <hr>
    <van-button type="primary" class="btn">主要按钮</van-button>

  </div>
</template>

<script>
import Login from './views/login/index.vue'
export default {
  components:{
    Login
  }

};
</script>

<style scoped>
.main {
  width: 1rem;
  height: 1rem;
  background-color: red;
}
.btn {
  width: 1rem;
  height: 1rem;
}
</style>

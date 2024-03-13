// @ts-nocheck

<template>
  <div>
    <div class="menu">
      <Left :isClose="isClose"></Left>
    </div>
    <div class="content" :class="{ active: isClose }">
      <Right :isClose="isClose" @change="change"></Right>
    </div>
  </div>
</template>

<script>

import Left from './LeftPage.vue';
import Right from './RightPage.vue';
import { ref } from 'vue';

export default {
  name: "MainPage",
  components: { Left, Right },
  setup () {
    //定义变量
    let isClose = ref(false);
    //修改变量
    const change = () => {
      isClose.value = !isClose.value;
    }
    return { isClose, change }
  }
}
</script>

<style scoped>
.menu {
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background: #112f50;
}

.content {
  padding-left: 200px;
}

.active {
  padding-left: 64px;
}
</style>

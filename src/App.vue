
<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="hello" />-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!-- 声明路由的占位符 -->
  <router-view></router-view>
</template>

<script >
//import HelloWorld from './components/HelloWorld.vue'
const debounce = (fn, delay) => {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
  constructor(callback) {
    callback = debounce(callback, 16);
    super(callback);
  }
}


export default {
  //name: 'App',
  //methods: {
  //goToAbout() {
  //  this.$router.push('/HelloWorld');
  //},
  //setup(){

  //}
}
//,
//components: {
//HelloWorld
//}
//}
//export default {
// methods: {
// goToAbout() {
//   this.$router.push('/HelloWorld');
// }
//}
//}
</script>

<script >

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /*  margin-top: 60px; */
}
</style>

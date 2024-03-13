import { createApp } from 'vue'
import App from './App.vue'
import { router } from './route/index'
import store from './store'
//import axios from 'axios'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/base.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import api from './api'

const debounce = (fn, delay) => {
  let timer = null
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
// 解决 ElTable 自动宽度高度导致的「ResizeObserver loop limit exceeded」问题
/**
 * 处理el-table的ResizeObserver loop limit exceeded问题
 */
export function solveResizeObserverLoopLimitExceededErr() {
  const _ResizeObserver = window.ResizeObserver
  window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
      callback = debounce(callback, 10)
      super(callback)
    }
  }
}

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$axios=api
//app.use(ElementPlus);
app.use(router)
app.use(store)
app.mount('#app')
//App.use(router);
//createApp(App).mount('#app')

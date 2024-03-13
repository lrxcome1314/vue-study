//import {createApp} from 'vue'
import Vuex from 'vuex'
//import App from './App.vue'
import { createStore } from 'vuex'
//const app=createApp(App);

// 创建一个新的 store 实例
const store = createStore({
  state: {
    title: '添加',
    counter: 0,
    data: {},
  },
  /* state () {
    return {
      count: 0,
      data:{

      }
    }
  }, */
  mutations: {
    //increment(state) {
    //  state.count++
    //},
    settitle(state, title) {
      state.title = title
    },
    setCounter(state, num) {
      state.counter = num
    },
    //设置state中的数据
    setDataList(state, data) {
      state.data = data
    },
    selectById(state, tablename) {},
  },
  actions: {
    selectByIdAsync(context, tablename) {
      context.commit('selectById', tablename)
    },
    //异步设置state中的数据
    setDataListAsync(content, data) {
      content.commit('setDataList', data)
    },
    setCounterAsync(content, data) {
      content.commit('setCounter', data)
    },
  },
})

//app.use(store)

//app.use(Vuex).mount()
/* export default new Vuex.Store({
  state:{},
  mutations:{ },
  getters:{},
  actions:{},

}) */
export default store

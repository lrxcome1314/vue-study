// @ts-nocheck
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from 'vue-router'

const HomeView = () => import('../components/home.vue')
const HelloWorld = () => import('../components/HelloWorld.vue')
const datashow = () => import('../components/DataShow.vue')
const Layout = () => import('../Views/layout/MainPage.vue')
const Login = () => import('../Views/Login/SignIn.vue')
import Order from '../Views/Order/index.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    //path: "/Layout",
    path: '/',
    //name: "HelloWorld",
    component: Layout,
    children: [
      {
        path: '/',
        name: 'defaulthome',
        component: () => import('../Views/Home/index.vue'),
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../Views/Goods/goodIndex.vue'),
        children: [
          {
            path: 'list',
            name: 'list',
            component: () => import('../Views/Goods/GoodsList.vue'),
          },
          {
            path: 'add',
            name: 'add',
            component: () => import('../Views/Goods/AddGoods.vue'),
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('../Views/Goods/Category.vue'),
          },
        ],
      },
      {
        path: '/order',
        name: 'order',
        component: Order,
        children: [
          {
            path: 'orderlist',
            name: 'orderlist',
            component: () => import('../Views/Order/OrderList.vue'),
          },
          {
            path: 'addorder',
            name: 'addorder',
            component: () => import('../Views/Order/AddOrder.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/home1',
    //name: "home",
    component: HomeView,
  },
  {
    path: '/datashow',
    component: datashow,
  },
]

export const router = createRouter({
  //model:hash,
  history: createWebHistory(),
  //base: '/dist/',
  routes: routes,
})

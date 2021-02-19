import Vue from 'vue'
import VueRouter from "vue-router";

// 动态导入， 路由懒加载方式：用到哪个组件才加加载哪个组件的js代码
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/category',
    component: Category,
    meta:{
      title: '分类'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta:{
      title: '购物车'
    }
  },
  {
    path: '/detail/:iid',
    component: Detail,
    meta:{
      title: '详情'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title: '个人'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router

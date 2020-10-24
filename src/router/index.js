import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/Home/')
const Shopping=()=>import('../views/Shopping/')
const My=()=>import('../views/My/')
const GoodsData=()=>import('@/components/GoodsData')
const Login=()=>import('@/components/Login')
const OrderForm=()=>import('@/components/OrderForm')  
const EditAddressPage=()=>import('@/components/EditAddressPage')
const AddNewAddress=()=>import('@/components/AddNewAddress')
const ModifyAddress=()=>import('@/components/ModifyAddress')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    //重定向路由
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping
  },
  {
    path: '/my',
    name: 'my',
    component: My,
    children:[
      {
        path: 'EditAddressPage',
        component: EditAddressPage
      },
      {
        path: 'AddNewAddress',
        component: AddNewAddress
      },
      {
        path: 'ModifyAddress',
        component: ModifyAddress
      }
    ]
  },
  {
    path: '/goodsdata',
    name: 'goodsdata',
    component: GoodsData
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/orderform',
    name: 'orderform',
    component: OrderForm
  },
]

const router = new VueRouter({
  mode: 'history',
  base: '/dist/',
  routes
})

export default router

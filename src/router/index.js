import Vue from 'vue'
import VueRouter from 'vue-router'
const Home =()=> import ('@/views/home/Home.vue')
const Profile =()=> import ('@/views/profile/Profile.vue')
const Menu =()=> import ('@/views/menu/Menu.vue')
const Cart =()=> import ('@/views/cart/Cart.vue')
const Detail =()=> import ('@/views/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
	{
		path:"",
		redirect:"/home"
	},
  {
		path:"/home",
		component:Home
	},
	{
		path:"/profile",
		component:Profile
	},
	{
		path:"/cart",
		component:Cart
	},
	{
		path:"/menu",
		component:Menu
	},
	{
		// path:"/detail/:index",
		path:"/detail",
		component:Detail
	}
	
]

const router = new VueRouter({
  mode: 'history',
  routes,
  base: process.env.BASE_URL
})

export default router

<template>
	<div>
		<NavBar class="home-nav">
			<template v-slot:center>购物车</template>
		</NavBar>
		<h2>首页</h2>
		<home-swiper :banners="this.banners"/>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import HomeSwiper from './childCompos/HomeSwiper.vue'

	import {getHomeMultidata} from '@/network/home.js'
	export default{
		name:"Home",
		data(){
			return{
				banners:[],
				recommends:[]
			}
		},
		components:{
			NavBar,
			HomeSwiper
		},
		created(){
			getHomeMultidata()
			.then(res=>{
				console.log(res)
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
				console.log(this.banners);
				
			})
			.catch(err=>console.log(err))
		}
	}
</script>

<style>
	.home-nav{
		background-color: pink
	}
</style>

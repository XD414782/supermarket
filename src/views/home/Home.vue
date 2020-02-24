<template>
	<div class="home">
		<NavBar class="home-nav">
			<template v-slot:center>购物车</template>
		</NavBar>
		<home-swiper :banners="this.banners"/>
		<TabControl class="home-tab-control" :titles="titles"></TabControl>
		
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import HomeSwiper from './childCompos/HomeSwiper.vue'
	import TabControl from '@/components/content/tabControl/TabControl.vue'

	import {getHomeMultidata} from '@/network/home.js'
	
	export default{
		name:"Home",
		data(){
			return{
				banners:[],
				recommends:[],
				titles:['流行',"新款","精选"],
				goods:{
					'pop':{page:0,list:[]},
					'news':{page:0,list:[]},
					'sell':{page:0,list:[]},
				}
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			TabControl
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
.home{
	/* height: 100vh; */
}
.home-nav{
	background-color: pink
}
.home-tab-control{
	position: sticky;
	position: -webkit-sticky;
	top: 100px;
	background-color: white;
}
</style>

<template>
	<div class="home">
		<NavBar class="home-nav">
			<template v-slot:center>购物车</template>
		</NavBar>
		<scroll 
		class="scroll" 
		ref="wrapper" 
		@scroll="scrollShowControll"
		@pullingUp="loadMore()">
			<home-swiper :banners="this.banners"/>
			<TabControl 
			@tabClick="tabClick"
			class="home-tab-control" 
			:titles="titles">
			</TabControl>
			<GoodsList :type="type" :goods="goods"></GoodsList>
		</scroll>
		<BackTop v-show="isBackTopShow" class="back-top" @click.native="backClick"/>
	</div>
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import HomeSwiper from './childCompos/HomeSwiper.vue'
	import TabControl from '@/components/content/tabControl/TabControl.vue'
	import Scroll from '@/components/common/scroll/Scroll.vue'
	import BackTop from '@/components/content/backTop/BackTop.vue'
	import GoodsList from './childCompos/GoodsList.vue'

	import {getHomeMultidata} from '@/network/home.js'
	
	export default{
		name:"Home",
		data(){
			return{
				banners:[],
				recommends:[],
				titles:['流行',"新款","精选"],
				goods:{
					'pop':{page:0,list:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]},
					'news':{page:0,list:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]},
					'sell':{page:0,list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,]},
				},
				type:"pop",
				isBackTopShow:false
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			TabControl,
			"scroll":Scroll,
			BackTop,
			GoodsList
		},
		created(){
			this.getHomeMultidata()
			
			this.getHomeGoods("pop")
			this.getHomeGoods("news")
			this.getHomeGoods("sell")
		},
		mounted(){
			//另外一部分在GoodsList.vue里
			this.$bus.$on("divOnload",()=>{
				this.$refs.wrapper.bs.refresh()
			})
		},
		methods:{
			backClick(){
				this.$refs.wrapper.bs.scrollTo(0,0)
			},
			scrollShowControll(position){
				position.y > -100?this.isBackTopShow=false:this.isBackTopShow=true
			},
			getHomeMultidata(){
				getHomeMultidata().then(res=>{
					console.log(res)
					this.banners=res.data.banner.list
					this.recommends=res.data.recommend.list
					console.log(this.banners);
				})
				.catch(err=>console.log(err))
			},
			tabClick(index){
				console.log("进入tabClick"+index,"←是index");
				
				switch(index){
					case 0:
						this.type='pop'
						break
					case 1:
						this.type='news'
						break
					case 2:
						this.type='sell'
						break
				}
			},
			getHomeGoods(type){
				const page=this.goods[type].page+1
				this.goods[type].list.push(...[1,2,3,4])
			},
			loadMore(){
				console.log("上拉加载更多");

				// this.$refs.wrapper.bs.finishPullUp()在scroll.vue里
				this.getHomeGoods(this.type)
				//非常尽力了 但是还是刷新不了
				// this.$refs.wrapper.bs.refresh()在scroll.vue里
				
				
			}
		}
	}
</script>

<style>
.home{
	margin: 0 auto;
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
.back-top{
	position: fixed;
	right: 10px;
	bottom: 60px;
}
.scroll{
	margin-top: 44px;
}

</style>

<template>
	<div class="home">
		<NavBar class="home-nav">
			<template v-slot:center>购物车</template>
		</NavBar>
		
		<!-- ↓还没写这个部分 -->
		<!-- <goods-list :goods="goods['pop'].list"></goods-list> -->
		<scroll class="scroll" ref="wrapper" @scroll="scrollShowControll">
			<home-swiper :banners="this.banners"/>
			<TabControl class="home-tab-control" :titles="titles"></TabControl>
			<div>as1</div>
			<div>as2</div>
			<div>as3</div>
			<div>as4</div>
			<div>as5</div>
			<div>as6</div>
			<div>as7</div>
			<div>as8</div>
			<div>as9</div>
			<div>as10</div>
			<div>as11</div>
			<div>as12</div>
			<div>as13</div>
			<div>as14</div>
			<div>as15</div>
			<div>as16</div>
			<div>as17</div>
			<div>as18</div>
			<div>as19</div>
			<div>as20</div>
			<div>as21</div>
			<div>as22</div>
			<div>as23</div>
			<div>as24</div>
			<div>as25</div>
			<div>as26</div>
			<div>as27</div>
			<div>as28</div>
			<div>as29</div>
			<div>as30</div>
			<div>as31</div>
			<div>as32</div>
			<div>as33</div>
			<div>as34</div>
			<div>as35</div>
			<div>as36</div>
			<div>as37</div>
			<div>as38</div>
			<div>as39</div>
			<div>as40</div>
			<div>as41</div>
			<div>as42</div>
			<div>as43</div>
			<div>as44</div>
			<div>as45</div>
			<div>as46</div>
			<div>as47</div>
			<div>as48</div>
			<div>as49</div>
			<div>as50</div>
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
				},
				isBackTopShow:false
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			TabControl,
			"scroll":Scroll,
			BackTop
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
		},
		methods:{
			backClick(){
				this.$refs.wrapper.bs.scrollTo(0,0)
			},
			scrollShowControll(position){
				position.y > -100?this.isBackTopShow=false:this.isBackTopShow=true
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

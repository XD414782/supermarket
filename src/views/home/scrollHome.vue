<template>
	<div class="home">
		<NavBar class="home-nav">
			<template v-slot:center>购物车</template>
		</NavBar>
		
		<!-- ↓还没写这个部分 -->
		<!-- <goods-list :goods="goods['pop'].list"></goods-list> -->
		<scroll class="scroll" ref="wrapper">
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
			<div>as51</div>
			<div>as52</div>
			<div>as53</div>
			<div>as54</div>
			<div>as55</div>
			<div>as56</div>
			<div>as57</div>
			<div>as58</div>
			<div>as59</div>
			<div>as60</div>
			<div>as61</div>
			<div>as62</div>
			<div>as63</div>
			<div>as64</div>
			<div>as65</div>
			<div>as66</div>
			<div>as67</div>
			<div>as68</div>
			<div>as69</div>
			<div>as70</div>
			<div>as71</div>
			<div>as72</div>
			<div>as73</div>
			<div>as74</div>
			<div>as75</div>
			<div>as76</div>
			<div>as77</div>
			<div>as78</div>
			<div>as79</div>
			<div>as80</div>
			<div>as81</div>
			<div>as82</div>
			<div>as83</div>
			<div>as84</div>
			<div>as85</div>
			<div>as86</div>
			<div>as87</div>
			<div>as88</div>
			<div>as89</div>
			<div>as90</div>
			<div>as91</div>
			<div>as92</div>
			<div>as93</div>
			<div>as94</div>
			<div>as95</div>
			<div>as96</div>
			<div>as97</div>
			<div>as98</div>
			<div>as99</div>
			<div>as100</div>
		</scroll>
		<BackTop class="back-top" @click.native="backClick"></BackTop>
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
		name:"ScrollHome",
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
	margin-top: 40px;
}
</style>

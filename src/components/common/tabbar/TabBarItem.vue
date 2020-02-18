<template>
	<div class="tab-bar-item" @click="btnClick()">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot>
		<slot :style="activeStyle()" name="item-text"></slot>
	</div>
</template>

<script>
	export default{
		name:"TabBarItem",
		props:{
			path:String,
			activeColor:{
				type:String,
				default:"red"
			}
		},
		methods:{
			btnClick(){
				this.$router.push(this.path)
				
			}
		},
		computed:{
			isActive(){
				return this.path.indexOf(this.$route.path) !== -1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex:1;
		text-align:center;
		height:49px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
	}
</style>

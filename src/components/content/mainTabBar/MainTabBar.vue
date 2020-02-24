<template>
	<TabBar class="tab-bar">
		<TabBarItem path="/home">
			<template #item-icon>
				<div>
					<img src="@/assets/img/tabbar/home.png" />
				</div>
			</template>
			<template #item-icon-active>
				<div>
					<img src="@/assets/img/tabbar/home2.png" />
				</div>
			</template>
			<template #item-text><div>首页</div></template>
		</TabBarItem>
		<TabBarItem path="/menu">
			<template #item-icon>
				<div>
					<img src="@/assets/img/tabbar/menu.png" />
				</div>
			</template>
			<template #item-icon-active>
				<div>
					<img src="@/assets/img/tabbar/menu2.png" />
				</div>
			</template>
			<template #item-text><div>分类</div></template>
		</TabBarItem>
		<TabBarItem path="/cart">
			<template #item-icon>
				<div>
					<img src="@/assets/img/tabbar/cart.png" />
				</div>
			</template>
			<template #item-icon-active>
				<div>
					<img src="@/assets/img/tabbar/cart2.png" />
				</div>
			</template>
			<template #item-text><div>购物车</div></template>
		</TabBarItem>
		<TabBarItem path="/profile">
			<template #item-icon>
				<div>
					<img src="@/assets/img/tabbar/profile.png" />
				</div>
			</template>
			<template #item-icon-active>
				<div>
					<img src="@/assets/img/tabbar/profile2.png" />
				</div>
			</template>
			<template #item-text><div>我的</div></template>
		</TabBarItem>
	</TabBar>
</template>

<script>
	import TabBar from '@/components/common/tabbar/TabBar.vue'
	import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
	
	export default{
		name:"MainTabBar",
		components:{
			TabBar,TabBarItem
		}
	}
</script>

<style>
.tab-bar{
	z-index: 9;
}
</style>

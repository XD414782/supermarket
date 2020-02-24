<template>
  <div class="wrapper" ref="wrapper">
			<ul class="content">
				<slot></slot>
			</ul>
		</div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import Pullup from '@better-scroll/pull-up'
  BScroll.use(Pullup)
  
  export default {
    name:"Scroll",
    mounted(){
      // this.bs=new BScroll('.wrapper',{
      this.bs=new BScroll(this.$refs.wrapper,{

        
      })
    }
  }
</script>
<style scoped>
  .wrapper{
    height: 300px;
    background-color: red;
    overflow: hidden;
  }
</style>
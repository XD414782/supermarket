<template>
  <div class="wrapper" ref="wrapper">
			<div class="content">
				<slot></slot>
			</div>
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
        probeType: 3,
        pullUpLoad: true,
        click:true,
      })
      this.bs.on('scroll',(position)=>{
        this.$emit("scroll",position)
      })
      this.bs.on('pullingUp',()=>{
        this.$emit("pullingUp")
        this.finishPullUp()
      })
      this.bs.on('refresh', () => {
        console.log('刷新了！')
      })
      
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo && this.bs.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.bs.finishPullUp() 
      },
      refresh(){
        this.bs && this.bs.refresh()
      }
    }
  }
</script>
<style scoped>
  .wrapper{
    /* height: 90vh; */
    height: 83vh;
    /* background-color: red; */
    overflow: hidden;
  }
</style>
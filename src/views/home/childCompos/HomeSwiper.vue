<template>
  <div :style="swipeBox">
    <mt-swipe>
      <mt-swipe-item v-for="item in banners" :auto="4000">
        <a :href="item.link">
          <img :style="swipeImg" :src="item.image"/>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'mint-ui'

export default {
  name:"HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      swipeBoxWidth:0,
      swipeBoxHeight:200,
      appHeight:0,
      proportion:0.53
    }
  },
  components:{
    "mt-swipe":Swipe,
    "mt-swipe-item":SwipeItem
  },
  created(){
    this.swipeBoxWidth=document.body.clientWidth
    this.appHeight=document.body.clientHeight
    //高度和宽度符合固定比率
    this.swipeBoxHeight=this.swipeBoxWidth*this.proportion
  },
  computed:{
    getSwipeBoxHeight(){
      
      return{
        swipeBoxHeight
      }
    },
    swipeBox(){
      return {
        "height":this.swipeBoxHeight+"px",
        "max-width": 100+"%",
        "max-height": 100+"%",
        "margin":"0 auto"
      }
    },
    swipeImg(){
      return {
        "width":100+"%"
      }
    }
  }
}
</script>
<style scoped>

</style>
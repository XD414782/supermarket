<template>
  <div class="data">
    <div @click="itemClick(index)" v-for="(item,index) in goods[this.type].list">
      <img @load="divOnload" src="@/assets/img/tabbar/home.png"/>
      <div>{{index}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"GoodsList",
  data(){
    return{
      index:0
    }
  },
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    },
    type:String
  },
  methods:{
    //图片加载完了之后调用刷新betterscroll啦
    // 另外一部分再Home.vue里
    divOnload(){
      if(this.$route.path.indexOf('/home')){
        this.$bus.$emit("divOnload")
      }else if(this.$route.path.indexOf('/detail')){
        // 比如this.$bus.$emit("detailDivOnload")
      }
    },
    itemClick(index){
      //先赋值
      this.index=index
      //再push
      this.$router.push({
        path:'/detail',
        query:{
          index:this.index
        }
      })
    }
  }
}
</script>
<style scoped>
.data{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.data>div{
	border: 1px solid black;
	width: 45%;
	text-align: center;
}
.data>div>img{
  height:20px
}
</style>
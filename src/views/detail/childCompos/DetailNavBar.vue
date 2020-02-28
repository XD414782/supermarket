<template>
    <NavBar>
      <template v-slot:left>
        <div @click="leftItemClick" class="left">
          <img src="@/assets/img/control/back.svg"/>
        </div>
      </template>
      <template v-slot:center>
        <TabControl :titles="titles"></TabControl>
      </template>
    </NavBar>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import TabControl from '@/components/content/tabControl/TabControl.vue'

export default {
  name:"DetailNavBar",
  data(){
    return{
      titles:['商品','参数','评论','推荐']
    }
  },
  components:{
    NavBar,
    TabControl
  },
  methods:{
    leftItemClick(){
      this.$router.back()
    }
  }
}
</script>
<style scoped>
.title{
  display: flex;
}
.title>div{
  flex: 1;
}
.left{
  height:44px; 
  line-height: 44px;
}
.left img{
  height: 100%;
}
</style>
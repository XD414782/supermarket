<template>
  <div class="tab-control">
    <div
      class="tab-control-item" 
      :class="{isActive:index===currentIndex}"
      v-for="(item,index) in titles"
      @click="changeActive(index)"
      >
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      index:0,
      currentIndex:0
    }
  },
  methods:{
    changeActive(index){
      this.currentIndex=index;
    }
  }
}
</script>
<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item{
  flex: 1;
}
.isActive{
  color: red;
  
}
.isActive span{
  border-bottom:2px solid pink;
  padding: 4px;
}
</style>
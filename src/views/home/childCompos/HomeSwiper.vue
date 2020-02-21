<template>
  <div>
    <ul v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
    </ul>
  </div>
</template>
<script>
export default {
  name:"HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>

</style>
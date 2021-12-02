<template>
<div>
  <div class="block">
    <el-carousel height="200px">
      <el-carousel-item v-for="(item,index) in banners" :key="index" class="item-image">
          <img :src="item.image" alt="" @load="imageLoad">
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
export default {
    name:"Swiper",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      imageLoad(){
        if (!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
        
      }
    }
}
</script>

<style>
    .item-image img{
    width: 100% 
    }
</style>
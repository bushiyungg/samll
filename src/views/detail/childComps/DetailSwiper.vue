<template>
  <div>
      <div class="block">
    <el-carousel height="250px">
      <el-carousel-item v-for="(item,index) in topswiper" :key="index" class="item-image">
          <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
    name:"DetailSwiper",
    props:{
        topswiper:{
            type:Array,
            default(){
                return [

                ]
            }
        }
    }
}
</script>

<style>

</style>
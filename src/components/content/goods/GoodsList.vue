<template>
  <div class="goodslist">
      <goods-item v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
    name:"GoodsList",
    components:{
        GoodsItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style>
 .goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    }
</style>
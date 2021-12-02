<template>
  <div id="category-detail">
      <div :key="index" class="category-detail-item" v-for="(item, index) in cotegoryright">
          <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </div>
  
  </div>
</template>

<script>

export default {
    name:"CateforyRightBar",
    props:{
      cotegoryright:{
        type:[],
        default(){
          return []
        }
      }
    },
    components:{
      
    }
}
</script>

<style>
#category-detail {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
}
.category-detail-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 10px;
 
}
.category-detail-item img {
  width: 65px;
  margin-bottom: 7px;
}
.category-detail-item p {
  font-size: 14px;
}

</style>
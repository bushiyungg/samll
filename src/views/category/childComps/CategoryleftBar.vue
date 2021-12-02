<template>
  <div id="categoryleft">
     <ul class="categoryul">
        <li v-for="(item,index) in categorylist" 
     :key="index" class="categoryitem" 
     @click="leftbar(index,item)" :class="{isactiveleft:currentindexleft === index}">{{item.title}}</li>
     </ul>
  </div>
</template>

<script>
export default {
    name:"CategoryleftBar",
    props:{
        categorylist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentindexleft:0
        }
    },
    methods:{
        leftbar(index,item){
              this.currentindexleft = index;
        const obj = {
            maitKey: item.maitKey,
            index,
            miniWallkey:item.miniWallkey
            };
    
      this.$emit("rightclick", obj);
        }
    }
}
</script>

<style scoped>
    #categoryleft {
      /* width: 100%; */
        width: 100px;
    background: #f6f6f6;
    font-size: 18px;
    height: 100%;
        /* position: fixed;
        top: 0;
        left: 0;
        bottom: 0; */
    }
    .categoryitem{
         text-align: center;
    padding: 12px;
  /* font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  text-align: center;
  color: #666666;
  border: 0;
  outline: none;
  background: none; */
    }
    .isactiveleft{
        background-color: #fff;
        color: red;
    }
</style>
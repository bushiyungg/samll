<template>
  <div id="category">
    <category-bar />
      <div class="categorytop" :pull-up-load="true">
          <categoryleft-bar :categorylist="categorylist" @rightclick="rightclick"/>
            <catefory-right-bar :cotegoryright="subcategoryList" class="rightl"/> 
            
      </div>
        <div class="control">
      <tab-control :titles="['流行', '新款', '精选']"/>
    </div>
     <goods-list :goods="gooditems['pop'].list"/>
  </div>
</template>

<script>
import CategoryBar from './childComps/CategoryBar.vue'
import CategoryleftBar from './childComps/CategoryleftBar.vue'
import CateforyRightBar from './childComps/CategoryRightBar.vue'
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue"
import {getCategory,getCategoryTop,getCategoryBottom} from 'network/category.js'
export default {
    name:"Category",
    components:{
      CategoryBar,
      CategoryleftBar,
      CateforyRightBar,
      TabControl,
       GoodsList,

    },
    data(){
      return {
        categorylist:[],
        currentIndex:0,
        subcategoryList:[],
        gooditems: {
        pop:{ page: 0, list: [] },
        new:{ page: 0, list: [] },
        sell:{ page: 0, list: [] },
      },
      }
    },
    created(){
      getCategory().then(res => {
        //console.log(res);
        this.categorylist = res.data.category.list
      })
      // getCategoryTop(this.maitKey).then(res => {
      //   console.log(this.maitKey);
      // })
    },
    methods:{
      rightclick({maitKey,index,miniWallkey}) {
      // 防止反复请求
      // if (this.currentIndex === index) return;
      // this.currentIndex = index;
      // 每次切换分类初始化tabControl的下标
      // 请求对应的推荐列表
      //this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, "pop");
      this.getCategoryTop(maitKey);
      this.getCategoryBottom(miniWallkey,'pop')
      this.getCategoryBottom(miniWallkey,'new')
      this.getCategoryBottom(miniWallkey,'sell')
    },
     getCategoryTop(key) {
      getCategoryTop(key).then(res => {
         this.subcategoryList = res.data.list
        
      });
    },
    getCategoryBottom(miniWallkey,type){
      getCategoryBottom(miniWallkey,type).then(res =>{
        this.gooditems[type].list.push(...res);
      })
    }
    }
}
</script>

<style>
  .categorytop {
   display: flex; 
  
   
  }
  .control{
    position: fixed;
    right: 0;
    bottom: 49px;
    width: calc(100% - 100px);
  }
</style>
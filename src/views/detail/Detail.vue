<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleclick="titleclick"/>
      <scroll class="content" :pull-up-load="true" :probe-type="3" ref="scroll" @scroll="contentScroll">
        <detail-swiper :topswiper="topImages"/>
        <detail-base-info :goods = "goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :datainfo=" detailInfo"/>
        <detail-goods-params :goodsparams="itemParams" ref="params"/>
        <detail-comment-info :commoninfo="commentinfo" ref="comment" />
        <goods-list :goods="recommends" ref="list"/>
      </scroll>
      <detail-bottom-bar @addcart="addcart"/>
      <back-top @click.native="buttomclick" v-show="isactives"/>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailGoodsParams from './childComps/DetailGoodsParams'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from "components/content/goods/GoodsList.vue"
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from 'components/content/backTop/BackTop.vue'
import {getDetail,Goods, Shop,GoodsParams,getRecommend} from 'network/detail.js'

export default {
    name:"Detail",
    data(){
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        itemParams:{},
        commentinfo:{},
        recommends:[],
        themeTopYs:[],
        isactives:false
      }
    },
    components:{
      DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailGoodsParams,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        BackTop
      
       
    },
    created(){
      //获取iid
      this.iid = this.$route.params.iid

    //获取详情页的数据
      getDetail(this.iid).then(res => {
        console.log(res);
        //获取顶部的轮播数据
        this.topImages = res.result.itemInfo.topImages

        this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo)
        this.shop =  new Shop(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
        this.itemParams = new GoodsParams(res.result.itemParams.info,res.result.itemParams.rule)

        if((res.result.rate.cRate) !== 0){
          this.commentinfo = res.result.rate.list[0]
        }
        this.$nextTick(()=>{
               this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop + 4000)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop + 4000)
            this.themeTopYs.push(this.$refs.list.$el.offsetTop + 4000)
        })


      })
      getRecommend().then(res => {
        console.log(res);
        this.recommends = res.data.list
      })
    },
    updated(){
 
    },
    methods:{
      titleclick(index){
        console.log(index);
        
        this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      contentScroll(position){
        (-position.y) > 2000 ? this.isactives = true : this.isactives= false
      },
      buttomclick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      addcart(){
       const product = {}
       product.image = this.topImages[0]
       product.title = this.goods.title
       product.desc = this.goods.desc
       product.price =this.goods.realPrice
       product.iid = this.iid

       this.$store.dispatch('addCart',product)
      }
    },
    mounted(){
      
    }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .content{
    height: calc(100% - 44px);

  }
  
</style>
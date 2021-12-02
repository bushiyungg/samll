<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control1" @tabclick="tabclick" ref="tabclick1" v-show="isTabFixed "/>
    <scroll class="content1" ref="content1"
     :probe-type="3"
     @scroll="contentclick" 
    :pull-up-load="true"
    @pullingUp="loadMore"
    >
      <swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabclick="tabclick" ref="tabclick"/>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backclick" v-show="isactive"/>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import Scroll from 'components/common/scroll/Scroll.vue'
import NavBar from "components/common/navbar/NavBar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue"
import BackTop from 'components/content/backTop/BackTop.vue'
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop:{ page: 0, list: [] },
        new:{ page: 0, list: [] },
        sell:{ page: 0, list: [] },
      },
      currentType:'pop',
      isactive:false,
      tabOffsetTop:0,
      isTabFixed:false
    };
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods('new');
    this.getHomeGoods("sell");

    //监听完成
    // this.$bus.$on('imageLoad',()=>{
    //   this.$refs.scroll.refresh()
    // })
  },
  methods: {
    tabclick(index){
      //console.log(index);
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabclick1.currentindex = index
      this.$refs.tabclick.currentindex = index
    },
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.content1.scroll.finishPullUp()
      });
    },
    backclick(){
      this.$refs.content1.scroll.scrollTo(0,0,500)
    },
    contentclick(position){
    (-position.y) > 1000 ? this.isactive = true : this.isactive = false
     //console.log(position.y);
     //决定是否吸顶
     this.isTabFixed = (-position.y)>(this.tabOffsetTop+580)
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabclick1.$el.offsetTop
    }
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.tab-control {
  position: sticky;
  top: 44px;
   z-index: 10;
}
.content1 {
  /* height: 500px;
  overflow: hidden; */

  
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab-control{
  
  z-index: 9;
  background-color: #fff;
}
</style>
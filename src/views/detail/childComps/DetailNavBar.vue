<template>
  <div>
      <nav-bar>
          <div slot="left" class="back" @click="backclick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" :key="index"
               class="title-item" :class="{active: index === currentindex}"
               @click="detailclick(index)"
               >{{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name:"DetailNavBar",
    components:{
        NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentindex:0
        }
    },
    methods:{
        detailclick(index){
            this.currentindex = index
            this.$emit('titleclick',index)
        },
        backclick(){
            this.$router.go(-1)
        }
    }

}
</script>

<style>
    .title {
        display: flex;
        font-size: 12px;
    }
    .title-item {
        flex: 1;
    }
    .active {
        color: var(--color-high-text);
    }
    .back{
        margin-top: 10px;

    }
</style>
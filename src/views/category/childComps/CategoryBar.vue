<template>
  <div id="categorybar">
      <nav-bar>
          <div slot="center">分类</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    name:"CategoryBar",
    components:{
        NavBar
    }
}
</script>

<style>
    #categorybar{
        background-color: var(--color-tint);
        color: #fff;
        font-weight: 400;
    }
</style>
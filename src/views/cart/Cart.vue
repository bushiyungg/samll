<template>
  <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center">购物车({{$store.state.cartList.length}})</div>
      </nav-bar>
      <cart-list/>
      <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'
export default {
    name:"Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
       
    }
}
</script>

<style>
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700px;
  }
</style>
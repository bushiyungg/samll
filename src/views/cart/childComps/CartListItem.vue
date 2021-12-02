<template>
  <div id="shop-item">
    <div class="item-selector">
        <check-button :is-checked="product.checked" @click.native="checkclick"/>
    </div>
      <div class="item-img">
          <img :src="product.image" alt="商品图片">
      </div>
      <div class="item-info">
          <div class="item-title">{{product.title}}</div>
          <div class="item-desc">{{product.desc}}</div>
          <div class="info-bottom">
              <div class="item-price left">￥{{product.price}}</div>
              <div class="item-count rigth">×{{product.count}}</div>
          </div>
      </div>

  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton.vue'
export default {
    name:"CartListItem",
    props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{
      CheckButton
    },
    methods: {
        checkclick(){
            this.product.checked = !this.product.checked 
        }
    }
}
</script>

<style>
    #shop-item{
        width: 100%;
        display: flex;
        font-size: 0;
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }
    .item-selector{
        width: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }


    .item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-img {
  padding: 5px;
}

.item-img img {
  display: block;
  width: 80px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.item-info {
  font-size: 17px;
  position: relative;
  overflow: hidden;
  width: 88%;
  padding: 5px 10px;
  color: #333333;
}

.item-info .item-desc {
  font-size: 14px;
  margin-top: 15px;
  color: #666666;
}

.info-bottom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
  margin-top: 10px;
}

.info-bottom .item-price {
  color: #ff4500;
  margin-top: 16px;
}
.info-bottom .item-count {
    float: right;
    margin-top: 16px;
}

</style>
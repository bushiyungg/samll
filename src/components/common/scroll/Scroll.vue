<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
import Pullup from '@better-scroll/pull-up'
import MouseWheel from '@better-scroll/mouse-wheel'
  BScroll.use(MouseWheel)
BScroll.use(Pullup)
BScroll.use(ObserveImage)
BScroll.use(ObserveDOM)
export default {
    name:"Scroll",
    data(){
        return {
            scroll:null,
        }
    },
    props:{
        probeType:{
            type:Number,
            default :0
        },
        pullUpLoad:{
            type:Boolean,
            default:true
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            disableMouse:false,
            disableTouch:false,
            pullUpLoad: this.pullUpLoad,
            mouseWheel:true,
            probeType:this.probeType,
            click:true,
            observeDOM:true,
            observeImage:true
            
            
        })


        //监听滚动位置
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        //上拉加载更多
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
    },
    methods:{
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    // refresh(){
    //     this.scroll && this.scroll.refresh()
    // }


    }
}
</script>

<style>

</style>
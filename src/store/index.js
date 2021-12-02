import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCount(state,payload){
            payload.count++
        },
        addToCart(state,payload){
            payload.checked = true
            state.cartList.push(payload)
        }
    },
    actions:{
        addCart(context,payload) {

            let lodProduct = null
            for(let item of context.state.cartList){
                if(item.iid === payload.iid) {
                    lodProduct = item
                }
            }

            if(lodProduct) {
               // lodProduct.count +=1
               context.commit('addCount',lodProduct)
            }else {
                payload.count = 1
                //context.state.cartList.push(payload)
                context.commit('addToCart',payload)
            }
            
        }
    }
})

export default store
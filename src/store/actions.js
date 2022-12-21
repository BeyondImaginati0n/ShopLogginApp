export default {
    addProductToCartAct(context,payloads) {
       context.commit('addProductToCart',payloads);
      },
      removeProductFromCartAct(context,payload){
context.commit('removeProductFromCart',payload);
      }  
};
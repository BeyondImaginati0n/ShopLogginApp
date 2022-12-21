export default {
    addProductToCart(state,payloads) {
        const productInCartIndex = state.cart.items.findIndex(
          (ci) => ci.productId === payloads.id
        );
  
        if (productInCartIndex >= 0) {
          state.cart.items[productInCartIndex].qty++;
        } else {
          const newItem = {
            productId: payloads.id,
            title: payloads.title,
            image: payloads.image,
            price: payloads.price,
            qty: 1,
          };
          state.cart.items.push(newItem);
        }
        state.cart.qty++;
        state.cart.total += payloads.price;
      },
      removeProductFromCart(state,payload) {
        const productInCartIndex = state.cart.items.findIndex(
          (cartItem) => cartItem.productId === payload
        );
        const prodData = state.cart.items[productInCartIndex];
        state.cart.items.splice(productInCartIndex, 1);
        state.cart.qty -= prodData.qty;
        state.cart.total -= prodData.price * prodData.qty;
      },  
};
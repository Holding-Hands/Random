export default {
  addToCart(context, payload) {

    // let oldProduct = null;
    // for (let item of context.state.cartList) {
    //     if (item.iid === payload.iid) {
    //         oldProduct = payload;
    //     }
    // }
    // 查找数组中是否有该商品
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      console.log(oldProduct);

      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit('addCounter', oldProduct);
        resolve('商品数量+1')
      } else {
        // state.cartList.push(payload);
        context.commit('addCart', payload)
        reject('添加购物车成功')
      }
    })
  }
}


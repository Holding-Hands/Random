export default {
    //1.mutations的目的修改state中的状态
    //2.mutations中的每个方法完成的事情尽量单一
    addCounter(state,payload){
        payload.count ++;
    },
    addCart(state,payload){
        payload.count = 1;
        payload.checked=true;
        state.cartList.push(payload);
    }
}

import Toast from './Toast'

export default {
  install: function (Vue) {
    console.log('---');
    //1.创建组件构造器
    const toastConstructor = Vue.extend(Toast)

    //2.new的方式，根据组件构造器可以创建出来一个组件对象
    const toast = new toastConstructor()

    //3.将组件对象，手动挂载到某一个元素上
    toast.$mount(document.createElement('div'))

    //4.toast.$el对应的就是上面创建的div
    document.body.appendChild(toast.$el)
    console.log(toast.$el);

    //5.添加到原型上
    Vue.prototype.$toast = toast;
  }
}


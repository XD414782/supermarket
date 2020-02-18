import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
	// 1.普通用法
  // render: function (h) { return h('h1',['hello',h('button',['按钮'])] )}
	// 2.传组件对象(下方传App即是 当然这里没有具体写cpn)
	// render: function(h){ return cpn}
	render: function(h){ return h(App)}
}).$mount('#app')

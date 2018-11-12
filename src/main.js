import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//mint-ui
import { Swipe, SwipeItem,Search,Lazyload} from 'mint-ui';
import'mint-ui/lib/style.css'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Search.name, Search);
Vue.use(Lazyload);
//mui
import './static/mui/css/mui.css'
import './static/mui/css/myiconfont.css'
import './static/mui/css/myiconfont2.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

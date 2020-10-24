import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.axios = axios;

import {
  Icon,
  TabPane,
  Tabs,
  Button,
  Loading,
  Container,
  Header,
  Main,
  Footer,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Dialog,
  Checkbox,
  CheckboxGroup,
} from 'element-ui';
Vue.use(Icon).use(TabPane).use(Tabs)
   .use(Button).use(Loading.directive)
   .use(Container).use(Header).use(Main).use(Footer)
   .use(Form).use(FormItem).use(Input).use(Select)
   .use(Option).use(Dialog).use(Checkbox).use(CheckboxGroup)
     
import 'element-ui/lib/theme-chalk/index.css'; 

import MyInputNumber from './components/MyInputNumber.vue'
Vue.component('MyInputNumber', MyInputNumber)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

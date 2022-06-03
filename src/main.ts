import Vue from 'vue'
import App from '@/App.vue'
import { initializeApp } from "firebase/app";
import store from './store'
import firebaseConfig from "@/auth/keys.json";
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

initializeApp(firebaseConfig);
new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from '@/App.vue'
import store from './store'
import firebaseConfig from "@/auth/keys.json";
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from "firebase/compat";
import { getDatabase } from "firebase/database";


Vue.config.productionTip = false

const app = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user).then();
  router.beforeEach(async (to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !user){
      next('login');
    }else{
      next();
    }
  });
});

const db = getDatabase(app);


new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

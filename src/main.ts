import Vue from 'vue'
import App from '@/App.vue'
import store from './store'
import firebaseConfig from "@/auth/keys.json";
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from "firebase/compat";


Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user).then(r => {
  //  TODO ADD Message
    console.log("User: ", r);
  });
});

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

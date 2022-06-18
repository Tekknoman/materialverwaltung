import App from '@/views/App.vue';
import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import Vue from 'vue';
import firebaseConfig from './config.json';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

initializeApp(firebaseConfig);

getAuth().onAuthStateChanged((user: User | null) => {
  console.debug('[Auth] User state change', user);
  store.commit('SET_USER', user);
});

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app');

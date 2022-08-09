import App from '@/views/App.vue';
import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getAnalytics } from "firebase/analytics";
import Vue from 'vue';
import firebaseConfig from './config.json';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';


const app = initializeApp(firebaseConfig);

getAuth().onAuthStateChanged((user: User | null) => {
  console.debug('[Auth] User state change', user);
  store.commit('SET_USER', user);
});

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider('6Lc_XF0hAAAAADar6JlyLnKcR1lYC7raZ-7U9GaC'),
  isTokenAutoRefreshEnabled: true
});

const analytics = getAnalytics(app);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App)
}).$mount('#app');

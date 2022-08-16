import App from '@/views/App.vue';
import {initializeApp} from 'firebase/app';
import {getAuth, User} from 'firebase/auth';
import {initializeAppCheck, ReCaptchaV3Provider} from "firebase/app-check";
import {getAnalytics} from "firebase/analytics";
import Vue from 'vue';
import firebaseConfig from './config.json';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';
import {getFirestore} from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

getAuth().onAuthStateChanged((user: User | null) => {
    store.commit('SET_USER', user);
});

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6Lc8qGIhAAAAAGdSzm_xC3G4xW529_vLqSZRWSvc'),
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

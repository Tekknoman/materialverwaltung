import Vue from 'vue'
import App from '@/App.vue'
import store from './store'
import firebaseConfig from "@/auth/keys.json";
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from "firebase/compat";

Vue.config.productionTip = false

export const app = firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user).then();
    store.commit("SET_IS_AUTH_INIT");
});

router.beforeEach(async (to, from, next) => {
    function guard() {
        if (requiresAuth && !store.getters.user.loggedIn) {
            next('login');
        } else {
            next();
        }
    }

    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (!store.getters.isAuthInit) {
        store.watch(
            state => state.isAuthInit,
            () => {
                guard()
            }
        );
    } else {
        guard();
    }
});

new Vue({
    store,
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from '@/App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import router from './router'
import {app} from './app'

Vue.config.productionTip = false


app.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user).then();
    store.commit("SET_IS_AUTH_INIT");
});

store.dispatch('bindObjects').then()

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

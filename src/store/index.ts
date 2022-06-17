import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";
import {vuexfireMutations, firestoreAction} from 'vuexfire'
import {db} from '@/app'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        alert: {
            message: "",
            type: "success",
            show: false
        },
        loading: false,
        isAuthInit: false,
        objects: []
    },
    getters: {
        user(state) {
            return state.user
        },
        alert(state) {
            return state.alert
        },
        showAlert(state) {
            return state.alert.show
        },
        loading(state) {
            return state.loading
        },
        isAuthInit(state) {
            return state.isAuthInit
        },
        objects(state) {
            return state.objects
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_ALERT(state, alert) {
            state.alert = alert;
        },
        SET_SHOW_ALERT(state, show) {
            console.log("SET_SHOW_ALERT", show);
            state.alert.show = show;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_IS_AUTH_INIT(state) {
            state.isAuthInit = true;
        },
        ...vuexfireMutations
    },
    actions: {
        fetchUser({commit}, user) {
            commit("SET_LOADING", true);
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
            commit("SET_LOADING", false);
        },
        signOut({commit}) {
            commit("SET_LOADING", true);
            commit("SET_USER", null);
            commit("SET_LOGGED_IN", false);
            router.replace({name: "Home"}).then(() => {
                commit("SET_LOADING", false);
            });
        },
        bindObjects() {
            firestoreAction(({bindFirestoreRef}) => {
                return bindFirestoreRef('objects', db.collection('objects'))
            })
        },
        unbindObjects() {
            firestoreAction(({unbindFirestoreRef}) => {
                unbindFirestoreRef('objects')
            })
        }

    }
})

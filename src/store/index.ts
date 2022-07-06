import router from '@/router';
import {User} from 'firebase/auth';
import Vue from 'vue';
import Vuex from 'vuex';
import {vuexfireMutations} from 'vuexfire';
import Alert, {triggerAlert} from "@/models/Alert";
import AlertType from "@/models/AlertType";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined as User | null | undefined,
    alert: new Alert('', AlertType.info, false),
    loading: false,
    objects: []
  },
  getters: {
    isLoggedIn(state) {
      return state.user !== null && state.user !== undefined;
    },
    user(state) {
      return state.user;
    },
    alert(state) {
      return state.alert;
    },
    showAlert(state) {
      return state.alert.show;
    },
    loading(state) {
      return state.loading;
    },
    objects(state) {
      return state.objects;
    }
  },
  mutations: {
    SET_USER(state, user) {
      const oldUser = state.user;
      state.user = user;
      if (user === null && oldUser !== undefined) {
        router.push('login').then();
      }
    },
    SET_ALERT(state, alert) {
      state.alert = alert;
      state.alert.show = true;
    },
    SET_SHOW_ALERT(state, show) {
      if (!show) {
        state.alert = {message: '', type: AlertType.info, show: false} as Alert;
      }
      state.alert.show = show;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    ...vuexfireMutations
  },
  actions: {}
});



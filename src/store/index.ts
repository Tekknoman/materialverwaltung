import router from '@/router';
import {User} from 'firebase/auth';
import Vue from 'vue';
import Vuex from 'vuex';
import Alert, {triggerAlert} from "@/models/Alert";
import AlertType from "@/models/AlertType";
import Item from "@/models/Item";
import DbService from "@/store/DbService";


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: undefined as User | null | undefined,
        alert: new Alert('', AlertType.info, false),
        loading: false,
        items: [] as Item[],
        itemFilter: ''
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
            return state.items;
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
        ADD_ITEM(state, item: Item) {
            state.items.push(item);
        },
        UPDATE_ITEM(state, item: Item) {
            const index = state.items.findIndex(i => i.id === item.id);
            state.items.splice(index, 1, item);
        },
        DELETE_ITEM(state, item: Item) {
            const index = state.items.findIndex(i => i.id === item.id);
            state.items.splice(index, 1);
        },
        SET_ITEMS(state, items: Item[]) {
            state.items = items;
        },
        SET_ITEM_FILTER(state, filter) {
            state.itemFilter = filter;
        }
    },
    actions: {
        fetchItems(context) {
            DbService.getItems(context.state.itemFilter).then((items: Item[]) => {
                context.commit('ADD_ITEM', items);
            });
        }
    }
});



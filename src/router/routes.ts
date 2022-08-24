import Account from '@/views/Account/Account.vue';
import Home from '@/views/Home/Home.vue';
import Login from '@/views/Login/Login.vue';
import {getAuth, signOut} from 'firebase/auth';
import {RouteConfig} from 'vue-router';
import Material from "@/views/Material/Material.vue";
import LocationSelection from "@/views/Material/LocationSelection/LocationSelection.vue";
import MaterialTable from "@/views/Material/MaterialTable/MaterialTable.vue";
import Signup from "@/views/Signup/Signup.vue";

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
            inNavbarVisible: true,
            navIcon: 'mdi-home-city'
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
        meta: {
            requiresAuth: true,
            isVisibleInNav: true,
            navIcon: 'mdi-account'
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        beforeEnter(): void {
            console.debug('Logging out user...');
            const session = getAuth();
            signOut(session);
        },
        alias: 'Login',
        meta: {
            isVisibleInNav: true,
            navIcon: 'mdi-logout'
        }
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    },
    // {
    //   path: '/signup',
    //   name: 'Signup',
    //   component: Signup
    // },
    {
        path: '/material',
        component: Material,
        meta: {
            requiresAuth: true,
            isVisibleInNav: true,
            navIcon: 'mdi-bookshelf'
        },
        children: [
            {
                path: '',
                component: LocationSelection,
                name: 'Material'
            },
            {
                path: ':locationId',
                component: MaterialTable
            }
        ]
    }
];

export default routes;

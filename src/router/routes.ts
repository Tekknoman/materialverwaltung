import Account from '@/views/Account/Account.vue';
import Home from '@/views/Home/Home.vue';
import Login from '@/views/Login/Login.vue';
import {getAuth, signOut} from 'firebase/auth';
import {RouteConfig} from 'vue-router';
import Material from "@/views/Material/Material.vue";
import LocationSelection from "@/views/Material/LocationSelection/LocationSelection.vue";
import MaterialTable from "@/views/Material/MaterialTable/MaterialTable.vue";
import Signup from "@/views/Signup/Signup.vue";
import Group from "@/views/Group/Group.vue";
import GroupOverview from "@/views/Group/GroupOverview/GroupOverview.vue";

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
            navIcon: 'mdi-account',
            position: -10
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
        alias: '/login',
        meta: {
            isVisibleInNav: true,
            navIcon: 'mdi-logout',
            position: 10
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
            navIcon: 'mdi-bookshelf',
            navTitle: 'Material'
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
    },
    {
        path: '/groups',
        component: Group,
        meta: {
            requiresAuth: true,
            isVisibleInNav: true,
            navIcon: 'mdi-account-group',
            navTitle: 'Groups'
        },
        children: [
            {
                path: '',
                component: GroupOverview,
                name: 'GroupOverview'
            }
        ]
    }
];

export default routes;

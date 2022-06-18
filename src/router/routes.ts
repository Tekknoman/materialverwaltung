import Account from '@/views/Account/Account.vue';
import Home from '@/views/Home/Home.vue';
import { getAuth, signOut } from 'firebase/auth';
import { RouteConfig } from 'vue-router';

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
    name: 'Login',
    beforeEnter(): void {
      console.debug('Logging out user...');
      const session = getAuth();
      signOut(session);
    },
    redirect: '/login',
    meta: {
      isVisibleInNav: true,
      navIcon: 'mdi-logout'
    }
  }
];

export default routes;

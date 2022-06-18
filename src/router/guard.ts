import store from '@/store';
import { NavigationGuardNext, Route } from 'vue-router';

const guard = (to: Route, from: Route, next: NavigationGuardNext) => {
  const requiresAuth: boolean = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !store.getters.isLoggedIn) {
    next('login');
  } else {
    next();
  }
};

export default (to: Route, from: Route, next: NavigationGuardNext): any => {
  if (store.getters.user === undefined) {
    store.watch(
      (state) => state.user,
      () => {
        guard(to, from, next);
      }
    );
  } else {
    guard(to, from, next);
  }
};

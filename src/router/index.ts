import Vue from 'vue';
import VueRouter from 'vue-router';
import guard from './guard';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'hash'
});

router.beforeEach(guard);

export default router;

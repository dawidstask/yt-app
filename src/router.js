import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Video from './views/Video.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:term?',
      name: 'home',
      component: Home,
    },
    {
      path: '/video/:id',
      name: 'video',
      component: Video,
    },
  ],
});

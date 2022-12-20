import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuild from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartInfo.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  }, {
    path: '/build',
    name: 'Build',
    component: RobotBuild,
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
  }],
});

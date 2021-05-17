import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

import MyVideo from '@/components/MyVideo.vue';

window.MyVideo = MyVideo;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

registerMicroApps([
  {
    name: 'app1',
    entry: 'http://localhost:8081',
    container: '#appContainer',
    activeRule: '#/app1',
    props: { data: { router } }
  },
  {
    name: 'app2',
    entry: 'http://localhost:8082',
    container: '#appContainer',
    activeRule: '#/app2',
    props: { data: router }
  },
]);

start();

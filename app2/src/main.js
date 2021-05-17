import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render({ data = {}, container } = {}) {
  router = new VueRouter({
    routes,
  });
  instance = new Vue({
    router,
    data() {
      return {
        parentRouter: data.router,
      }
    },
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app2') : '#app2');
}

export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props.data);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
import './public-path';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes, { routesSingle } from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vuesubapp' : '/',
    mode: 'history',
    // redirect: '/vuesubapp/home',
    // routes: window.__POWERED_BY_QIANKUN__ ? [
    //   {
    //     path: '/vuesubapp',
    //     children: routes,
    //     // redirect: '/vuesubapp/home'
    //   }
    // ] : routesSingle,
    routes: window.__POWERED_BY_QIANKUN__ ? routes :routesSingle
  });

  router.beforeEach((to, from, next) => {
    // if (!to.path.includes('/vuesubapp')) {
    //   next({
    //     path: `/vuesubapp${to.path}`,
    //     query: to.query
    //   })
    //   return
    // }
    // debugger
    next()
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

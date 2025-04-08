import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
import Autofocus from './directives/vAutofocus'

const app = createApp(App);

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.use(pinia);

app.directive('autofocus', Autofocus);

app.mount('#app');

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.directive('autofocus', {
  mounted: (el) => {
    el.focus();
  }
});

app.mount('#app')

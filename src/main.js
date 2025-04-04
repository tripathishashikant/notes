import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'
import Autofocus from './directives/vAutofocus'

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.directive('autofocus', Autofocus);

app.mount('#app');

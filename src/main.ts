import { createApp } from 'vue';
import App from './App.vue';
//import router from './router'
import i18n from './i18n/i18n';
import store from './store';

import '@/assets/styles/index.scss';

createApp(App).use(i18n).use(i18n).use(store).mount('#app');

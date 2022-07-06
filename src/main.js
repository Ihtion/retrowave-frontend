import { createApp } from 'vue';

import App from './App.vue';
import { router } from '@/router';
import vuetify from '@/plugins/vuetify';
import { loadFonts } from '@/plugins/webfontloader';
import { Toast, toastOptions } from '@/plugins/toastification';

loadFonts();

const app = createApp(App);

app.use(router).use(vuetify).use(Toast, toastOptions);
app.mount('#app');

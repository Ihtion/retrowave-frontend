import { createApp } from 'vue';
import vue3GoogleLogin from 'vue3-google-login';

import App from './App.vue';

import { store } from '@/store';
import { router } from '@/router';
import vuetify from '@/plugins/vuetify';
import { loadFonts } from '@/plugins/webfontloader';
import { Toast, toastOptions } from '@/plugins/toastification';

loadFonts();

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Toast, toastOptions)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE_OAUTH_CLIENT_ID,
  });

app.mount('#app');

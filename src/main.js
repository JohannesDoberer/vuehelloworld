import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import LuigiClient from '@luigi-project/client';

// Vue.mixin({
//     created: function () {
//         this.luigi = LuigiClient;
//     }
// });
createApp(App).use(router).mount('#app')

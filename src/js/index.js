import { createApp } from 'vue';
import index from './components/index.vue';

(() => {
  const _app = createApp(index);
  _app.mount('#app');
})();

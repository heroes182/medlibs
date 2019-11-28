import Vue from 'vue';
import App from '@/App.vue';
import '@/assets/styles.css';

document.title = 'MedLibs';

new Vue({ render: h => h(App) }).$mount('#app');

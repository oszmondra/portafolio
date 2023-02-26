import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import VueProgressBar from 'vue-progressbar'



//createApp(App).mount('#app')
createApp(App)
  .use(router)
  .mount("#app");

  Vue.use(VueProgressBar, {
    color: '#00c8ff',
    failedColor: 'red',
    thickness: '3px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
  })

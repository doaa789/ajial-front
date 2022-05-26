import { createApp } from 'vue';
import App from './App.vue';

//import LottieAnimation from "lottie-web-vue";

import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseDialog from './components/ui/BaseDialog.vue'

//import { setTimeout } from 'core-js';
//function getRandomValue(min,max){
//    return Math.floor(Math.random()*(max-min))+min;
//}
const app=createApp(App)
app.use(store);
app.use(router);

//app.use(LottieAnimation);

app.component('base-card',BaseCard);
app.component('base-button',BaseButton);
app.component('base-dialog',BaseDialog);
app.mount('#app')

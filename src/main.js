import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import '@/firebase/init.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/assets/css/font.css'
 
Vue.use(VueAxios, axios)

Vue.config.productionTip = false


let app = null

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


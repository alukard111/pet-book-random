import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
import Vuex from 'vuex'
import { initializeApp } from "firebase/app";


import '../dist/output.css'


const firebaseConfig = {
  apiKey: "enter value",
  authDomain: "enter value",
  projectId: "enter value",
  storageBucket: "enter value",
  messagingSenderId: "enter value",
  appId: "enter value",
  databaseURL: 'enter value',
};


initializeApp(firebaseConfig)

Vue.use(Vuex)
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');

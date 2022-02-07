import Vue from "vue";
import Vuex from "vuex";

import productState from "./product";
import cartState from "./cart";
import notificationState from "./notification";
import userState from "./user";
Vue.use(Vuex);
const store =new  Vuex.Store({
   modules :{
       product: productState,
       cart: cartState,
       notification: notificationState,
       user: userState
   }
})

export default store;
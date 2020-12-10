import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      login: false,
      user: [],
    },
    products: [],
    cart_count: 0,
    cart: []
  },

  getters: {
    isLoggedIn(state) {
      return state.auth.login;
    }
  },

  mutations: {
    LOGIN(state, status) {
      state.auth.login = status;
      state.auth.user = [];
    },

    AUTH_USER(state, user) {
      state.auth.user = user;
    }
  },

  SET_Products(state, products) {
    state.products = products;
  },

  UPDATE_Products(state, products) {
    state.products.push(products);
  },

  actions: {
    loadProducts({ commit }) {
      axios.get(`https://thawing-ravine-80622.herokuapp.com/api/products`, {
      }).then((response) => {
        commit("SET_Products", response.data);
      });
    },
    changeProducts() {
      axios.post("https://thawing-ravine-80622.herokuapp.com/api/products", {
        body: JSON.stringify(
          { title: "foo", body: "bar", userId: 1 }
        ),
      }).then((response) => {
        this.commit("UPDATE_Products", response.data);
      });
    }
  }
});

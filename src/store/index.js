import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Banana", price: 20, id: 1 },
      { name: "Apple", price: 10, id: 2 },
      { name: "Pear", price: 15, id: 3 },
      { name: "Lemon", price: 5, id: 4 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state) => {
      state.products.forEach((product) => {
        product.price -= 1;
      });
    },
  },
  actions: {
    reducePrice: (context) => {
      setTimeout(function () {
        context.commit("reducePrice");
      }, 2000);
    },
  },
  modules: {},
});

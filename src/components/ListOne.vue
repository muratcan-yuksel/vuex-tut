<template>
  <div class="listOne">
    <h1>List One</h1>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.id">
        <span class="name">{{ product.name }} </span>
        <span class="price">{{ product.price }} </span>
      </li>
    </ul>
    <button @click="reducePrice">Reduce Price</button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    },
  },
  methods: {
    reducePrice: function () {
      //mutations
      // this.$store.commit("reducePrice");
      //actions /dispatching
      this.$store.dispatch("reducePrice");
    },
  },
};
</script>

<style></style>

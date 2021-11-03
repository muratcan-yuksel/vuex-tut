<template>
  <div class="listTwo">
    <h1>List Two</h1>
    <ul>
      <li v-for="product in saleProducts" v-bind:key="product.id">
        <span class="name">{{ product.name }} </span>
        <span class="price">{{ product.price }} </span>
      </li>
    </ul>
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
};
</script>

<style></style>

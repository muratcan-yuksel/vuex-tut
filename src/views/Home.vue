<template>
  <div>
    <h1>vuex</h1>
    <ListOne />
    <ListTwo />
  </div>
</template>

<script>
import ListOne from "../components/ListOne.vue";
import ListTwo from "../components/ListTwo.vue";
export default {
  components: {
    ListOne,
    ListTwo,
  },
  data() {
    return {};
  },
};
</script>

<style></style>

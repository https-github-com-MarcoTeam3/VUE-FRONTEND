<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
//import Navigation from "@/components/Navigation.vue";

export default {
  /*components: {
    Navigation
  }, */

  mounted() {
    this.$store.commit("LOGIN", !!localStorage.getItem("token"));
  }
};
</script>

<style>
.h-screen {
  height: 100vh;
}
</style>
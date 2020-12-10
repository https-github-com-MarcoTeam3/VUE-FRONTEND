<template>
  <v-app id="app">
    <NavigationHome />
    <router-view />
  </v-app>
</template>

<script>
import NavigationHome from "@/components/NavigationHome.vue";

export default {
  components: {
    NavigationHome,
  },

  mounted() {
    this.$store.commit("LOGIN", !!localStorage.getItem("token"));
  },
};
</script>

<style>
.h-screen {
  height: 100vh;
}
#app {
  background: #eaeded;
}
</style>

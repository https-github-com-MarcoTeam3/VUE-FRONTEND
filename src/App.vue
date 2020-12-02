<template>
  <v-app>
    <Nav />
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: "App",

  components: {
    Nav
  },

  data: () => ({
    //
  })
};
</script>

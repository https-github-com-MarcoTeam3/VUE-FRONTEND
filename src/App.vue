<template>
<v-app>
    <v-main>
      <NavigationHome />
    </v-main>
  </v-app>
</template>

<script>
import NavigationHome from './components/NavigationHome.vue';

export default {
  name: "App",

  components: {
    NavigationHome
  },

  // data: () => ({
  //   //
  // })
};
</script>

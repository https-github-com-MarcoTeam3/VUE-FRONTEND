<template>
<v-app>
    <v-main>
      <HelloWorld />
      <NavigationHome />
    </v-main>
  </v-app>
</template>

<script>
import NavigationHome from './components/NavigationHome.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: "App",

  components: {
    HelloWorld,
    NavigationHome
  },

  // data: () => ({
  //   //
  // })
};
</script>

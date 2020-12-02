<template>
  <div class="container">
    <div>
      <h1>Salut</h1>
    </div>
    <h1>Dashboard</h1>
    <div class="card">
      <div class="card-body" v-if="user">
        <h3>Hello, {{ user.name }}</h3>
        <span>{{ user.email }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";
import NavDash from "../components/NavDash.vue"

export default {
  component: {
    NavDash
  },
  computed: {
    ...mapState({
      user: state => state.auth.user
    }),
  },

  mounted() {
    User.auth().then(response => {
      this.$store.commit("AUTH_USER", response.data);
    });
  }
};
</script>

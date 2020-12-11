<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col v-for="user in users" :key="user.id"  sm="3">
                    <v-card>
                        <v-card-title>{{ user.name }}</v-card-title>
                            <v-card-text>{{ user.email }}</v-card-text>
                            <router-link class="nav-item nav-link"
                                :to="{ name: 'Dashboard' }">
                                <v-btn color="success">
                                <span>Edit</span>
                                </v-btn>
                            </router-link>
                            <v-btn color="error" @click="delete_user(user.id)">Supprimer</v-btn>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
  data: () => ({
    users: [],
  }),
  mounted() {
    this.$axios
      .get(`https://thawing-ravine-80622.herokuapp.com/api/user`)
      .then((response) => {
        this.users = response.data;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
      delete_user(id) {
        
        this.$axios
      .delete(`https://thawing-ravine-80622.herokuapp.com/api/user/${id}`)
      
    },
  }
}
</script>

<style>

</style>
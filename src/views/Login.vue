<template>
  <div>
    <div class="pt-12 container">
      <h1 class="text-center">Login</h1>
      <div class="card">
        <div class="card-body">
          <div class="form-group">
            <label for="email">Email address:</label>
            <input
              type="email"
              v-model="form.email"
              class="form-control"
              id="email"
            />
            <span class="text-danger" v-if="errors.email">{{
              errors.email[0]
            }}</span>
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              v-model="form.password"
              class="form-control"
              id="password"
            />
            <span class="text-danger" v-if="errors.password">{{
              errors.password[0]
            }}</span>
          </div>
          <button @click.prevent="login" class="btn btn-primary btn-block">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

// eslint-disable-next-line
import User from "../apis/User";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      errors: [],
    };
  },

  methods: {
    login() {
      User.login(this.form)
        .then((response) => {
          this.$store.commit("LOGIN", true);
          localStorage.setItem("token", response.data);
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    },
  },
};
</script>

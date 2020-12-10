<template>
  <div>
    <div class="container">
      <h1>Dashboard</h1>
    </div>
    <v-container id="user-profile" fluid tag="section">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <base-material-card>
            <template v-slot:heading>
              <div class="display-2 font-weight-light">
                Edit Profile
              </div>

              <div class="subtitle-1 font-weight-light">
                Complete your profile
              </div>
            </template>

            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" md="4">
                    <v-text-field label="Company (disabled)" disabled />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field class="purple-input" label="User Name" />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field label="Email Address" class="purple-input" />
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field label="First Name" class="purple-input" />
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field label="Last Name" class="purple-input" />
                  </v-col>

                  <v-col cols="12">
                    <v-text-field label="Adress" class="purple-input" />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field label="City" class="purple-input" />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field label="Country" class="purple-input" />
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      class="purple-input"
                      label="Postal Code"
                      type="number"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-textarea
                      class="purple-input"
                      label="About Me"
                      value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />
                  </v-col>

                  <v-col cols="12" class="text-right">
                    <v-btn class="success">
                      Update Profile
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </base-material-card>
        </v-col>

        <v-col cols="12" md="4">
          <base-material-card
            class="v-card-profile"
            avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
          >
            <v-card-text class="text-center">
              <h4 class="display-2 font-weight-light mb-3 black--text">
                {{ user.name }}
              </h4>

              <p class="font-weight-light grey--text">
                <span>{{ user.email }}</span>
              </p>
            </v-card-text>
          </base-material-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import User from "../apis/User";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },

  mounted() {
    User.auth().then((response) => {
      this.$store.commit("AUTH_USER", response.data);
    });
  },
};
</script>

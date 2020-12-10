<template>
  <v-app>
    <v-container class="pt-12">
      <Carousel />
    </v-container>
    <v-container>
      <div class="row">
        <div class="col-md-3 col-sm-3 col-xs-12">
          <v-card outlined>
            <v-card-title>Filters</v-card-title>
            <v-divider></v-divider>
            <template>
              <v-treeview
                :items="items"
                :open="[1]"
                :active="[5]"
                :selected-color="'#fff'"
                activatable
                open-on-click
                dense
              ></v-treeview>
            </template>
            <v-card-title class="pb-0">Customer Rating</v-card-title>
            <v-container class="pt-0" fluid>
              <v-checkbox
                append-icon="mdi-star"
                label="4 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="3 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="2 & above"
                hide-details
                dense
              ></v-checkbox>
              <v-checkbox
                append-icon="mdi-star"
                label="1 & above"
                hide-details
                dense
              ></v-checkbox>
            </v-container>
          </v-card>
        </div>
        <div class="col-md-9 col-sm-9 col-xs-12">
          <v-breadcrumbs class="pb-0" :items="breadcrums"></v-breadcrumbs>

          <v-divider></v-divider>

          <div class="row text-center">
            <div
              class="col-md-3 col-sm-6 col-xs-12"
              v-for="product in products"
              :key="product.id"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
                    :src="product.pro_photo"
                  >
                    <!-- <v-card-title>{{ info.name }} </v-card-title> -->
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        <router-link
                          :to="{ name: 'Product', params: { id: product.id } }"
                        >
                          <v-btn v-if="hover" outlined>VIEW</v-btn>
                        </router-link>
                      </div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <a href="/product" style="text-decoration: none">
                        {{ product.title }}
                      </a>
                    </div>
                    <div>{{ product.price }}€</div>
                    <div>
                      <br />
                      <v-btn
                        class="btn-cart"
                        elevation="2"
                        rounded
                        small
                        color="#b4975a"
                      >
                        <i class="fas fa-shopping-cart"></i>
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-hover>
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <div>
      <Footer></Footer>
    </div>
  </v-app>
</template>
<<<<<<< HEAD

=======
>>>>>>> fb56cd623bff9ee4b80a2d026588cfd588e8c780
<script>
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: { Footer, Carousel },
  data: () => ({
    message: "SHOP",
    products: null,
    loading: true,
<<<<<<< HEAD
    errored: false,
=======
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
>>>>>>> fb56cd623bff9ee4b80a2d026588cfd588e8c780
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
    ],
    items: [
      {
        id: 1,
        name: "Category",
        children: [
          { id: 2, name: "Men's" },
          { id: 3, name: "Woman's" },
          { id: 4, name: "Connect" },
          { id: 5, name: "Classique" },
        ],
      },
    ],
  }),
  mounted() {
    this.$axios
<<<<<<< HEAD
      .get("http://localhost:8000/api/products/")
=======
      .get("https://thawing-ravine-80622.herokuapp.com/api/products")
>>>>>>> fb56cd623bff9ee4b80a2d026588cfd588e8c780
      .then((response) => {
        this.products = response.data;
      })
      .finally(() => (this.loading = false));
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
}
</style>

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
        <Watches></Watches>
      </div>
    </v-container>
    <div>
      <Footer></Footer>
    </div>
  </v-app>
</template>
<script>
import Footer from "../components/Footer.vue";
import Carousel from "../components/Carousel.vue";
import Watches from "../components/Watches.vue";

export default {

  components: { Footer, Carousel, Watches },
  data: () => ({
    message: "SHOP",
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
      .get("https://thawing-ravine-80622.herokuapp.com/api/products/")
      .then((response) => {
        this.products = response.data;
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    add_cart(product) {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(product);
    },
  },
};
</script>

<style>

</style>

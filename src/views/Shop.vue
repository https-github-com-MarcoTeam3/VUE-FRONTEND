<template>
  <div>
    <NavigationHome></NavigationHome>

    <v-container>
      <v-carousel
        cycle
        height="300"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
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
              :key="info.id"
              v-for="info in products"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="600">
                  <v-img
                    class="white--text align-end"
                    :aspect-ratio="16 / 9"
                    height="200px"
                    :src="info.src"
                  >
                    <!-- <v-card-title>{{ info.name }} </v-card-title> -->
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="row transition-fast-in-fast-out white darken-2 v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      ></div>
                    </v-expand-transition>
                  </v-img>
                  <v-card-text class="text--primary">
                    <div>
                      <a href="/product" style="text-decoration: none">{{
                        info.name
                      }}</a>
                    </div>
                    <div>{{ info.price }}</div>
                    <div><i class="fas fa-shopping-cart"></i></div>
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
  </div>
</template>
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
<script>
import Footer from "../components/Footer.vue";
import NavigationHome from "../components/NavigationHome.vue";
export default {
  components: { NavigationHome, Footer },
  data: () => ({
    message: "SHOP",
    info: null,
    loading: true,
    errored: false,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
    ],
    min: 0,
    max: 10000,
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
    products: [
      {
        name: "Apple Silver Chain",
        type: "Jackets",
        price: "18",
        src: require("../assets/img/shop/unknown1.png"),
      },
      {
        name: "Garmin Black",
        type: "Polo",
        price: "40.00",
        src: require("../assets/img/shop/unknown2.png"),
      },
      {
        name: "Zara limited...",
        type: "Denim",
        price: "25.00",
        src: require("../assets/img/shop/unknown3.png"),
      },
      {
        name: "SKULL TEE",
        type: "Jackets",
        price: "30.00",
        src: require("../assets/img/shop/unknown4.png"),
      },
      {
        name: "MANGO WINTER",
        type: "Sweaters",
        price: "50.00",
        src: require("../assets/img/shop/unknown5.png"),
      },
      {
        name: "SHIRT",
        type: "Denim",
        price: "34.00",
        src: require("../assets/img/shop/unknown6.png"),
      },
      {
        name: "TRUCKER JACKET",
        type: "Jackets",
        price: "38.00",
        src: require("../assets/img/shop/unknown7.png"),
      },
      {
        name: "COATS",
        type: "Jackets",
        price: "25.00",
        src: require("../assets/img/shop/unknown8.png"),
      },
      {
        name: "MANGO WINTER",
        type: "Sweaters",
        price: "50.00",
        src: require("../assets/img/shop/unknown9.png"),
      },
      {
        name: "SHIRT",
        type: "Denim",
        price: "34.00",
        src: require("../assets/img/shop/unknown10.png"),
      },
    ],
  }),
  mounted() {
    this.$axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        this.info = console.log(response.data[0].price);
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
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

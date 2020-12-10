<template>
  <v-app>
    <v-container class="pt-12">
      <div class="row">
        <div class="col-md-4 col-sm-5 col-xs-12">
          <v-carousel>
            <v-carousel-item :src="product.pro_photo"></v-carousel-item>
          </v-carousel>
        </div>
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.title }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                {{ product.price }}€
              </p>
              <v-spacer></v-spacer>
              <v-rating
                v-model="rating"
                class=""
                background-color="warning lighten-3"
                color="warning"
                dense
              ></v-rating>
              <span class="body-2	font-weight-thin"> 25 REVIEWS</span>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
              tincidunt eget nullam non. Tincidunt arcu non sodales neque
              sodales ut etiam. Lectus arcu bibendum at varius vel pharetra.
              Morbi tristique senectus et netus et malesuada.
            </p>

            <p class="title">ITEMS</p>

            <v-text-field
              outlined
              style="width:100px"
              :value="1"
              dense
            ></v-text-field>
            <v-btn
              class="success white--text"
              outlined
              tile
              dense
              @click="add_cart()"
              ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
            >
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
          </div>
        </div>
      </div>
    </v-container>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  components: { Footer },
  data: () => ({
    product: [],
    rating: 4.5,
  }),
  methods: {
    add_cart() {
      this.$store.state.cart_count += 1;
      this.$store.state.cart.push(this.product);
      console.log(this.$store.state.cart);
    },
  },
  mounted() {
    this.$axios
      .get(`https://thawing-ravine-80622.herokuapp.com/api/products/${this.$route.params.id}`)
      .then((response) => {
        this.product = response.data;
      })
      // .catch((error) => {
      //   console.log(error);
      //   this.errored = true;
      // })
      .finally(() => (this.loading = false));
  },
};
</script>

<style></style>

<template>
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
</template>

<script>
export default {
data: () => ({
     products: null,
    breadcrums: [
      {
        text: "Home",
        disabled: false,
        href: "/",
      },
    ],
}),
 created() {
    this.$axios
      .get("https://thawing-ravine-80622.herokuapp.com/api/products")
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
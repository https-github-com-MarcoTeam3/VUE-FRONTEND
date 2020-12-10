<template>
  <v-container>
    <!-- <ul>
      <li v-for="product in cart"
              :key="product.id">
        <p>{{ product.title }}</p>
        <p>{{product.price}}</p>
        
      </li>
    </ul>  -->
        <v-row>
      <v-col v-for="product in cart" :key="product.id"  sm="3">
        <v-card>
          <v-card-title>{{ product.title }}</v-card-title>
          <v-img :src="product.pro_photo" :alt="`image de ${product.name}`"> </v-img>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-text>{{ product.price }}€</v-card-text>
          <v-btn color="error" @click="delete_cart()">Supprimer</v-btn>
        </v-card>
      </v-col>
    </v-row>
        <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
        <v-card v-if="cart.length">
      <v-card-title>Total : {{ totalPrice }} €</v-card-title>
      <v-btn color="success">Valider mon panier</v-btn>
      <v-btn color="error" @click="deleteCartVue()">Supprimer mon panier</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Cart",
  methods: {
    delete_cart() {
      this.$store.state.cart_count -= 1;
      this.$store.state.cart.pop(this.product);
    },
    deleteCartVue () {
      this.$store.state.cart.splice(this.products)
      this.$store.state.cart_count = 0;
    }
  },
  computed: {
    cart: function () {
      return this.$store.state.cart;
    }
  }
};
</script>

<style></style>

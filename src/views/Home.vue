<template>
  <div>
    <v-container class="pt-12" style="text-align: center;">
      <h2>
        <vue-typer
          :text="['BLACK FRIDAY!!', 'MERRY CHRISTMAS', '-50% ALL WATCH']"
          :repeat="Infinity"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="250"
          erase-style="backspace"
          :erase-on-complete="false"
          caret-animation="solid"
        ></vue-typer>
      </h2>
    </v-container>
    <div class="container mt-4">
      <h2 style="text-align: center;">Explore Popular Categories</h2>
    </div>
    <div>
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <v-container class="pt-12">
      <h2 style="text-align: center;">
        More than <strong class="red--text">50</strong> brands in stock
      </h2>
    </v-container>
    <Brands></Brands>
    <Deals></Deals>
    <Footer></Footer>
  </div>
</template>

<script>
import Brands from "@/components/Brands.vue"
import Deals from "@/components/Deals.vue"
import Footer from "@/components/Footer.vue";
import { VueTyper } from "vue-typer";

export default {
  components: {
    Brands, Deals, Footer,
    "vue-typer": VueTyper
  },
   name: "Home",
  data() {
    return {
      items: [
        {
          src:
            "https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/1420/m_co_hp.jpg",
        },
        {
          src:
            "https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/1434/m_co_hp.jpg",
        },
        {
          src:
            "https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/1442/m_co_hp.jpg",
        },
        {
          src:
            "https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/513/m_co_hp_herbelin.jpg",
        },
      ],
    };
  },
 
};
</script>

<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
}
.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: #960000;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #962300;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}
</style>

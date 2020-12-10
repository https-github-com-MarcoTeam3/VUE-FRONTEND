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
    <v-container>
      <v-row no-gutters>
        <v-col :cols="12">
          <v-card-text class="" tile outlined>
            <v-card-title class="subheading ">Deals of the Day</v-card-title>
            <v-divider></v-divider>
            <div class="row">
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="300px"
                      src="https://i.postimg.cc/jdj03GCM/unknown3.png"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Lorem ipsum dolor sit amet.</div>
                      <div>Lorem, ipsum dolor.</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        More
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="300px"
                      src="https://i.postimg.cc/zv7NHNvg/unknown7.png"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Lorem, ipsum dolor.</div>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        More
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="300px"
                      src="https://i.postimg.cc/sgNVJ3cP/unknown1.png"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Lorem ipsum dolor sit amet.</div>
                      <div>Lorem, ipsum dolor.</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        More
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img
                      class="white--text align-end"
                      height="300px"
                      src="https://i.postimg.cc/50cbZpD6/unknown2.png"
                    >
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Lorem ipsum dolor sit amet.</div>
                      <div>Lorem, ipsum.</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn href="/shop" class="ma-2" outlined color="info">
                        More
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Brands from "@/components/Brands.vue"
import Footer from "@/components/Footer.vue";
import { VueTyper } from "vue-typer";

export default {
  components: {
    Brands, Footer,
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

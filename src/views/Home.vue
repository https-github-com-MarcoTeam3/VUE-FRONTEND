<template>
  <div>
    <!-- /.col-lg-3 -->
     <v-container class="grey lighten-5">
    <v-row
      v-for="j in justify"
      :key="j"
      :justify="j"
    >
      <v-col
        v-for="k in 2"
        :key="k"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of two columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
    <div class="container mt-4">
      <h2 style="text-align: center;">Explore Popular Categories</h2>
    </div>
    <div class="container">
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </div>
  <v-container>
    <h2 style="text-align: center;">More than <strong class="purple lighten-4--text">50</strong> brands in stock</h2>
  </v-container>
  <v-container>
  <v-row>
    <v-col
      cols="4"
      sm="2"
    >
      <v-img
        src="https://d2yac1vwzyjed0.cloudfront.net/assets/front/catalog/brands_logo/brand_101-8cca61e9947991b93447da23685a1487.png"
      ></v-img>
    </v-col>

    <v-col
      cols="2"
      sm="2"
    >
      <v-img src="https://d2yac1vwzyjed0.cloudfront.net/assets/front/catalog/brands_logo/brand_24-383e327d60d2139fb186507a45652764.png">
        <div class="fill-height bottom-gradient"></div>
      </v-img>
    </v-col>

    <v-col
      cols="2"
      sm="2"
    >
      <v-img src="https://d2yac1vwzyjed0.cloudfront.net/assets/front/catalog/brands_logo/brand_18-f3f6266331b95cfa3cdd11a48c1562b1.png">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
        <v-col
      cols="2"
      sm="2"
    >
      <v-img src="https://d2yac1vwzyjed0.cloudfront.net/assets/front/catalog/brands_logo/brand_32-27e9e26456ad9896cd9d3215c1939aa1.png">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
        <v-col
      cols="2"
      sm="2"
    >
      <v-img src="https://d2yac1vwzyjed0.cloudfront.net/assets/front/catalog/brands_logo/brand_129-cdbaa6a05e2ccfe9974c75a1c60f200a.png">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
            <v-col
      cols="2"
      sm="2"
    >
      <v-img src="https://d2yac1vwzyjed0.cloudfront.net/assets/front/catalog/brands_logo/brand_69-1fae709476e0b6e2660bcdee0c60345d.png">
        <div class="fill-height repeating-gradient"></div>
      </v-img>
    </v-col>
  </v-row>
  </v-container>
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
                        Explore
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
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  },
   data () {
      return {
        items: [
          {
            src: 'https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/1420/m_co_hp.jpg',
          },
          {
            src: 'https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/1434/m_co_hp.jpg',
          },
          {
            src: 'https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/1442/m_co_hp.jpg',
          },
          {
            src: 'https://d2yac1vwzyjed0.cloudfront.net/attachment/Attachment/513/m_co_hp_herbelin.jpg',
          },
        ],
      }
    },
  name: "Home"
};
</script>

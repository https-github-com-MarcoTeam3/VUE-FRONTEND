<template>
  <div>
    <NavigationHome></NavigationHome>
    <!-- Page Content -->

    <!-- /.col-lg-3 -->
    <div class="container mt-4">
      <h2 style="text-align: center;">Explore Popular Categories</h2>
    </div>
    <div
      id="carouselExampleIndicators"
      class="container carousel slide my-3"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="container carousel-item active">
          <img
            class="card-img-top img-fluid"
            src="https://i.postimg.cc/kgqYNTcq/Sans-titre1.png"
            alt="First slide"
          />
        </div>
        <div class="container carousel-item">
          <img
            class="card-img-top img-fluid"
            src="https://i.postimg.cc/mrZ3kqS1/Sans-titre.jpg"
            alt="Second slide"
          />
        </div>
        <div class="container carousel-item">
          <img
            class="card-img-top img-fluid"
            src="https://i.postimg.cc/Xqtxy8vS/Sans-titre1.png"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
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
                      <v-card-title>Bags & Purses </v-card-title>
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
                      <v-card-title>Women's </v-card-title>
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
                      <v-card-title>Connect </v-card-title>
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
                      <v-card-title>Men's </v-card-title>
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
import NavigationHome from "@/components/NavigationHome.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavigationHome,
    Footer
  },
  name: "Home"
};
</script>

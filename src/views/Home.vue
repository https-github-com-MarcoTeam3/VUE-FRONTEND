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
        <div></div>
        <div class="container pt-12"> 
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"
                ><img
                  class="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
              /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Item One</a>
                </h4>
                <h5>$24.99</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur!
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted"
                  >&#9733; &#9733; &#9733; &#9733; &#9734;</small
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"
                ><img
                  class="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
              /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Item Two</a>
                </h4>
                <h5>$24.99</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur! Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted"
                  >&#9733; &#9733; &#9733; &#9733; &#9734;</small
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"
                ><img
                  class="card-img-top"
                  src="http://placehold.it/700x400"
                  alt=""
              /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Item Three</a>
                </h4>
                <h5>$24.99</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  numquam aspernatur!
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted"
                  >&#9733; &#9733; &#9733; &#9733; &#9734;</small
                >
              </div>
            </div>
          </div>
        </div>
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-3">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavigationHome from "@/components/NavigationHome.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    NavigationHome,
    Footer,
  },
  name: "Home",
};
</script>

<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>
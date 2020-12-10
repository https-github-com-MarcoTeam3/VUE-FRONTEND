<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg fixed-top py-3">
      <div class="container">
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler navbar-toggler-right"
        >
          <i class="fa fa-bars"></i>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li>
              <router-link
                v-if="isLoggedIn"
                class="nav-item nav-link"
                :to="{ name: 'Cart' }"
                ><i class="fas fa-shopping-cart"></i
              ></router-link>
            </li>

            <li>
              <router-link
                v-if="!isLoggedIn || isLoggedIn"
                class="nav-item nav-link"
                :to="{ name: 'Home' }"
                ><i class="fas fa-home"></i
              ></router-link>
            </li>
            <li>
              <router-link
                v-if="!isLoggedIn || isLoggedIn"
                class="nav-item nav-link"
                :to="{ name: 'Shop' }"
                >Shop</router-link
              >
            </li>
            <li>
              <router-link
                v-if="!isLoggedIn"
                class="nav-item nav-link"
                :to="{ name: 'Login' }"
                >Login</router-link
              >
            </li>
            <li>
              <router-link
                v-if="!isLoggedIn"
                class="nav-item nav-link"
                :to="{ name: 'Register' }"
                >Register</router-link
              >
            </li>
            <li>
              <router-link
                v-if="isLoggedIn"
                class="nav-item nav-link"
                :to="{ name: 'Dashboard' }"
                >Dashboard</router-link
              >
            </li>
            <li>
              <a
                class="nav-item nav-link"
                v-if="isLoggedIn"
                @click.prevent="logout"
                href="#"
                >Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import User from "../apis/User";
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  mounted() {
    $(function() {
      $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10) {
          $(".navbar").addClass("active");
        } else {
          $(".navbar").removeClass("active");
        }
      });
    });
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },

  methods: {
    logout() {
      User.logout().then(() => {
        localStorage.removeItem("token");
        this.$store.commit("LOGIN", false);
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>

<style>
.router-link-exact-active {
  color: #b4975a !important;
  transition: all 0.25s;
}
.navbar {
  transition: all 0.4s;
}

.navbar .nav-link {
  color: #fff;
}

.navbar .nav-link:hover,
.navbar .nav-link:focus {
  color: #b4975a;
  text-decoration: none;
}

.navbar .navbar-brand {
  color: #b4975a;
}

/* Change navbar styling on scroll */
.navbar.active {
  background: #171514;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar.active .nav-link {
  color: #555;
}

.navbar.active .nav-link:hover,
.navbar.active .nav-link:focus {
  color: #b4975a;
  text-decoration: none;
}

.navbar.active .navbar-brand:hover {
  color: #b4975a;
}
/* Change navbar styling on small viewports */
@media (max-width: 991.98px) {
  .navbar {
    background: #fff;
  }
  .navbar .navbar-brand,
  .navbar .nav-link {
    color: #555;
  }
}
header {
  width: 100%;
  height: 200px;
  background: url(https://i.postimg.cc/130hsgW5/Sans-titre-2.png) top center;
  background-size: cover;
}
</style>

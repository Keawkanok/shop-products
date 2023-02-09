<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  
  <Navbar/>
  <router-view />
</template>

<script>
import Navbar from "@/components/menu/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {

    }
  },
}
</script>
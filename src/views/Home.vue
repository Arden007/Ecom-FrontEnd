<template>
  <div>
<Anoucement/>
<Navbar/>
<Slider/>
<Categories/>
<Footer/>
    
  </div>
</template>

<script>
import Anoucement from "../components/Anouncement.vue"
import Categories from "../components/Categories.vue"
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"
import Slider from "../components/Slider.vue"
export default {
  name: "About",
  components: {
    Anoucement,Categories,Footer,Navbar,Slider
}
}
</script>

<style scoped>

</style>
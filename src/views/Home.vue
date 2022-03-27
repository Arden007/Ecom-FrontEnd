<template>
  <div>
<Anoucement/>
<Navbar/>
<Slider/>
<Footer/>
    
  </div>
</template>

<script>
import Anoucement from "../components/Anouncement.vue"
import Footer from "../components/Footer.vue"
import Navbar from "../components/Navbar.vue"
import Slider from "../components/Slider.vue"
export default {
  name: "About",
  components: {
    Anoucement,Footer,Navbar,Slider
}
}
</script>

<style scoped>
body {
  overflow-x:hidden;
}
</style>
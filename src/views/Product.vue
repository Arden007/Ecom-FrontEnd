<template>
  <div class="home">
    <Navbar/>
    <Anouncement/>

    <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.webp"
        alt="Trendy Pants and Shoes"
        class="img-fluid rounded-start"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Demin Jean</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
        <p>R 200</p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      <!-- select -->
      <div class="Filter" id="filterText">
          <select name="" id="">
            <option class="FliterColor muted">Color</option>
            <option class="OptColor">Black</option>
            <option class="OptColor">Dark Blue</option>
            <option class="OptColor">Grey</option>
          </select>
          <select name="" id="">
            <option class="FliterSize" >Size</option>
            <option class="OptSize">XS</option>
            <option class="OptSize">S</option>
            <option class="OptSize">M</option>
            <option class="OptSize">L</option>
            <option class="OptSize">L</option>
            <option class="OptSize">XL</option>
          </select>
          </div>
      <!-- select -->

      <div class="addCart">
       <button type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark">Add To Cart</button>
      </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Anouncement from "../components/Anouncement.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components: {
    Navbar,Anouncement,Footer
  },
};
</script>

<style scoped>
.Filter {
  margin-right: 200px;
  margin: 30px 50px;
  display: flex;
  justify-content: space-between;
}
.card-body{
  margin-top: 30px;
}

</style>

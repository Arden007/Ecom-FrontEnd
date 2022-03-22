<template>
    <div class="about">
<!-- Carousel wrapper -->
<div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
  <!-- Indicators -->
  <div class="carousel-indicators">
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

  <!-- Inner -->
  <div class="carousel-inner">
    <!-- Single item -->
    <div class="carousel-item active d-flex">
      <img src="https://images.unsplash.com/photo-1611338687453-c94d0bfd5a2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHN1bW1lciUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="d-flex w-50" alt="Woman Reading a Book"/>
      <div class="carousel-text">
        <h5 class="title">Summer Sale</h5>
        <p class="desc">Don't compromise on style get 30% off new arrivals.</p>
       <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item d-flex">
      <img src="https://images.unsplash.com/photo-1632965552398-c45456a597e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAzfHx3aW50ZXIlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" class="d-flex w-50" alt="Mountaintop"/>
      <div class="carousel-text ">
        <h5 class="title">Winter Sale</h5>
        <p class="desc">Don't compromise on style get 30% off new arrivals.</p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>

    <!-- Single item -->
    <div class="carousel-item d-flex">
      <img src="https://images.unsplash.com/photo-1647613560966-3fc14d2e8225?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBvcGxhciUyMGZhc2hpb258ZW58MHx8Mnx8&auto=format&fit=crop&w=500&q=60" class="d-flex w-50" alt="Motorbike Smoke"/>
      <div class="carousel-text  d-md-block">
        <h5 class="title">Popular Sale</h5>
        <p class="desc">Don't compromise on style get 30% off new arrivals.</p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>
  </div>
  <!-- Inner -->

  <!-- Controls -->
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<!-- Carousel wrapper -->  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.carousel-text{
   flex: 1;
  padding: 70px;
  width: 45vw;
  background: rgba(4, 250, 250, 0.151);
  padding-top: 200px;
  padding-bottom: 10px;
}
.title {
  font-size: 50px;
  font-weight: 600;
}
.desc {
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 3px;
}
img{
  height: 100vh;
  object-fit: cover;

}
</style>
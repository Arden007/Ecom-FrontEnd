<template>
  <div></div>

  <div id="products" class="container d-flex mb-3">
    <div v-for="products in product" :key="products.id">
      <div class="card">
        <img :src="products.img" class="card-img-top" alt="{{products.title}}" />
        <div class="card-body">
          <h5 class="card-title">{{ products.title }}</h5>
          <p class="card-text">{{products.categories}}</p>
          <p class="card-text">{{products.size}}</p>
          <p class="card-text">{{products.color}}</p>
          <div class="d-flex mb-3">
            <input
              type="number"
              class="form-control"
              value="1"
              min="1"
              id="addToCart${position}"
            />
            <button
              
              type="button"
              class="btn btn-dark ms-3"
              @click="
                (product.cart = true),
                  addtocart(JSON.parse(JSON.stringify(product)))
              "
              href="/Cart"
            >
              <i class="fas fa-cart-plus"></i>
            </button>
            <!-- <button
              v-if="product.cart"
              :disabled="product.cart"
              type="button"
              class="btn btn-dark ms-3"
              href="#"
            >
              Added
            </button> -->
          </div>
           <p class="card-text">R{{ products.price }}</p>
        </div>
        <div class="d-flex justify-content-center card-footer">
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product:null,
      
    };
  },
  methods: {
    
  },

  mounted() {
    fetch("https://ecom-store-arden.herokuapp.com/product", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.product = data;
        console.log(data);
      });
    
  },
};
</script>

<style scoped>
#products {
  flex-wrap: wrap;
  gap: 20px;
}

img {
  height: 200px !important;
  object-fit: cover;
}

.card {
  width: calc((100% / 4) - 15px);
  min-width: 300px;
}

.card-title {
  text-transform: capitalize;
}
</style>

<template>
  <div>
    <Navbar />
    <Anouncement />
   <div class="card mb-5 w-75  position-relative" >
       <div v-for="(carts, i) in cart" :key="i">
      <button type="button" class="position-absolute top-0 start-100 translate-middle badge btn btn-danger" onclick="removeFromCart(${position})">X</button>
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="carts.img" class="img-fluid rounded-start h-auto w-100" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body d-flex flex-column container">
              <h5 class="card-title mb-3">{{carts.title}}</h5>
              <div class="d-flex mb-3 justify-content-between">
                <p class="card-text justify-content-center">{{carts.price}}</p> 
                <!-- <span>R{{product.price}}</span> -->
              </div>
              <div class="d-flex mb-3 justify-content-between">
                <label class="form-label">Quantity:</label>
                <!-- <input type="number" min=1 id="remove${position}" :value="product.qty" onchange="updateCart(${position})" /> -->
              </div>
              <div class="card-footer bg-white d-flex justify-content-between  p-0 pt-3">
                <p>Total Cost: </p>
                <!-- <span>R{{(
                  product.price * product.qty
                ).toFixed(2)}}</span> -->
              </div>
            </div>  
          </div>
        </div>
      </div>
   </div>
      


    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Anouncement from "../components/Anouncement.vue";
import Footer from "../components/Footer.vue"
export default {
  name: "Cart",
  components: { Navbar, Anouncement,Footer },
  data:()=> {
    return {
  //  cart:null,
     cart: [
            {
              title: "Nike Blazer",
              category: "shoe",
              price: "1799.95",
              img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bd81405-bbe2-4516-aecb-665e22981785/blazer-low-77-jumbo-shoes-gRBtmC.png",
            },
            {
              title: "Nike Metcon",
              category: "shoe",
              price: "2399.95",
              img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/751775da-9cbe-4a20-bfaf-b400fec7c464/metcon-7-flyease-training-shoes-rvxbdG.png",
            },
          ]
    }
  },
//   mounted() {
//     fetch("https://ecom-store-arden.herokuapp.com/user/cart", {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         this.cart = data;
//         console.log(data);
//       });
    
    
//   },
};

</script>

<style scoped>
.card{
  margin: 50px 0px 50px 100px; 
}
</style>

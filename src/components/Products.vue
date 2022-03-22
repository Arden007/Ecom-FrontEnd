<template>
  <div></div>
  <!-- <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img
          src="https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img
          src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          class="card-img-top"
          alt="Palm Springs Road"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a short card.</p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img
          src="https://images.unsplash.com/photo-1547410701-73b5a0ada51d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTE2NDI3ODF8fGVufDB8fHx8&dpr=1&auto=format&fit=crop&w=294&q=60"
          class="card-img-top"
          alt="Los Angeles Skyscrapers"
          width="400"
          height="500"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content.
          </p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img
          src="https://media.istockphoto.com/photos/young-handsome-guy-in-a-warm-knitted-clothes-against-a-background-of-picture-id1300962117?b=1&k=20&m=1300962117&s=170667a&w=0&h=9bdeIa-c64jkAnTvmeFLXru3D4NVkQYd42ZioUphtQc="
          class="card-img-top"
          alt="Skyscrapers"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img
          src="https://images.unsplash.com/photo-1646855672493-b6925d356c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg3fHxqYWNrZXR8ZW58MHx8Mnx8&auto=format&fit=crop&w=500&q=60"
          class="card-img-top"
          alt="Skyscrapers"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100">
        <img
          src="https://images.unsplash.com/photo-1647370929006-17064fcdcad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGRyZXNzfGVufDB8fDJ8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          class="card-img-top"
          alt="Skyscrapers"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <a href="#!" class="btn btn-primary">Button</a>
        </div>
      </div>
    </div>
  </div> -->
  <div id="products" class="container d-flex mb-3">
  <div v-for="(product, i) in products" :key="i">
    <div class="card">
             <img :src="product.img" class="card-img-top" alt="{{product.title}}">
             <div class="card-body">
               <h5 class="card-title">{{product.title}}</h5>
               <p class="card-text">R{{product.price}}</p>
               <div class="d-flex mb-3">
                 <input type="number" class="form-control" value=1 min=1 id="addToCart${position}">
                 <button type="button" class="btn btn-dark ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
               </div>
              </div>
               <div class="d-flex justify-content-end card-footer">
                 <button type="button" class="btn btn-info w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}" >
                   Edit
                 </button>
                 <button type="button" class="btn btn-warning w-50 ms-3" onclick="deleteProduct(${position})" >
                   Delete
                 </button>
               </div>
          </div>
  </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      products: JSON.parse(localStorage.getItem("products"))
        ? JSON.parse(localStorage.getItem("products"))
        : [
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
            {
              title: "Nike Air Zoom",
              category: "shoe",
              price: "2499.95",
              img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b72aa81e-f334-43d2-8e40-3ad10d382e7f/air-zoom-pegasus-38-road-running-shoes-S0nz9k.png",
            },
            {
              title: "Nike Waffle",
              category: "shoe",
              price: "1899.95",
              img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/321cee9a-d0ea-437a-a900-cc3b57a5541e/waffle-one-se-shoe-S8B0Hn.png",
            },
            {
              title: "Air Jordan",
              category: "shoe",
              price: "3499.95",
              img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c0442a34-0b88-46db-b12c-8865b028dc1f/air-jordan-xxxvi-first-light-basketball-shoes-0CKrQR.png",
            },
          ],
      cart: JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    };
  },
  
  mounted() {
    console.log();
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

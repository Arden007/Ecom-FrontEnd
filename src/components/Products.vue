<template>
  <div></div>

  <div id="products" class="container d-flex mb-3">
    <div v-for="products in product" :key="products.id">
      <div class="card">
        <img :src="products.img" class="card-img-top" alt="{{products.title}}" />
        <div class="card-body">
          <h5 class="card-title">{{ products.title }}</h5>
          <p class="card-text">R{{ products.price }}</p>
          <div class="d-flex mb-3">
            <input
              type="number"
              class="form-control"
              value="1"
              min="1"
              id="addToCart${position}"
            />
            <button
              v-if="!product.cart"
              :disabled="product.cart"
              type="button"
              class="btn btn-dark ms-3"
              @click="
                (product.cart = true),
                  addtocart(JSON.parse(JSON.stringify(product)))
              "
              href="#"
            >
              <i class="fas fa-cart-plus"></i>
            </button>
            <button
              v-if="product.cart"
              :disabled="product.cart"
              type="button"
              class="btn btn-dark ms-3"
              href="#"
            >
              Added
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center card-footer">
          <button
            type="button"
            class="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#editProduct"
          >
            Edit
          </button>
          <button
            type="button"
            class="btn btn-danger w-50 ms-3"
            @click="deleteProduct(products, (index = true))"
          >
            Delete
          </button>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-secondary ms-3"
            data-bs-toggle="modal"
            data-bs-target="#addProductModal"
          >
            Add
          </button>
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
      // products: [
      //       {
      //         title: "Nike Blazer",
      //         category: "shoe",
      //         price: "1799.95",
      //         img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bd81405-bbe2-4516-aecb-665e22981785/blazer-low-77-jumbo-shoes-gRBtmC.png",
      //       },
      //       {
      //         title: "Nike Metcon",
      //         category: "shoe",
      //         price: "2399.95",
      //         img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/751775da-9cbe-4a20-bfaf-b400fec7c464/metcon-7-flyease-training-shoes-rvxbdG.png",
      //       },
      //       {
      //         title: "Nike Air Zoom",
      //         category: "shoe",
      //         price: "2499.95",
      //         img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b72aa81e-f334-43d2-8e40-3ad10d382e7f/air-zoom-pegasus-38-road-running-shoes-S0nz9k.png",
      //       },
      //       {
      //         title: "Nike Waffle",
      //         category: "shoe",
      //         price: "1899.95",
      //         img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/321cee9a-d0ea-437a-a900-cc3b57a5541e/waffle-one-se-shoe-S8B0Hn.png",
      //       },
      //       {
      //         title: "Air Jordan",
      //         category: "shoe",
      //         price: "3499.95",
      //         img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c0442a34-0b88-46db-b12c-8865b028dc1f/air-jordan-xxxvi-first-light-basketball-shoes-0CKrQR.png",
      //       }
      //     ],
      // cart: JSON.parse(localStorage.getItem("cart"))
      //   ? JSON.parse(localStorage.getItem("cart"))
      //   : [],
    };
  },
  methods: {
    deleteProduct(products, index) {
      let confirmation = confirm(
        "Are you sure you want to delete the selected product?"
      );

      if (confirmation) {
        products.splice(products, index);
        localStorage.setItem("products", JSON.stringify(products));
      }
    },
    createProduct(products) {
      let title = document.querySelector("#addTitle").value;
      let category = document.querySelector("#addCategory").value;
      let price = document.querySelector("#addPrice").value;
      let img = document.querySelector("#addImg").value;

      try {
        if (!title || !price || !img)
          throw new Error("Please fill in all fields");
        products.push({
          title,
          category,
          price,
          img,
        });
        localStorage.setItem("products", JSON.stringify(products));
      } catch (err) {
        alert(err);
      }
    },
    updateProduct(products, index) {
      let title = document.querySelector("#editTitle").value;
      let category = document.querySelector("#editCategory").value;
      let price = document.querySelector("#editPrice").value;
      let img = document.querySelector("#editImg").value;

      try {
        if (!title || !price || !img)
          throw new Error("Please fill in all fields");
        products[index] = {
          title,
          category,
          price,
          img,
        };
        localStorage.setItem("products", JSON.stringify(products));
      } catch (err) {
        alert(err);
      }
    },
  },

  mounted() {
    fetch("https://ecom-store-arden.herokuapp.com/product", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.product = json;
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

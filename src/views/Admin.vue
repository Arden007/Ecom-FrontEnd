<template>
  <table class="table align-middle mb-0 bg-white">
    <div v-for="products in product" :key="products.id">
      <thead class="bg-light">
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img
                :src="products.img"
                alt="{{products.title}}"
                class="img rounded-circle"
              />
            </div>
          </td>
          <td>
            <div class="ms-3">
              <p class="fw-bold mb-1">{{ products.title }}</p>
            </div>
          </td>
          <td>
            <p class="fw-normal mb-1">{{ products.categories }}</p>
          </td>
          <td>
            <span class="badge badge-success rounded-pill d-inline">{{
              products.price
            }}</span>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-info ms-2"
              data-bs-toggle="modal"
              data-bs-target="#editProduct"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-danger ms-2"
              @click="deleteProduct(products, (products.id = true))"
            >
              Delete
            </button>
          </td>
          <td>
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-secondary ms-2"
              data-bs-toggle="modal"
              data-bs-target="#addProductModal"
            >
              Add
            </button>
          </td>
          <!-- Modal To Edit Product -->
          <div
            class="modal fade"
            id="editProduct"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Edit {{ products.title }}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="editTitle" class="form-label">Title</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editTitle"
                      id="editTitle"
                      :value="products.title"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editCategory" class="form-label"
                      >Category</label
                    >
                    <select
                      class="form-select"
                      name="editCategory"
                      id="editCategory"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="editPrice" class="form-label">Price</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editPrice"
                      id="editPrice"
                      :value="product.price"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="editImg" class="form-label">Image URL</label>
                    <input
                      class="form-control"
                      type="text"
                      name="editImg"
                      id="editImg"
                      :value="product.img"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
                    @click="updateProduct(products, (index = true))"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal To Edit Product-->

          <!-- Modal To Add Product -->
          <div
            class="modal fade"
            id="addProductModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add product
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="mb-3">
                    <label for="addTitle" class="form-label">Title</label>
                    <input
                      class="form-control"
                      type="text"
                      name="addTitle"
                      id="addTitle"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">Category</label>
                    <select
                      class="form-select"
                      name="addCategory"
                      id="addCategory"
                    >
                      <option value="Shoes">Shoes</option>
                      <option value="Clothing">Clothing</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="addPrice" class="form-label">Price</label>
                    <input
                      class="form-control"
                      type="text"
                      name="addPrice"
                      id="addPrice"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="addImg" class="form-label">Image URL</label>
                    <input
                      class="form-control"
                      type="text"
                      name="addImg"
                      id="addImg"
                    />
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-info"
                    data-bs-dismiss="modal"
                    @click="createProduct(products, (index = true))"
                  >
                    Create Product
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal -->
        </tr>
      </tbody>
    </div>
  </table>

  <table class="table align-middle mb-0 bg-white">
    <thead class="bg-light">
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Status</th>
        <th>Position</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style="width: 45px; height: 45px"
              class="rounded-circle"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1">John Doe</p>
              <p class="text-muted mb-0">john.doe@gmail.com</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">Software engineer</p>
          <p class="text-muted mb-0">IT department</p>
        </td>
        <td>
          <span class="badge badge-success rounded-pill d-inline">Active</span>
        </td>
        <td>Senior</td>
        <td>
          <button type="button" class="btn btn-link btn-sm btn-rounded">
            Edit
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              class="rounded-circle"
              alt=""
              style="width: 45px; height: 45px"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1">Alex Ray</p>
              <p class="text-muted mb-0">alex.ray@gmail.com</p>
            </div>
          </div>
        </td>
        <td>
          <p class="fw-normal mb-1">Consultant</p>
          <p class="text-muted mb-0">Finance</p>
        </td>
        <td>
          <span class="badge badge-primary rounded-pill d-inline"
            >Onboarding</span
          >
        </td>
        <td>Junior</td>
        <td>
          <button
            type="button"
            class="btn btn-link btn-rounded btn-sm fw-bold"
            data-mdb-ripple-color="dark"
          >
            Edit
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      product:null,

      // producted: [
      //   {
      //     title: "Nike Blazer",
      //     category: "shoe",
      //     price: "1799.95",
      //     img: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8bd81405-bbe2-4516-aecb-665e22981785/blazer-low-77-jumbo-shoes-gRBtmC.png",
      //   },
      //   {
      //     title: "Nike Metcon",
      //     category: "shoe",
      //     price: "2399.95",
      //     img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/751775da-9cbe-4a20-bfaf-b400fec7c464/metcon-7-flyease-training-shoes-rvxbdG.png",
      //   },
      //   {
      //     title: "Nike Air Zoom",
      //     category: "shoe",
      //     price: "2499.95",
      //     img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/b72aa81e-f334-43d2-8e40-3ad10d382e7f/air-zoom-pegasus-38-road-running-shoes-S0nz9k.png",
      //   },
      //   {
      //     title: "Nike Waffle",
      //     category: "shoe",
      //     price: "1899.95",
      //     img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/321cee9a-d0ea-437a-a900-cc3b57a5541e/waffle-one-se-shoe-S8B0Hn.png",
      //   },
      //   {
      //     title: "Air Jordan",
      //     category: "shoe",
      //     price: "3499.95",
      //     img: "https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/c0442a34-0b88-46db-b12c-8865b028dc1f/air-jordan-xxxvi-first-light-basketball-shoes-0CKrQR.png",
      //   },
      // ],
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

  components: {},
  created() {},
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

<style>
.img {
  height: 200px !important;
  width: 200px;
  object-fit: cover;
}
.con {
  color: white;
  background-color: aqua;
}
</style>

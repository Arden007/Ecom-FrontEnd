<template>
  <div>
    <table class="table align-middle mb-0 bg-white">
      <div v-for="products in product" :key="products">
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
                @click="deleteProduct(products._id)"
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
                        v-model="title"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="editCategory" class="form-label"
                        >Category</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        name="editCategory"
                        id="editCategory"
                        v-model="categories"
                      />
                        
                    </div>
                    <div class="mb-3">
                      <label for="editPrice" class="form-label">Price</label>
                      <input
                        class="form-control"
                        type="text"
                        name="editPrice"
                        id="editPrice"
                        v-model="price"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="editImg" class="form-label">Image URL</label>
                      <input
                        class="form-control"
                        type="text"
                        name="editImg"
                        id="editImg"
                        v-model="img"
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
                      @click="editProduct(products._id)"
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
                        v-model="title"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="addPrice" class="form-label">Category</label>
                      <input
                        class="form-control"
                        type="text"
                        name="addPrice"
                        id="addPrice"
                        v-model="categories"
                      />
                    </div> 
                    <div class="mb-3">
                      <label for="addPrice" class="form-label">Price</label>
                      <input
                        class="form-control"
                        type="text"
                        name="addPrice"
                        id="addPrice"
                        v-model="price"
                      />
                    </div> 
                    <div class="mb-3">
                      <label for="addPrice" class="form-label">Description</label>
                      <input
                        class="form-control"
                        type="text"
                        name="addDes"
                        id="addDes"
                        v-model="desc"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="addImg" class="form-label">Image URL</label>
                      <input
                        class="form-control"
                        type="text"
                        name="addImg"
                        id="addImg"
                        v-model="img"
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
                      @click="createProduct(products)"
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

    <div>
      <table
        v-for="users in user"
        :key="users"
        class="table align-middle mb-0 bg-white"
      >
        <thead class="bg-light">
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Cart</th>
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
                  <p class="fw-bold mb-1">{{ users.username }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="text-muted mb-0">{{ users.email }}</p>
            </td>
            <td>
              <p class="fw-normal mb-1">{{ users.isAdmin }}</p>
            </td>
            <td>{{ users.cart }}</td>
            <td>
              <button type="button" class="btn btn-link btn-sm btn-rounded">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: null,
      user: null,
      isAdmin: "",
      title: "",
      categories: "",
      price: "",
      desc: "",
      img: "",
    };
  },
  methods: {
    deleteProduct(id) {
      if (
        confirm(
          "Do you really want to delete this product? If Yes Reload to view changes after json alert"
        )
      ) {
        fetch("https://ecom-store-arden.herokuapp.com/product/" + id, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then(() => {
            alert("PRODUCT DELETED! ");
            location.reload();
          })
          .catch((err) => {
            alert(err);
          });
      }
    },
    createProduct() {
      // console.log(this.title, this.categories, this.desc, this.price, this.img, this.desc)
      fetch("https://ecom-store-arden.herokuapp.com/product", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          category: this.categories,
          desc: this.desc,
          price: this.price,
          img: this.img,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((response) => console.log(response))
        .then(() => {
          alert("Product Created");
          return this.$router.push({ name: "ProductList" });
        });
    },

     editProduct(id) {
       console.log(this.title, this.categories, this.desc, this.price, this.img, this.desc,)
        fetch("https://ecom-store-arden.herokuapp.com/product/" + id, {
          method: "PUT",
          body: JSON.stringify({
            title: this.title,
            category: this.categories,
            description: this.desc,
            price: this.price,
            img: this.img,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            // Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
          .then((response) => response.json())
          .then((response) => console.log(response))
          .then(() => {
            alert("Product Updated");
            return this.$router.push({ name: "ProductList" });
          });
      
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

    fetch("https://ecom-store-arden.herokuapp.com/user", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.user = json;
      })
      .catch((err) => {
        alert(err);
      });

    // if (this.isAdmin == false) {
    //   alert("You are Not Admin");
    //   this.$router.push({ name: "Home" });
    // }
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

<template>
  <div>
    <Navbar/>
    <Anouncement/>
    
 <!--OOOOOOOOOO  -->
        <!-- <li class="nav-item"> -->
              <!-- Button trigger modal -->
              <!-- <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#addProductModal"
              >
                Add a product
              </button> -->

              <!-- Modal -->
              <!-- <div
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
                        onclick="createProduct()"
                      >
                        Create Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li> -->
         <!--  -->


<!--  -->
<!--  -->
    <Products/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import Anouncement from "../components/Anouncement.vue"
import Products from "../components/Products.vue"
import Footer from "../components/Footer.vue"
export default {
  name: "ProductList",
  components: {Navbar,Anouncement,Products,Footer}
};
</script>

<style scoped>
.ProductTitle {
  margin: 20px;
}
.filterCon {
  display: flex;
  justify-content: space-between;
}
.filter {
  margin: 20px;
}
#filterText {
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
}
select {
  padding: 10px;
  margin-right: 20px;
}

</style>

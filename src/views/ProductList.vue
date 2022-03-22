<template>
  <div>
    <Navbar/>
    <Anouncement/>
    <!-- <h1 class="ProductTitle">Dresses</h1>
    <div class="filterCon">
      <div class="filter" id="filterText">
        Filter Products:
        <select name="" id="">
          <option value="" disabled select>Color</option>
          <option value="">White</option>
          <option value="">Black</option>
          <option value="">Red</option>
          <option value="">Blue</option>
          <option value="">Yellow</option>
          <option value="">Green</option>
        </select>
        <select name="" id="">
          <option value="" disabled select>Size</option>
          <option value="">XS</option>
          <option value="">S</option>
          <option value="">M</option>
          <option value="">L</option>
          <option value="">XL</option>
          <option value="">XXL</option>
        </select>
      </div>
      <div class="filter" id="filterText">
        Sort Products:
        <select name="" id="">
          <option value="" select>Newste</option>
          <option value="">Price (asc)</option>
          <option value="">Price (desc)</option>
        </select>
      </div>
    </div> -->
<!--  -->
<!--  -->
 <!--OOOOOOOOOO  -->
        <li class="nav-item">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-toggle="modal"
                data-bs-target="#addProductModal"
              >
                Add a product
              </button>

              <!-- Modal -->
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
                        onclick="createProduct()"
                      >
                        Create Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
         <!--  -->

<div class="container d-flex justify-content-end mb-3 mt-5 pt-4">
      <div class="d-flex w-15 m-4">
        <label for="" class="form-label">Sort by category</label>
        <select
          class="form-select"
          name=""
          id="sortCategory"
          onchange="sortCategory()"
        >
          <option value="All">All</option>
          <option value="Shoes">Shoes</option>
          <option value="Clothing">Clothing</option>n>
        </select>
      </div>
      <div class="d-flex w-30 m-4">
        <label for="" class="form-label">Sort by name</label>
        <select class="form-select" name="" id="sortName" onchange="sortName()">
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div class="d-flex w-30 m-4">
        <label for="" class="form-label">Sort by price</label>
        <select
          class="form-select"
          name=""
          id="sortPrice"
          onchange="sortPrice()"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
    </div>
    

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

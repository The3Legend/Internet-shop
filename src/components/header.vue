<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light ">
      <b-navbar-brand href="#" @click="onClick">Meclee Test</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <div class="flex">
          <div>
            <b-navbar-nav>
              <b-nav-item
                v-for="categorie in category"
                :key="categorie.id"
                href="#"
                @click="onClick"
                >{{ categorie }}</b-nav-item
              >
            </b-navbar-nav>
          </div>
          <div>
            <b-button size="md" variant="secondary " class="mb-2">
              <b-icon icon="cart3" aria-label="Pay"></b-icon>
            </b-button>
          </div>
        </div>
      </b-collapse>
    </b-navbar>
    <ProductCard :filtredProducts="filtredProducts" @sendId="showClickId" />
  </div>
</template>

<script>
import { HTTP } from "../axios/plagins";
import ProductCard from "./ProductCard";
export default {
  name: "Header",
  components: {
    ProductCard,
  },

  data: () => ({
    category: [],
    value: [],
    allProducts: [],
    sortProduct: [],
    ItemInCart: [],
  }),
  created() {
    HTTP.get()
      .then((response) => (this.category = response.data))
      .catch((error) => {
        console.log(error);
      });
    HTTP.get("https://fakestoreapi.com/products")
      .then((response) => (this.allProducts = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onClick: function(e) {
      this.value = [];
      this.sortProduct = [];
      this.value.push(e.target.innerText);
      this.allProducts.map((el) => {
        if (this.value[0] === el.category) {
          this.sortProduct.push(el);
        }
      });
    },
    showClickId(card) {
      this.ItemInCart.push(card);
    },
  },
  computed: {
    filtredProducts() {
      if (this.sortProduct.length) {
        return this.sortProduct;
      } else return this.allProducts;
    },
  },
};
</script>

<style>
.flex {
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
@media screen and (max-width: 970px) {
  .flex {
    display: block;
  }
}
</style>

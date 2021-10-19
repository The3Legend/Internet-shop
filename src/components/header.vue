<template>
  <div>
    <div class="price" ref="priceControl">
      <div class="price-container">
        <div class="text-price">
          Цена(грн)
        </div>
        <div>
          <svg
            v-b-toggle.collapse-5
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="changPrice"
          >
            <path
              d="M13.8897 8.15024L13.6678 8.38388C13.5207 8.53871 13.2823 8.53871 13.1352 8.38388L6.99999 1.92453L0.864777 8.38388C0.717716 8.53871 0.479267 8.53871 0.332175 8.38388L0.110296 8.15024C-0.0367652 7.99541 -0.0367652 7.74436 0.110296 7.58953L6.7337 0.616124C6.88076 0.461292 7.11921 0.461292 7.2663 0.616124L13.8897 7.58953C14.0368 7.74436 14.0368 7.99541 13.8897 8.15024Z"
              fill="#262329"
            />
          </svg>
        </div>
      </div>
      <div class="range-slider">
        <b-collapse visible id="collapse-5">
          <input class="input" type="number" v-model="minPrice" />
          -
          <input class="input" type="number" v-model="maxPrice" />
        </b-collapse>
      </div>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light ">
      <b-navbar-brand href="#" @click="onClick">Meclee Test</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="categorie in category"
            :key="categorie.id"
            href="#"
            @click="onClick"
            >{{ categorie }}</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
      <b-button size="md" variant="secondary " class="mb-2">
        <b-icon icon="cart3" aria-label="Pay"></b-icon>
      </b-button>
    </b-navbar>
    <ProductCard :filtredProducts="filtredProducts" />
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
    sorProduct: [],
    minPrice: 0,
    maxPrice: 999999,
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
      this.sorProduct = [];
      this.value.push(e.target.innerText);
      this.allProducts.map((el) => {
        if (this.value[0] === el.category) {
          this.sorProduct.push(el);
        }
      });
    },
    changPrice: function() {
      this.responsPrice = !this.responsPrice;
      if (this.responsPrice) {
        setTimeout(() => {
          this.$refs.priceControl.style.height = "60px";
        }, 100);
      } else
        setTimeout(() => {
          this.$refs.priceControl.style.height = "129px";
        }, 100);
    },
  },
  computed: {
    filtredProducts() {
      if (this.sorProduct.length) {
        return this.sorProduct;
      } else return this.allProducts;
    },
  },
};
</script>

<style></style>

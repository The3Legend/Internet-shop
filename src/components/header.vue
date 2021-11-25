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
            <b-button
              @click="modalShow = !modalShow"
              size="md"
              variant="outline-primary "
              class="mb-2"
            >
              <b-icon icon="cart3" aria-label="Pay"></b-icon>
              <span class="margin-style" v-if="ItemInCart.length">{{
                ItemInCart.length
              }}</span>
              <b-modal v-model="modalShow" title="Goods in the basket">
                <div
                  class="parent"
                  v-for="(card, index) in ItemInCart"
                  :key="index"
                >
                  <div class="children">
                    <small>{{ index + 1 }}. </small>
                    <img class="imgStyle" :src="`${card.image}`" alt="img" />
                    <small>{{ card.title }}</small>
                  </div>
                  <div class="child">
                    <b-button
                      class="button-style"
                      variant="outline-danger"
                      @click="productRemove(index)"
                    >
                      <b-icon icon="trash-fill" aria-hidden="true"> </b-icon>
                    </b-button>
                  </div>
                </div>
                <template #modal-footer>
                  <div class="w-100">
                    <div class="float-right font-style">
                      <span>Total price:</span>
                      <span> {{ allPrice.toFixed(2) }}$</span>
                    </div>
                  </div>
                </template>
              </b-modal>
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
    modalShow: false,
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
    onClick: function (e) {
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
      console.log(this.filtredProducts);
    },
    productRemove(index) {
      this.ItemInCart.splice(index, 1);
    },
  },
  computed: {
    filtredProducts() {
      if (this.sortProduct.length) {
        return this.sortProduct;
      } else return this.allProducts;
    },
    allPrice() {
      return this.ItemInCart.reduce((acc, el) => {
        return (acc += el.price);
      }, 0);
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
.imgStyle {
  width: 32px;
  padding-right: 5px;
}
.margin-style {
  margin-left: 5px;
  font-size: 18px;
}
.parent {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.font-style {
  font-weight: bold;
}
</style>

<template>
  <div class="container">
    <b-card-group columns>
      <b-card
        class="lol"
        v-for="product in filtredProducts"
        :key="product.id"
        :img-src="`${product.image}`"
        img-alt="Image"
        img-top
      >
        <b-card-text class="small text-muted">
          ${{ product.price }}</b-card-text
        >
        <b-card-text>
          <h5>{{ product.title }}</h5>
        </b-card-text>
        <b-card-text class="overflow">
          {{ product.description }}
        </b-card-text>
        <div>
          <b-button
            class="width"
            variant="outline-primary"
            @click="detailedInformation(product.id)"
            >Подробнее</b-button
          >
          <b-button
            class="width"
            variant="outline-success"
            @click="sendIdToParent(product)"
            >В корзину</b-button
          >
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { HTTP } from "../axios/plagins";
export default {
  name: "ProductCard",
  props: {
    filtredProducts: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data: () => ({
    truncateSortProduct: [],
    startProduct: [],
    informationElement: [],
  }),
  created() {
    HTTP.get("https://fakestoreapi.com/products")
      .then((response) => (this.startProduct = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
  updated() {
    this.truncateSortProduct = this.filtredProducts;
    this.truncateSortProduct.map((el) => {
      el.description.length > 185
        ? (el.description = el.description.slice(0, 185 - 1) + "…")
        : el.description;
    });
  },
  methods: {
    sendIdToParent(product) {
      this.$emit("sendId", product);
    },
    detailedInformation(id) {
      this.informationElement = [];
      this.startProduct.map((el) => {
        return el.id === id ? this.informationElement.push(el) : [];
      });
    },
  },
  computed: {
    detailedInformationItem() {
      return this.informationElement;
    },
  },
};
</script>

<style>
.lol img {
  width: 350px;
  height: 290px;
  padding-left: 50px;
  padding-right: 50px;
}
.container {
  margin-top: 100px;
  margin: auto;
}
.width {
  width: 155px;
}
</style>

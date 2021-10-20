<template>
  <div class="container">
    <b-card-group columns>
      <b-card
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
          <b-button class="width" variant="outline-primary">Подробнее</b-button>
          <b-button class="width" variant="success" @click="sendIdToParent(product)"
            >В корзину</b-button
          >
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
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
  }),
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
  },
};
</script>

<style>
img {
  width: 100px;
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

<template>
  <div class='container'>
    <b-card-group columns>
      <b-card
        v-for="product in products"
        :key="product.id"
        :img-src="`${product.image}`"
        img-alt="Image"
        img-top
      >
        <b-card-text class="small text-muted">
          ${{ product.price }}</b-card-text
        >
        <b-card-text >
          <h4>{{ product.title }}</h4>
        </b-card-text>
        <b-card-text>
          {{ product.description }}
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { productsHTTP } from "../axios/plagins";
export default {
  name: "ProductCard",
  data: () => ({
    products: [],
  }),
  created() {
    productsHTTP
      .get()
      .then((response) => console.log((this.products = response.data)))
      .catch((error) => {
        console.log(error);
      });
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
.container{
  margin:auto;
}
</style>

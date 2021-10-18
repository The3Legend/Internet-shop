<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light ">
      <b-navbar-brand href="#">Meclee Test</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="categorie in categories"
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
  </div>
</template>

<script>
import { categoriesHTTP } from "../axios/plagins";
export default {
  name: "Header",
  data: () => ({
    categories: [],
    value: "",
  }),
  created() {
    categoriesHTTP.get()
      .then((response) =>console.log(this.categories = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onClick: function(e) {
      this.value += e.target.innerText;
      console.log(this.value);
      this.value = "";
    },
  },
};
</script>

<style></style>

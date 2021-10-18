<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light ">
      <b-navbar-brand href="#">Meclee Test</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="categorie in categories"
            :key="categorie"
            href="#"
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
export default {
  name: "Header",
  data: () => ({
    categories: [],
  }),
  created() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => (this.categories = json));
  },
};
</script>

<style></style>

<template>
  <div id="content">
    <div class="card-content">
      <div class="card-container">
        <div class="cards" v-for="product in products" :key="product.id">
          <div class="oneCard">
            <div class="imgCard">
              <img
                :src="`${product.image}`"
                alt="product"
              />
            </div>
            <div class="descriptionCard">
              <div class="ProductDescriptionCard">
                <p class="title-card">{{ product.title }}</p>
              </div>
              <div class="descriptionProduct">
                <p class="material">
                  Материал:
                </p>
                <p class="manufacturer">
                  Производитель:
                </p>
                <p class="country">
                  Страна производитель:
                </p>
              </div>
              <div class="price">
                <span class="start-price"></span>
                <span class="best-price"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      .then((response) => console.log(this.products = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
#content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 937px;
  height: 2086px;
  left: 327px;
  top: 0px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 0px;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 937px;
  height: 1050px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 1100px;
  height: 484px;
  left: 0px;
  top: 504px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 20px 0px;
}
.cards {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 299px;
  height: 484px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 20px 13px;
}
.oneCard {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 299px;
  height: 484px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 28px;
}
img {
  width: 300px;
  height: 200px;

}
.descriptionCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 30px;
  width: 299px;
  height: 194px;
  left: 0px;
  top: 290px;

  background: #ffffff;
}
.ProductDescriptionCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: static;
  width: 259px;
  left: 20px;
  top: 20px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.title-card {
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 72.22%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  /* Dark */

  color: #222222;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.descriptionProduct {
  display: flex;
  flex-direction: column;
  padding: 0px;

  position: static;
  width: 259px;
  height: 54px;
  left: 0px;
  top: 55px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
}
.manufacturer {
  position: static;
  left: 0%;
  right: 0%;
  top: 70.37%;
  bottom: 0%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 3px 0px;
}
.country {
  position: static;
  left: 0%;
  right: 0%;
  top: 70.37%;
  bottom: 0%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 3px 0px;
}
.material {
  position: static;
  left: 0%;
  right: 0%;
  top: 35.19%;
  bottom: 35.19%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 3px 0px;
}
.price {
  position: static;
  left: 29.15%;
  right: 29.15%;
  top: 86.11%;
  bottom: 0%;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 15px 0px;
}
.start-price {
  left: 29.15%;
  right: 51.54%;
  top: 86.11%;
  bottom: 0%;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  /* Dark */

  color: #222222;
}
.best-price {
  left: 51.59%;
  right: 29.87%;
  top: 86.11%;
  bottom: 0%;
  text-decoration: line-through;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  text-align: center;

  /* Grey */

  color: #b9b9b9;
  margin-left: 20px;
}
</style>

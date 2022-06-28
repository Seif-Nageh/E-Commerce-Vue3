<template>
  <div class="container mt-5">
    <h1 class="animate__animated animate__flip">My Shop</h1>
    <nav-bar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="deleteItem">
    </nav-bar>
    <price-slider :sliderStatus="sliderStatus" :maximum="maximum" v-model="maximum"></price-slider>
    <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>
import ProductList from "./components/product-list.vue";
import PriceSlider from "./components/price-slider.vue";
import NavBar from "./components/nav-bar.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 99,
      sliderStatus: false,
      products: [],
      cart: [],
    };
  },
  components: {
    ProductList,
    PriceSlider,
    NavBar,
  },
  methods: {
    toggleSliderStatus: function () {
      this.sliderStatus = !this.sliderStatus;
    },
    addItem: function (product) {
      var whichProduct;
      var existing = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if (existing.length) {
        this.cart[ whichProduct ].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (id) {
      if (this.cart[ id ].qty > 1) {
        this.cart[ id ].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    },
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  computed: {
    cartTotal: function () {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[ key ].product.price * this.cart[ key ].qty;
      }
      return sum;
    },
    cartQty: function () {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[ key ].qty;
      }
      return qty;
    },
  },
};
</script>

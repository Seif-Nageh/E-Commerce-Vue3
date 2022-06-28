<template>
  <nav class="navbar navbar-light fixed-top">
    <div class="navbar-text ms-5 d-flex">
      <button class="btn btn-sm btn-outline-success" @click="$emit('toggle')">
        <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
      </button>
      <div class="dropdown ms-2" v-if="cart.length > 0">
        <button class="btn btn-success btn-sm dropdown-toggle" id="cartDropdown" data-bs-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false">
          <span class="badge badge-pill text-black bg-light" v-text="cartQty"></span>
          <font-awesome-icon icon="shopping-cart" class="mx-2"></font-awesome-icon>
          <price-com :value="Number(cartTotal)"></price-com>
        </button>
        <div class="dropdown-menu" aria-labelledby="cartDropdown">
          <div v-for="( item, index ) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span class="badge badge-pill bg-danger align-text-top mr-1" v-text="item.qty"></span>
              <span v-text="item.product.name"></span>
              <b>
                <price-com :value="Number(item.qty * item.product.price)"></price-com>
              </b>
              <a href="#" @click.stop="$emit('delete', index)" class="badge bg-danger text-white">-</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PriceCom from './price-com.vue'

export default {
  name: 'nav-bar',
  props: [ "cart", "cartQty", "cartTotal" ],
  components: {
    FontAwesomeIcon,
    PriceCom
  }

}
</script>

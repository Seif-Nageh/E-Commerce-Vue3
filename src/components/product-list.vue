<template>
  <transition-group name="fade" tag="div" @beforeEnter="beforeEnter" @enter="enter" @leave="leave">
    <template v-for="(       item, index       ) in products" :key="item.id">
      <div class="row d-none mb-0 align-items-center" :data-index="index" v-if="item.price < Number(maximum)">
        <div class="col-1 m-auto">
          <button class="btn btn-info" @click="$emit('add', item)">+</button>
        </div>
        <div class="col-4">
          <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
        </div>
        <div class="col">
          <h3 class="text-info">{{ item.name }}</h3>
          <p class="mb-0">{{ item.description }}</p>
          <div class="h5 float-right">
            <PriceCom :value="Number(item.price)" />
          </div>
        </div>
      </div>
    </template>
  </transition-group>
</template>

<script>
import PriceCom from "./price-com.vue";
export default {
  name: "product-list",
  components: { PriceCom },
  props: [ "products", "maximum", "add" ],
  methods: {
    beforeEnter: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animate__animated animate__fadeInRight";
      }, delay);
    },
    leave: function (el) {

      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "d-none mb-0animate__animated animate__fadeOutRight";
      }, delay);
    },
  }
};
</script>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease-in-out;
}
</style>

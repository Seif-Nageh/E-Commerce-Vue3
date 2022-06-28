<template>
  <transition name="fade">
    <div v-if="sliderStatus">
      <div class="align-items-center" :class="sliderState">
        <label class="font-weight-bold ms-2" for="formMax">max</label>
        <input type="text" id="formMax" class="form-control mx-2 text-center" :value="modelValue"
          @change="$emit('update:modelValue', $event.target.value)" />
        <input type="range" class="custom-range w-100" min="0" max="200" :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "price-slider",
  props: [ "sliderStatus", "maximum", 'modelValue' ],
  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>

<style scoped>
#formMax {
  width: 15%;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>

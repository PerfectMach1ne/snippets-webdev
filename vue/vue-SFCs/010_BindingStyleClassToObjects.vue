<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<script>
export default {
  data() {
    return {
      activeColor: 'red',
      fontSize: 30,
      // It is often a good idea to bind to a style object directly so that the
      // template is cleaner:
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    }
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg">
  <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">
    beh
  </div>
  <!-- Although camelCase keys are recommended, :style also supports kebab-cased CSS property keys
 			 (corresponds to how they are used in actual CSS) - for example: -->
  <div :style="{ 'font-size': fontSize + 'px' }">
    myah
  </div>
  <div :style="styleObject">
    weh
  </div>
</template>
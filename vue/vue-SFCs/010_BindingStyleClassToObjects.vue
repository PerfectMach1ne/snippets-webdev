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
      },
      baseStyles: {
        color: 'azure',
        fontSize: '1.57em',
        background: 'black',
        width: 'fit-content'
      },
      overridingStyles: {
        color: 'purple'
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
  <!-- Binding to Arrays
	We can bind :style to an array of multiple style objects.
	These objects will be merged and applied to the same element:
	-->
  <div :style="[baseStyles, overridingStyles]">
    bungus
  </div>
  <!-- You can provide an array of multiple (prefixed) values to a style property,
 	for example: -->
  <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">woo</div>
  <!-- This will only render the last value in the array which the browser supports.
 	In this example, it will render display: flex for browsers that support the
 	unprefixed version of flexbox.
	-->
</template>

<script>
export default {
  props: ['bread']
}
</script>

<template>
	<div class="funny__bocx">
    <p>
          Lorem ipsum A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.
    </p>
  </div>
  <div class="funny__bocx funnier__box">
    <p align="center">
      <em><strong>{{ bread }}</strong></em>
      <!-- v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead. -->
      <!--<input v-model="bread" />-->
    </p>
  </div>
</template>

<style>
  .funny__bocx {
		border: 7px dotted rebeccapurple;
    padding: 15px;
    width: 50%;
  }
  .funnier__box {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
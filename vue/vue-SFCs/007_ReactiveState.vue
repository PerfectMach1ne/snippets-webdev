<script>
export default {
  data() {
    return {
      count: 1
    }
  },

  mounted() {
    // `this` refers to the component instance.
    console.log(this.count);

    // data can be mutated as well
    this.count = 2;
  }
}
</script>

<template>
  Count is {{ count }}
</template>

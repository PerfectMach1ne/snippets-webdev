<script>
import Child from './Child.vue'
  
export default {
  components: { Child },
  data() {
    return {
      bread: 'breaaaad'
    }
  },
  mounted() {
    // this.$refs.child will hold an instance of <Child />
  }
}
</script>

<template>
	<Child ref="child" :bread="bread"/>
  {{ bread }}
</template>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top: 5px;
    margin-left: 3px;
  }
</style>
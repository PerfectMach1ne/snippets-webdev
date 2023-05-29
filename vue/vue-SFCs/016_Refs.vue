<script>
export default {
  data() {
    return {
      list: [1, 2, 3],
      listofstuff: new Array()
    }
  },
  mounted() {
    console.log(this.$refs.items)
    this.listofstuff = this.$refs.items
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="thing in listofstuff">
      {{ thing }}
    </li>
  </ul>
</template>
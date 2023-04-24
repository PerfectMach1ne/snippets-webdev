<!--
We can render content conditionally or in a loop with the v-if and v-for directives.
-->

<script>
export default {
  data() {
    return {
      show: true,
      list: [1, 2, 3]
    }
  }
}
</script>

<template>
  <div class="weh">
    <button @click="show = !show">Toggle list</button>
    <button @click="list.push(list.length + 1)">Push number</button>
    <button @click="list.pop()">Pop number</button>
    <button @click="list.reverse()">Reverse list</button>
  </div>
  <ul v-if="show && list.length">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">List is not empty, but hidden.</p>
  <p v-else>List is empty.</p>
</template>

<style>
.weh {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

button {
  display: inline-block;
	padding: 5px 5px;
}
</style>
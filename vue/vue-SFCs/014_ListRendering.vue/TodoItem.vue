<script>
export default {
  props: ['title'],
  emits: ['remove']
}
</script>

<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">Remove</button>
  </li>
</template>
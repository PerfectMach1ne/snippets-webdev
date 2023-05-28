<script>
export default {
  data() {
    return {
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      }
    }
  }
}
</script>

<template>
  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>
  <!-- You can also provide a second alias for the property's name (a.k.a. key): -->
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
</template>
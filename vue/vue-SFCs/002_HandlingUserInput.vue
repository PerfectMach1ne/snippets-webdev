<!--
  Handling user input with the v-on directive.
-->

<script>
export default {
  data() {
    return {
      message: 'Helloooo world!!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
    notify() {
      alert('navigation was prevented.');
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>

  <button @click="reverseMessage">Reverse Message</button>
  <button @click="message += '!'">Append "!"</button>
  
  <a href="https://vuejs.org" @click.prevent="notify">
    A link with e.preventDefault()
  </a>
</template>

<style>
button, a {
  display: block;
  margin-bottom: 1em;
}
</style>

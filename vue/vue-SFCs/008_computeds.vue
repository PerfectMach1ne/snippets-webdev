<script>
export default {
  data() {
    return {
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes' : 'No';
    },
    now() { // This will NEVER update because Date.now() is not a reactive dependency
      return Date.now();
    }
  }
}
</script>

<template>
  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
  <br>
  <span>{{ publishedBooksMessage }}</span>
</template>

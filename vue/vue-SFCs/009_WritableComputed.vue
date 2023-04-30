<script>
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      test: 'a'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        // destructuring assignment syntax
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  },
  methods: {
    rock() {
      this.test = 'RockDwayne Johnson';
    }
  }
}
</script>

<template>
  <p>"John" in 2015:</p>
  <span>{{ fullName }}</span>
  <p>Jane in 2020:</p>
  <span>{{ fullName = 'Jane Doe' }}</span>
  <br>
  <span v-on:pointerover="rock">{{ test }}</span>
</template>

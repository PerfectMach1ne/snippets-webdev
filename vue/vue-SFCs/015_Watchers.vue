<script>
export default {
  data() {
    return {
      question: '',
      answer: 'Questions usually contain a question mark. :333',
      some: {
        nested: {
          key: 'woo'
        }
      },
      testme: 0
    }
  },
  watch: {
    // whenever question changes, this funcion will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) { // alternative is newQuestion.indexOf('?') > -1
        this.getAnswer()
      }
    },
    // The watch option also supports a dot-delimited path as the key:
    // Note: only simple paths. Expressions are not supported.
    'some.nested.key'(newValue) {
      this.testme++;
    }
  },
  methods: {
    async getAnswer() {
      this.answer = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        this.answer = (await res.json()).answer
      } catch (error) {
        this.answer = 'Error! Could not fetch the API. --- ' + error
      }
    }
  }
}
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <input v-model="some.nested.key"/>
  {{ testme }}
</template>
<!--
  From https://vuejs.org/examples/#simple-component
  "Here we show the simplest possible component which accepts a prop and renders it.
Learn more about components in the guide!"
-->

<script>
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: 'Veggies' },
        { id: 1, text: 'Chees' },
        { id: 2, text: 'Whatever else robots from Abyss are supposed to ingest' }
      ]
    }
  }
}
</script>

<template>
  <ol>
    <!--
      We are providing each todo-item with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which is explained in the guide section on v-for.
    -->
    <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
    ></TodoItem>
  </ol>
</template>

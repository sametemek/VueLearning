<template>
  <div class="home">
          <TodoList :todos="todos" />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from './../components/TodoList.vue'

export default {
  name: 'Home',
  components: { TodoList },
  data() {
    return {
      todos: [
        {
          title: "Setup environment",
          dueDate: new Date(2020, 2, 22),
          isCompleted: true
        },
        {
          title: "Create main list component",
          dueDate: new Date(2020, 4, 22),
          isCompleted: false
        },
        { title: "Display TODO items", isCompleted: undefined }
      ]
    };
  }
}
</script>

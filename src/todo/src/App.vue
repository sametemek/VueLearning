<template>
  <!-- Komponent in tasarımı burada bulunur. -->
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href class="navbar-brand">TODO</a>
      </div>
    </nav>
    <div class="container">
      <TodoList :todos="todos" />
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
/* Komponent in davranışı, yani işlevleri burada bulunur. */
export default {
  name: "App",
  components: { TodoList },
  data() {
    return {
      todos: [
        {
          title: "Setup environment",
          dueDate: new Date(2020, 2, 22),
          isCompleted: false
        },
        {
          title: "Create main list component",
          dueDate: new Date(2020, 4, 22),
          isCompleted: false
        },
        { title: "Display TODO items", isCompleted: false }
      ]
    };
  }
};
</script>

<style>
</style>

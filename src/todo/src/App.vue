<template>
  <!-- Komponent in tasarımı burada bulunur. -->
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <a href class="navbar-brand">TODO</a>
      </div>
    </nav>
    <div class="container">
      <div class="card" v-for="(item,index) in todos" :key="index">
        <div class="card-body">
          <div class="card-title">{{item.title}}</div>
          <h6 class="card-subtitle text-danger" v-if="item.dueDate">
            <span v-show="item.dueDate.getTime() < Date.now()">Overdue:</span>
            {{item.dueDate}}
          </h6>
        </div>
        <div class="todo-controls">
          <button
            class="btn btn-sm btn-outline-success"
            @click.prevent="item.isCompleted=true"
          >Complete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* Komponent in davranışı, yani işlevleri burada bulunur. */
export default {
  name: "App",
  components: {},
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
.card {
  margin-top: 10px;
}
.card .todo-controls {
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 5px;
  visibility: hidden;
}
.card:hover .todo-controls {
  visibility: visible;
}
</style>

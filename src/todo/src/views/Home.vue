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
  created() //data yerine burada atama yapıyoruz.
  {
  this.todos = this.$todos.getItems();
  },
  mounted(){
    
  },
  data() {
    return {
      todos: [] // burada direk atama yapmıyoruz. 
    };
  }
}
</script>

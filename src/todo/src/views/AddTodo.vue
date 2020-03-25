<template>
  <div class="about">
    <div class="form-group">
      <label for="todo-item">Title</label>
      <input type="text" id="todo-item" class="form-control" v-model="title">
    </div>
    <div class="form-group">
      <label for="due-date">Duedate</label>
      <input type="date" class="form-control" id="due-date" v-model="dueDate">
    </div>
    <div class="form-group">
    <button class="btn btn-primary" @click.prevent="addTodoItem" >Save</button>
  </div>
  </div>
  
</template>
<script>
export default {
  data(){
    return({
      'title':'',
      'dueDate':''
    });
  },
  methods: {
    addTodoItem(){
        this.$router.push('/');
    }
  }
}
</script>
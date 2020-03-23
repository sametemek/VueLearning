<template>
  <div class="list-container">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a
          href="#"
          class="nav-link"
          :class="{'active':filterType === false}"
          @click.prevent="filterType=false"
        >Incomplete</a>
      </li>
      <li class="nav-item">
        <a
          href="#"
          class="nav-link"
          :class="{'active':filterType === true}"
          @click.prevent="filterType=true"
        >Complete</a>
      </li>
      <li class="nav-item">
        <a
          href="#"
          class="nav-link"
          :class="{'active':filterType === undefined}"
          @click.prevent="filterType=undefined"
        >All</a>
      </li>
    </ul>
    <TodoListItem v-for="(item,index) in filteredItems" :key="index" :item="item" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  props: ["todos"],
  components: { TodoListItem },
  data() {
    return {
      filteredItems: this.todos.filter(item => !item.isCompleted),
      filterType: false
    };
  },
  watch: {
    filterType() {
      this.filter();
    }
  },
  methods: {
    filter() {
      if (this.filterType === true) {
        this.filteredItems = this.todos.filter(item => item.isCompleted);
      } else if (this.filterType === false) {
        this.filteredItems = this.todos.filter(item => !item.isCompleted);
      } else {
        this.filteredItems = this.todos;
      }
    }
  }
};
</script>

<style scoped>
.list-container {
  margin-top: 15px;
}
</style>
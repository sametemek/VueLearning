<template>
  <div class="card" v-show="!item.isCompleted">
    <TodoListItemBody :item="item" />
    <TodoListItemControls :item="item" />
  </div>
</template>

<script>
import TodoListItemControls from "./TodoListItemControls";
import TodoListItemBody from "./TodoListItemBody";
export default {
  props: ["item"],
  components: { TodoListItemControls, TodoListItemBody }
};
</script>

<style scoped>
.card {
  margin-top: 10px;
}
</style>
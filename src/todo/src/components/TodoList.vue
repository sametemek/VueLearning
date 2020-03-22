<template>
  <div>
    <TodoListItem v-for="(item,index) in todos" :key="index" :item="item" />
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";
export default {
  props: ["todos"],
  components: { TodoListItem }
};
</script>

<style scoped>
</style>
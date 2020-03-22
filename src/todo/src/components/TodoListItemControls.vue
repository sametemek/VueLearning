<template>
  <div class="todo-controls">
    <button class="btn btn-sm btn-outline-success" @click.prevent="item.isCompleted=true">Complete</button>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
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
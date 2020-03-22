<template>
  <div class="card-body">
    <div class="card-title">{{item.title}}</div>
    <h6 class="card-subtitle text-danger" v-if="item.dueDate">
      <span v-show="item.dueDate.getTime() < Date.now()">Overdue:</span>
      {{item.dueDate}}
    </h6>
  </div>
</template>
<script>
export default {
  props: ["item"]
};
</script>
<style scoped>
</style>
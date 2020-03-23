<template>
  <div class="card-body">
    <div class="card-title">{{item.title}}</div>
    <h6 class="card-subtitle text-danger" v-if="item.dueDate">
      <span>{{dueDateLabel}}</span>
      {{ formattedDate }}
    </h6>
  </div>
</template>
<script>
export default {
  props: ["item"],
  computed: {
    formattedDate() {
      let dt = this.item.dueDate;
      return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();
    },
    dueDateLabel() {
      let isOverDue = this.item.dueDate.getTime() > Date.now();
      return isOverDue ? "Overdue" : "Due";
    }
  }
};
</script>
<style scoped>
</style>
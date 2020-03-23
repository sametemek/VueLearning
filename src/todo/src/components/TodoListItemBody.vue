<template>
  <div class="card-body">
    <div class="card-title">{{item.title}}</div>
    <h6 class="card-subtitle" :class="overDueCss" v-if="item.dueDate">
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
      return this.isOverDue ? "Overdue" : "Due";
    },
    isOverDue() {
      return this.item.dueDate.getTime() > Date.now();
    },
    overDueCss() {
      return {
        "text-danger": this.isOverDue,
        bold: true,
        "text-uppercase": this.isOverDue
      };
    }
  }
};
</script>
<style scoped>
</style>
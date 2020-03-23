<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">{{item.title}}</div>
      <h6 class="card-subtitle" :class="overDueCss" v-if="item.dueDate && !item.isCompleted">
        <span>{{dueDateLabel}}</span>
        {{ formattedDate }}
      </h6>
    </div>
    <div class="todo-controls">
      <button
        v-if="!item.isCompleted"
        class="btn btn-sm btn-outline-success"
        @click.prevent="changeStatus(true)"
      >Complete</button>
      <button
        v-if="item.isCompleted"
        class="btn btn-sm btn-outline-danger"
        @click.prevent="changeStatus(false)"
      >Undo</button>
    </div>
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
  },
  methods: {
    changeStatus(isCompleted) {
      this.item.isCompleted = isCompleted;
      this.$emit("item-completed");
    }
  }
};
</script>

<style scoped>
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
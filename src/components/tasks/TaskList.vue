<template>
  <div class="task-list">
    <h3 v-if="title">{{ title }}</h3>
    <p v-if="tasks.length === 0">No tasks found.</p>
    <ul v-else>
      <li v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" @delete="handleDelete" />
      </li>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "TaskList",
  components: { TaskItem },
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleDelete(taskId) {
      this.$emit("delete", taskId);
    },
  },
};
</script>

<style scoped lang="scss">
.task-list {
  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 8px;
    }
  }
}
</style>

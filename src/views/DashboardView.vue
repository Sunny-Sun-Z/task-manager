<template>
  <div class="dashboard">
    <h2>My Tasks</h2>
    <TaskForm />

    <div class="filters">
      <AppButton size="small" variant="danger" @click="filter = 'all'"
        >All</AppButton
      >
      <AppButton size="small" variant="danger" @click="filter = 'pending'"
        >Pending</AppButton
      >
      <AppButton size="small" variant="danger" @click="filter = 'completed'"
        >Completed</AppButton
      >
    </div>

    <TaskList :tasks="filteredTasks" @delete="taskStore.deleteTask" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTaskStore } from "@/store/taskStore";
import TaskList from "@/components/tasks/TaskList.vue";
import TaskForm from "@/components/tasks/TaskForm.vue";
import AppButton from "@/components/ui/AppButton.vue"; // And this
const taskStore = useTaskStore();
const filter = ref("all");

const filteredTasks = computed(() => {
  switch (filter.value) {
    case "completed":
      return taskStore.completedTasks;
    case "pending":
      return taskStore.pendingTasks;
    default:
      return taskStore.tasks;
  }
});
</script>
<style scoped lang="scss">
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.filters {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
</style>

<template>
  <div class="dashboard">
    <h2>My Tasks</h2>
    <TaskForm />
    <TaskList
      :tasks="taskStore.tasks"
      title="Pending Tasks"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TaskList from "@/components/tasks/TaskList.vue";
import { useTaskStore } from "@/store/taskStore.js";
import TaskForm from "@/components/tasks/TaskForm.vue";

export default {
  name: "DashboardView2",
  components: { TaskList, TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const handleDeleteTask = (taskId) => {
      taskStore.deleteTask(taskId);
    };

    return {
      taskStore,
      handleDeleteTask,
    };
  },
  // methods: {
  //   handleDeleteTask(taskId) {
  //     this.tasks = this.tasks.filter((task) => task.id !== taskId);
  //   },
  // },
};
</script>

<style scoped lang="scss">
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>

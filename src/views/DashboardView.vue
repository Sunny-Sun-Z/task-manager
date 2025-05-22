<template>
  <div class="dashboard">
    <h2>My Tasks</h2>
    <TaskList :tasks="tasks" title="Pending Tasks" @delete="handleDeleteTask" />
  </div>
</template>

<script>
import TaskList from "@/components/tasks/TaskList.vue";

export default {
  name: "DashboardView",
  components: { TaskList },
  data() {
    return {
      tasks: [
        { id: 1, title: "Learn Vue.js", description: "Complete the tutorial" },
        {
          id: 2,
          title: "Build Task Manager",
          description: "Implement all features",
        },
      ],
    };
  },
  methods: {
    handleDeleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
  },
};
</script>

<style scoped lang="scss">
.dashboard {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>

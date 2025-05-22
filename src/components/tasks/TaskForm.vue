<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="newTaskTitle" placeholder="Add a new task" required />
    <AppButton type="submit" variant="primary">Add Task</AppButton>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import AppButton from "@/components/ui/AppButton.vue";

const newTaskTitle = ref("");
const taskStore = useTaskStore();

const handleSubmit = () => {
  taskStore.addTask(newTaskTitle.value);
  newTaskTitle.value = "";
};
</script>

<style scoped>
form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>

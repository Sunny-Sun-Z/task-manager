<template>
  <AppCard>
    <div class="task-item">
      <input
        type="checkbox"
        :checked="task.done"
        @change="taskStore.toggleTask(task.id)"
        class="task-checkbox"
      />
      <span class="task-title">{{ task.title }}</span>
      <AppButton
        size="small"
        variant="primary"
        @click="$emit('delete', task.id)"
        class="delete-btn"
      >
        <span class="delete-icon">🗑️</span>
        <span class="delete-text">Delete</span></AppButton
      >
    </div>
  </AppCard>
</template>

<script setup>
import AppCard from "../ui/AppCard.vue";
import AppButton from "../ui/AppButton.vue";
import { useTaskStore } from "@/store/taskStore";
import { defineProps } from "vue"; // Explicit import
const taskStore = useTaskStore();

defineProps({
  task: { type: Object, required: true },
});
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.task-checkbox {
  transform: scale(1.3);
  accent-color: #42b983;
}

.task-title {
  flex-grow: 1;
}

.is-completed .task-title {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.delete-text {
  /* Reset any inherited link styles */
  all: initial;
}
</style>

import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("tasks", () => {
  const tasks = ref([
    { id: 1, title: "Learn Vue", done: false },
    { id: 2, title: "Build Task Manager", done: false },
  ]);

  const addTask = (title) => {
    tasks.value.push({
      id: Date.now(),
      title,
      done: false,
    });
  };

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  return { tasks, addTask, deleteTask };
});

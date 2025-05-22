import { defineStore } from "pinia";
import { ref, watch, computed } from "vue";

export const useTaskStore = defineStore("tasks", () => {
  // Load tasks from localStorage or initialize
  const tasks = ref(
    JSON.parse(localStorage.getItem("tasks")) || [
      { id: 1, title: "Learn Vue", done: false },
      { id: 2, title: "Build Task Manager", done: false },
    ]
  );

  /* Angular equivalent with watch, Both Vue's watch and Angular's effect serve the same core purpose: they reactively capture and respond to state changes in real-time. 
  // In your service or component
    tasks = signal<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

  // Auto-save to localStorage
    effect(() => {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    });
  */
  // Save to localStorage whenever tasks change
  watch(
    tasks,
    (newTasks) => {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    },
    { deep: true }
  );

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

  // NEW: Toggle task status
  const toggleTask = (id) => {
    const task = tasks.value.find((t) => t.id === id);
    if (task) task.done = !task.done;
  };

  // NEW: Filter methods
  const completedTasks = computed(() => tasks.value.filter((t) => t.done));
  const pendingTasks = computed(() => tasks.value.filter((t) => !t.done));

  return {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    completedTasks,
    pendingTasks,
  };
});

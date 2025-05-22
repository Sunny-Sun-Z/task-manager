<template>
  <AppCard>
    <div class="task-item">
      <div class="task-content">
        <h4>{{ task.title }}</h4>
        <p v-if="task.description">{{ task.description }}</p>
      </div>
      <div class="task-actions">
        <AppButton
          size="small"
          variant="danger"
          @click="$emit('delete', task.id)"
        >
          Delete
        </AppButton>
      </div>
    </div>
  </AppCard>
</template>

<script>
import AppCard from "../ui/AppCard.vue";
import AppButton from "../ui/AppButton.vue";

export default {
  name: "TaskItem",
  components: { AppCard, AppButton },
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .task-content {
    flex: 1;
    h4 {
      margin: 0 0 4px 0;
      color: #2c3e50;
    }
    p {
      margin: 0;
      color: #7f8c8d;
      font-size: 14px;
    }
  }
  .task-actions {
    margin-left: 16px;
  }
}
</style>

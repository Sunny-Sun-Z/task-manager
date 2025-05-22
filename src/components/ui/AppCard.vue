<template>
  <div class="app-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AppCard",
};
</script>

<style scoped lang="scss">
.app-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
}
</style>

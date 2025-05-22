<template>
  <button class="app-button" :class="[size, variant]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "AppButton",
  props: {
    size: {
      type: String,
      default: "medium", // small | medium | large
      validator: (value) => ["small", "medium", "large"].includes(value),
    },
    variant: {
      type: String,
      default: "primary", // primary | secondary | danger
      validator: (value) => ["primary", "secondary", "danger"].includes(value),
    },
  },
};
</script>

<style scoped>
.app-button {
  all: unset;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  /* Sizes */
  &.small {
    padding: 6px 12px;
    font-size: 12px;
  }
  &.medium {
    padding: 8px 16px;
    font-size: 14px;
  }
  &.large {
    padding: 12px 24px;
    font-size: 16px;
  }

  /* Variants */
  &.primary {
    background: #42b983;
    color: white;
    &:hover {
      background: #3aa876;
    }
  }
  &.secondary {
    background: #f0f0f0;
    color: #333;
    &:hover {
      background: #e0e0e0;
    }
  }
  &.danger {
    background: #ff4444;
    color: white;
    &:hover {
      background: #cc0000;
    }
  }
  a.app-button {
    text-decoration: none;
  }
}
</style>

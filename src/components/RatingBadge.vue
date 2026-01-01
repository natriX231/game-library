<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  value: number
}>()

const color = computed(() => {
  if (props.value >= 9) return 'badge--high'
  if (props.value >= 7) return 'badge--medium'
  return 'badge--low'
})
</script>

<template>
  <span class="badge" :class="color">
    ★ {{ value.toFixed(1) }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.1rem 0.4rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
}

.badge--high {
  background-color: #16a34a;
}

.badge--medium {
  background-color: #eab308;
}

.badge--low {
  background-color: #ef4444;
}
</style>

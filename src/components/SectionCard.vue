<template>
  <section class="section-card">
    <header v-if="title" class="section-card__header">
      <h2 class="section-card__title">{{ title }}</h2>
      <div v-if="$slots.actions" class="section-card__actions">
        <slot name="actions"></slot>
      </div>
    </header>

    <div class="section-card__content">
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<style scoped>
.section-card {
  border-radius: 12px;
  border: 1px solid #333;
  padding: 1.25rem;
  background-color: #111;
}

.section-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.section-card__title {
  font-size: 1.1rem;
  margin: 0;
}

.section-card__actions {
  display: flex;
  gap: 0.5rem;
}
</style>

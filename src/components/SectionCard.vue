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
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  border-radius: 16px;
  border: 1px solid var(--border-subtle);
  padding: 1.5rem 2rem;
  background-color: var(--bg-surface);
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

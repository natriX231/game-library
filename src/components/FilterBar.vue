<script setup lang="ts">
const props = defineProps<{
  search: string
  genre: string
}>()

const emit = defineEmits<{
  (e: 'update:search', value: string): void
  (e: 'update:genre', value: string): void
}>()

function onSearchChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:search', target.value)
}

function onGenreChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:genre', target.value)
}
</script>

<template>
  <div class="filters">
    <input
      type="text"
      class="filters__search"
      placeholder="Search by title..."
      :value="search"
      @input="onSearchChange"
    />

    <select
      class="filters__genre"
      :value="genre"
      @change="onGenreChange"
    >
      <option value="">All genres</option>
      <option value="RPG">RPG</option>
      <option value="Action RPG">Action RPG</option>
    </select>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.filters__search {
  flex: 1;
  padding: 0.25rem 0.5rem;
}

.filters__genre {
  min-width: 150px;
  padding: 0.25rem 0.5rem;
}
</style>

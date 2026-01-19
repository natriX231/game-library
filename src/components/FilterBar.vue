<script setup lang="ts">
const props = defineProps<{
  search: string
  genre: string
  genres: string[]
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
  <div class="filter-bar">
    <div class="filter-bar__search">
      <span class="filter-bar__icon">🔍</span>
      <input
        type="text"
        class="filter-bar__input"
        :value="search"
        placeholder="Search by title..."
        @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
      />
    </div>

    <div class="filter-bar__select-wrapper">
      <select
        class="filter-bar__select"
        :value="genre"
        @change="$emit('update:genre', ($event.target as HTMLSelectElement).value)"
      >
        <option value="">All genres</option>
        <option
          v-for="option in genres"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.filter-bar {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.filter-bar__search {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 25px;
  background-color: #0b1120;
  border: 3px solid var(--border-subtle);
}

.filter-bar__icon {
  font-size: 0.9rem;
  opacity: 1;
}

.filter-bar__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-main);
  font-size: 0.9rem;
}

.filter-bar__input::placeholder {
  color: var(--text-muted);
}

.filter-bar__select-wrapper {
  min-width: 180px;
}

.filter-bar__select {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  border: 3px solid var(--border-subtle);
  background-color: #020617;
  color: var(--text-main);
  font-size: 0.9rem;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #9ca3af 50%);
  background-position: calc(100% - 14px) 50%, calc(100% - 9px) 50%;
  background-size: 5px 5px, 5px 5px;
  background-repeat: no-repeat;
}

.filter-bar__select:hover {
  border-color: var(--accent-secondary);
}
</style>
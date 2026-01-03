<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'
import FilterBar from '../components/FilterBar.vue'
import SectionCard from '../components/SectionCard.vue'

const gameStore = useGameStore()
const { allGames } = storeToRefs(gameStore)

const search = ref('')
const genre = ref('')

const filteredGames = computed(() =>
  allGames.value.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
    const matchesGenre = genre.value ? game.genre === genre.value : true
    return matchesSearch && matchesGenre
  }),
)

const genres = computed(() => {
  const set = new Set<string>()
  allGames.value.forEach((game) => {
    set.add(game.genre)
  })
  return Array.from(set).sort()
})
</script>

<template>
  <div class="page-layout">
    <SectionCard title="Catalog">
      <FilterBar
      :search="search"
      :genre="genre"
      :genres="genres"
      @update:search="value => (search = value)"
      @update:genre="value => (genre = value)"
      />
    </SectionCard>

    <SectionCard title="All games">
      <div v-if="filteredGames.length === 0">
        No games found.
      </div>

      <div v-else class="game-row">
        <GameCard
          v-for="game in filteredGames"
          :key="game.id"
          :game="game"
          :show-actions="true"
        />
      </div>
    </SectionCard>
  </div>
</template>

<style scoped>
.game-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  max-width: 100%;
}

.home__game-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  max-width: 100%;
}

</style>
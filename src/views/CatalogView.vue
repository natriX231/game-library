<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'
import FilterBar from '../components/FilterBar.vue'

const gameStore = useGameStore()
const { allGames } = storeToRefs(gameStore)

const search = ref('')
const genre = ref('')

const filteredGames = computed(() =>
  allGames.value.filter((game) => {
    const matchesSearch = game.title
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesGenre = genre.value
      ? game.genre === genre.value
      : true

    return matchesSearch && matchesGenre
  }),
)
</script>

<template>
  <div>
    <h1>Catalog</h1>

    <FilterBar
      :search="search"
      :genre="genre"
      @update:search="value => (search = value)"
      @update:genre="value => (genre = value)"
    />

    <div v-if="filteredGames.length === 0">
      No games found.
    </div>

    <div v-else class="game-list">
      <GameCard
        v-for="game in filteredGames"
        :key="game.id"
        :game="game"
        :show-actions="true"
      />
    </div>
  </div>
</template>

<style scoped>
.game-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

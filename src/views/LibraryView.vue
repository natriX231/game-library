<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'

const gameStore = useGameStore()
const { libraryGames } = storeToRefs(gameStore)
</script>

<template>
  <div>
    <h1>Library</h1>

    <div v-if="libraryGames.length === 0">
      Your library is empty.
    </div>

    <div v-else class="game-list">
      <GameCard
        v-for="game in libraryGames"
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

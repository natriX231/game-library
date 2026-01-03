<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'
import SectionCard from '../components/SectionCard.vue'

const gameStore = useGameStore()
const { libraryGames } = storeToRefs(gameStore)
</script>

<template>
  <div class="page-layout">
    <SectionCard title="My library">
      <div v-if="libraryGames.length === 0">
        Your library is empty.
      </div>

      <div v-else class="game-grid">
        <GameCard
        v-for="game in libraryGames"
        :key="game.id"
        :game="game"
        :show-actions="true"
        />
      </div>
    </SectionCard>
  </div>
</template>

<style scoped>
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem 1.25rem;
}

.home__game-row {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  max-width: 100%;
}
</style>

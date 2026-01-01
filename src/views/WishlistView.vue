<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'
import SectionCard from '../components/SectionCard.vue'

const gameStore = useGameStore()
const { wishlistGames } = storeToRefs(gameStore)
</script>

<template>
  <div class="page-layout">
    <SectionCard title="Wishlist">
      <div v-if="wishlistGames.length === 0">
        Your wishlist is empty.
      </div>

      <div v-else class="game-row">
        <GameCard
          v-for="game in wishlistGames"
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

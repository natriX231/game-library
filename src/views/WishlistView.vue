<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/GameCard.vue'
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

      <div v-else class="game-grid">
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
.game-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem 1.25rem;
}
</style>

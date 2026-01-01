<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'

const gameStore = useGameStore()
const { wishlistGames } = storeToRefs(gameStore)
</script>

<template>
  <div>
    <h1>Wishlist</h1>

    <div v-if="wishlistGames.length === 0">
      Your wishlist is empty.
    </div>

    <div v-else class="game-list">
      <GameCard
        v-for="game in wishlistGames"
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

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGameStore } from '../stores/gameStore'

const route = useRoute()
const router = useRouter()
const gameStore = useGameStore()

const gameId = computed(() => Number(route.params.id))
const game = computed(() => gameStore.getGameById(gameId.value))

function goBack() {
  router.back()
}
</script>

<template>
  <div v-if="game">
    <button type="button" @click="goBack">Back</button>

    <h1>{{ game.title }}</h1>

    <img
      :src="game.coverUrl"
      :alt="game.title"
      style="width: 200px; height: 280px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem;"
    />

    <p><strong>Genre:</strong> {{ game.genre }}</p>
    <p><strong>Platform:</strong> {{ game.platform }}</p>
    <p><strong>Release year:</strong> {{ game.releaseYear }}</p>
    <p><strong>Rating:</strong> {{ game.rating }}</p>
    <p v-if="game.status"><strong>Status:</strong> {{ game.status }}</p>
  </div>

  <div v-else>
    <p>Game not found.</p>
  </div>
</template>

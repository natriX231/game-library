<script setup lang="ts">
import type { Game } from '../types/game'
import { useGameStore } from '../stores/gameStore'

const props = defineProps<{
  game: Game
  showActions?: boolean
}>()

const gameStore = useGameStore()

function handleAddToLibrary() {
  gameStore.addToLibrary(props.game.id)
}

function handleAddToWishlist() {
  gameStore.addToWishlist(props.game.id)
}
</script>

<template>
  <article class="game-card">
    <img
      class="game-card__cover"
      :src="game.coverUrl"
      :alt="game.title"
    />

    <div class="game-card__content">
      <h2 class="game-card__title">
        <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }">
          {{ game.title }}
        </RouterLink>
      </h2>

      <p class="game-card__meta">
        {{ game.genre }} · {{ game.platform }} · {{ game.releaseYear }}
      </p>

      <p class="game-card__rating">
        Rating: {{ game.rating }}
      </p>

      <p v-if="game.status" class="game-card__status">
        Status: {{ game.status }}
      </p>

      <div v-if="showActions" class="game-card__actions">
        <button type="button" @click="handleAddToLibrary">
          Add to library
        </button>
        <button type="button" @click="handleAddToWishlist">
          Add to wishlist
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.game-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.game-card__cover {
  width: 120px;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
}

.game-card__content {
  flex: 1;
}

.game-card__title {
  margin: 0 0 0.25rem;
}

.game-card__meta,
.game-card__rating,
.game-card__status {
  margin: 0.1rem 0;
}

.game-card__actions {
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}
</style>

<script setup lang="ts">
import type { Game } from '../types/game'
import { useGameStore } from '../stores/gameStore'
import RatingBadge from './RatingBadge.vue'

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
    <div class="game-card__info">
      <h2 class="game-card__title">
        <RouterLink :to="{ name: 'game-detail', params: { id: game.id } }">
          {{ game.title }}
        </RouterLink>
      </h2>

      <p class="game-card__meta">
        {{ game.genre }} · {{ game.platform }} · {{ game.releaseYear }}
      </p>

      <p class="game-card__rating">
        Rating:
        <RatingBadge :value="game.rating" />
      </p>

      <p v-if="game.status" class="game-card__status">
        Status: {{ game.status }}
      </p>
    </div>

    <div v-if="showActions" class="game-card__actions">
      <button type="button" class="btn-action btn-action--primary" @click="handleAddToLibrary">
        Add to library
      </button>
      <button type="button" class="btn-action btn-action--secondary" @click="handleAddToWishlist">
        Add to wishlist
      </button>
    </div>
  </div>
</article>

</template>

<style scoped>
.game-card {
  display: flex;
  flex: 0 0 300px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  gap: 1rem;
  padding: 1rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  background-color: var(--bg-surface);
}

.game-card__cover {
  width: 150px;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
}

.game-card__content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.game-card__info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
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
  padding-top: 0.35rem;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}

.btn-action {
  flex: 1;
  padding: 0.35rem 0.4rem;
  border-radius: 10px;
  border: 1px solid var(--border-subtle);
  font-size: 0.8rem;
  background-color: #1f2933;
  color: var(--text-main);
  text-align: center;
  white-space: normal;
}


.btn-action--primary {
  background-color: var(--accent);
  color: #000;
}

.btn-action--secondary {
  background-color: #27272f;
}

.btn-action:hover {
  filter: brightness(1.05);
}
</style>

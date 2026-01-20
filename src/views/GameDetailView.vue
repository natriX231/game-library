<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import RatingBadge from '../components/RatingBadge.vue'

const route = useRoute()
const router = useRouter()
const gameStore = useGameStore()
const { allGames } = storeToRefs(gameStore)

const gameId = computed(() => Number(route.params.id))
const game = computed(() =>
  allGames.value.find(g => g.id === Number(route.params.id))
)

function goBack() {
  router.back()
}
</script>

<template>
  <div class="page-layout">
    <button class="btn-back" @click="goBack">
      ⟵ Back to catalog
    </button>
    <section v-if="game" class="game-detail">
      <img
        class="game-detail__cover"
        :src="game.coverUrl"
        :alt="game.title"
      />
      <div class="game-detail__content">
        <h1 class="game-detail__title">{{ game.title }}</h1>
        <p class="game-detail__meta">
          {{ game.genre }} · {{ game.platform }} · {{ game.releaseYear }}
        </p>
        <p class="game-detail__rating">
          Rating: <RatingBadge :value="game.rating" />
        </p>
        <p v-if="game.status" class="game-detail__status">
          Status: {{ game.status }}
        </p>
        <p v-if="game.description" class="game-detail__description">
          {{ game.description }}
        </p>
      </div>
    </section>
    <p v-else>Game not found.</p>

    <section v-if="game && game.trailerUrl" class="trailer-section">
      <h2 class="trailer-section__title">Trailer</h2>
      <div class="video-container">
        <iframe
          :src="game.trailerUrl"
          class="video-player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </div>
</template>

<style scoped>
.game-detail {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  max-width: 900px;
}

.game-detail__cover {
  width: 260px;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
}

.game-detail__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.game-detail__title {
  font-size: 1.7rem;
  margin: 0 0 0.25rem;
}

.game-detail__meta {
  color: var(--text-muted);
}

.game-detail__description {
  margin-top: 0.75rem;
  line-height: 1.6;
}

.btn-back {
  margin-bottom: 1rem;
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  background-color: #111827;
  color: var(--text-main);
  font-size: 0.85rem;
  cursor: pointer;
}

.btn-back:hover {
  background-color: #1f2937;
}

.trailer-section {
  margin-top: 3rem;
  max-width: 900px;
}

.trailer-section__title {
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  color: var(--text-main);
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  background-color: #000;
}

.video-player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .game-detail {
    flex-direction: column;
  }

  .game-detail__cover {
    width: 100%;
    max-width: 320px;
    height: auto;
  }

  .trailer-section {
    margin-top: 2rem;
  }
}
</style>

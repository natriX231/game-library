<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'
import RatingBadge from '../components/RatingBadge.vue'

const gameStore = useGameStore()
const { allGames, libraryGames, wishlistGames } = storeToRefs(gameStore)

const topGames = computed(() => allGames.value.slice(0, 3))
</script>

<template>
  <div class="home">
    <section class="home__hero">
      <h1>Game Library</h1>
      <p>
        Keep track of your games, personal library and wishlist in one place.
      </p>

      <div class="home__links">
        <RouterLink to="/catalog" class="btn">Open catalog</RouterLink>
        <RouterLink to="/library" class="btn btn--secondary">My library</RouterLink>
        <RouterLink to="/wishlist" class="btn btn--secondary">Wishlist</RouterLink>
      </div>
    </section>

    <section class="home__stats">
      <div class="stat">
        <span class="stat__label">Games in library</span>
        <span class="stat__value">{{ libraryGames.length }}</span>
      </div>
      <div class="stat">
        <span class="stat__label">In wishlist</span>
        <span class="stat__value">{{ wishlistGames.length }}</span>
      </div>
      <div class="stat">
        <span class="stat__label">Total games</span>
        <span class="stat__value">{{ allGames.length }}</span>
      </div>
    </section>

    <section class="home__section">
      <h2>Top games</h2>
      <div class="home__game-list">
        <GameCard
          v-for="game in topGames"
          :key="game.id"
          :game="game"
          :show-actions="true"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.home__hero h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.home__links {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.btn {
  display: inline-block;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background-color: #22c55e;
  color: #000;
}

.btn--secondary {
  background-color: #3b82f6;
  color: #fff;
}

.home__stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.stat {
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid #444;
  min-width: 140px;
}

.stat__label {
  display: block;
  font-size: 0.8rem;
  opacity: 0.8;
}

.stat__value {
  font-size: 1.2rem;
  font-weight: 600;
}

.home__game-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

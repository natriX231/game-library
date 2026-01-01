<template>
  <div class="page-layout">
    <div class="home">
      <SectionCard title="Welcome to Game Library">
        <template #actions>
          <RouterLink to="/catalog" class="btn">Open catalog</RouterLink>
        </template>

        <p>
          Keep track of your games, personal library and wishlist in one place.
        </p>

        <div class="home__links">
          <RouterLink to="/library" class="btn btn--secondary">My library</RouterLink>
          <RouterLink to="/wishlist" class="btn btn--secondary">Wishlist</RouterLink>
        </div>
      </SectionCard>

      <SectionCard title="Overview">
        <div class="home__stats">
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
        </div>
      </SectionCard>

      <SectionCard title="Top games">
        <div class="home__game-row">
          <GameCard
            v-for="game in topGames"
            :key="game.id"
            :game="game"
            :show-actions="true"
          />
        </div>
      </SectionCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'
import GameCard from '../components/gameCard.vue'
import SectionCard from '../components/SectionCard.vue'

const gameStore = useGameStore()
const { allGames, libraryGames, wishlistGames } = storeToRefs(gameStore)

const topGames = computed(() => allGames.value.slice(0, 3))
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

.home__links {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

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

.home__game-row::-webkit-scrollbar {
  height: 6px;
}
.home__game-row::-webkit-scrollbar-thumb {
  background-color: #333;
  border-radius: 999px;
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

.home__game-list,
.game-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1rem;
}
</style>

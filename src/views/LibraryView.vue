<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '../stores/gameStore'

const gameStore = useGameStore()
const { libraryGames } = storeToRefs(gameStore)
</script>

<template>
  <div>
    <h1>Library</h1>
    <ul>
      <li v-for="game in libraryGames" :key="game.id">
        {{ game.title }} ({{ game.platform }})
      </li>
    </ul>
  </div>
</template>

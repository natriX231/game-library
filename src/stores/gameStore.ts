import { defineStore } from 'pinia'
import type { Game } from '../types/game'

interface GameState {
  allGames: Game[]
  libraryIds: number[]
  wishlistIds: number[]
}

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    allGames: [
      {
        id: 1,
        title: 'The Witcher 3',
        genre: 'RPG',
        platform: 'PC',
        releaseYear: 2015,
        coverUrl: '/src/assets/Witcher_3.jpg',
        rating: 9.5,
        status: 'completed',
      },
      {
        id: 2,
        title: 'Dark Souls III',
        genre: 'Action RPG',
        platform: 'PC',
        releaseYear: 2016,
        coverUrl: 'https://via.placeholder.com/200x300?text=Dark+Souls+III',
        rating: 9.0,
        status: 'playing',
      },
    ],
    libraryIds: [1],
    wishlistIds: [2],
  }),
  getters: {
    libraryGames(state): Game[] {
      return state.allGames.filter(game => state.libraryIds.includes(game.id))
    },
    wishlistGames(state): Game[] {
      return state.allGames.filter(game => state.wishlistIds.includes(game.id))
    },
    getGameById: (state) => {
      return (id: number) => state.allGames.find(game => game.id === id)
    },
  },
  actions: {
    addToLibrary(id: number) {
      if (!this.libraryIds.includes(id)) {
        this.libraryIds.push(id)
        this.wishlistIds = this.wishlistIds.filter(gameId => gameId !== id)
      }
    },
    addToWishlist(id: number) {
      if (!this.wishlistIds.includes(id) && !this.libraryIds.includes(id)) {
        this.wishlistIds.push(id)
      }
    },
    removeFromLibrary(id: number) {
      this.libraryIds = this.libraryIds.filter(gameId => gameId !== id)
    },
    removeFromWishlist(id: number) {
      this.wishlistIds = this.wishlistIds.filter(gameId => gameId !== id)
    },
  },
})

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
        coverUrl: '/src/assets/Dark_souls_3.jpg',
        rating: 9.0,
        status: 'playing',
      },
      {
      id: 3,
      title: 'Sekiro: Shadows Die Twice',
      genre: 'Action',
      platform: 'PC',
      releaseYear: 2019,
      coverUrl: '/src/assets/Sekiro_art.jpg',
      rating: 9.2,
      status: 'completed',
    },
    {
      id: 4,
      title: 'Elden Ring',
      genre: 'Action RPG',
      platform: 'PC',
      releaseYear: 2022,
      coverUrl: '/src/assets/Elden_ring.jpg',
      rating: 9.3,
      status: 'planned',
    },
    {
      id: 5,
      title: 'Hades',
      genre: 'Roguelike',
      platform: 'PC',
      releaseYear: 2019,
      coverUrl: '/src/assets/Hades_cover.jpg',
      rating: 9.1,
      status: 'completed',
    },
    ],
    libraryIds: [1, 2, 3],
    wishlistIds: [4, 5, 1],
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

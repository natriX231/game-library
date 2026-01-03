import { defineStore } from "pinia";
import type { Game } from "../types/game";

interface GameState {
  allGames: Game[];
  libraryIds: number[];
  wishlistIds: number[];
}

export const useGameStore = defineStore("game", {
  state: (): GameState => ({
    allGames: [
      {
        id: 1,
        title: "The Witcher 3",
        genre: "RPG",
        platform: "PC",
        releaseYear: 2015,
        coverUrl: "/src/assets/Witcher_3.jpg",
        description: 'Story-driven open world RPG about monster hunter Geralt exploring war-torn Northern Kingdoms.',
        rating: 9.5,
        status: "completed",
      },
      {
        id: 2,
        title: "Dark Souls III",
        genre: "Action RPG",
        platform: "PC",
        releaseYear: 2016,
        coverUrl: "/src/assets/Dark_souls_3.jpg",
        rating: 9.0,
        status: "playing",
        description: 'Dark fantasy action RPG with challenging combat and interconnected, hostile world.',
      },
      {
        id: 3,
        title: "Sekiro: Shadows Die Twice",
        genre: "Action",
        platform: "PC",
        releaseYear: 2019,
        coverUrl: "/src/assets/Sekiro_art.jpg",
        rating: 9.2,
        status: "completed",
        description: 'Fast-paced shinobi action game focused on precise parries, vertical movement and boss fights in late 1500s Japan.',
      },
      {
        id: 4,
        title: "Elden Ring",
        genre: "Action RPG",
        platform: "PC",
        releaseYear: 2022,
        coverUrl: "/src/assets/Elden_ring.jpg",
        rating: 9.3,
        status: "planned",
      },
      {
        id: 5,
        title: "Hades",
        genre: "Roguelike",
        platform: "PC",
        releaseYear: 2019,
        coverUrl: "/src/assets/Hades_cover.jpg",
        rating: 9.1,
        status: "completed",
      },
      {
        id: 6,
        title: "Dota 2",
        genre: "MOBA",
        platform: "PC",
        releaseYear: 2013,
        coverUrl: "/src/assets/Dota_2.jpg",
        rating: 9.0,
        status: "playing",
      },

      {
        id: 7,
        title: "Buckshot Roulette",
        genre: "Roguelike",
        platform: "PC",
        releaseYear: 2024,
        coverUrl: "/src/assets/buckshot.jpg",
        rating: 8.5,
        status: "planned",
      },

      {
        id: 8,
        title: "Darksiders II",
        genre: "Action RPG",
        platform: "PC",
        releaseYear: 2012,
        coverUrl: "/src/assets/Darksiders.jpg",
        rating: 8.0,
        status: "completed",
      },

      {
        id: 9,
        title: "Resident Evil 7",
        genre: "Survival Horror",
        platform: "PC",
        releaseYear: 2017,
        coverUrl: "/src/assets/Resident_Evil_7.jpg",
        rating: 8.8,
        status: "completed",
      },

      {
        id: 10,
        title: "Metro Exodus",
        genre: "Shooter",
        platform: "PC",
        releaseYear: 2019,
        coverUrl: "/src/assets/Metro_Exodus.png",
        rating: 8.7,
        status: "completed",
      },

      {
        id: 11,
        title: "Ghost of Tsushima",
        genre: "Action Adventure",
        platform: "PlayStation",
        releaseYear: 2020,
        coverUrl: "/src/assets/Ghost_of_Tsushima.jpg",
        rating: 9.3,
        status: "planned",
      },

      {
        id: 12,
        title: "Detroit: Become Human",
        genre: "Adventure",
        platform: "PC",
        releaseYear: 2018,
        coverUrl: "/src/assets/Detroit_Become_Human.jpg",
        rating: 9.0,
        status: "completed",
      },

      {
        id: 13,
        title: "War Thunder",
        genre: "Vehicular Combat",
        platform: "PC",
        releaseYear: 2013,
        coverUrl: "/src/assets/War_Thunder.png",
        rating: 8.2,
        status: "playing",
      },

      {
        id: 14,
        title: "Squad",
        genre: "Tactical Shooter",
        platform: "PC",
        releaseYear: 2020,
        coverUrl: "/src/assets/Squad.png",
        rating: 8.3,
        status: "playing",
      },

      {
        id: 15,
        title: "Outlast 2",
        genre: "Horror",
        platform: "PC",
        releaseYear: 2017,
        coverUrl: "/src/assets/Outlast2.png",
        rating: 8.0,
        status: "completed",
      },

      {
        id: 16,
        title: "Battlefield 1",
        genre: "Shooter",
        platform: "PC",
        releaseYear: 2016,
        coverUrl: "/src/assets/Battlefield_1.jpg",
        rating: 8.6,
        status: "completed",
        description: 'Dark fantasy action RPG with challenging combat and interconnected world.'
      },
    ],
    libraryIds: [1, 2, 3],
    wishlistIds: [4, 5, 1],
  }),
  getters: {
    libraryGames(state): Game[] {
      return state.allGames.filter((game) =>
        state.libraryIds.includes(game.id)
      );
    },
    wishlistGames(state): Game[] {
      return state.allGames.filter((game) =>
        state.wishlistIds.includes(game.id)
      );
    },
    getGameById: (state) => {
      return (id: number) => state.allGames.find((game) => game.id === id);
    },
  },
  actions: {
    addToLibrary(id: number) {
      if (!this.libraryIds.includes(id)) {
        this.libraryIds.push(id);
        this.wishlistIds = this.wishlistIds.filter((gameId) => gameId !== id);
      }
    },
    addToWishlist(id: number) {
      if (!this.wishlistIds.includes(id) && !this.libraryIds.includes(id)) {
        this.wishlistIds.push(id);
      }
    },
    removeFromLibrary(id: number) {
      this.libraryIds = this.libraryIds.filter((gameId) => gameId !== id);
    },
    removeFromWishlist(id: number) {
      this.wishlistIds = this.wishlistIds.filter((gameId) => gameId !== id);
    },
  },
});

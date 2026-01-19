import { defineStore } from "pinia";
import type { Game } from "../types/game";
import Witcher3 from "@/assets/Witcher_3.jpg";
import DarkSouls3 from "@/assets/Dark_souls_3.jpg";
import Sekiro from "@/assets/Sekiro_art.jpg";
import EldenRing from "@/assets/Elden_ring.jpg";
import Hades from "@/assets/Hades_cover.jpg";
import Dota2 from "@/assets/Dota_2.jpg";
import Buckshot from "@/assets/buckshot.jpg";
import Darksiders from "@/assets/Darksiders.jpg";
import ResidentEvil7 from "@/assets/Resident_Evil_7.jpg";
import MetroExodus from "@/assets/Metro_Exodus.png";
import GhostTsushima from "@/assets/Ghost_of_Tsushima.jpg";
import Detroit from "@/assets/Detroit_Become_Human.jpg";
import WarThunder from "@/assets/War_Thunder.png";
import Squad from "@/assets/Squad.png";
import Outlast2 from "@/assets/Outlast2.png";
import Battlefield1 from "@/assets/Battlefield_1.jpg";

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
        coverUrl: Witcher3,
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
        coverUrl: DarkSouls3,
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
        coverUrl: Sekiro,
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
        coverUrl: EldenRing,
        rating: 9.3,
        status: "planned",
      },
      {
        id: 5,
        title: "Hades",
        genre: "Roguelike",
        platform: "PC",
        releaseYear: 2019,
        coverUrl: Hades,
        rating: 9.1,
        status: "completed",
      },
      {
        id: 6,
        title: "Dota 2",
        genre: "MOBA",
        platform: "PC",
        releaseYear: 2013,
        coverUrl: Dota2,
        rating: 9.0,
        status: "playing",
      },

      {
        id: 7,
        title: "Buckshot Roulette",
        genre: "Roguelike",
        platform: "PC",
        releaseYear: 2024,
        coverUrl: Buckshot,
        rating: 8.5,
        status: "planned",
      },

      {
        id: 8,
        title: "Darksiders II",
        genre: "Action RPG",
        platform: "PC",
        releaseYear: 2012,
        coverUrl: Darksiders,
        rating: 8.0,
        status: "completed",
      },

      {
        id: 9,
        title: "Resident Evil 7",
        genre: "Survival Horror",
        platform: "PC",
        releaseYear: 2017,
        coverUrl: ResidentEvil7,
        rating: 8.8,
        status: "completed",
      },

      {
        id: 10,
        title: "Metro Exodus",
        genre: "Shooter",
        platform: "PC",
        releaseYear: 2019,
        coverUrl: MetroExodus,
        rating: 8.7,
        status: "completed",
      },

      {
        id: 11,
        title: "Ghost of Tsushima",
        genre: "Action Adventure",
        platform: "PlayStation",
        releaseYear: 2020,
        coverUrl: GhostTsushima,
        rating: 9.3,
        status: "planned",
      },

      {
        id: 12,
        title: "Detroit: Become Human",
        genre: "Adventure",
        platform: "PC",
        releaseYear: 2018,
        coverUrl: Detroit,
        rating: 9.0,
        status: "completed",
      },

      {
        id: 13,
        title: "War Thunder",
        genre: "Vehicular Combat",
        platform: "PC",
        releaseYear: 2013,
        coverUrl: WarThunder,
        rating: 8.2,
        status: "playing",
      },

      {
        id: 14,
        title: "Squad",
        genre: "Tactical Shooter",
        platform: "PC",
        releaseYear: 2020,
        coverUrl: Squad,
        rating: 8.3,
        status: "playing",
      },

      {
        id: 15,
        title: "Outlast 2",
        genre: "Horror",
        platform: "PC",
        releaseYear: 2017,
        coverUrl: Outlast2,
        rating: 8.0,
        status: "completed",
      },

      {
        id: 16,
        title: "Battlefield 1",
        genre: "Shooter",
        platform: "PC",
        releaseYear: 2016,
        coverUrl: Battlefield1,
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
  persist: true,
});

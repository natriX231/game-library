export interface Game {
  id: number
  title: string
  genre: string
  platform: string
  releaseYear: number
  coverUrl: string
  rating: number       
  status?: 'playing' | 'completed' | 'planned'
}

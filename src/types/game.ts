export interface Game {
  id: number
  title: string
  genre: string
  platform: string
  releaseYear: number
  rating: number
  status?: string
  coverUrl: string
  description?: string
}

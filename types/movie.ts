export type Movie = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  overview: string;
  original_title: string;
  poster_path?: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
  revenue?: number;
  runtime?: string;
  status?: string;
  genres?: Genres[];
};

// MovieDto >> Movie data type object
export type MovieDto = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genres = {
  id: string;
  name: string;
};

export type GenresDto={
  genres:Genres[]
}

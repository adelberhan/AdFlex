import { Movie, MovieDto } from './movie';

export type Tv = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  popularity: number;
  overview: string;
  poster_path?: string;
  release_date: string;
  title: string;
  original_name: string;
  vote_average: number;
  vote_count: number;
  name: string;
  first_air_date: string;
};

// MovieDto >> Movie data type object
export type TvDto = {
  page: number;
  results: Tv[];
  total_pages: number;
  total_results: number;
};

export function mapToMovies(tvShow: Tv[]): Movie[] {
  return tvShow.map((tvShow: Tv) => {
    return {
      ...tvShow,
      title: tvShow.name,
      original_title: tvShow.original_name,
    };
  });
}

export function mapToMovie(tvShow: Tv): Movie {
  return {
    ...tvShow,
    title: tvShow.name,
    original_title: tvShow.original_name,
  };
}
export function mapToMoviesDto(tvShowDto: TvDto): MovieDto {
  return {
    results: tvShowDto.results.map(mapToMovie),
    total_pages: tvShowDto.total_pages,
    total_results: tvShowDto.total_results,
    page: tvShowDto.page,
  };
}

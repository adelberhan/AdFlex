import { Component } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { Tv, mapToMovie, mapToMovies } from '../../../../types/tv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private movies: MoviesService,
    private tv: TvService,
  ) {}
  upcomingMovie$ = this.movies.getMoviesByType('popular', 12);
  popularMovie$ = this.movies.getMoviesByType('upcoming', 12);
  topRatedMovie$ = this.movies.getMoviesByType('top_rated', 12);
  topTvShows$ = this.tv.getTvShowsByType('popular', 12).pipe(map(mapToMovies));
}

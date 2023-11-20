import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { Observable, map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { TvService } from 'src/app/services/tv.service';
import { Movie, MovieDto } from 'types/movie';
import { mapToMovie, mapToMoviesDto } from 'types/tv';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
  searchValue = '';
  showList$: Observable<MovieDto> | null = null;
  showsType: 'movie' | 'tv' = 'movie';

  constructor(
    private movieService: MoviesService,
    private tv: TvService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // this.showsType = this.route.snapshot.params['type'];

    this.route.params.subscribe(param=>{
      this.showsType=param['type']

      this.getPagedShow(this.showsType, 1);
    })

  }

  searchChange() {
    this.getPagedShow(this.showsType, 1, this.searchValue);
  }

  getPagedShow(
    showsType: 'movie' | 'tv',
    page: number,
    searchKeyword?: string
  ) {
    if (showsType === 'movie') {
      this.showList$ = this.movieService.searchMovie(page, searchKeyword);
    }
    if (showsType === 'tv') {
      this.showList$ = this.tv
        .searchTvShows(page, searchKeyword)
        .pipe(map(mapToMoviesDto));
    }
  }

  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getPagedShow(this.showsType, pageNumber, this.searchValue);
  }
}

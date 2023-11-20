import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../../../types/movie';
import { Image_SIZES } from 'src/app/constent/imgBaceUrl';
import { Video, VideoDto } from 'types/video';
import { Image } from 'types/image';
import { Actor } from 'types/credit';
import { TvService } from 'src/app/services/tv.service';
import { mapToMovie, mapToMovies } from 'types/tv';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private tvService:TvService,private route:Router
  ) {}
  showId = '';
  showType: 'tv' | 'movie' = 'movie';

  show$: Observable<Movie> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  showImages$: Observable<Image[]> | null = null;
  showCast$: Observable<Actor[]> | null = null;
  similarShows$: Observable<Movie[]> | null = null;
  images_sizes = Image_SIZES;




  ngOnInit(): void {
    this.showId = this.router.snapshot.params['id'];
    // this.showType = this.router.snapshot.params['type'];
    this.router.params.subscribe(param=>{
      this.showType=param['type']
    })


    if (this.showType === 'movie') {
      this.show$ = this.moviesService.getMovieById(this.showId);
      this.showVideos$ = this.moviesService.getMovieVideo(this.showId);
      this.showImages$ = this.moviesService.getMoviePhotos(this.showId);
      this.showCast$ = this.moviesService.getMovieCasts(this.showId);
      this.similarShows$ = this.moviesService.getMovieSimilar(this.showId);
    }
    if (this.showType === 'tv') {
      this.show$ = this.tvService
        .getTvShowById(this.showId)
        .pipe(map(mapToMovie));
      this.showVideos$ = this.tvService.getTvShowVideos(this.showId);
      this.showImages$ = this.tvService.getTvShowImages(this.showId);
      this.showCast$ = this.tvService.getTvShowCast(this.showId);
      this.similarShows$ = this.tvService
        .getTvShowSimilar(this.showId)
        .pipe(map(mapToMovies));
    }}

getCategory(id:string){
  this.route.navigate(['/genres/'+id], { replaceUrl: true });
}

  }

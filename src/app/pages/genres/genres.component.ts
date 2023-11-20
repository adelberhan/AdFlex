import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres, Movie } from 'types/movie';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genres[]> | null = null;
  shows$: Observable<Movie[]> | null = null;
  genreId=''

  constructor(private moviesService: MoviesService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.findByGenre()
    this.genres$ = this.moviesService.getMovieGenres();
this.shows$=this.moviesService.getMoviesByGenres(this.genreId)


  }

  findByGenre(){
    this.route.params.subscribe(param=>{
      this.genreId=param['genreId'];
      this.shows$=this.moviesService.getMoviesByGenres(this.genreId)
    })
  }
}

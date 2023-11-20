import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {  GenresDto, Movie, MovieDto } from 'types/movie';
import { ImagesDto } from 'types/image';
import { VideoDto } from 'types/video';
import { CreditsDto } from 'types/credit';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private baseUrl = ' https://api.themoviedb.org/3';
  private apiKey = 'd84b3134f5317af90c2310a5838276de';
  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieVideo(id: string) {
    return this.http
      .get<VideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }

  getMovieSimilar(id: string) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getMoviePhotos(id: string) {
    return this.http
      .get<ImagesDto>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getMovieCasts(id: string) {
    return this.http
      .get<CreditsDto>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast));
  }

  searchMovie(page: number, searchValue?: string) {
    const uri=searchValue ? '/search/movie' : '/movie/popular'
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`,
      )

  }

  getMovieGenres() {
    return this.http
      .get<GenresDto>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres));
  }

  getMoviesByGenres(id:string,pageNumber=1){
    return this.http
    .get<MovieDto>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${id}`)
      .pipe(map((data) => data.results));
  }
}

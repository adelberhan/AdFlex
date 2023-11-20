import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreditsDto } from 'types/credit';
import { ImagesDto } from 'types/image';
import { Tv, TvDto } from 'types/tv';
import { Video, VideoDto } from 'types/video';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'd84b3134f5317af90c2310a5838276de';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getTvShowById(id: string) {
    return this.http.get<Tv>(
      `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`
    );
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImagesDto>(`${this.apiUrl}/tv/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getTvShowCast(id: string) {
    return this.http
      .get<CreditsDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast));
  }

  getTvShowSimilar(id: string) {
    return this.http
      .get<TvDto>(`${this.apiUrl}/tv/${id}/similar?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  searchTvShows(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http.get<TvDto>(
      `${this.apiUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
    );
  }
}

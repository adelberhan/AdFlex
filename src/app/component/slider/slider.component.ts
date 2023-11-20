import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'types/movie';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Image_SIZES, baseUrl } from 'src/app/constent/imgBaceUrl';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() slides: Movie[] = [];

  @Input() isHeader = false;
  // constructor(private _moviesService: MoviesService) {}
  sideIndex = 0;
  baseUrl = Image_SIZES;

  ngOnInit(): void {
    if (!this.isHeader) {
      this.changeSlide();
    }
  }

  changeSlide() {
    setInterval(() => {
      this.sideIndex += 1;
      if (this.sideIndex > 10) {
        this.sideIndex = 0;
      }
    }, 5000);
  }
}

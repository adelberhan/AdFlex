import { Component, Input } from '@angular/core';
import { Image_SIZES, baseUrl } from 'src/app/constent/imgBaceUrl';
import { Movie } from 'types/movie';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null;
  @Input() showType: 'tv' | 'movie' = 'movie';
  imgPath = Image_SIZES;
}

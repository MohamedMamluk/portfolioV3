import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
} from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual, Autoplay]);
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
  slides: string[];
  slides$ = new BehaviorSubject<string[]>(['']);

  constructor() {
    this.slides = [
      'angular-logo',
      'React_logo',
      'next-logo',
      'typescript',
      'graph',
      'apollo',
    ];
  }

  ngOnInit(): void {
    this.slides$.next(
      Array.from({ length: 600 }).map((el, index) => `Slide ${index + 1}`)
    );
  }
}

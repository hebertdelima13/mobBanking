import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-send-money-slider',
  templateUrl: './send-money-slider.component.html',
  styleUrls: ['./send-money-slider.component.css']
})
export class SendMoneySliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Swiper Slide

  @ViewChild('swiper') swiper?: SwiperComponent;

  slideNext() {
    this.swiper?.swiperRef.slideNext(500);
  }

  slidePrev() {
    this.swiper?.swiperRef.slidePrev(500);
  }

  config: SwiperOptions = {
    slidesPerView: 6,
    spaceBetween: 50
  };

}

import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit {

  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/1200/500?random&t=${Math.random()}`);
  images = [
    "../../assets/images/custom1.jpg",
    "../../assets/images/custom2.jpg", //`https://picsum.photos/1200/500?random&t=${Math.random()}`,
    "../../assets/images/custom3.jpg",
  ];
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}

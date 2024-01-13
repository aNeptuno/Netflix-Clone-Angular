import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import Swiper from 'swiper';
import { IMovieContent } from 'src/app/models/movie-contents.interface';
import { DescPipe } from 'src/app/shared/pipes/desc.pipe';
import { ImgPipe } from '../../pipes/img.pipe';
import { DecimalPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [NgFor, NgIf, DescPipe, ImgPipe, DecimalPipe, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true
})
export class CarouselComponent implements OnInit, AfterViewInit{

  movieVariable: boolean = true;
  @Input() movieContents: IMovieContent[] = [];
  @Input () title!: string;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  selectedContent: string | null = null;
  constructor () { }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnInit() {
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: false,
      breakpoints: {
        400: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 1,
          centeredSlides: false,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 2,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }

  setHoverMovie(movie: IMovieContent) {
    this.selectedContent = movie.title ?? movie.name;
  }

  clearHoverMovie() {
    this.selectedContent = null;
  }
}

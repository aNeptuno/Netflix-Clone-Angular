import { BannerComponent } from './../../core/components/banner/banner.component';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { IMovieContent } from 'src/app/models/movie-contents.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BannerComponent, CarouselComponent],
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit{

  auth = inject(AuthService);
  movieService = inject(MoviesService);
  name = JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  email = JSON.parse(sessionStorage.getItem("loggedInUser")!).email;
  userImg = JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;

  movies: IMovieContent[] = [];
  ngOnInit(): void {
    this.movieService.getMovies()
    .subscribe((res: any)=>{
      console.log(res);
      this.movies = res.results as IMovieContent[];
    })
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}

import { BannerComponent } from './../../core/components/banner/banner.component';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { IMovieContent } from 'src/app/models/movie-contents.interface';
import { CommonModule } from '@angular/common';
import { forkJoin, map } from 'rxjs';

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
  tvShows: IMovieContent[] = [];
  ratedMovies: IMovieContent[] = [];
  nowPlaying: IMovieContent[] = [];
  upcoming: IMovieContent[] = [];
  popular: IMovieContent[] = [];
  topRated: IMovieContent[] = [];

  /* Array of Observables */
  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ];
  ngOnInit(): void {
    forkJoin(this.sources)
    .pipe(
      map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated])=>{
        return {movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated}
      })
    ).subscribe((res:any)=>{
      this.movies = res.movies.results as IMovieContent[];
      this.tvShows = res.tvShows.results as IMovieContent[];
      this.ratedMovies = res.ratedMovies.results as IMovieContent[];
      this.nowPlaying = res.nowPlaying.results as IMovieContent[];
      this.upcoming = res.upcoming.results as IMovieContent[];
      this.popular = res.popular.results as IMovieContent[];
      this.topRated = res.topRated.results as IMovieContent[];
    })
  }

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}

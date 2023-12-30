import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDBiZjQ0MzI2ODkwNDJjY2E3N2NkNjk4MDc5ZDcyMCIsInN1YiI6IjY1OTAxNjFjNDFhNTYxNjY3NTA0ODNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JiI0cSycyWqndxR9dQPT9XCH2fJ8N7gK5pPY-dQY_WM'
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/movie', options);
  }
}

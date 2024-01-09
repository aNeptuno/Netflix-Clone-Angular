import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { YourAccountComponent } from './pages/your-account/your-account.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NewAndPopularComponent } from './pages/new-and-popular/new-and-popular.component';
import { MyListComponent } from './pages/my-list/my-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'browse', component: BrowseComponent},
  {path: 'yourAccount', component: YourAccountComponent},
  {path: 'tvShows', component: TvshowsComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'new-and-popular', component: NewAndPopularComponent},
  {path: 'mylist', component: MyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

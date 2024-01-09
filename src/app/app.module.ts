import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from  '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YourAccountComponent } from './pages/your-account/your-account.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NewAndPopularComponent } from './pages/new-and-popular/new-and-popular.component';
import { MyListComponent } from './pages/my-list/my-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    YourAccountComponent,
    TvshowsComponent,
    MoviesComponent,
    NewAndPopularComponent,
    MyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

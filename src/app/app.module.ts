import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from  '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowseDetailComponent } from './pages/browse-detail/browse-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowseDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

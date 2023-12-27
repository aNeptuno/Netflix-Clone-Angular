import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input({required: true}) userImg = '';
  navList = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];
}

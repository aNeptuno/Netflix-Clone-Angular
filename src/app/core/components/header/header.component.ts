import { Component, Input, inject, HostListener, Host, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isMenuOpened: boolean = false;
  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
  ngOnInit() {
  }
  @Input({required: true}) userImg = '';
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  auth = inject(AuthService);
  navList = ["Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages"];


  headerVariable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
    {
      this.headerVariable = true;
    }
    else {
      this.headerVariable = false;
    }
  }
}

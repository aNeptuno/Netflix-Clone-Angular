import { Component, Input, inject, HostListener, Host, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faArrowUpFromBracket, faUser, faCircleQuestion, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isMenuOpened: boolean = false;
  caretVariable: boolean = false;
  isBrowseOpened: boolean = false;
  browseVariable: boolean = false;
  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
    this.caretVariable = !this.caretVariable;
  }
  toggleBrowse(): void {
    this.isBrowseOpened = !this.isBrowseOpened;
    this.browseVariable = !this.browseVariable;
  }
  ngOnInit() {
  }
  faPencil = faPencil;
  faArrowUpFromBracket = faArrowUpFromBracket;
  faUser = faUser;
  faCircleQuestion = faCircleQuestion;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  @Input({required: true}) userImg = '';
  username = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  auth = inject(AuthService);
  navList = [ {name: "Home", url: "/browse"},
              {name: "TV Shows", url: "/tvShows"},
              {name: "Movies", url: "/movies"},
              {name: "New & Popular", url: "/new-and-popular"},
              {name: "My List", url: "/mylist"},
              {name: "Browse by Languages", url: "/browse"}];

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

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}

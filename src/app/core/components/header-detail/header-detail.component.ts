import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-detail',
  standalone: true,
  imports: [],
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.css']
})
export class HeaderDetailComponent implements  OnInit{
    headerVariable = false;
    @Input () details_title!: string;
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

    ngOnInit(): void {}
}

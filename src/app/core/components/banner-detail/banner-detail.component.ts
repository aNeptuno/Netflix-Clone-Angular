import { Component, HostListener, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner-detail',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './banner-detail.component.html',
  styleUrls: ['./banner-detail.component.css']
})
export class BannerDetailComponent {
  faPlay = faPlay;
  faCircleInfo = faCircleInfo;

  constructor(private domSanitizer: DomSanitizer) {}
  videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b9EkMc79ZSU?&autoplay=1&loop=1&controls=0');

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 300)
    {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b9EkMc79ZSU?&autoplay=0&loop=1&controls=0');
    }
    else {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b9EkMc79ZSU?&autoplay=1&loop=1&controls=0');
    }
  }
}

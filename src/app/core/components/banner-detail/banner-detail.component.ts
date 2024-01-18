import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class BannerDetailComponent implements OnChanges{
  faPlay = faPlay;
  faCircleInfo = faCircleInfo;

  @Input() bannerTitle = '';
  @Input() bannerOverview = '';
  @Input() key = 'b9EkMc79ZSU';

  videoVariable: boolean = false;
  constructor(private domSanitizer: DomSanitizer) {}

  videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?&autoplay=1&loop=1&controls=0`);

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['key']){
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?&autoplay=1&loop=1&controls=0`);

      /* if (this.key == null)
      {
        this.videoVariable = true;
      }
      else
        this.videoVariable = false; */

    }
  }

  @HostListener("document:scroll")
  scrollfunction(){
    if(document.documentElement.scrollTop > 300)
    {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?&autoplay=0&loop=1&controls=0`);
    }
    else {
      this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?&autoplay=1&loop=1&controls=0`);
    }
  }
}

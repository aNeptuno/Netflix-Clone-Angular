import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDetailComponent } from './banner-detail.component';

describe('BannerDetailComponent', () => {
  let component: BannerDetailComponent;
  let fixture: ComponentFixture<BannerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerDetailComponent]
    });
    fixture = TestBed.createComponent(BannerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

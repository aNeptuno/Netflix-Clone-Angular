import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowsComponent } from './tvshows.component';

describe('TvshowsComponent', () => {
  let component: TvshowsComponent;
  let fixture: ComponentFixture<TvshowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvshowsComponent]
    });
    fixture = TestBed.createComponent(TvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

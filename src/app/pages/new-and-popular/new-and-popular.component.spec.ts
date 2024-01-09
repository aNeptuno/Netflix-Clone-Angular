import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAndPopularComponent } from './new-and-popular.component';

describe('NewAndPopularComponent', () => {
  let component: NewAndPopularComponent;
  let fixture: ComponentFixture<NewAndPopularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAndPopularComponent]
    });
    fixture = TestBed.createComponent(NewAndPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

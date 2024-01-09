import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourAccountComponent } from './your-account.component';

describe('YourAccountComponent', () => {
  let component: YourAccountComponent;
  let fixture: ComponentFixture<YourAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourAccountComponent]
    });
    fixture = TestBed.createComponent(YourAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

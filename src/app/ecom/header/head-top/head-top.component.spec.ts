import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTopComponent } from './head-top.component';

describe('HeadTopComponent', () => {
  let component: HeadTopComponent;
  let fixture: ComponentFixture<HeadTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadTopComponent]
    });
    fixture = TestBed.createComponent(HeadTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

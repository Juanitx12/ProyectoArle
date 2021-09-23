import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBookComponent } from './api-book.component';

describe('ApiBookComponent', () => {
  let component: ApiBookComponent;
  let fixture: ComponentFixture<ApiBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarsComponent } from './editcars.component';

describe('EditcarsComponent', () => {
  let component: EditcarsComponent;
  let fixture: ComponentFixture<EditcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

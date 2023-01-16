import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAverageDurationOfExamComponent } from './show-average-duration-of-exam.component';

describe('ShowAverageDurationOfExamComponent', () => {
  let component: ShowAverageDurationOfExamComponent;
  let fixture: ComponentFixture<ShowAverageDurationOfExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAverageDurationOfExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAverageDurationOfExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

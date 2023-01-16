import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExamStatsComponent } from './show-exam-stats.component';

describe('ShowExamStatsComponent', () => {
  let component: ShowExamStatsComponent;
  let fixture: ComponentFixture<ShowExamStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowExamStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowExamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

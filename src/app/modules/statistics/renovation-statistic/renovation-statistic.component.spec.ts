import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovationStatisticComponent } from './renovation-statistic.component';

describe('RenovationStatisticComponent', () => {
  let component: RenovationStatisticComponent;
  let fixture: ComponentFixture<RenovationStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenovationStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenovationStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

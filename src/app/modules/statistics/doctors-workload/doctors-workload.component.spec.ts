import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsWorkloadComponent } from './doctors-workload.component';

describe('DoctorsWorkloadComponent', () => {
  let component: DoctorsWorkloadComponent;
  let fixture: ComponentFixture<DoctorsWorkloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsWorkloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsWorkloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

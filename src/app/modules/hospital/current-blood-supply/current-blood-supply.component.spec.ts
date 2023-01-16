import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBloodSupplyComponent } from './current-blood-supply.component';

describe('CurrentBloodSupplyComponent', () => {
  let component: CurrentBloodSupplyComponent;
  let fixture: ComponentFixture<CurrentBloodSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBloodSupplyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBloodSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

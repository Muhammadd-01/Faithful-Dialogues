import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionStrategiesComponent } from './resolution-strategies.component';

describe('ResolutionStrategiesComponent', () => {
  let component: ResolutionStrategiesComponent;
  let fixture: ComponentFixture<ResolutionStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResolutionStrategiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResolutionStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QiblaDirectionComponent } from './qibla-direction.component';

describe('QiblaDirectionComponent', () => {
  let component: QiblaDirectionComponent;
  let fixture: ComponentFixture<QiblaDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QiblaDirectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QiblaDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConflictArchiveComponent } from './conflict-archive.component';

describe('ConflictArchiveComponent', () => {
  let component: ConflictArchiveComponent;
  let fixture: ComponentFixture<ConflictArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConflictArchiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConflictArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

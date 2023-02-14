import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCorrectComponent } from './single-correct.component';

describe('SingleCorrectComponent', () => {
  let component: SingleCorrectComponent;
  let fixture: ComponentFixture<SingleCorrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCorrectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

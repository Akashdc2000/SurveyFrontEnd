import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortAnsComponent } from './short-ans.component';

describe('ShortAnsComponent', () => {
  let component: ShortAnsComponent;
  let fixture: ComponentFixture<ShortAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortAnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

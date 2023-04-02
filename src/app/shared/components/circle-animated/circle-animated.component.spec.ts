import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleAnimatedComponent } from './circle-animated.component';

describe('CircleAnimatedComponent', () => {
  let component: CircleAnimatedComponent;
  let fixture: ComponentFixture<CircleAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleAnimatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

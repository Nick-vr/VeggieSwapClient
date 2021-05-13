import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapNowComponent } from './swap-now.component';

describe('SwapNowComponent', () => {
  let component: SwapNowComponent;
  let fixture: ComponentFixture<SwapNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwapNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

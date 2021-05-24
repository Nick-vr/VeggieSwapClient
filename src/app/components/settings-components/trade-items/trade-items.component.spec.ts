import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeItemsComponent } from './trade-items.component';

describe('TradeItemsComponent', () => {
  let component: TradeItemsComponent;
  let fixture: ComponentFixture<TradeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

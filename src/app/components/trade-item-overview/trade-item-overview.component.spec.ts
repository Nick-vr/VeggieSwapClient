import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeItemOverviewComponent } from './trade-item-overview.component';

describe('TradeItemOverviewComponent', () => {
  let component: TradeItemOverviewComponent;
  let fixture: ComponentFixture<TradeItemOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeItemOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeItemOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTradeItemsComponent } from './user-trade-items.component';

describe('UserTradeItemsComponent', () => {
  let component: UserTradeItemsComponent;
  let fixture: ComponentFixture<UserTradeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTradeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTradeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

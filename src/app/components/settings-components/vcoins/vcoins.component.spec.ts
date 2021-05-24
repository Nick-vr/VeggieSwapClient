import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcoinsComponent } from './vcoins.component';

describe('VcoinsComponent', () => {
  let component: VcoinsComponent;
  let fixture: ComponentFixture<VcoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyWithdrawalComponent } from './money-withdrawal.component';

describe('MoneyWithdrawalComponent', () => {
  let component: MoneyWithdrawalComponent;
  let fixture: ComponentFixture<MoneyWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

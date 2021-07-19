import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRafflesComponent } from './my-raffles.component';

describe('MyRafflesComponent', () => {
  let component: MyRafflesComponent;
  let fixture: ComponentFixture<MyRafflesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRafflesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRafflesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

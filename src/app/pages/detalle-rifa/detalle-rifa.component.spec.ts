import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRifaComponent } from './detalle-rifa.component';

describe('DetalleRifaComponent', () => {
  let component: DetalleRifaComponent;
  let fixture: ComponentFixture<DetalleRifaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleRifaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleRifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

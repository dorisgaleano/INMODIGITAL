import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUbicacionComponent } from './registro-ubicacion.component';

describe('RegistroUbicacionComponent', () => {
  let component: RegistroUbicacionComponent;
  let fixture: ComponentFixture<RegistroUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUbicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

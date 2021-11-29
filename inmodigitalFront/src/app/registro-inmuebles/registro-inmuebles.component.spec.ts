import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInmueblesComponent } from './registro-inmuebles.component';

describe('RegistroInmueblesComponent', () => {
  let component: RegistroInmueblesComponent;
  let fixture: ComponentFixture<RegistroInmueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInmueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

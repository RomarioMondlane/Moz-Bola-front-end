import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesClubesComponent } from './detalhes-clubes.component';

describe('DetalhesClubesComponent', () => {
  let component: DetalhesClubesComponent;
  let fixture: ComponentFixture<DetalhesClubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesClubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

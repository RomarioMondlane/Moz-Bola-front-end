import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarClubeComponent } from './adicionar-clube.component';

describe('AdicionarClubeComponent', () => {
  let component: AdicionarClubeComponent;
  let fixture: ComponentFixture<AdicionarClubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarClubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarClubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

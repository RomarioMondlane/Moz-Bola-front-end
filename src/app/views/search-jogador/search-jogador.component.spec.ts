import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJogadorComponent } from './search-jogador.component';

describe('SearchJogadorComponent', () => {
  let component: SearchJogadorComponent;
  let fixture: ComponentFixture<SearchJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJogadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { VerificarConexaoService } from './verificar-conexao.service';

describe('VerificarConexaoService', () => {
  let service: VerificarConexaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificarConexaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

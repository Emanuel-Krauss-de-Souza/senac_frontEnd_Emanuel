import { VacinaSeletor } from 'src/app/shared/model/vacina.seletor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/Vacina';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  private readonly API = 'http://localhost:11663/senac-20241-backend-exemplos/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  public listarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>> (this.API + '/todas');
  }
  public consultarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>> (this.API + '/filtro', seletor);
  }
}

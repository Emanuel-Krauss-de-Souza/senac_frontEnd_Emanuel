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

  listarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>> (this.API + '/todas');
  }

  pesquisar(): TERMINAR ESSE METODO, PROVAVELMENTE FALAR COM O CALEB


}

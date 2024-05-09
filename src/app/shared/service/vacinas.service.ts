import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacina } from '../model/Vacina';
import { VacinaSeletor } from '../model/vacina.seletor';


@Injectable({
  providedIn: 'root'
})

export class VacinasService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  public listarTodas(): Observable <Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + "/todas");

  }
  public consultarPorId(id: number): Observable <Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/' + id);

  }
  public consultarComSeletor(seletor: VacinaSeletor): Observable <Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + "/filtro", seletor)
  }


  public salvar(vacina: Vacina): Observable<any> {
    return this.httpClient.post<Vacina>(this.API + '/inserir', vacina)
  }

  public excluir(id: number):Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API +"/"+id);
  }

  public atualizar(vacina: Vacina):Observable<any> {
    return this.httpClient.put(this.API, + vacina)
  }
  contarPaginas(seletor: VacinaSeletor): Observable<number> {
    return this.httpClient.post<number>(this.API + '/total-paginas', seletor);
  }
  contarTotalRegistros(seletor: VacinaSeletor): Observable<number> {
    return this.httpClient.post<number>(this.API + '/contar', seletor);
  }
}

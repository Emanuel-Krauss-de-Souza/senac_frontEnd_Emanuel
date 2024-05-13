import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VeiculoSeletor } from '../model/Veiculo.seletor';
import { Veiculo } from '../model/Veiculo';


@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro';

  constructor(private HttpClient: HttpClient) { }

  public consultarComSeletor(seletor: VeiculoSeletor): Observable <Array<Veiculo>> {
    return this.HttpClient.post<Array<Veiculo>>(this.API + "/filtro", seletor)
  }
}

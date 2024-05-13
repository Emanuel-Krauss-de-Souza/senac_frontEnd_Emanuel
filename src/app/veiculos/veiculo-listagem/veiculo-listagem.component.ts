import { VeiculosService } from './../../shared/service/veiculos.service';
import { VeiculoSeletor } from 'src/app/shared/model/Veiculo.seletor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/shared/model/Veiculo';

@Component({
  selector: 'app-veiculo-listagem',
  templateUrl: './veiculo-listagem.component.html',
  styleUrls: ['./veiculo-listagem.component.scss']
})
export class VeiculoListagemComponent implements OnInit{

  public veiculos: Veiculo[] = [];
  public seletor: VeiculoSeletor = new VeiculoSeletor();
  public veiculo: Veiculo = new Veiculo();
  

  constructor(
    private VeiculosService: VeiculosService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

ngOnInit(): void {

}
public pesquisar () {
  this.VeiculosService.consultarComSeletor(this.seletor).subscribe(
    resultado => {
      this.veiculos = resultado;
    }, erro => {
      console.error('Erro ao consultar veiculos', erro);
    }
  );
}
public compareById(r1: any, r2: any): boolean {
  return r1 && r2 ? r1.id === r2.id : r1 === r2;
}
public limpar () {
  this.seletor = new VeiculoSeletor();
}
}

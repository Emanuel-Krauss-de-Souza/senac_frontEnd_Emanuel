import { VacinaSeletor } from './../../shared/model/vacina.seletor';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/Vacina';
import { VacinasService } from '../../shared/service/vacinas.service';


@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})
export class VacinaListagemComponent implements OnInit {

  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private VacinaService: VacinasService) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
  }

  private consultarTodasVacinas(){
    this.VacinaService.listarTodas().subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }
  public pesquisar () {
    this.VacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      }, erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }
  public limpar () {
    this.seletor = new VacinaSeletor();
  }
}

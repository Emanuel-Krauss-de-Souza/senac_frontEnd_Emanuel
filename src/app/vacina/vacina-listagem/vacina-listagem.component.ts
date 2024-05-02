import { VacinaSeletor } from './../../shared/model/vacina.seletor';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/Vacina';
import { VacinasService } from '../../shared/service/vacinas.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})
export class VacinaListagemComponent implements OnInit {

  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(
    private VacinaService: VacinasService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

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
  public excluirVacina (vacinaEscolhida: Vacina) {
    Swal.fire({
      title: "Deseja excluir está vacina?",
      text: "Está ação não poderá ser desfeita!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "Não"
    }).then((result) => {
      if (result.value) {
        this.VacinaService.excluir(vacinaEscolhida.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire("Erro!", "Erro ao excluir vacina: " + erro.error.mensagem, 'error')
          }
          );
        }
      });
    }

      public editarVacina (idVacinaEscolhida: number){
      this.router.navigate(['/vacina/detalhe/', idVacinaEscolhida])
    }
}

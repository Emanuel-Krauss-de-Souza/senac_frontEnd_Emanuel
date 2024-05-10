import { VacinasService } from './../../shared/service/vacinas.service';
import { PaisService } from 'src/app/shared/service/pais.service';
import { PesquisadorService } from './../../shared/service/pesquisador.service';
import { VacinaSeletor } from './../../shared/model/vacina.seletor';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/Vacina';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { Pais } from 'src/app/shared/model/Pais';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']
})

export class VacinaListagemComponent implements OnInit {

  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();
  public paises: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();
  public vacina: Vacina = new Vacina();
  public idVacina: number;
  public totalPaginas: number = 0;
  public readonly TAMANHO_PAGINA: number = 1;

  constructor(
    private VacinaService: VacinasService,
        private router: Router,
        private route: ActivatedRoute,
        private PesquisadorService: PesquisadorService,
        private PaisService: PaisService,
    ) { }

  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if (this.idVacina) {
        this.buscarVacina();
      }
    })
    this.consultarTodasVacinas;
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
    this.pesquisar();
    this.contarPaginas();

    this.PesquisadorService.consultarPesquisador().subscribe(
      (resposta) => {
        this.pesquisadores = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao consultar pesquisador', erro, 'error');
      }
    )
    this.PaisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos países', erro);
      }
    );
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

  public contarPaginas(){
    this.VacinaService.contarPaginas(this.seletor).subscribe(
      (resultado) => {
        this.totalPaginas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar total de páginas',
        erro.error.mensagem, 'error')
      }
    );
  }

  atualizarPaginacao(){
    this.contarPaginas();
    this.pesquisar();
  }

  avancarPagina() {
    this.seletor.pagina++;
    this.pesquisar();
  }

  voltarPagina() {
    this.seletor.pagina--;
    this.pesquisar();
  }
  irParaPagina(indicePagina: number){
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }
  criarArrayPaginas(): any[]{
    return Array(this.totalPaginas).fill(0).map((x, i) => i + 1);
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
    public compareById(r1: any, r2: any): boolean {
      return r1 && r2 ? r1.id === r2.id : r1 === r2;
    }
      public editarVacina (idVacinaEscolhida: number){
      this.router.navigate(['/vacina/detalhe/', idVacinaEscolhida])
    }
    public buscarVacina(): void {
      this.VacinaService.consultarPorId(this.idVacina).subscribe(
        (vacina) => {
          this.vacina = vacina;
        },
        (erro) => {
          Swal.fire('Erro ao buscar vacina!', erro, 'error');
        }
      )
    };


}

import { PesquisadorService } from './../../shared/service/pesquisador.service';
import { VacinasService } from './../../shared/service/vacinas.service';
import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/shared/model/Pais';
import { Pessoa } from 'src/app/shared/model/Pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from 'src/app/shared/service/pais.service';
import Swal from 'sweetalert2';
import { Vacina } from 'src/app/shared/model/Vacina';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss'
})

export class VacinaDetalheComponent implements OnInit {

  public paises: Array<Pais> = new Array();
  public pesquisadores: Array<Pessoa> = new Array();
  public vacina: Vacina = new Vacina();
  public idVacina: number;

  constructor(
    private VacinasService: VacinasService,
    private router: Router,
    private PesquisadorService: PesquisadorService,
    private paisService: PaisService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if (this.idVacina) {
        this.buscarVacina();
      }
    })

    this.PesquisadorService.consultarPesquisador().subscribe(
      (resposta) => {
        this.pesquisadores = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao consultar pesquisador', erro, 'error');
      }
    )
    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos países', erro);
      }
    );
  }

  public cadastrar(): void {
    if (this.idVacina) {
      this.atualizar();
    } else {
      this.inserir();
    }
  }

  public inserir(): void {
    this.VacinasService.salvar(this.vacina).subscribe(
      (resposta) => {
        this.vacina = resposta;
        Swal.fire('Vacina cadastrada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao cadastrar vacina!', erro, 'error')
      }
    )
  };

  public atualizar(): void {
    this.VacinasService.atualizar(this.vacina).subscribe(
      (reposta) => {
        Swal.fire('Vacina atualizada com sucesso!', '',  'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a vacina: ' + erro.error.mensagem, 'error');
      }
    )
  };

  public buscarVacina(): void {
    this.VacinasService.consultarPorId(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina;
      },
      (erro) => {
        Swal.fire('Erro ao buscar vacina!', erro, 'error');
      }
    )
  };

  public voltar() {
    this.router.navigate(['/vacina']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}

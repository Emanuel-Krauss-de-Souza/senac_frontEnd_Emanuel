
import { Montadora } from './../../shared/model/Montadora';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MontadoraService } from 'src/app/shared/service/montadora.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-montadora',
  templateUrl: './montadora.component.html',
  styleUrls: ['./montadora.component.scss']
})
export class MontadoraComponent implements OnInit {

  public montadoras: Montadora[] = [];
  public montadora: Montadora = new Montadora;

  constructor(
    private MontadoraService: MontadoraService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  public ConsultarEstoque(){
    if (! this.montadora || ! this.montadora.id) {
      Swal.fire('Aviso', 'Nenhum campo selecionado, selecione uma montadora!', 'warning');
      return;
    }
    this.MontadoraService.consultarEstoque(this.montadora.id).subscribe(
      total => {
          Swal.fire('Aviso', 'Estoque: ' + total, 'success');
      },
      erro => {
        Swal.fire('Erro ao consultar todas montadoras!', erro.error.mensagem, 'error');
      }
    );
  }

  private consultarTodas(){
    this.MontadoraService.listarTodas().subscribe(
      resultado => {
        this.montadoras = resultado;
      },
      erro => {
        console.error('Erro ao consultar montadora', erro)
      }
    )
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinaRoutingModule } from './vacina-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { FormsModule } from '@angular/forms';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';

@NgModule({
  declarations: [
    VacinaListagemComponent,
    VacinaDetalheComponent
  ],
  imports: [
    CommonModule,
    VacinaRoutingModule,
    FormsModule
  ]
})
export class VacinaModule { }

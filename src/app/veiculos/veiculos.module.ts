import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { FormsModule } from '@angular/forms';
import { VeiculoListagemComponent } from './veiculo-listagem/veiculo-listagem.component';
import { MontadoraComponent } from './montadora/montadora.component';


@NgModule({
  declarations: [
    VeiculoListagemComponent,
    MontadoraComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule
  ]
})
export class VeiculosModule { }

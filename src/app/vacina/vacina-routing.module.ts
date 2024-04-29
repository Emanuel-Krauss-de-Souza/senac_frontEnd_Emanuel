import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';

const routes: Routes = [
  {path: '', component: VacinaListagemComponent},
  {path: 'detalhe', component: VacinaDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacinaRoutingModule { }

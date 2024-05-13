import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoListagemComponent } from './veiculo-listagem/veiculo-listagem.component';
import { MontadoraComponent } from './montadora/montadora.component';

const routes: Routes = [
  {path: '', component: VeiculoListagemComponent},
  {path: 'montadora', component: MontadoraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }

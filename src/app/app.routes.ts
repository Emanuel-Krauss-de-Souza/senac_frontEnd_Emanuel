import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'vacina',
      loadChildren: () =>
        import('./vacina/vacina.module').then((m) => m.VacinaModule)
    },
    {
      path: 'veiculos',
      loadChildren: () =>
        import('./veiculos/veiculos.module').then((m) => m.VeiculosModule)
    },


];

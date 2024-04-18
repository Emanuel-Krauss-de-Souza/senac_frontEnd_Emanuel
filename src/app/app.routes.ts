import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'cartas', pathMatch: 'full'},
    {
      path: 'cartas',
      loadChildren: () =>
        import('./vacina/vacina.module').then((m) => m.VacinaModule)
    }
];

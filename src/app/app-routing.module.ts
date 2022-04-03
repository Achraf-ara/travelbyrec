import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',
  loadChildren: () => import('./shared_pages/shared.module').then(m => m.SharedModule)},
  {path: '',
  loadChildren: () => import('./pages/nos-services/nos-services.module').then(m => m.NosServicesModule)},
  {path: '',
  loadChildren: () => import('./pages/confirm-logement/confirm-logement.module').then(m => m.ConfirmLogementModule)},
  {path: '',
  loadChildren: () => import('./pages/details-hebergement/details-hebergement.module').then(m => m.DetailsHebergementModule)},
  {path: '',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
  {path: '',
  loadChildren: () => import('./pages/nos-logements/nos-logements.module').then(m => m.NosLogementsModule)},
  {path: '',
  loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
  {path: '',
  loadChildren: () => import('./pages/thank-you/thank-you.module').then(m => m.ThankYouModule)},
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

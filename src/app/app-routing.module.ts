import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { NosLogementsComponent } from './pages/nos-logements/nos-logements.component';
import { NosServicesComponent } from './pages/nos-services/nos-services.component';
import { ConfirmLogementComponent } from './pages/confirm-logement/confirm-logement.component';
import { DetailsHebergementComponent } from './pages/details-hebergement/details-hebergement.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { DefaultHomeComponent } from './shared_pages/default-home/default-home.component';

const routes: Routes = [
  {path:'', component: DefaultHomeComponent,
  children : [
    {path:'accueil', component: AccueilComponent},
    {path: 'nosLogements', component: NosLogementsComponent},
    {path:'nosServices', component: NosServicesComponent},
    {path:'confirmLogement', component: ConfirmLogementComponent},
    {path:'detailsHebergement', component: DetailsHebergementComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'thankYou', component: ThankYouComponent}
    ]
  },
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

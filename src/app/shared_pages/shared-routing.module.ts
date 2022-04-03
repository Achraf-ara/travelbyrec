import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from '../pages/accueil/accueil.component';
import { DefaultHomeComponent } from './default-home/default-home.component';

const routes: Routes = [
  {path:'', component: DefaultHomeComponent,
  children : [
    {path:'', component: AccueilComponent},
    {path:'accueil', component: AccueilComponent},
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from 'src/app/shared_pages/default-home/default-home.component';
import { NosLogementsComponent } from './nos-logements.component';

const routes: Routes = [
  {path:'', component: DefaultHomeComponent,
  children : [
        {path: 'nosLogements', component: NosLogementsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosLogementsRoutingModule { }

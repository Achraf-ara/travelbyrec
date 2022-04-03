import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from 'src/app/shared_pages/default-home/default-home.component';
import { ThankYouComponent } from './thank-you.component';

const routes: Routes = [
  {path:'', component: DefaultHomeComponent,
  children : [
      {path:'thankYou', component: ThankYouComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankYouRoutingModule { }

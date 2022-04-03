import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultHomeComponent } from 'src/app/shared_pages/default-home/default-home.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {path:'', component: DefaultHomeComponent,
  children : [
        {path:'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }

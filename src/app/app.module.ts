import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConfirmLogementComponent } from './pages/confirm-logement/confirm-logement.component';
import { DetailsHebergementComponent } from './pages/details-hebergement/details-hebergement.component';
import { LoginComponent } from './pages/login/login.component';
import { NosLogementsComponent } from './pages/nos-logements/nos-logements.component';
import { NosServicesComponent } from './pages/nos-services/nos-services.component';
import { RegisterComponent } from './pages/register/register.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { SidebarComponent } from './shared_pages/sidebar/sidebar.component';
import { FooterComponent } from './shared_pages/footer/footer.component';
import { DefaultHomeComponent } from './shared_pages/default-home/default-home.component';


const UI_Modules = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatTabsModule,
  MatDatepickerModule,
  MatTableModule

]

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ConfirmLogementComponent,
    DetailsHebergementComponent,
    LoginComponent,
    NosLogementsComponent,
    NosServicesComponent,
    RegisterComponent,
    ThankYouComponent,
    SidebarComponent,
    FooterComponent,
    DefaultHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    UI_Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

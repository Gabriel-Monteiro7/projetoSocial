import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms'
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ReportarComponent } from './reportar/reportar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';

import { ListarComponent } from './listar/listar.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ReportarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

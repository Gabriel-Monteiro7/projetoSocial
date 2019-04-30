import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ReportarComponent} from './reportar/reportar.component';
import { ListarComponent } from './listar/listar.component';
import { AppService } from './services/app.service';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'reportar', component:ReportarComponent,canActivate: [AuthGuard]},
  {path:'listar', component:ListarComponent},
  {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(Service:AppService) { 
    
  }
}

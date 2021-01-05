import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeUniteComponent } from './liste-unite/liste-unite.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'listeUnite', component:ListeUniteComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
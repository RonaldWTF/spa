import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
  
  {path: 'heroes',component:HeroesComponent},
  {path: 'about', component:AboutComponent},
  {path: '**', pathMatch:'full', redirectTo: 'about'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

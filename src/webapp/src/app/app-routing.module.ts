import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';



import {LoginComponent} from "./Auth/login/login.component";
import {RegisterComponent} from "./Auth/register/register.component";
import {AppComponent} from "./app.component";
import {ProgramComponent} from "./program/program.component";



const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{ path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule'},
  {path: '', component: AppComponent},
  {path: 'program', component: ProgramComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

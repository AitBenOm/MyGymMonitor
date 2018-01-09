import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';



import {LoginComponent} from "./Auth/login/login.component";
import {RegisterComponent} from "./Auth/register/register.component";
import {AppComponent} from "./app.component";
import {ProgramComponent} from "./program/program.component";
import {ProgramDetailComponent} from "./program/program-detail/program-detail.component";
import {ExerciseComponent} from "./exercise/exercise.component";
import {ExerciseListComponent} from "./exercise/exercise-list/exercise-list.component";



const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  //{ path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule'},
  {path: '', redirectTo: '/program', pathMatch: 'full' },
  {path: 'program', component: ProgramComponent, children: [
    { path: ':id', component: ProgramDetailComponent },
  ]},
  {path: 'exercise', component: ExerciseComponent, children: [
    { path: ':id', component: ExerciseListComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

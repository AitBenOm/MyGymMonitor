import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ProgramComponent } from './program/program.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './Auth/login/login.component';


import { RegisterComponent } from './Auth/register/register.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "./user/user.service";






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ProgramComponent,
    ExerciseComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent




  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

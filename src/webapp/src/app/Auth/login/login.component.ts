import {Component, ElementRef, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

 onSubmit(form: NgForm){

console.log(form.controls['email'].value);
let userPwd =form.controls['password'].value;
  this.userService.login(form.controls['email'].value,form.controls['password'].value);
   if(this.userService.isAuthenticated){
 //    console.log("is authenticated");
     this.router.navigate(['../']);
   }{
     console.log("is not authenticated");
     this.router.navigate(['/login']);
   }

  }
}

import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }
  passwordRegex: any = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}";
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm= new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null, Validators.email),
      'pwd1': new FormControl(null,[Validators.pattern(this.passwordRegex)]),
      //'pwd2': new FormControl(null, this.validatePwd.bind(this))
      'pwd2': new FormControl(null)
    })
  }
  validatePwd(pwd1: FormControl):{[error: string]: boolean}{
  let passwordRegex: any = '((?=.*\d)(?=.*[a-zA-Z]).{4,20})';
  if(pwd1.value){
    return {'PasswordsAreIdentical': true};
  }
 return  null;
}




  onRegister(form: NgForm){

console.log(this.registerForm)
  }

}

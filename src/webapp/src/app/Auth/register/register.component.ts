import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {UserService} from "../../user/user.service";
import {UserModel} from "../../user/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) { }

  passwordRegex: any = "/^([a-zA-Z0-9]{6,})$/";
  registerForm: FormGroup;

  ngOnInit() {
    this.registerForm= new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null, Validators.email),
      'pwd1': new FormControl(null,Validators.minLength(6)),
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

  onRegister(){
    console.log("Registering User");
console.log(this.registerForm.get('firstName').value);
  this.userService.addUser(new UserModel(this.registerForm.get('firstName').value,this.registerForm.get('lastName').value,this.registerForm.get('email').value,this.registerForm.get('pwd1').value));

  }

}

import { Injectable } from '@angular/core';
import {UserModel} from "./user.model";

@Injectable()
export class UserService {

  users: UserModel[]=[
    new UserModel('Omar', 'Ait Benaissa', 'omar.benaissa@outlook.com', 'azerty123'),
    new UserModel('Chaimae', 'Rhallab', 'rhallabchaimae9@gmail.com', 'azerty123'),
  ];
  constructor() { }
addUser(user: UserModel){
    this.users.push(user);

    for(let user of this.users){
      console.log(user.firstName);
  }
}
}

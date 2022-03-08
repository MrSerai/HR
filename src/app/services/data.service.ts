import { Injectable } from '@angular/core';
import { User } from '../register/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor() { }

  addUser(usr: User): void {
    let user = {...usr }
    this.users.push(user);
    }
}

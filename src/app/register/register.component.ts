import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userList: User[] = []
  constructor(
    private data: DataService
  ) {
    this.userList = data.users;
   }

  ngOnInit(): void {
  }

  UserModel = new User('','','','','');
  // UserModel1 = new User('Alucious','12345','079905026','alula','buear');
  // UserModel2 = new User('bear','12345','079905026','alula','buear');

  onSubmit(){
    console.log(this.userList)
    console.log(this.UserModel);
    // checks beforehand to make sure the data is valid/acceptable
    this.data.addUser(this.UserModel);
   }

}

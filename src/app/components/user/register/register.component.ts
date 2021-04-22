import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { registerUser } from 'src/app/models/User.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegister : registerUser;
  form : FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

}

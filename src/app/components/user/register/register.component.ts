
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerUser } from 'src/app/models/User.models';
import { UserService } from 'src/app/services/user.service';
import { checkLogin } from '../loginValidator';
import { confirmPassword } from './registerValidator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userRegister : registerUser;
  form : FormGroup;

  constructor(private _service : UserService, private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.form = this._builder.group({
      'Login' : [null, [Validators.required, checkLogin()]],
      'Password' : [null, Validators.required],
      'ConfirmPassword' : [null, [Validators.required, confirmPassword()]],
      'Email' : [null, Validators.required],
      'FirstName' : [null, Validators.required],
      'LastName' : [null, Validators.required],
      'BirthDate' : [null, Validators.required]
    })
  }

  register()
  {
    this.userRegister = this.form.value;
    console.log(this.userRegister);
    this._service.register(this.userRegister);
  }

}

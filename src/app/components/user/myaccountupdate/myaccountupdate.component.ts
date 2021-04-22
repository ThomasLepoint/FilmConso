import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { completeUser, registerUser } from 'src/app/models/User.models';
import { UserService } from 'src/app/services/user.service';
import { checkLogin } from '../loginValidator';
import { confirmPassword } from '../register/registerValidator';

@Component({
  selector: 'app-myaccountupdate',
  templateUrl: './myaccountupdate.component.html',
  styleUrls: ['./myaccountupdate.component.scss']
})
export class MyaccountupdateComponent implements OnInit {

  updateUser : completeUser;
  form : FormGroup;

  constructor(private _service : UserService, private _builder : FormBuilder, private _activatedRoute : ActivatedRoute,) { }
  
  user : completeUser
  ngOnInit(): void {
    this.loadUser();
    this.form = this._builder.group({
      'Login' : [this.user.login, [Validators.required, checkLogin()]],
      'Password' : [this.user.password, null],
      'ConfirmPassword' : [null, null],
      'Email' : [this.user.email, Validators.required],
      'FirstName' : [this.user.firstName, Validators.required],
      'LastName' : [this.user.lastName, Validators.required],
      'BirthDate' : [this.user.birthDate, Validators.required]
    })
  }

  update()
  {
    this.updateUser = this.form.value;
    this.updateUser.id = localStorage.getItem('id');
    this._service.update(this.updateUser);
  }
  loadUser()
  {
    this.user = this._activatedRoute.snapshot.data['completeUser']
  }
}

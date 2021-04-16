import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUser } from 'src/app/models/User.models';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  isConnected : boolean;
  form : FormGroup;
  userAuth : AuthUser;

  constructor(private _service : AuthService, private _builder : FormBuilder) { }

  ngOnInit(): void {
    this.isConnected = this._service.isConnected
    this.form = this._builder.group({
      'login' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  login() 
  {
    this.userAuth = this.form.value
    this._service.login(this.userAuth);
    this._service.emitItemSubject();
    
  }
  logout()
  {
    this._service.logout();
    this._service.emitItemSubject();
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  isConnected : boolean;
  constructor(private _service : AuthService) { }

  ngOnInit(): void {
    this.isConnected = this._service.isConnected
  }

  login()
  {
    this._service.login();
    this.isConnected = this._service.isConnected;
  }
  logout()
  {
    this._service.logout();
    this.isConnected = this._service.isConnected;
  }

}

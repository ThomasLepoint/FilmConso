import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isConnected : boolean;
  homeSub : Subscription;
  constructor(private _router : Router, private _service : AuthService) { }

  ngOnInit(): void {
    this.homeSub = this._service.loginSubJect.subscribe((i : boolean)=>{this.isConnected = i});
    this._service.emitItemSubject();
  }

  onRegister()
  {
    this._router.navigate(['/user/register']);
  }
  onLogin()
  {
    this._router.navigate(['/user/auth']);
  }
  onNav()
  {
    this._router.navigate(['/movie/list']);
  }
  onProfil()
  {
    this._router.navigate(['user/myprofil']);
  }

}

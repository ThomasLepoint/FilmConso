import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
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

}

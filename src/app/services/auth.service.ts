import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem, NbMenuService, NbToastrService } from '@nebular/theme';
import { of, Subject } from 'rxjs';
import { AuthUser, User } from '../models/User.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : User
  isConnected : boolean = (localStorage.getItem('token') ? true : false);
  isAdmin : boolean = (localStorage.getItem('role') === 'true');
  loginSubJect = new Subject<boolean>();
  logoutItems : NbMenuItem[] = [
    {link : '/home', title : 'Home', icon : 'home'},
    {title : 'User', icon:'people-outline', children : [
      {link : '/user/auth', title : 'Login', icon : 'person-done-outline'},
      {link : 'user/register', title : 'Register', icon : 'person-add-outline'}
    ]},
  ];
  loginItems : NbMenuItem[] = [
    {link : '/home', title : 'Home', icon : 'home'},
    {title : 'User', icon:'people-outline', children : [
      {link : '/user/list', title : 'List of User', icon : 'list-outline'},
      {link : '/user/myprofil', title : 'My Account', icon : 'person-done-outline'},
      {link : '/user/auth', title : 'Logout', icon : 'person-remove-outline'},
    ]},
    {title : 'Movies', icon : 'film-outline', children : [
      {title : 'List' , link : '/movie/list' , icon : 'list-outline'},
    ]},
    {title : 'Comments', icon : 'message-circle-outline', children : [
      {title : 'List' , link : '/movie/list' , icon : 'list-outline'}
    ]},
  ];
  adminItem : NbMenuItem[] = [
    {link : '/home', title : 'Home', icon : 'home'},
    {title : 'User', icon:'people-outline', children : [
      {link : '/user/list', title : 'List of User', icon : 'list-outline'},
      {link : '/user/myprofil', title : 'My Account', icon : 'person-done-outline'},
      {link : '/user/auth', title : 'Logout', icon : 'person-remove-outline'},
    ]},
    {title : 'Movies', icon : 'film-outline', children : [
      {title : 'List' , link : '/movie/list' , icon : 'list-outline'},
    ]},
    {title : 'Comments', icon : 'message-circle-outline', children : [
      {title : 'List' , link : '/comment/list' , icon : 'list-outline'}
    ]},
    {title : 'Admin', icon : 'options-2-outline', children : [
        {title : 'Users', icon : 'people-outline', children : [
          {title : 'Get Every User', icon : 'list-outline', link : 'admin/users/list'},
        ]},
        {title : 'Movies', icon : 'film-outline', children : [
          {title : 'Get Every Movie', icon : 'list-outline', link : 'admin/movies/list'},
        ]},
        {title : 'Staff', icon : 'film-outline', children : [
          {title : 'Add Staff', icon : 'person-add-outline', link : 'admin/staff/add'},
        ]},
        {title : 'Comments', icon : 'message-circle-outline', children : [
          {title : 'Get Every Comment', icon : 'list-outline', link : 'admin/comment/list'},
        ]},
      ]}]
  items : NbMenuItem[];
  constructor(private _menuService : NbMenuService, private _httpClient : HttpClient, private _toast : NbToastrService, private _router : Router) { }


emitItemSubject()
{
  this.loginSubJect.next(this.isConnected);
}

loadItem()
{
  if(localStorage.getItem('token'))
  {
    this.items = (localStorage.getItem('role') === 'false') ? this.loginItems : this.adminItem;
    this.isConnected = true;
  }
  else
  {
    this.items = this.logoutItems;
    this.isConnected = false;
  }
  this.emitItemSubject();
}
login(AuthUser : AuthUser) 
{ 
  this._httpClient.post<User>("http://localhost:56172/api/User/login",       
  {Login : AuthUser.Login, Password : AuthUser.Password}
    ).subscribe((u : User) => {
      this.user = u;     
      if(this.user)
      {
        localStorage.setItem('token', u.usertoken);
        localStorage.setItem('id', u.id.toString());
        localStorage.setItem('role', u.isAdmin ? 'true' : 'false')
        this.isConnected = true;
        (this.user.isAdmin) ? this.items = this.adminItem : this.items = this.loginItems;
        this.isAdmin = this.user.isAdmin;
        this.emitItemSubject();
        this._router.navigate(['home'])
      }
      this._toast.success("Connexion reussie", 'Logged in')
    },
      (error) => {this._toast.danger('Login / Mot de passe Incorrect', 'Connexion Refusée')
      }
    )
}
logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('role');
  this.loadItem();
  this._toast.danger('Deconnexion reussie', 'Logged Out')
}
}

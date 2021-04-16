import { Injectable } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isConnected : boolean = false;
  itemsSubject = new Subject<NbMenuItem[]>();
  logoutItems : NbMenuItem[] = [
    {link : '/home', title : 'Home', icon : 'home'},
    {title : 'User', icon:'people-outline', children : [
      {link : '/user/auth', title : 'Login', icon : 'person-done-outline'},
      {link : 'user/register', title : 'Register', icon : 'person-add-outline'}
    ]},
    {title : 'Movies', icon : 'film-outline', children : [
      {title : 'List' , link : '/movie/list' , icon : 'list-outline'},
      {title : 'Search', link : '/movie/search', icon : 'search-outline'}
    ]}
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
      {title : 'Search', link : '/movie/search', icon : 'search-outline'},
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
      {title : 'Search', link : '/movie/search', icon : 'search-outline'},
    ]},
    {title : 'Comments', icon : 'message-circle-outline', children : [
      {title : 'List' , link : '/movie/list' , icon : 'list-outline'}
    ]},
    {title : 'Admin', icon : 'options-2-outline', children : [
        {title : 'Users', icon : 'people-outline', children : [
          {title : 'Get Every User', icon : 'list-outline', link : '/user/getall'},
          {title : 'Add', icon : 'plus-square-outline', link : '/user/add'},
          {title : 'Update', icon : 'edit-outline', link : '/user/update'},
          {title : 'Delete', icon : 'trash-2-outline', link : '/user/delete'},
        ]},
        {title : 'Movies', icon : 'film-outline', children : [
          {title : 'Get Every Movie', icon : 'list-outline', link : '/movie/getall'},
          {title : 'Add', icon : 'plus-square-outline', link : '/movie/add'},
          {title : 'Update', icon : 'edit-outline', link : '/movie/update'},
          {title : 'Delete', icon : 'trash-2-outline', link : '/movie/delete'},
        ]},
        {title : 'Comments', icon : 'message-circle-outline', children : [
          {title : 'Get Every Comment', icon : 'list-outline', link : '/comment/getall'},
          {title : 'Add', icon : 'plus-square-outline', link : '/comment/add'},
          {title : 'Update', icon : 'edit-outline', link : '/comment/update'},
          {title : 'Delete', icon : 'trash-2-outline', link : '/comment/delete'},
        ]},
      ]}]
  items : NbMenuItem[] = this.logoutItems;

  constructor(private _menuService : NbMenuService) { }
emitItemSubject()
{
  this.itemsSubject.next(this.items.slice());
}
login() 
{ 
  this.isConnected = true;
  this.items = this.adminItem;
  this.emitItemSubject();
}
logout()
{
  this.isConnected = false;
  this.items = this.logoutItems;
  this.emitItemSubject();
}
}
